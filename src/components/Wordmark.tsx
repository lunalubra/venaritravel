import { type FC } from "react";

type WordmarkProps = {
  /** Tailwind color class, defaults to currentColor */
  className?: string;
  /** Show the underline rule beneath the wordmark */
  ruled?: boolean;
  /** Accessible label for the brand */
  label?: string;
};

/**
 * Typographic wordmark placeholder.
 * Replace with the official SVG from `public/brand/` when delivered.
 */
export const Wordmark: FC<WordmarkProps> = ({
  className = "",
  ruled = false,
  label = "venaritravel",
}) => {
  return (
    <span
      className={`inline-flex flex-col leading-none ${className}`}
      aria-label={label}
    >
      <span
        className="font-serif font-normal italic"
        style={{
          fontSize: "inherit",
          letterSpacing: "0.005em",
        }}
      >
        venaritravel
      </span>
      {ruled ? (
        <span
          aria-hidden="true"
          className="mt-1 block h-px w-full bg-current opacity-40"
        />
      ) : null}
    </span>
  );
};
