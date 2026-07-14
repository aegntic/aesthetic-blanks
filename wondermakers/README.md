# wondermakers

Isolated aesthetic blank — multi-page high-end digital product studio.

**Source:** https://www.wondermakers.digital/  
**Capture:** CloakBrowser full-depth (29 pages) + motion timeline, 2026-07-15  
**System:** `{%part%}` / `{%motion%}` agent-ready parts clone

## Run

```bash
npm install
npm run dev
```

Design mode: `?design=1` · Theme: Light/Dark in nav

## Pages

- `/` home (split hero, work, build pillars, edge, stats, FAQ)
- `/work` index + awards + games CTA
- `/services` deep services + process + engagement + testimonials
- `/about` team + values + mission
- `/case-studies/project-01` … `project-12`

## Key files

| File | Role |
|------|------|
| `PARTS_MANIFEST.json` | Machine map of parts + motion |
| `AGENTS.md` | Branding instructions |
| `lib/design-tokens.ts` | Palette, fluid type, motion DNA |
| `lib/site-graph.ts` | IA + crawl depth |
| `lib/work.ts` | Case study slots |

## Motion highlights

- Split headline masks (`type="split"`)
- Marquee sectors
- Mega type section titles (~clamp to 15rem)
- Light/dark theme
- Section enter fades / gates
