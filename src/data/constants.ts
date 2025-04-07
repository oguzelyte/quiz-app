export const THEMES = {
  blue: "blue",
  green: "green",
  orange: "orange",
} as const;
export type Theme = (typeof THEMES)[keyof typeof THEMES];

export const ANSWER_TYPE = {
  YES_NO: "yesno",
  MULTI: "multi",
} as const;
export type AnswerType = (typeof ANSWER_TYPE)[keyof typeof ANSWER_TYPE];

export const QUIZZES = {
  timeManagement: "time-management",
  productivity: "productivity",
  sleepManagement: "sleep-management",
} as const;
export type QuizId = (typeof QUIZZES)[keyof typeof QUIZZES];
