import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { code } = await req.json();

  if (!code || typeof code !== "string") {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  if (code.length > 5000) {
    return NextResponse.json({ error: "Code too long (max 5000 chars)" });
  }

  // Block dangerous operations
  const forbidden = [
    "import os", "import subprocess", "import sys", "open(",
    "__import__", "exec(", "eval(", "import shutil", "import socket",
    "import http", "import urllib",
  ];
  const lower = code.toLowerCase();
  for (const f of forbidden) {
    if (lower.includes(f.toLowerCase())) {
      return NextResponse.json({
        error: `Forbidden: ${f} is not allowed for security reasons.`,
      });
    }
  }

  try {
    // Use Judge0 CE (free, no API key needed for basic use)
    const createRes = await fetch(
      "https://judge0-ce.p.sulu.sh/submissions?base64_encoded=false&wait=true",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language_id: 71, // Python 3
          source_code: code,
          stdin: "",
        }),
      }
    );

    if (!createRes.ok) {
      // Fallback: try OneCompiler API
      return await fallbackExecute(code);
    }

    const result = await createRes.json();

    if (result.stderr) {
      return NextResponse.json({ error: result.stderr });
    }
    if (result.compile_output) {
      return NextResponse.json({ error: result.compile_output });
    }

    return NextResponse.json({ output: result.stdout || "" });
  } catch {
    // Fallback execution
    return await fallbackExecute(code);
  }
}

async function fallbackExecute(code: string) {
  // Signal to client to use Pyodide instead
  return NextResponse.json({
    output: "",
    usePyodide: true,
    error: null,
  });
}
