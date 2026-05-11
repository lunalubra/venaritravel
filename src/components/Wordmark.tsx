import { type FC } from "react";

import { DeerMark } from "./DeerMark";

type WordmarkProps = {
  /**
   * Color (e.g. `text-hueso`), font-size (which sizes the mark via em),
   * and animation classes — all applied to the container.
   */
  className?: string;
  /** Show the underline rule beneath the mark */
  ruled?: boolean;
  /** Accessible label for the brand */
  label?: string;
};

export const Wordmark: FC<WordmarkProps> = ({
  className = "",
  ruled = false,
  label = "venaritravel",
}) => {
  return (
    <span className={`inline-flex flex-col items-center gap-2 ${className}`}>
      <DeerMark label={label} />
      {ruled ? (
        <span
          aria-hidden="true"
          className="block h-px w-12 bg-current opacity-40"
        />
      ) : null}
    </span>
  );
};
