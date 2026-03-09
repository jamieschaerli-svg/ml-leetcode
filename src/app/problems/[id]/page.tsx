"use client";

import { useState, use } from "react";
import Link from "next/link";
import { problems } from "@/data/problems";
import CodeEditor from "@/components/CodeEditor";
import HintSystem from "@/components/HintSystem";
import FeedbackButtons from "@/components/FeedbackButtons";

export default function ProblemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const problem = problems.find((p) => p.id === Number(id));
  const [output, setOutput] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [code, setCode] = useState(problem?.starterCode || "");
  const [showSolution, setShowSolution] = useState(false);
  const [mode, setMode] = useState<"learning" | "challenge">("learning");

  if (!problem) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Problem not found</h2>
          <Link href="/" className="btn-primary mt-4 inline-block">
            Back to Problems
          </Link>
        </div>
      </div>
    );
  }

  const nextProblem = problems.find((p) => p.level > problem.level);

  async function runCode() {
    try {
      const res = await fetch("/api/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();

      if (data.error) {
        setOutput(data.error);
        setIsCorrect(false);
        return;
      }

      setOutput(data.output);

      const expected = problem!.testCases[0].expected.trim();
      const actual = (data.output || "").trim();
      setIsCorrect(actual === expected);
    } catch {
      setOutput("Error connecting to server");
      setIsCorrect(false);
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-lg font-bold">
            <span style={{ color: "var(--accent)" }}>ML</span> LeetCode
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMode("learning")}
              className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                mode === "learning"
                  ? "font-semibold"
                  : "opacity-50 hover:opacity-80"
              }`}
              style={mode === "learning" ? { background: "var(--accent)" + "33", color: "var(--accent)" } : {}}
            >
              Learning
            </button>
            <button
              onClick={() => setMode("challenge")}
              className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                mode === "challenge"
                  ? "font-semibold"
                  : "opacity-50 hover:opacity-80"
              }`}
              style={mode === "challenge" ? { background: "var(--warning)" + "33", color: "var(--warning)" } : {}}
            >
              Challenge
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 lg:grid-cols-2">
        {/* Left: Problem description */}
        <div className="space-y-6">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span
                className="rounded-full px-3 py-0.5 text-xs font-bold uppercase"
                style={{
                  background:
                    problem.difficulty === "easy"
                      ? "var(--success)" + "22"
                      : problem.difficulty === "medium"
                      ? "var(--warning)" + "22"
                      : "var(--error)" + "22",
                  color:
                    problem.difficulty === "easy"
                      ? "var(--success)"
                      : problem.difficulty === "medium"
                      ? "var(--warning)"
                      : "var(--error)",
                }}
              >
                {problem.difficulty}
              </span>
              <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Level {problem.level}
              </span>
            </div>
            <h1 className="text-2xl font-bold">{problem.title}</h1>
            <p className="mt-3" style={{ color: "var(--text-secondary)" }}>
              {problem.description}
            </p>
          </div>

          {mode === "learning" && (
            <>
              {/* Concept */}
              <div className="card">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--accent)" }}>
                  Concept
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {problem.concept}
                </p>
              </div>

              {/* Real World Use */}
              <div className="card">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--success)" }}>
                  Real-World Use
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {problem.realWorldUse}
                </p>
              </div>

              {/* Why It Matters */}
              <div className="card">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--warning)" }}>
                  Why This Matters
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {problem.whyItMatters}
                </p>
              </div>

              {/* Hints */}
              <HintSystem hints={problem.hints} />
            </>
          )}
        </div>

        {/* Right: Code editor */}
        <div className="space-y-4">
          <CodeEditor code={code} onChange={setCode} />

          <div className="flex gap-3">
            <button onClick={runCode} className="btn-primary flex-1">
              Run Code
            </button>
            {mode === "learning" && (
              <button
                onClick={() => setShowSolution(!showSolution)}
                className="rounded-lg border border-white/10 px-4 py-3 text-sm transition-colors hover:border-white/30"
              >
                {showSolution ? "Hide Solution" : "Show Solution"}
              </button>
            )}
          </div>

          {/* Output */}
          {output && (
            <div
              className="rounded-lg border p-4 font-mono text-sm"
              style={{
                background: "var(--bg-secondary)",
                borderColor:
                  isCorrect === true
                    ? "var(--success)"
                    : isCorrect === false
                    ? "var(--error)"
                    : "transparent",
              }}
            >
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider"
                style={{
                  color: isCorrect === true ? "var(--success)" : isCorrect === false ? "var(--error)" : "var(--text-secondary)",
                }}
              >
                {isCorrect === true ? "Correct!" : isCorrect === false ? "Not quite..." : "Output"}
              </div>
              <pre className="whitespace-pre-wrap">{output}</pre>
            </div>
          )}

          {/* Solution */}
          {showSolution && (
            <div className="rounded-lg border p-4" style={{ background: "var(--bg-secondary)", borderColor: "var(--accent)" + "44" }}>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--accent)" }}>
                Solution
              </div>
              <pre className="font-mono text-sm whitespace-pre-wrap">{problem.solution}</pre>
            </div>
          )}

          {/* Feedback & next */}
          {isCorrect && (
            <div className="space-y-4">
              <FeedbackButtons problemId={problem.id} />
              {nextProblem && (
                <Link
                  href={`/problems/${nextProblem.id}`}
                  className="btn-primary block text-center"
                  onClick={() => {
                    setCode(nextProblem.starterCode);
                    setOutput("");
                    setIsCorrect(null);
                    setShowSolution(false);
                  }}
                >
                  Next Problem: {nextProblem.title} →
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
