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
