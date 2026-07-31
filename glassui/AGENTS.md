# AGENTS — GlassUI

Guidance for any agent branding or extending the GlassUI blank.

## The three-material model

GlassUI fuses three materials. Know which one an element is before you style it:

| Material | Role | Utilities | Component |
|----------|------|-----------|-----------|
| **Clay** | substrate — rests beneath everything | `.clay` (raised), `.clay-inset` (sunk), `.clay-pressable` | (inline / `.clay`) |
| **Metal** | accent — buttons, badges, highlights | `.metal`, `.metal-brushed`, `.metal-pressable` | `MetalButton.tsx` |
| **Glass** | overlay — floats, refracts the backdrop | `.glass`, `.glass-pressable` | `GlassPanel.tsx` |

Composition rule of thumb: **clay holds, metal accents, glass floats.** A glass
panel can sit over a clay surface; a metal button can live inside either.

## What to keep (the identity)

Do not change without reason:
- The aurora backdrop on `body` — glass refracts it, metal reflects it. No glass
  without something vivid behind it.
- The three material recipes: clay surface gradient + pillowy shadows
  (`--clay-raised`/`--clay-pressed`), the 6-stop metal gradient, the glass
  `backdrop-filter` + rim + specular (`::before`/`::after`).
- Press-to-sink / press-to-dent interactions (`.clay-pressable`,
  `.metal-pressable`, `.glass-pressable`).
- Large rounded radii (`rounded-clay*`). No hard 1px borders on clay.
- The 3D transmission hero (`GlassHero.tsx`) — real `MeshTransmissionMaterial`.

## What to brand

- Wordmark + copy (`app/page.tsx`).
- Accent colors — swap `--c-warm` / metal stops / aurora blob hues. Keep the
  clay base and the glass white-sheen.
- Footer logo — `public/ae-logo-{black,white}.png` (black on light, white on
  dark). Replace with the client's mark, keep the light/dark pair swap.
- Fonts (layout.tsx) — rounded sans + display fit; keep terminals soft.

## Adding a component

Pick its material, then compose its utilities:
- **Clay surface:** `.clay` (raised) or `.clay-inset` (sunk); add
  `.clay-pressable` if interactive; `rounded-clay*`; no hard borders.
- **Metal:** start from `MetalButton` — `.metal` / `.metal-brushed` +
  `.metal-pressable`. Tweak gradient stops, not the structure.
- **Glass:** start from `GlassPanel` — `.glass` + `.glass-pressable`. It must
  sit over the aurora or another surface, or it has nothing to blur.

## Constraints

- `GlassHero` (three.js) is client-only — dynamically imported `ssr: false` in
  `app/page.tsx`. No env-map preset (loads an HDR from a CDN and can fail); the
  colored backplate + lights give the glass something to refract deterministically.
- Reduced motion is respected globally (`globals.css`). Don't bypass it.
- Dark mode flips via the `.dark` class on `<html>`; `ThemeToggle` persists it
  (`localStorage` key `glass-theme`).

## Footer convention (applies to every theme blank)

Every theme blank's footer follows the same structure — keep it when branding,
update it when adding a new theme:

1. **Themes row** — links to every sibling theme blank in the repo
   (`THEMES` in `app/page.tsx`). The current theme renders highlighted
   (`glass-text` here) with no self-link. Add a new theme to every blank's
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
