"use client";

import { useState } from "react";
import { recordFeedback } from "@/lib/adaptive";

interface FeedbackButtonsProps {
  problemId: number;
  onFeedback?: (level: number) => void;
}

export default function FeedbackButtons({ problemId, onFeedback }: FeedbackButtonsProps) {
  const [selected, setSelected] = useState<string | null>(null);

  function handleFeedback(rating: "too_easy" | "good" | "too_hard") {
    setSelected(rating);
    const updatedSkill = recordFeedback(problemId, rating);
    onFeedback?.(Math.round(updatedSkill.level));
  }

  return (
    <div className="card">
      <h3 className="mb-3 text-sm font-semibold text-zinc-400">
        How was this problem?
      </h3>
      <div className="flex gap-2">
        {[
          { label: "Too Easy", value: "too_easy" as const, activeClass: "border-emerald-500 bg-emerald-500/10 text-emerald-400" },
          { label: "Good", value: "good" as const, activeClass: "border-white bg-white/10 text-white" },
          { label: "Too Hard", value: "too_hard" as const, activeClass: "border-red-500 bg-red-500/10 text-red-400" },
        ].map((opt) => (
          <button
            key={opt.value}
            onClick={() => handleFeedback(opt.value)}
            className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-all ${
              selected === opt.value
                ? opt.activeClass
                : "border-white/10 text-zinc-500 hover:text-zinc-300 hover:border-white/20"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
      {selected && (
        <p className="mt-2 text-xs text-zinc-500">
          Got it — we&apos;ll adjust your next recommendations.
        </p>
      )}
    </div>
  );
}
