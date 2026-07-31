# AGENTS — Nero

Guidance for any agent branding or extending the Nero blank.

## What Nero is

A premium **animated** marble-and-gold blank. Three load-bearing systems — keep
them intact when branding:

| System | Where | Role |
|--------|-------|------|
| Loading sequence | `components/Loader.tsx` | counter + marble curtain split → reveals site |
| Smooth scroll + parallax + reveals | `lib/useNeroMotion.ts` | Lenis (synced to GSAP ticker) + ScrollTrigger |
| Material (marble/gold) | `app/globals.css` | veining, gold foil, hairlines, didone type |

## What to keep (the identity)

- The loader sequence + Lenis smooth scroll — these are the "premium feel".
- Marble veining (SVG) + gold foil (`.gold-text`) + hairlines (`.hairline`).
- Didone display (Playfair) + the uppercase tracked UI labels.
- Motion hooks: `[data-parallax]`, `[data-reveal]`, `[data-hero]`.
- Dark luxury default + `.light` statuario alt.

## What to brand

- Wordmark + copy (`app/page.tsx`).
- Accent color (swap `--gold` / vein stroke) — keep the marble base.
- Fonts (`layout.tsx`) — keep a didone display + a clean UI sans.
- Footer logo (`public/ae-logo-{black,white}.png`).

## Footer convention (applies to every theme blank)

1. **Themes row** — links sibling blanks (ClayUI, GlassUI); current (Nero)
   highlighted (`gold-text`), no self-link.
2. **Sites row** — shared brand set: aegntic.ai, socialskills.ninja,
   clawreform.com, cldcde.cc, prompt.fail, karen.city, hlfstr.com.
3. **Centered aegntic.ai logo** at the bottom — white on dark / black on light
   (`light:hidden` / `hidden light:block`).

All external links: `target="_blank" rel="noopener noreferrer"`.

## Adding a section

Give it `data-reveal` (fade+rise on scroll). Add `data-parallax data-speed="…"`
to a background layer for depth (speed < 1 drifts slower). Start big reveals
inside an `overflow-hidden` clip.

## Constraints

- No 3D. All motion is GSAP/Lenis on DOM — reliable, no GPU-driver issues.
- Motion must honor `prefers-reduced-motion` (both the loader and the motion
  hook already do).
- `.light` is the alt theme, not `.dark` — the `light:` Tailwind variant targets
  elements inside `.light`.

## Credit

Design — Mattae Cooper ([aegntic.ai](https://aegntic.ai)).
