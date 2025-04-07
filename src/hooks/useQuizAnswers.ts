import { useEffect, useState } from "react";
import type { QuizId } from "../data/constants";

type AnswersMap = Record<string, string>;

export default function useQuizAnswers(quizId: QuizId) {
  const [answers, setAnswers] = useState<AnswersMap>({});

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem(`quiz-${quizId}`);

    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setAnswers(parsed);
      } catch (e) {
        console.error("Failed to parse stored answers", e);
      }
    }
  }, [quizId]);

  const updateAnswers = (updater: (prev: AnswersMap) => AnswersMap) => {
    setAnswers((prev) => {
      const updated = updater(prev);
      localStorage.setItem(`quiz-${quizId}`, JSON.stringify(updated));
      return updated;
    });
  };

  return [answers, updateAnswers] as const;
}
