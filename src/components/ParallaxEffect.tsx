"use client";

import { useEffect } from "react";

/**
 * Scroll parallax via GSAP ScrollTrigger.
 *
 * - GSAP and ScrollTrigger are dynamic-imported so they don't bloat the
 *   initial JS bundle. The animations start once the user has hydrated.
 * - Targets every element with class `.parallax-image`. The element should
 *   be a wrapper around a `next/image` with `fill`, sitting inside an
 *   `overflow-hidden` container.
 * - Effect: as the section scrolls through the viewport, the image
 *   translates from yPercent -12 to +12 with `scrub` smoothing. The base
 *   scale (set in globals.css) leaves headroom so the translation never
 *   exposes the section background.
 * - Respects prefers-reduced-motion (no-op when set).
 */
export const ParallaxEffect = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let revert: (() => void) | null = null;
    let cancelled = false;

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const elements = gsap.utils.toArray<HTMLElement>(".parallax-image");
        if (elements.length === 0) return;

        elements.forEach((el) => {
          // Use the wrapper's parent as the ScrollTrigger trigger. The
          // .parallax-image element itself is scaled 1.45x in CSS, so its
          // bounding box overshoots the natural frame by 22% on each side
          // and would skew the trigger math. The parent (the aspect-ratio
          // frame, or the Hero section) is unscaled and matches the
          // visible region.
          const triggerEl = el.parentElement ?? el;

          // Allow per-element overrides via data-* attributes.
          // Hero uses `top top` because it's already in viewport at scroll=0;
          // the default `top bottom` would start the animation mid-progress.
          const start = el.dataset.parallaxStart ?? "top bottom";
          const end = el.dataset.parallaxEnd ?? "bottom top";
          const range = parseFloat(el.dataset.parallaxRange ?? "20");

          gsap.fromTo(
            el,
            { yPercent: -range },
            {
              yPercent: range,
              ease: "none",
              scrollTrigger: {
                trigger: triggerEl,
                start,
                end,
                scrub: 0.6,
              },
            },
          );
        });

        // Re-measure after fonts/images settle so triggers land at the
        // right scroll position even if reveal animations shift layout.
        ScrollTrigger.refresh();
      });

      revert = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      revert?.();
    };
  }, []);

  return null;
};
