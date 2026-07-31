# Nero — Veined Marble & Gold

> A premium animated theme blank. Polished nero marble veined with gold, didone serif, gallery restraint.

> **Design — Mattae Cooper, [aegntic.ai](https://aegntic.ai)**

The third material blank (after [`clayui`](../clayui) and [`glassui`](../glassui)).
Where those are soft/glassy, **Nero is luxury**: dark polished marble, gold foil
type, hairline rules, buttery smooth motion.

Built around the things that make a site feel premium:

- **Loading sequence** — a marble curtain holds while a gold counter climbs 0→100,
  then two slabs split to reveal the site (`components/Loader.tsx`).
- **Lenis smooth scroll** synced to the GSAP ticker — that weighted, eased glide.
- **GSAP ScrollTrigger** — parallax marble depth layers + scroll-reveals
  (`lib/useNeroMotion.ts`).
- **Gold foil text** — metallic gradient clip with shimmer (`app/globals.css`).
- **Didone type** — Playfair Display (display) + Jost (UI).

## Run

```bash
cd neroui
npm install
npm run dev    # http://localhost:3000
```

Build: `npm run build && npm start`.

## Stack

Next.js 15 (App Router) · React 19 · Tailwind 3.4 · GSAP + ScrollTrigger ·
Lenis (smooth scroll). No 3D — all motion is DOM/compositor (reliable, no GPU
driver drama).

## Structure

```
neroui/
├── app/
│   ├── layout.tsx       fonts (Playfair Display + Jost) + no-FOUC theme script
│   ├── globals.css      the marble/gold system: veining, gold foil, hairlines
│   └── page.tsx         showpiece — loader, parallax hero, reveals, footer
├── components/
│   ├── Loader.tsx       loading sequence (counter + curtain split)
│   └── ThemeToggle.tsx  dark luxury ↔ light "statuario" marble
├── lib/
│   ├── useNeroMotion.ts Lenis + ScrollTrigger: parallax + reveals
│   └── cn.ts            className merge
├── public/              aegntic.ai logo pair (white-on-dark / black-on-light)
└── tailwind.config.ts   marble/gold tokens + `light:` variant
```

## The material recipe

All in `app/globals.css` as CSS vars + utilities:

- **Marble veining** — layered SVG `<path>` gold veins over a deep stone radial
  gradient, fixed behind content + a slab variant (`.marble-slab`).
- **Gold foil** — `.gold-text` = metallic gradient `background-clip:text` +
  glow. Gold-edged buttons fill on hover (`.gold-btn`).
- **Hairlines** — `.hairline` gradient rule with a center gold diamond.
- **Type** — Playfair Display (didone, italic accents) + Jost (UI), uppercase
  tracked labels.

Palette: marble black `#0D0D0F`, cream `#F4F1EA`, gold `#C9A24A`, wine `#5E1A2B`.
Dark luxury is default; the `.light` class flips to a **statuario** (white
marble) alt.

## Motion

- `[data-parallax]` + `data-speed` → drifts on scroll (scrubbed).
- `[data-reveal]` → fade+rise when scrolled into view.
- `[data-hero]` → intro timeline plays once the loader lifts.

All motion honors `prefers-reduced-motion` (loader skips, reveals show).

## Footer convention

Follows the shared blank convention: sibling **Themes** row (ClayUI, GlassUI,
Nero highlighted), **Sites** row (aegntic.ai, socialskills.ninja, clawreform.com,
cldcde.cc, prompt.fail, karen.city, hlfstr.com), and a **centered aegntic.ai
logo** (white on dark, black on light). See `AGENTS.md`.

## Branding it

Unbranded blank. Swap the wordmark, copy, and accent color — the marble
geometry, gold foil, and motion stay the identity. See `AGENTS.md` / `APPLY.md`.
