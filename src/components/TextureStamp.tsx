import { type CSSProperties, type FC } from "react";

type TextureStampProps = {
  /** Absolute path to the SVG (e.g. /iconos/venaritravel-icon-galgo.svg). */
  src: string;
  /** CSS aspect-ratio expression (e.g. "168 / 226"). Matches the SVG viewBox. */
  aspectRatio: string;
  /** Tailwind classes for absolute positioning + height (drives width via aspect-ratio). */
  className?: string;
  /** Opacity of the silhouette (0–1). */
  opacity?: number;
  /** Fill color. Defaults to `currentColor` so the stamp inherits the section's text color. */
  color?: string;
  /** Optional rotation in degrees, applied via transform. */
  rotate?: number;
  /** Optional blend mode against the underlying background. */
  blend?: CSSProperties["mixBlendMode"];
};

/*
 * Decorative stamp/texture. The SVG is loaded as a CSS mask over a flat
 * `currentColor` fill, so the silhouette can be tinted via the parent's text
 * color and tuned with opacity/blend. Always rendered absolute and inert
 * (aria-hidden, pointer-events: none). The section it lives in must be
 * `relative isolate overflow-hidden` so the stamp stacks under content
 * (via -z-0) and clips at the section edge.
 */
export const TextureStamp: FC<TextureStampProps> = ({
  src,
  aspectRatio,
  className = "",
  opacity = 0.08,
  color = "currentColor",
  rotate,
  blend,
}) => {
  const style: CSSProperties = {
    aspectRatio,
    backgroundColor: color,
    opacity,
    mixBlendMode: blend,
    transform: rotate ? `rotate(${rotate}deg)` : undefined,
    transformOrigin: "center",
    WebkitMaskImage: `url(${src})`,
    maskImage: `url(${src})`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    pointerEvents: "none",
  };

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute block ${className}`}
      style={style}
    />
  );
};
