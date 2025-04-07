import type { AnswerType, QuizId, Theme } from "./constants";

export interface Question {
  questionId: string;
  question: string;
  type: AnswerType;
  options?: string[];
}

export interface Quiz {
  title: string;
  questions: Question[];
}

export type Subject = {
  title: string;
  description: string;
  image: ImageMetadata;
};

export type LandingData = {
  id: QuizId;
  title: string;
  heroTitle: string;
  heroText: string;
  landingContentTitle: string;
  landingContentText: string;
  cta: string;
  theme: Theme;
};
