import { useState } from "react";
import QuizHeader from "./QuizHeader";
import ProgressBar from "./ProgressBar";
import QuestionBlock from "./QuestionBlock";
import CompletionScreen from "./CompletionScreen";
import useQuizAnswers from "../hooks/useQuizAnswers";
import { ANSWER_TYPE, type QuizId } from "../data/constants";
import type { Quiz } from "../data/types";

interface QuizProps {
  quizId: QuizId;
  quiz: Quiz;
}

export default function Quiz({ quizId, quiz }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, updateAnswers] = useQuizAnswers(quizId);

  const currentQuestion = quiz.questions[currentIndex];
  const isComplete = currentIndex >= quiz.questions.length;
  const questionsCount = quiz.questions.length;
  const selectedAnswers =
    answers[currentQuestion?.questionId]?.split(" | ") ?? [];

  const handleAnswer = (answer: string) => {
    const questionId = currentQuestion.questionId;
    const isMulti = currentQuestion.type === ANSWER_TYPE.MULTI;

    updateAnswers((prev) => {
      const updated = { ...prev };
      const currentValue = prev[questionId] || "";

      if (isMulti) {
        let parts = currentValue.split(" | ").filter(Boolean);
        const index = parts.indexOf(answer);

        if (index > -1) {
          parts.splice(index, 1); // Deselect
        } else {
          parts.push(answer); // Select
        }

        updated[questionId] = parts.join(" | ");
      } else {
        updated[questionId] = answer;
      }

      return updated;
    });

    if (!isMulti) {
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 200);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
  };

  if (isComplete) {
    return <CompletionScreen onRestart={restartQuiz} />;
  }

  return (
    <div className='container max-w-[886px] py-4 sm:py-8'>
      <QuizHeader
        quizId={quizId}
        currentIndex={currentIndex}
        questionsCount={questionsCount}
        onBack={() => setCurrentIndex((prev) => prev - 1)}
        title={quiz.title}
      />

      <ProgressBar
        currentIndex={currentIndex}
        questionsLenght={questionsCount}
      />

      <QuestionBlock
        currentAnswer={answers[currentQuestion.questionId ?? ""]}
        currentQuestion={currentQuestion}
        onAnswer={handleAnswer}
        onNext={() => setCurrentIndex((prev) => prev + 1)}
        selectedAnswers={selectedAnswers}
      />
    </div>
  );
}
