import { NextRequest, NextResponse } from "next/server";

const FORBIDDEN = [
  "import os", "import subprocess", "import sys", "open(",
  "__import__", "exec(", "eval(", "import shutil", "import socket",
  "import http", "import urllib",
];

export async function POST(req: NextRequest) {
  const { code } = await req.json();

  if (!code || typeof code !== "string") {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  if (code.length > 5000) {
    return NextResponse.json({ error: "Code too long (max 5000 chars)" });
  }

  const lower = code.toLowerCase();
  for (const f of FORBIDDEN) {
    if (lower.includes(f.toLowerCase())) {
      return NextResponse.json({
        error: `Forbidden: ${f} is not allowed for security reasons.`,
      });
    }
  }

  // Libraries that require Pyodide (not available on Piston/Judge0)
  const PYODIDE_LIBS = ["import numpy", "import pandas", "import matplotlib", "import sklearn", "from sklearn", "from numpy", "from pandas", "from matplotlib"];
  const needsPyodide = PYODIDE_LIBS.some((lib) => lower.includes(lib.toLowerCase()));
  if (needsPyodide) {
    return NextResponse.json({ output: "", usePyodide: true });
  }

  // Try Piston API (free, no key needed)
  try {
    const res = await fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: "python3",
        version: "3.10.0",
        files: [{ content: code }],
      }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.run) {
        if (data.run.stderr) {
          return NextResponse.json({ error: data.run.stderr });
        }
        return NextResponse.json({ output: data.run.stdout || "" });
      }
    }
  } catch {
    // Piston failed, try Judge0
  }

  // Fallback: Judge0 CE
  try {
    const res = await fetch(
      "https://judge0-ce.p.sulu.sh/submissions?base64_encoded=false&wait=true",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language_id: 71,
          source_code: code,
          stdin: "",
        }),
      }
    );

    if (res.ok) {
      const result = await res.json();
      if (result.stderr) {
        return NextResponse.json({ error: result.stderr });
      }
      if (result.compile_output) {
        return NextResponse.json({ error: result.compile_output });
      }
      return NextResponse.json({ output: result.stdout || "" });
    }
  } catch {
    // Judge0 also failed
  }

  // Both APIs failed — tell client to use Pyodide
  return NextResponse.json({ output: "", usePyodide: true });
}
