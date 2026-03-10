"use client";

import { useState, useEffect, useRef, use } from "react";

declare global {
  interface Window {
    loadPyodide: (options: { indexURL: string }) => Promise<any>;
  }
}
import Link from "next/link";
import { problems } from "@/data/problems";
import Header from "@/components/Header";
import CodeEditor from "@/components/CodeEditor";
import HintSystem from "@/components/HintSystem";
import FeedbackButtons from "@/components/FeedbackButtons";
import { recordAttempt, getRecommendations, getSkillSummary } from "@/lib/adaptive";

export default function ProblemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const problem = problems.find((p) => p.id === Number(id));
  const [output, setOutput] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [code, setCode] = useState(problem?.starterCode || "");
  const [showSolution, setShowSolution] = useState(false);
  const [mode, setMode] = useState<"learning" | "challenge">("learning");
  const [running, setRunning] = useState(false);
  const [nextRec, setNextRec] = useState<{ id: number; title: string } | null>(null);
  const [skillLevel, setSkillLevel] = useState<number | null>(null);
  const pyodideRef = useRef<any>(null);

  useEffect(() => {
    const summary = getSkillSummary();
    setSkillLevel(summary.level);
  }, []);

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

  async function runWithPyodide(codeToRun: string): Promise<{ output: string; error?: string }> {
    try {
      if (!pyodideRef.current) {
        // Load Pyodide on demand
        if (!window.loadPyodide) {
          const script = document.createElement("script");
          script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js";
          document.head.appendChild(script);
          await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = () => reject(new Error("Failed to load Python runtime"));
          });
        }
        pyodideRef.current = await window.loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/",
        });
      }

      const py = pyodideRef.current;
      await py.loadPackagesFromImports(codeToRun);
      await py.runPythonAsync("import sys, io; sys.stdout = io.StringIO()");
      await py.runPythonAsync(codeToRun);
      const stdout = await py.runPythonAsync("sys.stdout.getvalue()");
      return { output: stdout };
    } catch (err) {
      return { output: "", error: err instanceof Error ? err.message : String(err) };
    }
  }

  async function runCode() {
    setRunning(true);
    setOutput("");
    setIsCorrect(null);

    try {
      // Try server-side execution first
      const res = await fetch("/api/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();

      // Server says use Pyodide (both APIs failed)
      if (data.usePyodide) {
        const pyResult = await runWithPyodide(code);
        if (pyResult.error) {
          setOutput(pyResult.error);
          setIsCorrect(false);
          recordAttempt(problem!.id, false);
        } else {
          const expected = problem!.testCases[0].expected.trim();
          const actual = (pyResult.output || "").trim();
          const correct = actual === expected;
          setOutput(pyResult.output);
          setIsCorrect(correct);
          const updatedSkill = recordAttempt(problem!.id, correct);
          setSkillLevel(Math.round(updatedSkill.level));
          if (correct) {
            const recs = getRecommendations(1);
            if (recs.length > 0) setNextRec({ id: recs[0].problem.id, title: recs[0].problem.title });
          }
        }
        return;
      }

      if (data.error) {
        setOutput(data.error);
        setIsCorrect(false);
        recordAttempt(problem!.id, false);
        return;
      }

      setOutput(data.output);
      const expected = problem!.testCases[0].expected.trim();
      const actual = (data.output || "").trim();
      const correct = actual === expected;
      setIsCorrect(correct);
      const updatedSkill = recordAttempt(problem!.id, correct);
      setSkillLevel(Math.round(updatedSkill.level));
      if (correct) {
        const recs = getRecommendations(1);
        if (recs.length > 0) setNextRec({ id: recs[0].problem.id, title: recs[0].problem.title });
      }
    } catch {
      // Server unreachable — try Pyodide directly
      try {
        const pyResult = await runWithPyodide(code);
        if (pyResult.error) {
          setOutput(pyResult.error);
          setIsCorrect(false);
        } else {
          const expected = problem!.testCases[0].expected.trim();
          const actual = (pyResult.output || "").trim();
          setOutput(pyResult.output);
          setIsCorrect(actual === expected);
        }
      } catch {
        setOutput("Could not run code. Please check your internet connection.");
        setIsCorrect(false);
      }
    } finally {
      setRunning(false);
    }
  }

  function handleFeedback(newLevel: number) {
    setSkillLevel(newLevel);
    const recs = getRecommendations(1);
    if (recs.length > 0) {
      setNextRec({ id: recs[0].problem.id, title: recs[0].problem.title });
    }
  }

  return (
    <div className="min-h-screen">
      <Header>
        {skillLevel !== null && (
          <span
            className="rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: "var(--accent)" + "22", color: "var(--accent)" }}
          >
            Skill Lvl {skillLevel}
          </span>
        )}
        <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-0.5">
          <button
            onClick={() => setMode("learning")}
            className={`rounded-full px-4 py-1.5 text-sm transition-all duration-200 ${
              mode === "learning"
                ? "bg-white text-black font-medium"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Learning
          </button>
          <button
            onClick={() => setMode("challenge")}
            className={`rounded-full px-4 py-1.5 text-sm transition-all duration-200 ${
              mode === "challenge"
                ? "bg-amber-500 text-black font-medium"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Challenge
          </button>
        </div>
      </Header>

      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 lg:grid-cols-2">
        {/* Left: Problem description */}
        <div className="space-y-6">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span
                className={`rounded-full px-3 py-0.5 text-xs font-bold uppercase border ${
                  problem.difficulty === "easy"
                    ? "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
                    : problem.difficulty === "medium"
                    ? "text-amber-400 border-amber-500/30 bg-amber-500/10"
                    : "text-red-400 border-red-500/30 bg-red-500/10"
                }`}
              >
                {problem.difficulty}
              </span>
              <span className="text-sm text-zinc-400">
                Level {problem.level}
              </span>
            </div>
            <h1 className="text-2xl font-bold">{problem.title}</h1>
            <p className="mt-3 text-zinc-400">
              {problem.description}
            </p>
          </div>

          {mode === "learning" && (
            <>
              {/* Concept */}
              <div className="card">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white">
                  Concept
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {problem.concept}
                </p>
              </div>

              {/* Real World Use */}
              <div className="card">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-emerald-400">
                  Real-World Use
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {problem.realWorldUse}
                </p>
              </div>

              {/* Why It Matters */}
              <div className="card">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-400">
                  Why This Matters
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
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
            <button onClick={runCode} disabled={running} className="btn-primary flex-1 disabled:opacity-50">
              {running ? "Running..." : "Run Code"}
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
              className={`rounded-xl border p-4 font-mono text-sm bg-black/50 ${
                isCorrect === true
                  ? "border-emerald-500/50"
                  : isCorrect === false
                  ? "border-red-500/50"
                  : "border-white/10"
              }`}
            >
              <div className={`mb-2 text-xs font-semibold uppercase tracking-wider ${
                isCorrect === true ? "text-emerald-400" : isCorrect === false ? "text-red-400" : "text-zinc-500"
              }`}>
                {isCorrect === true ? "Correct!" : isCorrect === false ? "Not quite..." : "Output"}
              </div>
              <pre className="whitespace-pre-wrap">{output}</pre>
            </div>
          )}

          {/* Solution */}
          {showSolution && (
            <div className="rounded-xl border border-white/20 bg-black/50 p-4">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Solution
              </div>
              <pre className="font-mono text-sm whitespace-pre-wrap">{problem.solution}</pre>
            </div>
          )}

          {/* Feedback & next */}
          {isCorrect && (
            <div className="space-y-4">
              <FeedbackButtons problemId={problem.id} onFeedback={handleFeedback} />
              {(nextRec || problems.find((p) => p.level > problem.level)) && (() => {
                const fallback = problems.find((p) => p.level > problem.level);
                const next = nextRec || (fallback ? { id: fallback.id, title: fallback.title } : null);
                if (!next) return null;
                return (
                  <Link
                    href={`/problems/${next.id}`}
                    className="btn-primary block text-center"
                    onClick={() => {
                      const np = problems.find((p) => p.id === next.id);
                      if (np) {
                        setCode(np.starterCode);
                        setOutput("");
                        setIsCorrect(null);
                        setShowSolution(false);
                        setNextRec(null);
                      }
                    }}
                  >
                    Next Problem: {next.title} →
                  </Link>
                );
              })()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
