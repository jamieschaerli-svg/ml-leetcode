"use client";

import { useState, useEffect } from "react";

interface AIFeedbackProps {
  code: string;
  problem: { title: string; description: string; difficulty: string };
  output: string;
  isCorrect: boolean;
}

export default function AIFeedback({ code, problem, output, isCorrect }: AIFeedbackProps) {
  const [feedback, setFeedback] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setFeedback(null);
    setLoading(true);

    fetch("/api/ai-feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "feedback", code, problem, output, isCorrect }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled && data.result) setFeedback(data.result);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-4">
        <span className="text-xs text-purple-400/60 animate-pulse">AI is reviewing your code...</span>
      </div>
    );
  }

  if (!feedback) return null;

  return (
    <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-4">
      <div className="mb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
          AI Review
        </span>
      </div>
      <p className="text-sm leading-relaxed text-zinc-300">{feedback}</p>
    </div>
  );
}
