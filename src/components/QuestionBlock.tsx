import { FaCheck } from "react-icons/fa";
import Button from "./ui/Button";
import type { Question } from "../data/types";
import { ANSWER_TYPE } from "../data/constants";

interface QuestionBlockProps {
  currentQuestion: Question;
  currentAnswer: string;
  onAnswer: (option: string) => void;
  selectedAnswers: string[];
  onNext: () => void;
}

export default function QuestionBlock({
  currentQuestion,
  currentAnswer,
  onAnswer,
  selectedAnswers,
  onNext,
}: QuestionBlockProps) {
  return (
    <div className='max-w-[556px] mx-auto'>
      <h2 className='text-2xl font-semibold mb-6 text-center'>
        {currentQuestion.question}
      </h2>

      {currentQuestion.type === ANSWER_TYPE.YES_NO && (
        <div className='flex flex-col gap-3 w-full'>
          {["Yes", "No"].map((option) => {
            const isSelected = currentAnswer === option;

            return (
              <button
                key={option}
                onClick={() => onAnswer(option)}
                className={`${
                  isSelected ? "border-primary" : ""
                } quiz-option text-left rounded-2xl transition-font-weight-bg hover:bg-primary hover:font-[600] s4 gap-4 py-4 sm:py-6 border cursor-pointer flex justify-start items-center px-4 sm:px-8`}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}

      {currentQuestion.type === ANSWER_TYPE.MULTI && (
        <div>
          <div className='flex flex-col gap-3 w-full'>
            {currentQuestion.options?.map((option, idx) => {
              const isSelected = selectedAnswers?.includes(option);

              return (
                <button
                  key={idx}
                  onClick={() => onAnswer(option)}
                  className={`quiz-option text-left rounded-2xl transition-font-weight-bg hover:bg-primary hover:font-[600] s4 gap-4 py-4 sm:py-6 border cursor-pointer flex justify-start items-center px-4 sm:px-8 ${
                    isSelected ? "border-primary" : "border-neutral-300"
                  }`}
                >
                  <div
                    className={`${
                      isSelected
                        ? "bg-primary border-primary"
                        : "bg-white border-neutral-300"
                    } min-w-6 w-6 h-6 rounded-full border flex items-center justify-center`}
                  >
                    <FaCheck className='w-[11px] text-white' />
                  </div>
                  {option}
                </button>
              );
            })}
          </div>
          <div className='mt-8 self-center'>
            <Button
              text='Next'
              onClick={() => onNext()}
              disabled={!selectedAnswers.some(Boolean)}
              className='w-full justify-center'
            />
          </div>
        </div>
      )}
    </div>
  );
}
