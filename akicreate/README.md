# Parts Clone — Aki Create class

Graphic design portfolio blank. Source: https://akicreate.com (Awwwards nominee).

Stack measured: **Webflow + GSAP 3.12 + ScrollTrigger + jQuery**.

## Run

```bash
npm install --include=dev
env -u NODE_ENV npm run dev   # :3411
# design mode: ?design=1
env -u NODE_ENV npm run build
```

## IA

| Path | Role |
|------|------|
| `/` | Letter-matrix hero · dual rails · featured works **slider** (3 dots) · black talk footer |
| `/about` | Letter hero · rails · sky bio band (`#72a1c8`) · portrait · footer |
| `/work` | Works index grid |
| `/work/[slug]` | 6 generic cases · meta · 01/02/03 tinted dual media · next/prev |

## Motion DNA

- `{%motion:letter-grid%}` — load fade (Tobias matrix)
- `{%motion:mask-reveal%}` — vertical wipe (GSAP-adjacent)
- `{%motion:works-slider%}` — Webflow slider pairs
- `{%motion:section-fade%}` / fade / stagger

## Tokens

See `lib/design-tokens.ts`. Hot letters `#313131` Tobias 43px. Body PP Neue Montreal 16/24. About `#72a1c8`.

## Branding

All copy is prompt-ready `PartText`. Images are `PartImage` drop zones. No source brand assets.
