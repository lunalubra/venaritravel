# Brand assets

`venaritravel-logo-ciervo.svg` is the official brand mark (ciervo). It is the
canonical source used in three places:

- the favicon, declared in `src/app/layout.tsx` via Next.js `metadata.icons`
- the in-page logo, rendered by `src/components/DeerMark.tsx` as a CSS
  `mask-image` so the silhouette can inherit `currentColor` and stay legible
  on dark hero/footer surfaces without a separate inverted asset
- via `<Wordmark>` (a thin wrapper around `<DeerMark>`) in the hero header
  and footer

If a horizontal lockup or alternate variants land later, add them here
alongside this file (e.g. `wordmark-light.svg`).
