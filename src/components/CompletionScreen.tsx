import Button from "./ui/Button";

interface CompletionScreenProps {
  onRestart: () => void;
}

export default function CompletionScreen({ onRestart }: CompletionScreenProps) {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center text-center p-8'>
      <h2>You're done!</h2>
      <p className='mb-4'>Thanks for taking the quiz.</p>
      <Button
        text='Restart Quiz'
        onClick={onRestart}
      />
    </div>
  );
}
