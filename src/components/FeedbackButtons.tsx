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
      <h3 className="mb-3 text-sm font-semibold" style={{ color: "var(--text-secondary)" }}>
        How was this problem?
      </h3>
      <div className="flex gap-2">
        {[
          { label: "Too Easy", value: "too_easy" as const, color: "var(--success)" },
          { label: "Good", value: "good" as const, color: "var(--accent)" },
          { label: "Too Hard", value: "too_hard" as const, color: "var(--error)" },
        ].map((opt) => (
          <button
            key={opt.value}
            onClick={() => handleFeedback(opt.value)}
            className="flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-all"
            style={{
              borderColor: selected === opt.value ? opt.color : "rgba(255,255,255,0.1)",
              background: selected === opt.value ? opt.color + "22" : "transparent",
              color: selected === opt.value ? opt.color : "var(--text-secondary)",
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>
      {selected && (
        <p className="mt-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          Got it — we&apos;ll adjust your next recommendations.
        </p>
      )}
    </div>
  );
}
