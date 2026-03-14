"use client";

import { useState } from "react";

interface AIFeedbackProps {
  code: string;
  problem: { title: string; description: string; difficulty: string };
  output: string;
  isCorrect: boolean;
}

export default function AIFeedback({ code, problem, output, isCorrect }: AIFeedbackProps) {
  const [feedback, setFeedback] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function getFeedback() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/ai-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "feedback", code, problem, output, isCorrect }),
      });

      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        setFeedback(data.result);
      }
    } catch {
      setError("Could not connect to AI");
    } finally {
      setLoading(false);
    }
  }

  if (feedback) {
    return (
      <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
            AI Review
          </span>
          <button
            onClick={() => setFeedback(null)}
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            Dismiss
          </button>
        </div>
        <p className="text-sm leading-relaxed text-zinc-300">{feedback}</p>
      </div>
    );
  }

  return (
    <button
      onClick={getFeedback}
      disabled={loading}
      className="w-full rounded-xl border border-dashed border-purple-500/30 p-3 text-sm text-purple-400/70 transition-colors hover:border-purple-500/50 hover:text-purple-300 disabled:opacity-50"
    >
      {loading ? "Analyzing your code..." : error ? `${error} — tap to retry` : "Get AI Feedback"}
    </button>
  );
}
