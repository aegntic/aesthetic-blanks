# AGENTS.md — How to brand this parts clone

Source inspiration: https://www.wondermakers.digital/ (high-end digital product studio)
Captured: 2026-07-15 via CloakBrowser full-depth crawl (29 pages) + motion timeline.
Generated for `aegntic/aesthetic-blanks`.

## What this is

Multi-page semantic wireframe of a senior-led digital product studio:

- Split/duplicated headline reveals (HIGH-END DESIGN. / CRAFTED CODE.)
- Light / dark theme toggle
- Fluid clamp type system (hero ~126px, mega titles up to ~240px)
- Featured work + full work index + case studies
- Deep services IA (pillars, service blocks, process, engagement models)
- About: stats, mission, team carousel slots, value posters
- Full-screen black collab footer with form
- Marquee sectors, awards mega type, FAQ
- Zero original brand assets, client names, or marketing copy

## Site map

| Path | Purpose |
|------|---------|
| `/` | Split hero, awards strip, featured work, what we build, services teaser, edge, stats, FAQ, footer |
| `/work` | Global work hero, sector marquee, grid, awards, games CTA |
| `/services` | Full-stack expertise, pillars with tabs, service list, process, engagement, testimonials |
| `/about` | People behind craft, stats, mission, team, values, careers |
| `/case-studies/[slug]` | Context, meta, concept, media grid, quote, outcome (12 slots) |

## Motion DNA (captured)

| Preset | Source signal | Reconstruction |
|--------|---------------|----------------|
| `{%motion:split-headline%}` | Duplicated h1 lines + opacity 0→1 on enter | `PartMotion type="split"` overflow mask + y 110%→0 |
| `{%motion:marquee%}` | `@keyframes marquee { translate3d(-100%) }` | CSS `animate-marquee` |
| `{%motion:hello-in%}` / out | `@keyframes hello-in/out` opacity | Fade companions on theme/page enter |
| `{%motion:mega-type%}` | ~240px section titles with scroll gate | `type="mega"` fade + y |
| `{%motion:section-gate%}` | Sections opacity 0 until visible; some translateY | `type="gate"` / `fade` |
| `{%motion:theme-swap%}` | Light/Dark buttons | `documentElement.classList dark` |
| `{%motion:swiper-carousel%}` | Swiper on team/testimonials/awards | Static grids (swap for Swiper when branding) |
| WebGL canvas | Home decorative canvas | Optional; not required for wireframe |

Ease captured: `cubic-bezier(0.2, 0.6, 0.35, 1)` and `cubic-bezier(0.8, 0, 0.2, 1)`.

## Editing rules for agents

1. **Images / Video** — upload zones only. Never hardcode original Astro media hashes or client frames.
2. **Text** — execute each `PartText` prompt; preserve chunk size and uppercase display conventions.
3. **Motion** — prefer duration/stagger tweaks over rewriting systems. Respect `prefers-reduced-motion`.
4. **Structure** — keep primary routes; rebrand `lib/work.ts` slots for portfolio mapping.
5. **Design mode** — `?design=1` overlays part IDs.
6. **Theme** — light is default; dark via nav toggle.

## Quick brand pass

```
Context: [paste studio brief]
1. Run PartText prompts; replace previewText.
2. Upload work stills for featured + grid + cases.
3. Fill case narratives for priority projects.
4. Swap team portraits + roles.
5. Wire footer form + real contact details.
6. Optional: restore real codec-pro / brand face via next/font.
```

## Compounding

Reusable: split dual-line heroes, services pillar tabs, mega type section titles, black collab footer, light/dark studio chrome.
