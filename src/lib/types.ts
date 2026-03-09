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

export interface UserProgress {
  userId: string;
  problemId: number;
  completed: boolean;
  attempts: number;
  feedback?: "too_easy" | "good" | "too_hard";
}
