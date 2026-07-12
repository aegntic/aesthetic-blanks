# Parts Clone — alitwotimes.com

Semantic reconstruction of a high-end commercials director portfolio (original built by Exo Ape, Awwwards Site of the Month).

**All original brand assets, photography, video, and copy have been stripped.**

## What you get

- Full-bleed hero with video/image upload zone + massive display name treatment
- Credential quote block with staggered reveal
- 4 project cards with media drop zones + title/meta prompts
- Giant impact number
- Contact teaser + full multi-territory representation page
- Every text element is an agent-ready prompt that preserves original nuance & chunk size
- Framer Motion staggered text (GSAP-style)
- Design tokens extracted from the original dark cinematic system

## Quick start

```bash
cd alitwotimes
npm install
npm run dev
```

Open http://localhost:3000

## Branding it for your project

1. Drop your own hero still/video into the first upload zone.
2. Hover any text → click "prompt" → feed that prompt to your agent with your brand context.
3. Repeat for all parts (or automate the walk).
4. Update /contact with your real representation or remove the multi-rep pattern.

## Part map (high level)

| Part ID | Type | Purpose |
|---------|------|--------|
| {%part:section-hero%} | section | Full-viewport hero |
| {%part:hero-video-still%} | image/video | Main cinematic media |
| {%part:hero-name%} | text | Massive display identity |
| {%part:hero-tagline%} | text | Role / year line |
| {%part:hero-bio-short%} | text | One-sentence bio |
| {%part:credential-quote%} | text | Large third-party quote |
| {%part:section-selected-work%} | section | Project grid |
| {%part:project-N-media%} | image/video | Project stills |
| {%part:impact-number%} | text | Giant metric |
| {%part:section-contact%} | section | Multi-rep contact |
| {%motion:*-reveal%} | motion | Stagger / GSAP-style |

See `AGENTS.md` for full agent instructions.
