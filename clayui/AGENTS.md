# AGENTS — ClayUI

Guidance for any agent branding or extending the ClayUI blank.

## What to keep (the tactile identity)

The clay *geometry* is the identity. Do not change these without reason:
- Matte clay surface gradient + pillowy soft shadows (`--clay-raised`, `.clay`).
- Sunk-in clay (`--clay-pressed`, `.clay-inset`) for fields/active/pressed.
- Press-to-sink interaction (`.clay-pressable`).
- Large rounded radii (`rounded-clay*`).
- The 3D clay hero (`ClayHero.tsx`) — matte clay material params mirror the
  validated Blender render in `../materials/soft-clay/visual/pbr.json`.

## What to brand

- Wordmark + copy (`app/page.tsx`).
- Accent color (swap `clay-warm` / the gradient stops) — keep the matte-clay base.
- Fonts (layout.tsx) — rounded sans + rounded display fit clay; if you change,
  keep terminals soft.

## Adding a component

Make it clay: compose `.clay` (raised) or `.clay-inset` (sunk), add
`.clay-pressable` if interactive, use `rounded-clay*`, and never use a hard
border. Shadows come from the clay tokens, not arbitrary Tailwind shadow values.

## Constraints

- `ClayHero` (three.js) must stay client-only — it is dynamically imported with
  `ssr: false` in `app/page.tsx`.
- Reduced motion is respected globally (`globals.css`). Don't bypass it.

## Footer convention (applies to every theme blank)

Every theme blank's footer follows the same structure — keep it when branding,
update it when adding a new theme:

1. **Themes row** — links to every sibling theme blank in the repo
   (`THEMES` in `app/page.tsx`). The current theme renders highlighted
   (`clay-text` here) with no self-link. Add a new theme to every blank's
   `THEMES` list when one ships.
2. **Sites row** — the shared brand link set (`SITES`): aegntic.ai,
   socialskills.ninja, clawreform.com, cldcde.cc, prompt.fail, karen.city,
   hlfstr.com. Same set on every theme.
3. **Centered aegntic.ai logo** at the very bottom — `public/ae-logo-{black,white}.png`,
   black on light / white on dark (`dark:hidden` / `hidden dark:block`), with
   the design credit beneath.

All external links use `target="_blank" rel="noopener noreferrer"`.

## Credit

Design — Mattae Cooper ([aegntic.ai](https://aegntic.ai)).
