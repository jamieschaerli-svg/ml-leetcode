"use client";

import { useState } from "react";

interface HintSystemProps {
  hints: string[];
}

export default function HintSystem({ hints }: HintSystemProps) {
  const [revealedCount, setRevealedCount] = useState(0);

  return (
    <div className="card">
      <h3
        className="mb-3 text-sm font-semibold uppercase tracking-wider"
        style={{ color: "var(--accent)" }}
      >
        Need Help?
      </h3>
      <div className="space-y-2">
        {hints.map((hint, i) => (
          <div key={i}>
            {i < revealedCount ? (
              <div
                className="rounded-lg p-3 text-sm"
                style={{ background: "var(--bg-secondary)" }}
              >
                <span className="font-semibold" style={{ color: "var(--accent)" }}>
                  Hint {i + 1}:{" "}
                </span>
                {hint}
              </div>
            ) : i === revealedCount ? (
              <button
                onClick={() => setRevealedCount(revealedCount + 1)}
                className="w-full rounded-lg border border-dashed border-white/20 p-3 text-sm transition-colors hover:border-white/40"
                style={{ color: "var(--text-secondary)" }}
              >
                Reveal Hint {i + 1}
              </button>
            ) : (
              <div
                className="rounded-lg border border-dashed border-white/10 p-3 text-sm opacity-30"
              >
                Hint {i + 1} (locked)
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
