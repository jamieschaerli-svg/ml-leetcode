"use client";

import { useState } from "react";

interface FeedbackButtonsProps {
  problemId: number;
}

export default function FeedbackButtons({ problemId }: FeedbackButtonsProps) {
  const [selected, setSelected] = useState<string | null>(null);

  function handleFeedback(rating: string) {
    setSelected(rating);
    // Store locally for now; Supabase integration later
    const existing = JSON.parse(localStorage.getItem("feedback") || "{}");
    existing[problemId] = rating;
    localStorage.setItem("feedback", JSON.stringify(existing));
  }

  return (
    <div className="card">
      <h3 className="mb-3 text-sm font-semibold" style={{ color: "var(--text-secondary)" }}>
        How was this problem?
      </h3>
      <div className="flex gap-2">
        {[
          { label: "Too Easy", value: "too_easy", color: "var(--success)" },
          { label: "Good", value: "good", color: "var(--accent)" },
          { label: "Too Hard", value: "too_hard", color: "var(--error)" },
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
    </div>
  );
}
