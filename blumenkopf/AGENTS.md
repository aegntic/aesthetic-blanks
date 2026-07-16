# AGENTS.md — How to brand this parts clone

Source inspiration: https://blumenkopf.spatzek.studio/about (editorial design-studio template)
Stack: Next.js 15 App Router · TypeScript · Tailwind v3 · framer-motion · `{%part%}` system

## What this is

A self-contained Next.js wireframe reverse-engineered from the Blumenkopf editorial
studio template. Brand assets and marketing copy are stripped. Every text node is an
agent-ready `PartText` prompt; every image is a drag-drop `PartImage` upload zone.

## Rebrand in 4 steps

1. **Tokens** — edit `lib/design-tokens.ts` + the `:root` vars in `app/globals.css`
   and colors in `tailwind.config.ts`. Paper `#E8EBEC` / ink `#000` / 3px black lines
   / orange `#E67E22` accent are the captured palette; swap to [USER_PROJECT].
2. **Fonts** — `app/layout.tsx` loads Inter Tight (sans) + Newsreader (serif) as free
   fallbacks for the commercial originals (Suisse Intl / SangBleu OG). Point
   `--font-sans` / `--font-serif` at your own.
3. **Copy** — every `PartText` has an inline `prompt` (chunk size, tone, avoid-list)
   + a `previewText` placeholder. Run the prompts for [USER_PROJECT]; the `previewText`
   is what renders until a real value is supplied.
4. **Work data** — `lib/work.ts` holds 6 semantic case slots; replace slugs/categories/
   years/services. Routes `/work/[slug]` are generated from it.

## Part kit (`components/parts/`)

- `PartText` — text node. Props: `partId`, `as`, `className`, `prompt`, `previewText`, `href`.
- `PartImage` — drag-drop upload zone (image/video). Props: `partId`, `aspectRatio`, `objectFit`, `placeholder`.
- `PartMotion` — motion wrapper. `type`: `stagger|mask|fade|slide|marquee|parallax|custom`. `trigger`: `load|inView|scroll|hover`.
- `PartSection` — section shell with `data-part` + `data-label`.
- `PartNav` / `PartFooter` — shared chrome (menu overlay + orange "buy this website" marquee).
- `WorkCard` — case tile (4:3 media + title + category/year + services).

## Motion DNA

Source had **no** GSAP / Lenis / Framer — all motion was CSS + Vue transitions.
Reconstructed here as: scroll-gated opacity reveal (`gate-in`), Hooper carousel
cross-fade (`carousel-fade`), orange marquee (`marquee-x`), 3px line grow (`line-grow`),
wordmark masked wipe (`wordmark-in`). Keep it quiet; this is not a parallax site.

## Design mode

`?design=1` → outlines every `[data-part]` and shows its `{%part:…%}` id. Use it to
audit which nodes are prompt-ready.

## Build

```bash
npm install --include=dev
env -u NODE_ENV npm run build   # NODE_ENV=production in shell can break Next prerender
```
