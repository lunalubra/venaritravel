# venaritravel: Design System

Companion to `Design_Spec_venaritravel.md` (the canonical brand specification). This file is the engineering-facing distillation: tokens, ratios, and patterns the implementation references directly. When the two diverge, `Design_Spec_venaritravel.md` wins; update this file to match.

## 1. Tokens

### Color

Six-token system. Distribution rule: **60-30-10**, meaning 60% Loden, 30% Hueso, ≤10% Cordobán + Pajizo combined. Pajizo never above 4% of total. No `#000` or `#FFF` anywhere.

| Token | Hex | OKLCH | Role |
|---|---|---|---|
| `loden` | `#1F2A22` | oklch(0.246 0.018 145) | Primary surface, structural |
| `hueso` | `#F1E9D6` | oklch(0.926 0.034 88) | Paper, breathing space |
| `cordoban` | `#5C2A1E` | oklch(0.305 0.083 36) | Warm accent, hover, editorial markers |
| `pajizo` | `#B8945A` | oklch(0.661 0.092 76) | Filetes, hairlines, separators only |
| `tinta` | `#1A1815` | oklch(0.158 0.006 70) | Primary text (warm black) |
| `piedra` | `#6E6961` | oklch(0.476 0.009 80) | Secondary text, captions, metadata |

**Contrast (verified):**
- Tinta on Hueso → AAA
- Hueso on Loden → AAA
- Piedra on Hueso → AA (use for captions, not body)
- Pajizo and Cordobán: never as text on light surfaces.

### Typography

Single pairing. Identity preservation, not greenfield font selection.

- **Cormorant Garamond** (display, headlines, editorial). Weights: 400, 500. Subsets: `latin`, `latin-ext`.
- **Proza Libre** (body, UI, captions). Weights: 400, 500, 700. Subsets: `latin`, `latin-ext`.

Loaded via `next/font/google` with `display: swap` and CSS variables `--font-cormorant`, `--font-proza`. Tailwind `font-serif` and `font-sans` map to these.

### Type scale (fluid)

Hierarchy is by size + space, not by weight. Single weight per family where possible.

| Role | Family | clamp() | line-height | tracking |
|---|---|---|---|---|
| Display | Cormorant | `clamp(3rem, 7vw, 5.5rem)` | 1.05 | -0.01em |
| H1 | Cormorant | `clamp(2.25rem, 4vw, 3rem)` | 1.1 | -0.005em |
| H2 | Cormorant | `clamp(1.75rem, 2.6vw, 2rem)` | 1.15 | normal |
| H3 | Proza Libre 500 | `clamp(1.125rem, 1.4vw, 1.25rem)` | 1.3 | normal |
| Body | Proza Libre 400 | 1rem–1.0625rem | 1.65 | normal |
| Caption | Proza Libre 400 | 0.8125rem | 1.5 | normal |
| Eyebrow | Proza Libre 500 | 0.6875rem–0.75rem | 1.2 | 0.07em (positive) |

Eyebrows are uppercase. Body and headlines are sentence-case. No all-caps body. Italic is reserved for `<em>` in body and for `location_label` in Territorio.

### Spacing

Section padding is generous and asymmetric across slices to break monotony.

- Section vertical padding (desktop): clamp(`6rem`, 12vw, `10rem`); the Manifiesto and Confianza go larger (≥ `10rem` each side).
- Section horizontal padding: clamp(`1.5rem`, 5vw, `4rem`).
- Inter-element spacing: 8px base. Use multiples of 8 except for typographic optical adjustments.
- Max-width content frames: `72rem` (≈ 1152px) for full sections; `40rem` (≈ 640px) for narrow editorial passages and the Contacto form.

### Hairlines

Borders are 1px (sometimes 0.5px on Retina) in `tinta/30` or `piedra/40`. Never thicker, never decorative, never side-stripe. Use them to separate Proceso steps and to mark form fields.

## 2. Composition rules

- **Asymmetric, never centered stacks.** Default alignment is left. Statements indent into a 12-column grid (start at column 2 or 3, span 8–10).
- **No cards with borders.** Items separate by space, not by container.
- **No shadows. No gradients. No glow. No blur.** The single permitted overlay is a flat Loden tint at 25–40% on hero imagery for legibility.
- **No icons** beyond a single hairline arrow for the scroll cue. No iconography decorating headings.

## 3. Imagery direction

Documental editorial. Filmic, slow, contemplative. Low natural light: dawn, dusk, fog, dim interiors. Composition breathes; subject rarely centered, rarely fills the frame. Desaturated color, warm shadows, preserved grain.

**Five families:**
- Paisaje (territory as protagonist): dehesa, encinar, sierra, fog, dawn light.
- Detalle de material: leather, tweed, oiled wood, brass, paper.
- Arquitectura e interiores: Spanish country houses, manor dining rooms, libraries, fireplaces.
- Acción: figure from behind, silhouette, working dog. No faces. No weapons foregrounded.
- Retrato editorial (rare): hands, profiles, partial. Never face-front.

**Reject systematically:** dead animals as primary subject, blood, trophies as hero, bright outdoor-Americana saturation, camo or tactical gear, drone-real-estate atmosphere, influencer staging, group selfies, smiles to camera, vintage filters, sepia, branded apparel logos.

## 4. Motion

Minimal. Hover state: color shift in 250ms ease-out-quart. Underline reveal on links: width 0→100% in 250ms. Form field focus: hairline color and weight shift. **Never** animate layout properties. **No** entrance choreography in this build.

## 5. Slice inventory

8 slices, in order. Each documented in `src/slices/<Name>/`.

| # | Slice | Surface | Distinctive move |
|---|---|---|---|
| 1 | `Hero` | Image + Loden overlay | Wordmark top-left, single-line display headline, hairline scroll cue |
| 2 | `Manifiesto` | Hueso | Asymmetric statement, indented from left |
| 3 | `Modalidades` | Hueso | 3-col, 4:5 imagery, no cards |
| 4 | `Proceso` | **Loden (inverted)** | Numbered steps separated by hairlines |
| 5 | `Territorio` | Hueso | Full-bleed image, italic location label |
| 6 | `DetalleEditorial` | Hueso | Asymmetric 60/40 image+text, repeatable |
| 7 | `Confianza` | Hueso | Display statement + 3 pillars, generous breathing |
| 8 | `Contacto` | Hueso | Narrow form, hairline-only inputs |

The Proceso inversion (Loden surface, Hueso text) is intentional: it anchors the middle of the page and breaks monotone scroll rhythm without resorting to motion or color flourish.

## 6. Anti-patterns (rejection list)

If any of these appear, rewrite:

- Side-stripe accent borders.
- Gradient text or background-clip:text.
- Glassmorphism / blurred panels.
- Hero stat-blocks (big number + small label + supporting metric).
- Identical card grids with icon-heading-text.
- Modal-as-default.
- Em dashes (`—`) and `--` in copy. Use comma, colon, semicolon, period, parenthesis.
- Editorial drop caps + display italic + ruled separators (the Klim-fingerprint reflex).
- Decorative iconography of any kind.
- All-caps body copy.
- Branded-gear logos in imagery.
