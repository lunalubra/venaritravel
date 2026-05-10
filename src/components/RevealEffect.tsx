"use client";

import { useEffect } from "react";

/**
 * Mounts an IntersectionObserver that flags every [data-reveal] element
 * with data-revealed="true" once it crosses into the viewport. CSS in
 * globals.css consumes the attribute to drive the actual reveal.
 *
 * Adds a "js" class to <html> on hydration so the unrevealed initial
 * state only applies when JS is available. Without JS, content remains
 * fully visible (graceful degradation).
 */
export const RevealEffect = () => {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reveal = (el: Element) => {
      el.setAttribute("data-revealed", "true");
    };

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (reduce || typeof IntersectionObserver === "undefined") {
      targets.forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.15,
      },
    );

    targets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // If already on screen at mount (above the fold), reveal immediately
      // with a tiny delay so the staggered effect still reads.
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const delay = parseInt(
          el.style.getPropertyValue("--reveal-delay") || "0",
          10,
        );
        window.setTimeout(() => reveal(el), 80 + (isNaN(delay) ? 0 : delay));
        return;
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
};
