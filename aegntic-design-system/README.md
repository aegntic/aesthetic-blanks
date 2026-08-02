# Aegntic Design System — Complete Standalone Workflow

A self-contained design & UI/UX pipeline for aesthetic-blanks. Every skill, MCP config, and tool is vendored into this repo — no external dependencies required to use any individual segment.

## Structure

```
aegntic-design-system/
├── SKILL.md                    # Master workflow orchestrator
├── README.md                   # This file
├── package.json                # npm metadata
├── skills/                     # 10 complete standalone skills
│   ├── design-taste-frontend/  # Anti-slop landing pages (1 file)
│   ├── impeccable/             # Production components (12 files, references + scripts)
│   ├── ui-ux-pro-max/          # Searchable DB (44 files: data + scripts + references)
│   ├── ui-styling/             # shadcn/ui + Radix (98 files: canvas-fonts + references + scripts)
│   ├── design-system/          # Token architecture (27 files)
│   ├── brand/                  # Voice, identity (18 files: references + scripts + templates)
│   ├── banner-design/          # Social/ads/hero (2 files: SKILL + references)
│   ├── slides/                 # HTML presentations (6 files)
│   ├── design/                 # Comprehensive design (35 files: data + references + scripts)
│   └── figma-implement-design/ # Figma → code (1 file, requires MCP)
├── scripts/
│   ├── aegntic-design-system   # CLI entry point (executable)
│   └── skillui/                # Full skillui CLI source (16 files)
├── mcps/                       # MCP server configs
│   └── README.md               # Figma + Odysseus setup
└── templates/                  # Starter template scaffold
```

## The 10 Skills (each standalone)

| # | Skill | Files | Purpose | Standalone? |
|---|-------|-------|---------|-------------|
| 1 | `design-taste-frontend` | 1 | Anti-slop landing pages, dials (variance/motion/density) | ✅ Full SKILL.md |
| 2 | `impeccable` | 12 | Production-grade components, anti-slop aesthetics | ✅ + references, scripts |
| 3 | `ui-ux-pro-max` | 44 | Searchable DB: 84 styles, 192 palettes, 74 fonts, 98 UX rules | ✅ + data CSVs, search scripts |
| 4 | `ui-styling` | 98 | shadcn/ui + Radix + Tailwind implementation | ✅ + canvas-fonts, references |
| 5 | `design-system` | 27 | Token architecture, component specs | ✅ + data, references, scripts |
| 6 | `brand` | 18 | Voice, identity, messaging, assets | ✅ + references, scripts, templates |
| 7 | `banner-design` | 2 | Social/ads/hero banners, 22 styles | ✅ + references |
| 8 | `slides` | 6 | Strategic HTML presentations with Chart.js | ✅ + references |
| 9 | `design` | 35 | Comprehensive design skill (ui-ux-pro-max bundle) | ✅ + data, references, scripts |
| 10 | `figma-implement-design` | 1 | Figma → production code (requires Figma MCP) | ⚠️ Needs MCP (see mcps/) |

## Usage

### As a Hermes/Claude/Codex Skill

Each skill in `skills/` is a complete, independent SKILL.md + supporting files. Load any individually:

```bash
# Hermes
/design-taste-frontend
/impeccable craft "pricing table"
/ui-ux-pro-max   # via search.py
```

### As a CLI Workflow

```bash
# From repo root
./scripts/aegntic-design-system design-system "fintech dashboard dark dense" --persist --output-dir . -p "FintechOps" --variance 8 --motion 7 --density 8

# Search
./scripts/aegntic-design-system style "glassmorphism dark" --domain style
./scripts/aegntic-design-system stack "data table" nextjs

# Reverse-engineer
./scripts/aegntic-design-system skillui https://linear.app --mode ultra --out ./design-systems/linear

# List all skills
./scripts/aegntic-design-system skills
```

### Skill-by-Skill Standalone Usage

Each skill folder is drop-in:

```bash
# ui-ux-pro-max standalone
python skills/ui-ux-pro-max/scripts/search.py "SaaS dashboard" --design-system -p "App"

# impeccable standalone
# Load skills/impeccable/SKILL.md in any agent

# ui-styling standalone
# Load skills/ui-styling/SKILL.md — uses canvas-fonts/ for typography
```

## MCP Requirements

| Skill | MCP Needed | Config |
|-------|-----------|--------|
| `figma-implement-design` | Figma MCP (desktop or remote) | See `mcps/README.md` |
| `design`, `ui-ux-pro-max`, etc. | None (pure SKILL.md + scripts) | — |
| Odysseus (optional) | Odysseus MCP | Already in `~/.hermes/config.yaml` |

## Dial Presets

```bash
saas-landing:      --variance 7 --motion 6 --density 4
agency-creative:   --variance 9 --motion 8 --density 3
premium-consumer:  --variance 7 --motion 6 --density 3
dev-portfolio:     --variance 6 --motion 5 --density 4
dashboard:         --variance 8 --motion 7 --density 8
public-sector:     --variance 3 --motion 2 --density 5
```

## Stack Defaults

- **Framework**: Next.js 15 (App Router, RSC)
- **Styling**: Tailwind v4 (`@tailwindcss/postcss`)
- **Animation**: Motion (`motion/react`)
- **Components**: shadcn/ui (Radix primitives)
- **Icons**: `@phosphor-icons/react` → `hugeicons-react` → `@radix-ui/react-icons`
- **Fonts**: `next/font` self-hosted

## Full Pipeline Flow

```
1. DISCOVER
   ├── skillui --url <ref-site> --mode ultra     # Extract tokens from live site
   ├── /figma-implement-design <url> <node>      # Figma → code (needs MCP)
   └── /impeccable teach                          # Gather project context

2. DESIGN SYSTEM
   ├── ui-ux-pro-max --design-system             # DB-driven recommendations
   ├── design-system                             # Token architecture
   └── brand                                     # Voice, identity

3. COMPONENTS & PAGES
   ├── design-taste-frontend                     # Landing pages with dials
   ├── impeccable craft                          # Production components
   ├── ui-styling                                # shadcn/ui implementation
   └── banner-design / slides                    # Marketing assets

4. IMPLEMENT & QA
   ├── figma-implement-design                    # 1:1 fidelity (needs MCP)
   ├── design-taste-frontend Pre-Flight Check    # 60+ validations
   └── ui-ux-pro-max pro-rules                   # App UI checklist
```

## Installation

```bash
git clone https://github.com/aegntic/aesthetic-blanks.git
cd aesthetic-blanks/aegntic-design-system

# For skillui CLI
cd scripts/skillui && npm install && npm link
# OR globally: npm install -g skillui

# For ui-ux-pro-max search (Python, no deps)
python3 skills/ui-ux-pro-max/scripts/search.py --help
```

Every skill is fully vendored. Nothing is lost if you use only one segment.
