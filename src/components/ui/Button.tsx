import { FaArrowRight } from "react-icons/fa";

type ButtonProps = {
  href?: string;
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export default function Button({
  href,
  text,
  onClick,
  disabled,
  className,
}: ButtonProps) {
  const btnClasses = `btn-primary ${className}`.trim();

  return href ? (
    <a
      href={href}
      className={btnClasses}
    >
      {text}
      <FaArrowRight className='w-6 h-6 p-1' />
    </a>
  ) : (
    <button
      onClick={onClick}
      className={btnClasses}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
