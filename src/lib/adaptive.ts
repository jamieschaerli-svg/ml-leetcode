import { problems } from "@/data/problems";

const STORAGE_KEY = "codepro_progress";

export interface ProblemRecord {
  problemId: number;
  attempts: number;
  solved: boolean;
  feedback?: "too_easy" | "good" | "too_hard";
  lastAttempt: number; // timestamp
  solvedAt?: number;   // timestamp
}

export interface UserSkill {
  level: number;       // estimated skill level 1-90
  confidence: number;  // 0-1, how sure we are about the level
  records: Record<number, ProblemRecord>;
}

const DEFAULT_SKILL: UserSkill = {
  level: 1,
  confidence: 0,
  records: {},
};

// --- Persistence ---

export function loadSkill(): UserSkill {
  if (typeof window === "undefined") return DEFAULT_SKILL;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_SKILL;
    return JSON.parse(raw) as UserSkill;
  } catch {
    return DEFAULT_SKILL;
  }
}

export function saveSkill(skill: UserSkill): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(skill));
}

// --- Recording events ---

export function recordAttempt(problemId: number, correct: boolean): UserSkill {
  const skill = loadSkill();
  const problem = problems.find((p) => p.id === problemId);
  if (!problem) return skill;

  const existing = skill.records[problemId] || {
    problemId,
    attempts: 0,
    solved: false,
    lastAttempt: Date.now(),
  };

  existing.attempts += 1;
  existing.lastAttempt = Date.now();

  if (correct && !existing.solved) {
    existing.solved = true;
    existing.solvedAt = Date.now();
    skill.level = recalculateLevel(skill, problem.level, existing);
    skill.confidence = Math.min(1, skill.confidence + 0.1);
  } else if (!correct) {
    // Failed attempt nudges level down slightly
    const penalty = 0.3;
    skill.level = Math.max(1, skill.level - penalty);
  }

  skill.records[problemId] = existing;
  saveSkill(skill);
  return skill;
}

export function recordFeedback(
  problemId: number,
  feedback: "too_easy" | "good" | "too_hard"
): UserSkill {
  const skill = loadSkill();
  const problem = problems.find((p) => p.id === problemId);
  if (!problem) return skill;

  const existing = skill.records[problemId];
  if (existing) {
    existing.feedback = feedback;
    skill.records[problemId] = existing;
  }

  // Feedback adjusts skill level
  if (feedback === "too_easy") {
    // User found it easy — push level up more aggressively
    skill.level = Math.min(90, skill.level + 2);
    skill.confidence = Math.min(1, skill.confidence + 0.05);
  } else if (feedback === "too_hard") {
    // User struggled — pull level down
    skill.level = Math.max(1, skill.level - 2);
    skill.confidence = Math.min(1, skill.confidence + 0.05);
  } else {
    // "good" — level is well-calibrated, boost confidence
    skill.confidence = Math.min(1, skill.confidence + 0.15);
  }

  saveSkill(skill);
  return skill;
}

// --- Level calculation ---

function recalculateLevel(
  skill: UserSkill,
  problemLevel: number,
  record: ProblemRecord
): number {
  // How quickly they solved it (fewer attempts = higher skill signal)
  const efficiency = record.attempts === 1 ? 1.5 : record.attempts <= 3 ? 1.0 : 0.5;

  // Blend current skill with the problem they just solved
  const weight = skill.confidence;
  const newSignal = problemLevel * efficiency;
  const blended = skill.level * weight + newSignal * (1 - weight);

  // Always move at least a little toward the problem level
  const nudge = (problemLevel - skill.level) * 0.3;

  return Math.max(1, Math.min(90, blended + nudge));
}

// --- Recommendations ---

export interface Recommendation {
  problem: (typeof problems)[number];
  reason: string;
}

export function getRecommendations(count: number = 3): Recommendation[] {
  const skill = loadSkill();
  const solved = new Set(
    Object.values(skill.records)
      .filter((r) => r.solved)
      .map((r) => r.problemId)
  );

  const unsolved = problems.filter((p) => !solved.has(p.id));
  if (unsolved.length === 0) {
    // All solved — recommend revisiting hard-rated ones
    const hardRated = problems.filter(
      (p) => skill.records[p.id]?.feedback === "too_hard"
    );
    return hardRated.slice(0, count).map((p) => ({
      problem: p,
      reason: "Revisit — you found this challenging before",
    }));
  }

  // Score each unsolved problem by how close it is to user's level
  const scored = unsolved.map((p) => {
    const distance = Math.abs(p.level - skill.level);
    // Prefer problems slightly above current level (zone of proximal development)
    const stretch = p.level > skill.level ? -0.5 : 0; // slight bonus for stretch
    return { problem: p, score: distance + stretch };
  });

  scored.sort((a, b) => a.score - b.score);

  return scored.slice(0, count).map((s, i) => ({
    problem: s.problem,
    reason:
      i === 0
        ? "Best match for your level"
        : s.problem.level > skill.level
        ? "A good stretch challenge"
        : "Reinforce your foundations",
  }));
}

export function getSkillSummary(): {
  level: number;
  confidence: number;
  solved: number;
  total: number;
  streak: number;
} {
  const skill = loadSkill();
  const solvedCount = Object.values(skill.records).filter((r) => r.solved).length;

  // Calculate streak (consecutive days with activity)
  const timestamps = Object.values(skill.records)
    .map((r) => r.lastAttempt)
    .sort((a, b) => b - a);

  let streak = 0;
  if (timestamps.length > 0) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const lastDay = new Date(timestamps[0]);
    lastDay.setHours(0, 0, 0, 0);

    const daysDiff = Math.floor(
      (today.getTime() - lastDay.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysDiff <= 1) {
      streak = 1;
      const days = new Set<string>();
      for (const ts of timestamps) {
        const d = new Date(ts);
        days.add(d.toISOString().split("T")[0]);
      }
      const sortedDays = [...days].sort().reverse();
      for (let i = 1; i < sortedDays.length; i++) {
        const curr = new Date(sortedDays[i - 1]);
        const prev = new Date(sortedDays[i]);
        const diff = Math.floor(
          (curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24)
        );
        if (diff <= 1) streak++;
        else break;
      }
    }
  }

  return {
    level: Math.round(skill.level),
    confidence: Math.round(skill.confidence * 100),
    solved: solvedCount,
    total: problems.length,
    streak,
  };
}
