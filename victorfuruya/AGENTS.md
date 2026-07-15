# AGENTS.md — victorfuruya blank

## Source

- https://victorfuruya.com
- Capture: `_capture/victorfuruya/` + `nuances.json`
- Archetype: multidisciplinary designer / art director portfolio
- Stack: Vite SPA, **Satoshi**, Lenis-class scroll, letter-split headlines, full-bleed work slider

## Rules

1. No original personal name or client brands in live copy.
2. Keep DNA: black hero plate, B&W portrait bleed, mega menu, carve-into-memory triad, work index numbers.
3. Every media slot keeps its **image style prompt** (role + photographic grade).
4. Motion: use `scale` | `split` | `mega` | `fade` | `stagger` | `gate` — document honesty of approximation.
5. `?design=1` overlays part IDs.
6. Build: `npm install --include=dev && env -u NODE_ENV npm run build`

## Component map

| Component | Parts | Motion |
|-----------|-------|--------|
| Nav | `{%part:nav-primary%}`, menu overlay mega links, socials | `{%motion:menu-mega%}` |
| Hero | portrait + plate role/title/year + scroll cue | `{%motion:hero-scale%}`, `{%motion:letter-split-hero%}` |
| Manifesto | 4 type lines + 3 sticky preview images | stagger + sticky layout |
| Who/Drives | two columns | fade |
| Work slider | title, discipline, index, cover image, prev/next | per-slide fade |
| Carve memory | left/mid/right type + portrait | split |
| Focus | 4 mega disciplines | stagger |
| Values | body paragraph | fade |
| Footer | bleed image + CTA + socials | fade |

## Quick brand pass

1. `?design=1`
2. Replace name mark + all PartText
3. Drop media using style prompts on each PartImage
4. Adjust `lib/work.ts` disciplines
5. Build + ship
