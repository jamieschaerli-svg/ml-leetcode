"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { problems } from "@/data/problems";
import Logo from "@/components/Logo";
import { getRecommendations, getSkillSummary, type Recommendation } from "@/lib/adaptive";
import { type ProblemCategory, CATEGORIES, getProblemCategory } from "@/lib/types";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<ProblemCategory>("all");
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [skill, setSkill] = useState<{ level: number; solved: number; total: number; streak: number } | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("codepro_category");
    if (saved && CATEGORIES.some((c) => c.id === saved)) {
      setActiveCategory(saved as ProblemCategory);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("codepro_category", activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    const summary = getSkillSummary();
    setSkill(summary);
    if (summary.solved > 0) {
      setRecommendations(getRecommendations(3));
    }
  }, []);

  const filtered = activeCategory === "all"
    ? problems
    : problems.filter((p) => getProblemCategory(p) === activeCategory);

  const easy = filtered.filter((p) => p.difficulty === "easy");
  const medium = filtered.filter((p) => p.difficulty === "medium");
  const hard = filtered.filter((p) => p.difficulty === "hard");

  const activeMeta = CATEGORIES.find((c) => c.id === activeCategory)!;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>
      <div className="bg-glow"></div>

      {/* Header */}
      <header className="border-b border-white/[0.05] px-6 py-4 fixed top-0 w-full z-50 bg-[#030305]/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2 relative z-10 transition-transform hover:scale-105">
            <Logo size={28} />
            <span><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Code</span>Pro</span>
          </Link>
          <nav className="flex gap-6 items-center relative z-10">
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
      <section className="relative z-10 px-6 pt-44 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-8 text-xs font-medium text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.15)] backdrop-blur-md transition-all hover:bg-emerald-500/20 cursor-default">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          New: AI-Powered Explanations
        </div>
        <h2 className="mb-6 text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tight text-gradient max-w-5xl mx-auto leading-[1.1]">
          Master Python Data Science
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
          The cleanest way to learn. Unlimited practice, adaptive difficulty, and real-world explanations to level up your skills.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#problems" className="btn-primary flex items-center gap-2">
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

      {/* Adaptive Skill & Recommendations */}
      {skill && skill.solved > 0 && (
        <section className="mx-auto max-w-4xl px-6 pt-16">
          {/* Skill bar */}
          <div className="card mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Your Progress</h3>
                <p className="text-sm text-zinc-400">Difficulty adapts as you learn</p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="text-center">
                  <div className="text-xl font-bold" style={{ color: "var(--accent)" }}>{skill.level}</div>
                  <div className="text-zinc-500 text-xs">Skill Level</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-emerald-400">{skill.solved}/{skill.total}</div>
                  <div className="text-zinc-500 text-xs">Solved</div>
                </div>
                {skill.streak > 0 && (
                  <div className="text-center">
                    <div className="text-xl font-bold text-amber-400">{skill.streak}</div>
                    <div className="text-zinc-500 text-xs">Day Streak</div>
                  </div>
                )}
              </div>
            </div>
            {/* Skill level bar */}
            <div className="h-2 rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${(skill.level / 90) * 100}%`,
                  background: "linear-gradient(90deg, var(--accent), #8b83ff)",
                }}
              />
            </div>
            <div className="flex justify-between mt-1 text-xs text-zinc-600">
              <span>Beginner</span>
              <span>Intermediate</span>
              <span>Advanced</span>
            </div>
          </div>

          {/* Recommendations */}
          {recommendations.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Recommended For You</h3>
              <div className="grid gap-2">
                {recommendations.map((rec) => (
                  <Link key={rec.problem.id} href={`/problems/${rec.problem.id}`}>
                    <div className="group flex cursor-pointer items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-white/20">
                      <div>
                        <div className="font-medium text-zinc-300 group-hover:text-white transition-colors">
                          {rec.problem.title}
                        </div>
                        <div className="text-xs text-zinc-500 mt-0.5">{rec.reason}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className="text-xs font-medium px-2.5 py-1 rounded-md border"
                          style={{
                            color: rec.problem.difficulty === "easy" ? "#10b981" : rec.problem.difficulty === "medium" ? "#f59e0b" : "#ef4444",
                            borderColor: rec.problem.difficulty === "easy" ? "#10b98130" : rec.problem.difficulty === "medium" ? "#f59e0b30" : "#ef444430",
                            backgroundColor: rec.problem.difficulty === "easy" ? "#10b98110" : rec.problem.difficulty === "medium" ? "#f59e0b10" : "#ef444410",
                          }}
                        >
                          Lvl {rec.problem.level}
                        </span>
                        <span className="text-zinc-600 group-hover:text-white transition-colors group-hover:translate-x-1 duration-300">→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* Problems List */}
      <section id="problems" className="relative mx-auto max-w-4xl px-6 pb-32 pt-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Problem Library</h2>
          <p className="text-zinc-400">Choose a focus track or learn everything mixed together.</p>
        </div>

        {/* Category Filter */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = cat.id === "all"
                ? problems.length
                : problems.filter((p) => getProblemCategory(p) === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border"
                  style={{
                    color: isActive ? "#fff" : cat.color,
                    backgroundColor: isActive ? `${cat.color}20` : "transparent",
                    borderColor: isActive ? `${cat.color}60` : "rgba(255,255,255,0.08)",
                    boxShadow: isActive ? `0 0 20px ${cat.color}15` : "none",
                  }}
                >
                  <span className="flex items-center gap-2">
                    {cat.label}
                    <span
                      className="text-xs px-1.5 py-0.5 rounded-md"
                      style={{
                        backgroundColor: isActive ? `${cat.color}30` : "rgba(255,255,255,0.05)",
                        color: isActive ? "#fff" : "rgb(161,161,170)",
                      }}
                    >
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active category description */}
          {activeCategory !== "all" && (
            <div
              className="text-center py-3 px-4 rounded-xl border mx-auto max-w-md"
              style={{
                borderColor: `${activeMeta.color}30`,
                backgroundColor: `${activeMeta.color}08`,
              }}
            >
              <p className="text-sm" style={{ color: activeMeta.color }}>
                {activeMeta.label} Master Class
              </p>
              <p className="text-xs text-zinc-500 mt-0.5">{activeMeta.description}</p>
            </div>
          )}
        </div>

        <div className="relative z-10">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-zinc-500">
              No problems found for this category.
            </div>
          ) : (
            <>
              <ProblemSection title="Easy" color="#10b981" problems={easy} />
              <ProblemSection title="Medium" color="#f59e0b" problems={medium} />
              <ProblemSection title="Hard" color="#ef4444" problems={hard} />
            </>
          )}
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
            <div className="group flex cursor-pointer items-center justify-between rounded-xl border border-transparent hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.06] hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] p-4 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="font-medium text-zinc-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300">{p.title}</div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium px-2.5 py-1 rounded-md border transition-colors duration-300 group-hover:text-white group-hover:bg-white/10 group-hover:border-white/30" style={{ color: color, borderColor: `${color}30`, backgroundColor: `${color}10` }}>
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
