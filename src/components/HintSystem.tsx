"use client";

import { useState } from "react";

interface HintSystemProps {
  hints: string[];
  code?: string;
  problem?: { title: string; description: string; difficulty: string };
}

export default function HintSystem({ hints, code, problem }: HintSystemProps) {
  const [revealedCount, setRevealedCount] = useState(0);
  const [aiHints, setAiHints] = useState<string[]>([]);
  const [aiLoading, setAiLoading] = useState(false);

  async function getAIHint() {
    if (!problem) return;
    setAiLoading(true);

    try {
      const res = await fetch("/api/ai-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "hint", code: code || "", problem }),
      });

      const data = await res.json();
      if (data.result) {
        setAiHints((prev) => [...prev, data.result]);
      }
    } catch {
      // silently fail
    } finally {
      setAiLoading(false);
    }
  }

  return (
    <div className="card">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
        Need Help?
      </h3>
      <div className="space-y-2">
        {hints.map((hint, i) => (
          <div key={i}>
            {i < revealedCount ? (
              <div className="rounded-lg bg-black/50 p-3 text-sm">
                <span className="font-semibold text-white">
                  Hint {i + 1}:{" "}
                </span>
                <span className="text-zinc-400">{hint}</span>
              </div>
            ) : i === revealedCount ? (
              <button
                onClick={() => setRevealedCount(revealedCount + 1)}
                className="w-full rounded-lg border border-dashed border-white/20 p-3 text-sm text-zinc-400 transition-colors hover:border-white/40 hover:text-white"
              >
                Reveal Hint {i + 1}
              </button>
            ) : (
              <div className="rounded-lg border border-dashed border-white/10 p-3 text-sm opacity-30">
                Hint {i + 1} (locked)
              </div>
            )}
          </div>
        ))}

        {problem && (
          <>
            {aiHints.map((hint, i) => (
              <div key={i} className="rounded-lg border border-purple-500/30 bg-purple-500/5 p-3 text-sm">
                <span className="font-semibold text-purple-400">AI Hint {i + 1}: </span>
                <span className="text-zinc-300">{hint}</span>
              </div>
            ))}
            <button
              onClick={getAIHint}
              disabled={aiLoading}
              className="w-full rounded-lg border border-dashed border-purple-500/20 p-3 text-sm text-purple-400/60 transition-colors hover:border-purple-500/40 hover:text-purple-300 disabled:opacity-50"
            >
              {aiLoading ? "Thinking..." : aiHints.length > 0 ? "Get Another AI Hint" : "Get AI Hint"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
