---
name: aegntic-design-system
description: "Complete standalone design & UI/UX workflow plugin. Composes 10 vendored skills (design-taste-frontend, impeccable, ui-ux-pro-max, ui-styling, design-system, brand, banner-design, slides, design, figma-implement-design) plus skillui CLI and MCP configs. Each skill is fully self-contained — use any segment independently."
tags: ["design", "ui", "ux", "design-system", "workflow", "aesthetic", "aesthetic-blanks"]
related_skills:
  - design-taste-frontend
  - impeccable
  - ui-ux-pro-max
  - ui-styling
  - design-system
  - brand
  - banner-design
  - slides
  - design
  - figma-implement-design
---

# Aegntic Design System — Master Workflow Orchestrator

This is the composition layer. All 10 skills are vendored in `skills/` as complete standalone units. This file tells agents how to sequence them.

## Load Order (for agents)

When this workflow is invoked, load skills in dependency order:
1. `ui-ux-pro-max` (foundation database — `skills/ui-ux-pro-max/scripts/search.py`)
2. `design-taste-frontend` (page-level rules + dials)
3. `impeccable` (component craft)
4. `design-system` (tokens, specs)
5. `ui-styling` (implementation — shadcn/ui + Radix)
6. `brand` / `banner-design` / `slides` (marketing)
7. `design` (comprehensive bundle)
8. `figma-implement-design` (if Figma source — needs MCP, see `mcps/README.md`)

## CLI Entry Point

```bash
./scripts/aegntic-design-system <command> [args]
# Commands: design-system, style, stack, skillui, figma, preflight, impeccable, banner, slides, init, skills, help
```

## Skill Inventory (all in `skills/`)

| Skill | Files | Standalone | Invocation |
|-------|-------|-----------|------------|
| `design-taste-frontend` | 1 | ✅ | `/design-taste-frontend` |
| `impeccable` | 12 | ✅ | `/impeccable craft\|teach\|extract` |
| `ui-ux-pro-max` | 44 | ✅ | `python skills/ui-ux-pro-max/scripts/search.py "..." --design-system` |
| `ui-styling` | 98 | ✅ | `/ui-styling` |
| `design-system` | 27 | ✅ | `/design-system` |
| `brand` | 18 | ✅ | `/brand` |
| `banner-design` | 2 | ✅ | `/banner-design` |
| `slides` | 6 | ✅ | `/slides` |
| `design` | 35 | ✅ | `/design` |
| `figma-implement-design` | 1 | ⚠️ needs MCP | `/figma-implement-design <url> <node>` |

## MCP Requirements

See `mcps/README.md`:
- **Figma MCP** — required for `figma-implement-design`
- **Odysseus MCP** — optional, already configured in `~/.hermes/config.yaml`

## Full Pipeline

```
DISCOVER → DESIGN SYSTEM → COMPONENTS → IMPLEMENT & QA
```

See README.md for detailed flow and dial presets.

---

**Each skill in `skills/` is a complete unit.** Use any one independently — all references, scripts, and data are vendored.
