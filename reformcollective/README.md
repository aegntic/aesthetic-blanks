# reformcollective

Isolated aesthetic blank — multi-page digital design agency wireframe.

**Source:** https://www.reformcollective.com/  
**Capture:** CloakBrowser full-depth (24 pages) + motion timeline, 2026-07-15  
**System:** `{%part%}` / `{%motion%}` agent-ready parts clone

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000  
Design mode: http://localhost:3000?design=1

## Pages

- `/` home
- `/work` index
- `/work/project-01` … `project-12` case studies
- `/about` capabilities + people + testimonials
- `/nova` studio accelerator program
- `/contact` multi-step intake form

## Key files

| File | Role |
|------|------|
| `PARTS_MANIFEST.json` | Machine map of every part |
| `AGENTS.md` | Branding instructions for agents |
| `lib/design-tokens.ts` | Palette, type, motion DNA |
| `lib/site-graph.ts` | IA + crawl depth |
| `lib/work.ts` | Case study slots |
| `components/parts/*` | PartText / PartImage / PartMotion / … |

## Notes

- Original brand, client names, Mux streams, and marketing copy stripped.
- Motion reconstructed with Framer Motion + CSS keyframes (not a pixel clone of GSAP timelines).
- Optional smooth-scroll: `data-smooth="1"` on `<html>`.
