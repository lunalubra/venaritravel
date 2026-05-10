import { type FC } from "react";

type ScrollCueProps = {
  label?: string;
  className?: string;
};

export const ScrollCue: FC<ScrollCueProps> = ({
  label = "Continuar",
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center gap-3 select-none ${className}`}
      aria-hidden="true"
    >
      <span className="eyebrow opacity-80">{label}</span>
      <svg
        width="9"
        height="56"
        viewBox="0 0 9 56"
        fill="none"
        className="opacity-55"
        aria-hidden="true"
      >
        <line
          x1="4.5"
          y1="0"
          x2="4.5"
          y2="48"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M0 49.5 L4.5 56 L9 49.5"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
};
