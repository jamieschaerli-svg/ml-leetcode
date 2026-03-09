import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { code } = await req.json();

  if (!code || typeof code !== "string") {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  // Block dangerous operations
  const forbidden = ["import os", "import subprocess", "import sys", "open(", "__import__", "exec(", "eval(", "import shutil", "import socket"];
  const lower = code.toLowerCase();
  for (const f of forbidden) {
    if (lower.includes(f.toLowerCase())) {
      return NextResponse.json({
        error: `Forbidden operation: ${f} is not allowed for security reasons.`,
      });
    }
  }

  try {
    // Use Piston API (free, no API key needed) to execute Python
    const response = await fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: "python",
        version: "3.10",
        files: [{ content: code }],
      }),
    });

    const data = await response.json();

    if (data.run?.stderr) {
      return NextResponse.json({ error: data.run.stderr });
    }

    return NextResponse.json({ output: data.run?.stdout || "" });
  } catch {
    return NextResponse.json(
      { error: "Failed to execute code. Please try again." },
      { status: 500 }
    );
  }
}
