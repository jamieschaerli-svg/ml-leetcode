"use client";

import Link from "next/link";
import { problems } from "@/data/problems";

export default function Home() {
  const easy = problems.filter((p) => p.difficulty === "easy");
  const medium = problems.filter((p) => p.difficulty === "medium");
  const hard = problems.filter((p) => p.difficulty === "hard");

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="bg-glow"></div>

      {/* Header */}
      <header className="border-b border-white/[0.08] px-6 py-4 fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-white flex items-center justify-center">
              <div className="w-3 h-3 bg-black rounded-sm"></div>
            </div>
            CodePro
          </Link>
          <nav className="flex gap-6 items-center">
            <Link href="#problems" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Problems
            </Link>
            <Link href="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Sign In
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-40 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8 text-xs font-medium text-zinc-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          New: AI-Powered Explanations
        </div>
        <h2 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight text-gradient max-w-4xl mx-auto leading-tight">
          Master Python Data Science
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400 leading-relaxed">
          The cleanest way to learn. Unlimited practice, adaptive difficulty, and real-world explanations to level up your skills.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="#problems" className="btn-primary">
            Start Coding
          </Link>
          <Link href="#features" className="btn-secondary">
            View Features
          </Link>
        </div>

        <div id="features" className="mx-auto mt-24 grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="card">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <div className="text-2xl font-semibold text-white mb-2">
              {problems.length}+ Curated
            </div>
            <div className="text-sm text-zinc-400 leading-relaxed">
              Carefully designed problems covering data structures, algorithms, and real-world scenarios.
            </div>
          </div>
          <div className="card">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div className="text-2xl font-semibold text-white mb-2">
              Adaptive Path
            </div>
            <div className="text-sm text-zinc-400 leading-relaxed">
              Our unique system learns your weaknesses and dynamically adjusts the difficulty curve.
            </div>
          </div>
          <div className="card">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            </div>
            <div className="text-2xl font-semibold text-white mb-2">
              AI Powered
            </div>
            <div className="text-sm text-zinc-400 leading-relaxed">
              Stuck? Get instant, context-aware hints and detailed code reviews from our AI assistant.
            </div>
          </div>
        </div>
      </section>

      {/* Problems List */}
      <section id="problems" className="relative mx-auto max-w-4xl px-6 pb-32 pt-16">
        <div className="absolute top-0 left-10 w-px h-full bg-gradient-to-b from-white/10 via-white/5 to-transparent hidden md:block"></div>
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Problem Library</h2>
          <p className="text-zinc-400">Master concepts progressively from easy to hard.</p>
        </div>

        <div className="relative z-10">
          <ProblemSection title="Easy" color="#10b981" problems={easy} />
          <ProblemSection title="Medium" color="#f59e0b" problems={medium} />
          <ProblemSection title="Hard" color="#ef4444" problems={hard} />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] py-8 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} CodePro. All rights reserved.</p>
      </footer>
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
  if (probs.length === 0) return null;
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}></div>
        <h3 className="text-lg font-medium text-white">
          {title}
        </h3>
        <span className="text-xs font-medium text-zinc-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded-md">{probs.length}</span>
      </div>
      <div className="grid gap-2">
        {probs.map((p) => (
          <Link key={p.id} href={`/problems/${p.id}`}>
            <div className="group flex cursor-pointer items-center justify-between rounded-xl border border-transparent hover:border-white/10 bg-white/[0.02] hover:bg-white/[0.04] p-4 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="font-medium text-zinc-300 group-hover:text-white transition-colors">{p.title}</div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium px-2.5 py-1 rounded-md border" style={{ color: color, borderColor: `${color}30`, backgroundColor: `${color}10` }}>
                  {p.level}
                </span>
                <span className="text-zinc-600 group-hover:text-white transition-colors group-hover:translate-x-1 duration-300">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
