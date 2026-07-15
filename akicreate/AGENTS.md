# AGENTS.md — akicreate blank

## Source

- Inspiration: https://akicreate.com
- Capture: `_capture/akicreate/` (pages + `nuances.json`)
- Archetype: graphic designer portfolio
- Stack: Webflow + GSAP + ScrollTrigger + jQuery

## Quality bar

Match reformcollective / wondermakers:

1. Every meaningful text node is `PartText` with role, chunk size, tone, avoid, return-only.
2. Every media slot is `PartImage` with role description (not brand).
3. Motion types documented and wired (`mask` | `fade` | `stagger` | slider).
4. Multi-page IA complete (`/`, `/about`, `/work`, `/work/[slug]` × 6).
5. Build green: `npm install --include=dev && env -u NODE_ENV npm run build`.

## Rules

1. Strip original personal name, client brands, personal photos on rebrand.
2. Keep DNA: ※ center nav, dual edge rails, Tobias letter matrix, works slider, black talk footer, mint nominee badge role, about sky band.
3. Generic project slugs only (`project-01` … `project-06`).
4. `?design=1` overlays part IDs.

## Quick brand pass

1. Open `?design=1`
2. Replace letter-grid hot chars + all PartText previews via agent
3. Drop media into PartImage zones
4. Update `lib/work.ts` categories if needed
5. Build + ship
