# Parts Clone — Bleibtgleich class

Single-designer portfolio blank (UX/UI Designer & Webflow Developer). Brutalist-editorial: warm paper ground, lowercase ultra-tight mega type, thin rule dividers, 12-col grid overlay, "truth" word-stagger reveals, project hover image-storm, "made with hate" sign-off.

- Live (parked): https://www.bleibtgleich.com
- Snapshot: `web/20260325021617` (HTML supplied end-user; webarchive was in outage + live domain parked)
- Source stack: Webflow + GSAP 3.12 + ScrollTrigger + Three.js + Lenis + Socket.io (approximated in-blank with framer-motion + CSS)

## Run

```bash
npm install --include=dev
env -u NODE_ENV npm run dev      # :3412  (design mode: ?design=1)
env -u NODE_ENV npm run build    # green-required before ship
```

## IA

| Path | Sections |
|------|----------|
| `/` | hero page-wrap (truth-top + big logo + blurred role field + truth-bot) · services (blurred discipline field + truth) · my vision (sticky truth + WebGL plate) · projects grid + hover storm · footer (drop a message / made with hate) |
| `/about` | lead statement + portrait · capabilities (what i do / what i love) · available · footer |

## Motion DNA (per component)

| Motion id | Component | Behavior |
|-----------|-----------|----------|
| `{%motion:hero-wrap%}` | `HeroWrap` | scale .01→1, rotate -48→0, blur 32em→0 (3s, once/session) |
| `{%motion:truth-reveal%}` | `TruthText` | word/letter split, random-stagger opacity (truth/long/symbol) |
| `{%motion:rule-x%}` / `{%motion:rule-y%}` | `Rule` | thin divider grow 3s / 8s |
| `{%motion:grid-overlay%}` | `GridOverlay` | fixed 12-col overlay, scaleX toggle (nav button) |
| `{%motion:project-storm%}` | `ProjectCard` | hover → floating stills at random positions, 500ms cycle |
| `{%motion:shuffle%}` | `useShuffle` | link/logo hover text scramble |
| `{%motion:webgl-distort%}` | vision plate | Three.js mouse-distort (documented; static placeholder in blank) |
| `{%motion:lenis%}` | `SmoothScroll.tsx` | soft wheel approx (duration 1.2, exp easing) |

## Image style prompts

Every `PartImage` carries a style-of-image placeholder (grade + role, never brand content). Toggle "style prompt" on empty zones, or read `IMAGE_STYLE` in `lib/work.ts`.

- visionBg — wide desaturated warm-paper environment, faint grain, single orange accent, chromatic-aberration energy
- projectStill — editorial design still, muted warm grade, 4:3
- encryptedMask — abstract negative-space mask, unreadable
- aboutPortrait — centered portrait, warm seamless backdrop
- footerField — wide atmospheric warm-paper still

## Branding

Strip source personal handles + client brands. Generic project slots only (mark sensitive cases `encrypted: true` in `lib/work.ts`). See `AGENTS.md`.
