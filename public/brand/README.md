# Brand assets

Drop the official venaritravel SVG logo here as `wordmark.svg` (and any monochrome variant as `wordmark-light.svg` / `wordmark-dark.svg`). Until those assets land, `src/components/Wordmark.tsx` renders a typographic placeholder using Cormorant Garamond italic. To swap in the real SVG, update the `Wordmark` component to render the SVG inline (or via `<Image>`) and remove the typographic fallback.
