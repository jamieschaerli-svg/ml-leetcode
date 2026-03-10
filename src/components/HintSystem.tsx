"use client";

import { useState } from "react";

interface HintSystemProps {
  hints: string[];
}

export default function HintSystem({ hints }: HintSystemProps) {
  const [revealedCount, setRevealedCount] = useState(0);

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
      </div>
    </div>
  );
}
