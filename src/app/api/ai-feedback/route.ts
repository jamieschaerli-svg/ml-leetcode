import { NextRequest, NextResponse } from "next/server";

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

export async function POST(req: NextRequest) {
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
      : buildHintPrompt(code, problem);

  try {
    const res = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          maxOutputTokens: 300,
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
