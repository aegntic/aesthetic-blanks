# APPLY — how to use Nero in another project

Handoff doc for any agent (or human). Where to find Nero and how to apply it.

## Where it lives

- **Repo:** https://github.com/aegntic/aesthetic-blanks
- **Path:** `neroui/`
- **Stack:** Next.js 15 (App Router) · React 19 · Tailwind 3.4 · GSAP +
  ScrollTrigger · Lenis (smooth scroll)
- **Identity:** veined marble & gold, didone serif, loading sequence + parallax.
  Sibling of `clayui/` (soft matte clay) and `glassui/` (clay/metal/glass).

## Read these first (in order)

1. `neroui/AGENTS.md` — the three load-bearing systems, keep vs brand.
2. `neroui/app/globals.css` — the material: marble veining, gold foil
   (`.gold-text`), hairlines, didone type, `.light` statuario alt.
3. `neroui/tailwind.config.ts` — marble/gold tokens + `light:` variant.
4. `neroui/lib/useNeroMotion.ts` — Lenis + ScrollTrigger; the `data-parallax` /
   `data-reveal` hooks.
5. `neroui/components/Loader.tsx` — the loading sequence.
6. `neroui/app/layout.tsx` — fonts (Playfair Display + Jost) + no-FOUC script.
7. `neroui/app/page.tsx` — the showpiece (hero, sections, footer).

## Two ways to apply

### A) Use it as a starter (new project)
```bash
git clone --filter=blob:none --sparse https://github.com/aegntic/aesthetic-blanks.git
cd aesthetic-blanks && git sparse-checkout set neroui
cd neroui && npm install && npm run dev
```
Then swap wordmark, copy, accent, and footer logo.

### B) Port the motion + material into an existing Next/React + Tailwind project
1. **Deps:** `npm i gsap lenis`.
2. **Globals:** copy the marble/gold vars, veining SVG, `.gold-text`, `.hairline`,
   `.marble-slab`, `.gold-btn` from `app/globals.css`.
3. **Tailwind:** add the marble/gold tokens + a `light` variant
   (`addVariant("light", ".light &")`); map fonts to `--font-display`/`--font-sans`.
4. **Fonts:** load Playfair Display + Jost.
5. **Motion:** drop in `lib/useNeroMotion.ts` (Lenis + ScrollTrigger) and call
   `useNeroMotion(true)` once mounted. Add `data-parallax` / `data-reveal` /
   `data-hero` to elements.
6. **Loader:** drop in `components/Loader.tsx`; gate content behind it.
7. **Restyle** surfaces to `.marble-slab`, headings to `.gold-text`/didone,
   rules to `.hairline`, CTAs to `.gold-btn`.

## Keep vs brand

- **Keep:** the loader, Lenis smooth scroll, ScrollTrigger parallax + reveals,
  marble veining, gold foil, didone display, `prefers-reduced-motion` handling.
- **Brand:** wordmark, copy, accent color (`--gold`), footer logo, fonts
  (keep a didone + a clean UI sans).

## Gotchas

- **`.light` is the alt theme**, not `.dark`. Use the `light:` variant for
  light-mode overrides; default is dark luxury.
- **Lenis owns smooth scroll** — set `html { scroll-behavior: auto }` (already
  done) so Lenis and CSS don't fight.
- **No 3D** — all motion is GSAP/Lenis on the DOM. Reliable; no GPU-driver
  concerns (unlike a three.js hero on finicky GPUs).
- Motion honors `prefers-reduced-motion` — don't bypass it.
- Footer logo is a light/dark pair swapped with `light:hidden` / `hidden light:block`.

## Ready-to-paste agent prompt

> Apply the Nero theme (veined marble & gold, premium animated) from the `neroui`
> blank (https://github.com/aegntic/aesthetic-blanks → `neroui/`) to my project.
> First read `neroui/APPLY.md`, `neroui/AGENTS.md`, `neroui/app/globals.css`, and
> `neroui/lib/useNeroMotion.ts`. Then port it: install `gsap` + `lenis`; copy the
> marble/gold vars, veining, `.gold-text`, `.hairline`, `.marble-slab`, `.gold-btn`
> into my global stylesheet; add marble/gold tokens + a `light` Tailwind variant;
> load Playfair Display + Jost; drop in `useNeroMotion.ts` (Lenis + ScrollTrigger)
> and `Loader.tsx`, gating content behind the loader; mark elements with
> `data-parallax`/`data-reveal`/`data-hero`. Keep the marble geometry, gold foil,
> loader, and smooth-scroll motion; only rebrand the wordmark, copy, accent color,
> and footer logo. Tell me if my project is not Next/React+Tailwind so we can adapt.
