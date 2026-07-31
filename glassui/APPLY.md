# APPLY — how to use GlassUI in another project

Handoff doc for any agent (or human). Where to find GlassUI and how to apply it.

## Where it lives

- **Repo:** https://github.com/aegntic/aesthetic-blanks
- **Path:** `glassui/`
- **Stack:** Next.js 15 (App Router) · React 19 · Tailwind 3.4 · framer-motion ·
  react-three-fiber + drei (3D transmission hero)
- **Identity:** three materials — clay substrate, metal accent, liquid-glass overlay.
  Sibling of `clayui/` (pure clay) and `materials/soft-clay/` (the material pack).

## Read these first (in order)

1. `glassui/AGENTS.md` — rules: which material an element is, what to keep vs brand.
2. `glassui/app/globals.css` — **the whole system**: the `body` aurora backdrop,
   `--c-*` RGB-channel palette vars, `.dark` overrides, and the three material
   utility groups (`.clay*`, `.metal*`, `.glass*`) plus typography
   (`.clay-text`, `.metal-text`, `.glass-text`).
3. `glassui/tailwind.config.ts` — clay color tokens
   (`rgb(var(--c-*) / <alpha-value>)`), `rounded-clay*`, shadows, gradients.
   `darkMode: "class"`.
4. `glassui/components/{GlassHero,GlassPanel,MetalButton,ThemeToggle}.tsx`.
5. `glassui/app/layout.tsx` — fonts (Nunito + Baloo 2) + no-FOUC theme script.
6. `glassui/app/page.tsx` — the three-materials demo + stacked composition.

## Two ways to apply

### A) Use it as a starter (new project)
Sparse-checkout the blank and brand it:
```bash
git clone --filter=blob:none --sparse https://github.com/aegntic/aesthetic-blanks.git
cd aesthetic-blanks && git sparse-checkout set glassui
cd glassui && npm install && npm run dev
```
Then swap wordmark, copy, accent colors, and the footer logo.

### B) Port the system into an existing Next/React + Tailwind project
1. **Globals:** copy the `body` aurora, the `:root` + `.dark` channel vars, and the
   `.clay*` / `.metal*` / `.glass*` / `-text` utilities from `app/globals.css`.
   (The aurora is load-bearing — glass needs it to refract.)
2. **Tailwind:** set `darkMode: "class"`; map `clay.*` colors to
   `rgb(var(--c-*) / <alpha-value>)`; add `rounded-clay*` + the shadows/gradients.
3. **Fonts:** load Nunito + Baloo 2 (or a rounded pair) into
   `--font-sans`/`--font-display`.
4. **Components:** drop in `GlassPanel.tsx`, `MetalButton.tsx`, `ThemeToggle.tsx`,
   and the no-FOUC `<script>` from `layout.tsx`.
5. **Restyle your UI** by material:
   - Clay (substrate): `.clay` (raised), `.clay-inset` (fields/active/pressed),
     `.clay-pressable` (press-to-sink).
   - Metal (accent): `.metal` / `.metal-brushed` + `.metal-pressable` for buttons.
   - Glass (overlay): `.glass` + `.glass-pressable` over the aurora/clay.
   - Headings: `.clay-text` / `.metal-text` / `.glass-text`.
6. **3D hero (optional):** `npm i three @react-three/fiber @react-three/drei`,
   copy `GlassHero.tsx`, render client-only (`dynamic(..., { ssr:false })`).

## Keep vs brand

- **Keep (the identity):** the aurora backdrop, the three material recipes
  (clay gradient + pillowy shadows, the 6-stop metal gradient, the glass
  `backdrop-filter` + rim + specular), `rounded-clay*`, the three press
  interactions, the transmission hero material params. No hard borders on clay.
- **Brand:** wordmark, copy, accent colors (`--c-warm`, metal stops, aurora hues),
  footer logo, fonts (keep terminals soft/rounded).

## Gotchas

- **Glass needs a backdrop.** `.glass` only looks like glass when something vivid
  sits behind it — that's why `body` paints the aurora. A glass panel over a flat
  white surface reads as plain fog.
- `GlassHero` (three.js) **must stay client-only** (`ssr: false`). It uses no
  env-map preset (CDN HDR can fail offline) — the in-canvas colored backplate is
  what the transmission shader refracts.
- Reduced motion is respected globally — don't bypass it.
- Dark mode flips via `.dark` on `<html>`; `ThemeToggle` persists it
  (`localStorage` key `glass-theme`).
- Footer logo is a light/dark pair swapped with `dark:hidden` / `hidden dark:block`.

## Ready-to-paste agent prompt

> Apply the GlassUI fusion theme (clay · metal · liquid glass) from the
> `glassui` blank (https://github.com/aegntic/aesthetic-blanks → `glassui/`) to my
> project. First read `glassui/APPLY.md`, `glassui/AGENTS.md`,
> `glassui/app/globals.css`, and `glassui/tailwind.config.ts`. Then port the
> system into my app: copy the body aurora backdrop, the `--c-*` palette channel
> vars, the `.dark` overrides, and the `.clay*` / `.metal*` / `.glass*` /
> `-text` utilities into my global stylesheet; set `darkMode:"class"` and map my
> Tailwind clay colors to `rgb(var(--c-*) / <alpha-value>)` with `rounded-clay*`
> and the shadows; add Nunito + Baloo 2 fonts; drop in `GlassPanel`, `MetalButton`,
> `ThemeToggle`, and the no-FOUC theme script. Restyle my UI by material: clay
> surfaces (`.clay`/`.clay-inset`/`.clay-pressable`), metal accents
> (`.metal`/`.metal-brushed`), glass overlays (`.glass`) sitting over the aurora.
> Keep the three-material geometry and the aurora backdrop; only rebrand the
> wordmark, copy, accent colors, and footer logo. Tell me if my project is not
> Next/React+Tailwind so we can adapt.
