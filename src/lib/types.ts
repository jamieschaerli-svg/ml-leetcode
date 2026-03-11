export interface Problem {
  id: number;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  level: number;
  concept: string;
  realWorldUse: string;
  whyItMatters: string;
  starterCode: string;
  solution: string;
  hints: string[];
  testCases: TestCase[];
}

export interface TestCase {
  input: string;
  expected: string;
}

export type ProblemCategory = "all" | "python" | "numpy" | "pandas" | "matplotlib" | "sklearn";

export const CATEGORIES: { id: ProblemCategory; label: string; color: string; description: string }[] = [
  { id: "all", label: "All Topics", color: "#8b83ff", description: "Mixed learning path across all libraries" },
  { id: "python", label: "Python", color: "#3b82f6", description: "Core Python fundamentals & data structures" },
  { id: "numpy", label: "NumPy", color: "#06b6d4", description: "Numerical computing & array operations" },
  { id: "pandas", label: "Pandas", color: "#8b5cf6", description: "Data manipulation & analysis" },
  { id: "matplotlib", label: "Matplotlib", color: "#f97316", description: "Data visualization & plotting" },
  { id: "sklearn", label: "Sklearn", color: "#ec4899", description: "Machine learning models & tools" },
];

export function getProblemCategory(problem: Problem): Exclude<ProblemCategory, "all"> {
  const t = problem.title;
  if (t.startsWith("NumPy:")) return "numpy";
  if (t.startsWith("Pandas:")) return "pandas";
  if (t.startsWith("Matplotlib:")) return "matplotlib";
  if (t.startsWith("Sklearn:")) return "sklearn";
  return "python";
}
