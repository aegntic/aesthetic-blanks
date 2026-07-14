# lorikeetcx

Isolated aesthetic blank — multi-page AI CX concierge platform.

**Source:** https://www.lorikeetcx.ai/  
**Capture:** CloakBrowser full-depth (45 pages) + scroll motion timeline  
**Motion:** Framer/Lenis DNA — status chips, metrics, workflow nodes, ticket stacks

## Run

```bash
# if NODE_ENV=production in shell, force dev deps:
npm install --include=dev
npm run dev
```

Design mode: `?design=1`

## Routes

- `/` home (scroll-heavy)
- `/product` · `/product/coach`
- `/pricing` · `/integrations`
- `/customer-stories` · `/customer-stories/story-01…08`
- `/about` · `/faq` · `/get-a-demo`

## Key files

| File | Role |
|------|------|
| `PARTS_MANIFEST.json` | Parts + motion map |
| `AGENTS.md` | Branding rules |
| `lib/design-tokens.ts` | Palette + scroll DNA |
| `lib/site-graph.ts` | IA |
| `lib/content.ts` | Stories + integrations |
