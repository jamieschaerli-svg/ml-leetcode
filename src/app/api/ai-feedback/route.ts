import { NextRequest, NextResponse } from "next/server";

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

// Simple in-memory rate limiter: max 20 requests per minute per IP
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT = 20;
const RATE_WINDOW = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitMap.get(ip) || []).filter((t) => now - t < RATE_WINDOW);
  if (timestamps.length >= RATE_LIMIT) return true;
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return false;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests, slow down" },
      { status: 429 }
    );
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "AI features not configured" },
      { status: 503 }
    );
  }

  const body = await req.json();
  const { type, code, problem, output, isCorrect } = body;

  if (!type || !problem?.title || typeof code !== "string") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const prompt =
    type === "feedback"
      ? buildFeedbackPrompt(code, problem, output, isCorrect)
      : type === "validate"
      ? buildValidatePrompt(code, problem)
      : buildHintPrompt(code, problem);

  try {
    const res = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          maxOutputTokens: 1024,
          temperature: 0.7,
        },
      }),
    });

    if (res.status === 429) {
      return NextResponse.json(
        { error: "AI is busy, try again in a moment" },
        { status: 429 }
      );
    }

    if (!res.ok) {
      return NextResponse.json(
        { error: "Could not get AI response" },
        { status: 502 }
      );
    }

    const data = await res.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";

    if (type === "validate") {
      const legitimate = !text.toLowerCase().startsWith("no");
      return NextResponse.json({ result: text, legitimate });
    }

    return NextResponse.json({ result: text });
  } catch {
    return NextResponse.json(
      { error: "Could not get AI response" },
      { status: 502 }
    );
  }
}

function buildFeedbackPrompt(
  code: string,
  problem: { title: string; description: string; difficulty: string },
  output: string,
  isCorrect: boolean
): string {
  return `You are a friendly Python tutor for data science beginners. A student is working on this problem:

Title: ${problem.title}
Description: ${problem.description}
Difficulty: ${problem.difficulty}

Their code:
\`\`\`python
${code.slice(0, 3000)}
\`\`\`

Their output: ${(output || "(no output)").slice(0, 500)}
Result: ${isCorrect ? "Correct" : "Incorrect"}

Give a brief code review (3-5 sentences). Mention what they did well, suggest one improvement, and give one actionable tip. Do not give the full solution. Be encouraging.`;
}

function buildHintPrompt(
  code: string,
  problem: { title: string; description: string; difficulty: string }
): string {
  return `You are a friendly Python tutor. A student is stuck on this problem:

Title: ${problem.title}
Description: ${problem.description}

Their current code attempt:
\`\`\`python
${code.slice(0, 3000)}
\`\`\`

Give ONE short contextual hint (1-2 sentences) based on what they have written. Guide them toward the solution without giving it away. If their code is empty, give a gentle starting point.`;
}

function buildValidatePrompt(
  code: string,
  problem: { title: string; description: string; difficulty: string }
): string {
  return `You are a code validator. A student submitted code for this problem:

Title: ${problem.title}
Description: ${problem.description}

Their code:
\`\`\`python
${code.slice(0, 3000)}
\`\`\`

Does this code ACTUALLY solve the problem as described, or did the student just hardcode/fake the output (e.g. just print the expected answer without doing any real computation or logic)?

Answer with EXACTLY "YES" if the code legitimately solves the problem, or "NO" followed by a brief explanation if it's hardcoded or doesn't actually solve the problem. Be strict — if the problem asks to create variables and do operations, just printing the final number is NOT legitimate.`;
}
