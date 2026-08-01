# Aegntic Design System — Template Starter

This folder contains the complete design workflow for aesthetic-blanks templates.

## Quick Start

```bash
# Install dependencies
npm install -g skillui
npm install playwright && npx playwright install chromium

# Generate design system for your template
./scripts/aegntic-design-system init my-template "fintech dashboard dark dense"

# Or manually:
cd my-template
python /home/ae/.hermes/skills/ui-ux-pro-max/scripts/search.py \
  "your brief here" --design-system --persist -p "YourProject" --output-dir .
```

## Structure

```
my-template/
├── CLAUDE.md              # Project instructions
├── .impeccable.md         # Design context (from /impeccable teach)
├── design-system/
│   └── my-template/
│       ├── MASTER.md      # Global tokens, patterns
│       └── pages/         # Page-specific overrides
├── app/                   # Next.js App Router
├── components/            # shadcn/ui + custom
├── lib/                   # Utilities, tokens
├── public/                # Static assets
├── scripts/               # Build, validation helpers
└── SKILL.md               # This workflow
```

## Commands

```bash
# Design system from brief
./scripts/aegntic-design-system design-system "SaaS dashboard dark" --persist --output-dir . -p "MyApp"

# Search styles/colors/fonts
./scripts/aegntic-design-system style "glassmorphism dark" --domain style
./scripts/aegntic-design-system style "fintech trust" --domain color
./scripts/aegntic-design-system style "technical modern" --domain typography

# Stack-specific guidance
./scripts/aegntic-design-system stack "data table" nextjs

# Reverse-engineer reference site
./scripts/aegntic-design-system skillui https://linear.app --mode ultra --out ./design-systems/linear

# Figma to code
./scripts/aegntic-design-system figma <figma-url> <node-id>

# Pre-flight QA
./scripts/aegntic-design-system preflight

# Component craft
./scripts/aegntic-design-system impeccable craft "pricing table 3 tiers"

# Marketing assets
./scripts/aegntic-design-system banner instagram gradient "launch announcement"
./scripts/aegntic-design-system slides "Q4 roadmap" --template strategic
```

## Skills Composed

| Skill | Purpose |
|-------|---------|
| `impeccable` | Production-grade components, anti-slop |
| `design-taste-frontend` | Landing pages, dials (variance/motion/density) |
| `ui-ux-pro-max` | Searchable DB: 84 styles, 192 palettes, 74 fonts, 98 UX rules |
| `ui-styling` | shadcn/ui + Radix + Tailwind implementation |
| `design-system` | Token architecture, component specs |
| `brand` | Voice, identity, messaging |
| `banner-design` | Social/ads/hero banners |
| `slides` | HTML presentations with Chart.js |
| `figma-implement-design` | Figma → production code |
| `skillui` | CLI: reverse-engineer live sites |

## Dial Presets

```bash
# SaaS landing
--variance 7 --motion 6 --density 4

# Agency/creative
--variance 9 --motion 8 --density 3

# Premium consumer
--variance 7 --motion 6 --density 3

# Dev portfolio
--variance 6 --motion 5 --density 4

# Dashboard/analytics
--variance 8 --motion 7 --density 8

# Public sector
--variance 3 --motion 2 --density 5
```

## Stack Defaults

- **Framework**: Next.js 15 (App Router, RSC)
- **Styling**: Tailwind v4 (`@tailwindcss/postcss`)
- **Animation**: Motion (`motion/react`)
- **Components**: shadcn/ui (Radix primitives)
- **Icons**: `@phosphor-icons/react` → `hugeicons-react` → `@radix-ui/react-icons`
- **Fonts**: `next/font` self-hosted

## References

- [aesthetic-blanks repo](https://github.com/aegntic/aesthetic-blanks)
- [ui-ux-pro-max skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
- [skillui CLI](https://github.com/amaancoderx/skillui)
- [design-taste-frontend skill](/home/ae/.hermes/skills/design-taste-frontend)
- [impeccable skill](/home/ae/.hermes/skills/impeccable/impeccable)