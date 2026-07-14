# AGENTS.md — How to brand this parts clone

Source: https://www.lorikeetcx.ai/ (AI Customer Concierge for complex support)
Capture: 2026-07-15 CloakBrowser full-depth (45 pages) + scroll motion timeline
Stack signal: **Framer + Lenis + WebGL**

## What this is

Multi-page semantic wireframe of an outcome-priced AI CX platform:

- Hero + floating status chips (scroll-linked scale/opacity)
- Proof + big metrics (97% / 60% / 99% style)
- Deflection anti-pattern vs resolution
- Workflow tool nodes + multi-channel resolved tickets
- Product omnichannel (Email/Chat/Voice/SMS/WhatsApp)
- Coach operations agent sub-product
- Outcome pricing (credits, not seats)
- Integrations library
- Customer stories + case template
- About mission/team, FAQ, demo form
- Zero original brand assets / client names / marketing copy

## Site map

| Path | Purpose |
|------|---------|
| `/` | Hero chips, proof, metrics, compare, workflow, tickets, testimonials, CTA |
| `/product` | Concierge omnichannel + Coach teaser |
| `/product/coach` | Ops agent: describe/configure, ask-build-test-ship |
| `/pricing` | Start / Scale / Enterprise + credit table |
| `/integrations` | Integration library grid |
| `/customer-stories` | Filter chips + story cards |
| `/customer-stories/[slug]` | Story template (8 slots) |
| `/about` | Mission + team |
| `/faq` | FAQ accordion |
| `/get-a-demo` | Demo form + social proof |

## Scroll / animation DNA (captured)

| Motion part | Live signal | Reconstruction |
|-------------|-------------|----------------|
| `{%motion:status-chips%}` | Absolute chips (Payroll upgraded…) scale+opacity on scroll | `PartMotion type="chips"` + floaty CSS |
| `{%motion:metric-reveal%}` | Metric cards y-translate enter | `type="metric"` |
| `{%motion:workflow-nodes%}` | Node labels scale mid-scroll | `type="nodes"` |
| `{%motion:ticket-stack%}` | Resolved tickets scale 0.7→1 | `type="stack"` |
| `{%motion:sticky-nav%}` | Fixed Framer nav | Fixed header + blur on scroll |
| `{%motion:lenis-scroll%}` | Lenis present | CSS smooth scroll |
| `{%motion:webgl-hero%}` | Home canvases | Gradient stage placeholder |

## Editing rules

1. Images/video = upload zones only. No Framer CDN assets.
2. Execute each `PartText` prompt; keep chunk sizes.
3. Prefer duration/stagger tweaks over rewriting scroll systems.
4. `?design=1` overlays part IDs.
5. Demo form is UI-only — wire to CRM/calendly when branding.

## Quick brand pass

```
1. Wordmark + nav CTA
2. Hero + status chips + metrics
3. Product channel copy
4. Pricing numbers/credits
5. Integration names
6. Story narratives (priority accounts)
7. Demo form endpoint
```
