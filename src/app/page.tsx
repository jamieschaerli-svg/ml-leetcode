"use client";

import Link from "next/link";
import { problems } from "@/data/problems";

export default function Home() {
  const easy = problems.filter((p) => p.difficulty === "easy");
  const medium = problems.filter((p) => p.difficulty === "medium");
  const hard = problems.filter((p) => p.difficulty === "hard");

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <h1 className="text-2xl font-bold">
            <span style={{ color: "var(--accent)" }}>ML</span> LeetCode
          </h1>
          <nav className="flex gap-4">
            <Link href="/" className="text-sm font-medium opacity-80 hover:opacity-100">
              Problems
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-20 text-center">
        <h2 className="mb-4 text-5xl font-bold tracking-tight">
          Learn Python for{" "}
          <span style={{ color: "var(--accent)" }}>Data Science</span>
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg" style={{ color: "var(--text-secondary)" }}>
          Master Python and ML concepts through hands-on coding challenges.
          Unlimited practice, adaptive difficulty, and real-world explanations.
        </p>
        <Link href="#problems" className="btn-primary inline-block">
          Start Learning
        </Link>
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-6 text-center">
          <div className="card">
            <div className="text-3xl font-bold" style={{ color: "var(--accent)" }}>
              {problems.length}
            </div>
            <div className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
              Problems
            </div>
          </div>
          <div className="card">
            <div className="text-3xl font-bold" style={{ color: "var(--success)" }}>
              ∞
            </div>
            <div className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
              Daily Practice
            </div>
          </div>
          <div className="card">
            <div className="text-3xl font-bold" style={{ color: "var(--warning)" }}>
              3
            </div>
            <div className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
              Difficulty Levels
            </div>
          </div>
        </div>
      </section>

      {/* Problems List */}
      <section id="problems" className="mx-auto max-w-6xl px-6 pb-20">
        <ProblemSection title="Easy" color="var(--success)" problems={easy} />
        <ProblemSection title="Medium" color="var(--warning)" problems={medium} />
        <ProblemSection title="Hard" color="var(--error)" problems={hard} />
      </section>
    </div>
  );
}

function ProblemSection({
  title,
  color,
  problems: probs,
}: {
  title: string;
  color: string;
  problems: typeof problems;
}) {
  return (
    <div className="mb-12">
      <h3 className="mb-4 text-xl font-semibold" style={{ color }}>
        {title} ({probs.length})
      </h3>
      <div className="grid gap-3">
        {probs.map((p) => (
          <Link key={p.id} href={`/problems/${p.id}`}>
            <div className="card flex cursor-pointer items-center justify-between transition-all hover:translate-x-1">
              <div className="flex items-center gap-4">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold"
                  style={{ background: color + "22", color }}
                >
                  {p.level}
                </span>
                <div>
                  <div className="font-medium">{p.title}</div>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Level {p.level}
                  </div>
                </div>
              </div>
              <span className="text-sm opacity-50">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
