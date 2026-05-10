# Migrations

One-shot scripts that seed Prismic content via the official Migration API.

## seed-landing.ts

Creates the `home` page document with all eight landing-page slices populated in castellano. Idempotent only if the destination repository has no existing `home` document; the script does not overwrite. To re-seed, archive the existing document in Prismic first.

### Required

| Var | Source | Notes |
|---|---|---|
| `PRISMIC_WRITE_TOKEN` | Prismic dashboard `Settings → API & Security → Permanent access tokens` | Must have **write** scope. |

### Optional

| Var | Default | Notes |
|---|---|---|
| `PRISMIC_LOCALE` | `es-es` | Document locale. Must exist in the repository (Prismic dashboard `Settings → Translations & Locales`). Override to `en-us` if the repo only has the default locale. |
| `NEXT_PUBLIC_PRISMIC_ENVIRONMENT` | — | Override the repository name from `slicemachine.config.json`. |

### Run

```bash
PRISMIC_WRITE_TOKEN=… npm run seed
```

If you see `InvalidDataError: The language you provided is invalid`, the repo doesn't have `es-es` configured. Either add Spanish (Spain) under Settings → Translations & Locales, or run with `PRISMIC_LOCALE=en-us npm run seed`.

Re-running is safe for assets — the Migration API matches by source URL and reuses already-uploaded media. It is **not** safe for documents: if `home` already exists, archive it in Prismic first or the second run will fail.

After it completes, open Prismic, review the draft, replace the placeholder Unsplash imagery with curated photography, and publish.

### Imagery

The script wires Unsplash placeholders that satisfy the brand spec's imagery direction (atmospheric, low-light, no people, no kill imagery, no influencer staging). They are placeholders. Before the site goes public, every image asset listed at the top of `seed-landing.ts` must be swapped for licensed photography that matches the spec's five families:

1. Paisaje
2. Detalle de material
3. Arquitectura e interiores
4. Acción (silhouette / from behind)
5. Retrato editorial (rare, partial)

### Email infrastructure (separate)

The `Contacto` slice posts to the server action at `src/app/actions/contact.ts`. That action validates input, logs the payload in dev, and currently returns success without dispatching mail. Wire a transactional provider (Resend, Postmark, AWS SES) before launch and add the corresponding env var to your hosting config.
