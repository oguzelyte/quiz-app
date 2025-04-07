import { FaArrowLeft } from "react-icons/fa";
import type { QuizId } from "../data/constants";

interface QuizHeaderProps {
  quizId: QuizId;
  currentIndex: number;
  questionsCount: number;
  onBack: () => void;
  title: string;
}

export default function QuizHeader({
  quizId,
  currentIndex,
  questionsCount,
  onBack,
  title,
}: QuizHeaderProps) {
  const handleBackClick = () => {
    currentIndex === 0 ? (window.location.href = `/${quizId}`) : onBack();
  };

  return (
    <div className='inline-flex w-full items-center justify-between mb-4'>
      <button
        onClick={handleBackClick}
        className='h-7 w-7 bg-neutral-0 rounded-full cursor-pointer flex items-center justify-center'
      >
        <FaArrowLeft className='w-3 h-3 text-white' />
      </button>
      <h1 className='text-xl'>{title}</h1>
      <div className='s1 opacity-50 font-normal'>
        {currentIndex + 1}/{questionsCount}
      </div>
    </div>
  );
}
