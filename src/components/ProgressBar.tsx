interface ProgressBarProps {
  currentIndex: number;
  questionsLenght: number;
}

export default function ProgressBar({
  currentIndex,
  questionsLenght,
}: ProgressBarProps) {
  const progress = ((currentIndex + 1) / questionsLenght) * 100;

  return (
    <div className='bg-neutral-300 w-full h-[6px] rounded-[1000px] overflow-hidden mb-6 sm:mb-10'>
      <div
        className='bg-primary w-[400px] h-full transition-[width] rounded-[1000px] duration-300'
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
