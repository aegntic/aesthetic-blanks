# AGENTS.md — How to brand this parts clone

Source inspiration: https://www.reformcollective.com/ (digital design agency)
Captured: 2026-07-15 via CloakBrowser full-depth crawl (24 pages) + motion timeline.
Generated for `aegntic/aesthetic-blanks`.

## What this is

A multi-page semantic wireframe of a high-craft digital design agency:

- Paper/ink editorial palette with red accent
- Full-screen menu overlay (not a simple top nav)
- Featured work + full work index + case study template
- About: marquee motto, massive capability type, people, testimonials
- Studio program / equity-for-design page (Nova pattern)
- Multi-step contact form (services → budget → details)
- Reverse-engineered motion: mask reveals, marquee, Lenis-adjacent smooth scroll hooks
- Zero original brand assets or marketing copy remain

## Site map

| Path | Purpose |
|------|---------|
| `/` | Hero mantra + featured work + manifesto + program CTA |
| `/work` | Full work grid |
| `/work/[slug]` | Case study template (12 static slugs) |
| `/about` | Capabilities, people, testimonials |
| `/nova` | Equity / accelerator program |
| `/contact` | Book-a-call multi-step form |

## Editing rules for agents

1. **Images / Video**  
   Use drag-and-drop / click-to-upload zones only.  
   Never hardcode external URLs from the original site (Mux streams, Next media hashes, etc.).

2. **Text**  
   Do not invent copy casually.  
   Execute the exact `prompt` on each `PartText`.  
   Prompts already encode chunk size, rhetorical shape, and forbidden generics.

3. **Motion**  
   `PartMotion` types: `mask` | `stagger` | `fade` | `slide` | `marquee`.  
   Prefer adjusting duration / stagger over rewriting animation systems.  
   Optional Lenis-like wheel smoothing: set `data-smooth="1"` on `<html>`.

4. **Structure**  
   Do not add/remove top-level routes unless the user asks.  
   Case studies: rebrand the 12 `project-NN` slots in `lib/work.ts` or replace the array.

5. **Design mode**  
   `?design=1` overlays every `{%part%}` id.

## Quick brand pass

```
Context: [paste studio brief]
1. Run every PartText prompt; replace previewText.
2. Upload work stills/videos for featured + grid cards.
3. Fill case study narratives for priority projects.
4. Swap palette in lib/design-tokens.ts + tailwind.config.ts if needed.
5. Point contact form submit to real endpoint / CRM.
6. Replace social labels with live profile URLs.
```

## Motion DNA (captured)

- **Lenis** present on live site (smooth scroll)
- CSS keyframes: vertical mask wipe (`translateY 110%→0`), horizontal marquee, slide-loop (`140%→0→-140%`), fade-swap opacity pulse
- Thin display type (weight 200) at 100–148px for capability / contact titles
- Work cards: media scale on hover ~1.03 / 0.7s
- Full-bleed case hero video via Mux on original (reconstructed as upload zones)

## Compounding

Reusable patterns: full-screen agency menu, equity-program page, multi-step contact, capability mega-type, cheeky testimonial wall.
Extract any `Part*` into a shared design system for future agency blanks.
