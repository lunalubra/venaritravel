import { type CSSProperties, type FC } from "react";

type DeerMarkProps = {
  /** Layout/animation classes. */
  className?: string;
  /**
   * Height in `em`, relative to the parent's font-size. Default 3 gives
   * a mark roughly proportional to the prior typographic wordmark when
   * the same `text-[clamp(...)]` class is set on the container.
   */
  heightEm?: number;
  /** Accessible label. Omit to render decoratively. */
  label?: string;
};

/*
 * Brand mark (ciervo). Rendered as a CSS mask over `currentColor` so the
 * silhouette inherits the parent's text color — no separate inverted asset
 * needed for the dark hero/footer surfaces. The SVG asset is browser-cached.
 */
export const DeerMark: FC<DeerMarkProps> = ({
  className = "",
  heightEm = 3,
  label,
}) => {
  const a11y = label
    ? { role: "img" as const, "aria-label": label }
    : { "aria-hidden": true as const };

  const maskStyle: CSSProperties = {
    height: `${heightEm}em`,
    aspectRatio: "166 / 226",
    backgroundColor: "currentColor",
    WebkitMaskImage: "url(/brand/venaritravel-logo-ciervo.svg)",
    maskImage: "url(/brand/venaritravel-logo-ciervo.svg)",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskPosition: "center",
    maskPosition: "center",
  };

  return (
    <span
      {...a11y}
      className={`inline-block ${className}`}
      style={maskStyle}
    />
  );
};
