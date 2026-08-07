# AGENTS.md — bleibtgleich blank

## Source

- Live (parked): https://www.bleibtgleich.com — **GoDaddy Auctions, do not crawl**
- Snapshot: https://web.archive.org/web/20260325021617/https://www.bleibtgleich.com/
- Capture: snapshot HTML supplied by end-user (webarchive served 500/503 to the crawler IP; the live domain is parked). Stack + IA + motion reverse-engineered from that HTML.
- Archetype: single-designer portfolio (Kyiv) — UX/UI Designer & Webflow Developer.
- Stack: **Webflow + GSAP 3.12 + ScrollTrigger + Three.js (r79) + Lenis 0.2.28 + Socket.io**.

## Rules

1. No source personal handles / client brands in live copy (`hi.bleibtgleich@gmail.com`, `t.me/lecordonbleu`, `linkedin.com/in/bleibtgleich`, "instagallery", etc.) — stripped to `[USER_PROJECT]` slots.
2. Keep the DNA: warm paper ground · lowercase ultra-tight mega type · thin rule dividers that grow · 12-col grid overlay toggle · "truth" word-stagger reveals · project hover image-storm · "made with hate" sign-off.
3. Every `PartImage` keeps its **style-of-image** placeholder (grade + role, never brand content).
4. Motion is **framer-motion approximating GSAP** — faithful in intent, not pixel timing. Document the approximation; do not claim identical timelines.
5. `?design=1` overlays part IDs.

## Build

```bash
npm install --include=dev
env -u NODE_ENV npm run build   # green-required before ship
env -u NODE_ENV npm run dev     # :3412
```

## Component map

| Component | Parts | Motion |
|-----------|-------|--------|
| `GridOverlay` | `{%part:grid-overlay%}` (fixed 12-col) | `{%motion:grid-overlay%}` scaleX toggle (nav button dispatches `bg-grid-toggle`) |
| `PartNav` | `{%part:nav-primary%}`, logo shuffle, grid toggle, about, socials (in/tg/mail) | `{%motion:shuffle%}` (logo) |
| `HeroWrap` | `{%part:hero-page-wrap%}` | `{%motion:hero-wrap%}` scale/rotate/blur-in, once/session |
| Hero | truth-top + big logo + blurred bg role field + truth-bot | `{%motion:truth-reveal%}`, rules |
| Services | blurred discipline field + truth heading + long-truth + marks | `{%motion:truth-reveal%}` |
| My vision | sticky truth + WebGL plate (static placeholder) | `{%motion:truth-reveal%}`, `{%motion:webgl-distort%}` (documented) |
| `ProjectCard` | cover + label + hover storm | `{%motion:project-storm%}` floating stills |
| `Rule` | thin x/y dividers | `{%motion:rule-x%}` / `{%motion:rule-y%}` |
| `PartFooter` | "drop a message" blurred field + CTA + telegram/mail + "made with hate" | `{%motion:truth-reveal%}`, `{%motion:shuffle%}` |

## Honesty notes (per-component motion)

| Source (GSAP/Three) | Blank approximation |
|---|---|
| `.page-wrap` scale .01→1 / rotate -48deg / blur 32em → 0, power4.inOut 3s | `HeroWrap` framer-motion 3s ease [0.16,1,0.3,1], sessionStorage-gated |
| `.truth/.long-truth/.symbol-truth` word-split `stagger:{from:"random"}` | `TruthText` per-unit `Math.random()*each` opacity delay |
| horizontal rule width 0→100% 3s; vertical rule height 0→100% 8s | `Rule` + CSS keyframes (`.rule-x/.rule-y` + `.is-in`) |
| `.general-grids` 12-col scaleX toggle | `GridOverlay` fixed overlay + CustomEvent toggle + localStorage |
| project hover `.one-project-hover-image` storm (10 stills @ 500ms) | `ProjectCard` storm capped at 4 styled stills for portability |
| Three.js mouse-data-texture distort + chromatic aberration + orange tint | **static `PartImage` placeholder + note** — re-introduce shader on brand pass |
| `.shuffle` text scramble on hover | `useShuffle` hook (2 iterations @ 80ms) |
| `::selection` cycles #DED7D8 ↔ #ff0000 @ 450ms | CSS keyframe `bg-cycle` (desktop only) |
| Socket.io remote cursors + console `/msg` edits | **omitted** (social gimmick, not layout) |

## Quick brand pass

1. `?design=1` — map `{%part%}` / `{%motion%}`.
2. Replace wordmark + every `PartText` / `TruthText` (prompts preserved).
3. Drop media using each `PartImage` style placeholder (`IMAGE_STYLE` bank in `lib/work.ts`).
4. Edit `lib/work.ts`: `PROJECTS` (real vs `encrypted` slots), `SERVICES`, `CAPABILITIES`.
5. (Optional) wire real GSAP + Three.js + Lenis for pixel-true motion; swap `SmoothScroll.tsx` for `lenis`.
6. `env -u NODE_ENV npm run build` → green → ship.
