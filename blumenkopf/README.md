# blumenkopf

Isolated aesthetic blank — editorial design-studio wireframe.

Reverse-engineered from `blumenkopf.spatzek.studio` via the
[website-parts-cloner](https://github.com/aegntic/aesthetic-blanks) skill (CloakBrowser
full-depth capture + `deep_nuance` pass-2). Brand assets and copy are stripped; every
text node is an agent-ready prompt, every image a drag-drop upload zone.

## DNA

- **Archetype** — editorial design studio. Light mode, Swiss-line-divided grid.
- **Palette** — paper `#E8EBEC`, ink `#000`, 3px solid black dividers everywhere, orange `#E67E22` marquee accent.
- **Type** — Suisse Intl (sans) + SangBleu OG (serif). Free fallbacks: Inter Tight + Newsreader via `next/font/google`.
- **Motion** — source had no GSAP/Lenis; all CSS + Vue transitions. Reconstructed: scroll-gated opacity reveal, Hooper carousel cross-fade, orange marquee, 3px line grow, wordmark masked wipe.
- **Signature** — oversized lowercase mixed-case wordmark + a self-aware orange "buy this website" marquee (the template advertises itself).

## Routes

| Route | Role |
|-------|------|
| `/` | redirects to `/home` |
| `/home` | hero wordmark + circular portrait + manifesto + selected work |
| `/about` | statement + studio portrait + capabilities + clients marquee |
| `/work` | 2-column case grid, 3px line dividers, 6 slots |
| `/work/[slug]` | case study: hero media + lede + body + gallery + next |
| `/imprint` | publisher / contact / credits / legal (European Impressum shape) |

## Run

```bash
npm install --include=dev
npm run dev          # http://localhost:3000 → /home
# design mode: http://localhost:3000/home?design=1
```

Build green:

```bash
env -u NODE_ENV npm run build
```

## Structure

```
app/                     Next.js App Router pages
  home/ about/ work/ work/[slug]/ imprint/
components/parts/        PartText, PartImage, PartMotion, PartSection, PartNav, PartFooter, WorkCard
lib/
  design-tokens.ts       captured palette + type + motion tokens
  site-graph.ts          IA + route graph
  work.ts                6 semantic case slots
PARTS_MANIFEST.json      tokens + motion + part inventory
AGENTS.md                rebrand guide
prompts/README.md        prompt-system index
```

See `AGENTS.md` to rebrand, `PARTS_MANIFEST.json` for the full token inventory.
