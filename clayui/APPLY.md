# APPLY — how to use ClayUI in another project

Handoff doc for any agent (or human). Where to find ClayUI and how to apply it.

## Where it lives

- **Repo:** https://github.com/aegntic/aesthetic-blanks
- **Path:** `clayui/`
- **Stack:** Next.js 15 (App Router) · React 19 · Tailwind 3.4 · framer-motion ·
  react-three-fiber + drei (3D hero)
- **Identity source:** the material pack in `materials/soft-clay/` (palette +
  validated renders). ClayUI is its web form.

## Read these first (in order)

1. `clayui/AGENTS.md` — rules: what to keep (the clay identity) vs brand.
2. `clayui/app/globals.css` — **the whole system**: `--c-*` RGB-channel palette
   vars, `.dark` overrides, and the utilities `.clay`, `.clay-inset`,
   `.clay-pressable`, `.clay-dark`, `.clay-gradient`, `.clay-text` (raised
   headings), `.clay-text-carved` (engraved button text).
3. `clayui/tailwind.config.ts` — clay color tokens (`rgb(var(--c-*) / <alpha-value>)`),
   `rounded-clay*`, `shadow-raised/pressed`, gradients. `darkMode: "class"`.
4. `clayui/components/Clay*.tsx` — `ClayButton`, `ClayCard`, `ClayInput`,
   `ClayToggle`, `ClayNav`, `ClayHero` (3D), `ThemeToggle`.
5. `clayui/app/layout.tsx` — fonts (Nunito + Baloo 2) + no-FOUC theme script.
6. `clayui/app/page.tsx` — the "everything is clay" demo (copy the patterns).

## Two ways to apply

### A) Use it as a starter (new project)
Sparse-checkout the blank and brand it:
```bash
git clone --filter=blob:none --sparse https://github.com/aegntic/aesthetic-blanks.git
cd aesthetic-blanks && git sparse-checkout set clayui
cd clayui && npm install && npm run dev
```
Then swap wordmark, copy, and accent color — keep the clay geometry.

### B) Port the clay system into an existing Next/React + Tailwind project
1. **Globals:** copy the `:root` + `.dark` channel vars and the
   `.clay*` / `.clay-text*` utilities from `app/globals.css` into your global css.
2. **Tailwind:** set `darkMode: "class"`; map your `clay.*` colors to
   `rgb(var(--c-*) / <alpha-value>)`; add `rounded-clay*` + the clay shadows/gradients.
3. **Fonts:** load Nunito + Baloo 2 (or any rounded pair) into `--font-sans`/`--font-display`.
4. **Components:** drop in `Clay*.tsx` + `ThemeToggle.tsx`; add the no-FOUC
   `<script>` from `layout.tsx`.
5. **Restyle your UI** to use `.clay` (raised surface), `.clay-inset` (fields,
   active, pressed), `.clay-pressable` (interactive → sink on press),
   `.clay-text` (headings), `.clay-text-carved` (button text).
6. **3D hero (optional):** `npm i three @react-three/fiber @react-three/drei`,
   copy `ClayHero.tsx`, render it client-only (`dynamic(..., { ssr:false })`).

## Keep vs brand

- **Keep (the identity):** matte clay surface gradient, pillowy
  `--clay-raised`/`--clay-pressed` shadows, large `rounded-clay*`, press-to-sink,
  the 3D blob material params. Don't add hard 1px borders or arbitrary shadows.
- **Brand:** wordmark, copy, accent color (swap `--c-warm` or gradient stops),
  fonts (keep terminals rounded/soft).

## Gotchas

- `.clay-text-carved` is a text-shadow → **sub-pixel / invisible on light matte
  clay** at web font scale. Use it on `.clay-dark` / `.clay-gradient` buttons or
  in dark mode, where it reads. For an unmistakable carve on light clay use SVG
  `feSpecularLighting` (heavier).
- `ClayHero` (three.js) **must stay client-only** (`ssr: false`).
- Reduced motion is respected globally — don't bypass it.
- Dark mode flips via the `.dark` class on `<html>`; the `ThemeToggle` persists it.

## Ready-to-paste agent prompt

> Apply the Soft Industrial Clay theme from the `clayui` blank
> (https://github.com/aegntic/aesthetic-blanks → `clayui/`) to my project.
> First read `clayui/APPLY.md`, `clayui/AGENTS.md`, `clayui/app/globals.css`,
> and `clayui/tailwind.config.ts`. Then port the clay system into my app:
> copy the `--c-*` palette channel vars, the `.dark` overrides, and the `.clay*` /
> `.clay-text*` utilities into my global stylesheet; set `darkMode:"class"` and map
> my Tailwind clay colors to `rgb(var(--c-*) / <alpha-value>)` with `rounded-clay*`
> and the clay shadows; add Nunito + Baloo 2 fonts; drop in `ClayButton`,
> `ClayCard`, `ClayInput`, `ClayToggle`, `ClayNav`, `ThemeToggle`, and the no-FOUC
> theme script. Restyle my existing UI primitives to use `.clay`, `.clay-inset`,
> `.clay-pressable`, `.clay-text`, and `.clay-text-carved`. Keep the clay geometry
> (surfaces, pillowy shadows, rounded forms, press-to-sink); only rebrand the
> wordmark, copy, and accent color. Tell me if my project is not Next/React+Tailwind
> so we can adapt.
