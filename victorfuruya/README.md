# Parts Clone — Victor Furuya class

Cinematic multidisciplinary designer portfolio blank.

Source: https://victorfuruya.com  
Capture: CloakBrowser full-depth (3 routes) + nuances (Satoshi, Lenis shell, letter-split, hero scale)

## Run

```bash
npm install --include=dev
env -u NODE_ENV npm run dev   # :3412
# design mode: ?design=1
env -u NODE_ENV npm run build
```

## IA

| Path | Sections |
|------|----------|
| `/` | Hero B&W portrait + black plate (Make It Last / ‘26) · manifesto sticky previews · who/drives · full-bleed work slider · Carve it Into Memory · areas of focus · core values · footer bleed |
| `/works` | Mega title · work slider · index list |
| `/about` | Carve hero · manifesto · bio + gallery · focus · values · footer |

## Motion DNA (every component)

| Motion id | Component | Behavior |
|-----------|-----------|----------|
| `{%motion:hero-scale%}` | Hero full-bleed img | Scroll scale ~1.45→1 |
| `{%motion:letter-split-hero%}` | Hero plate title | Dual-line overflow wipe |
| `{%motion:menu-mega%}` | Full-screen nav | Mega 96px labels |
| `{%motion:manifesto-lines%}` | Manifesto type | Stagger enter |
| `{%motion:work-slide-N%}` | Work covers | Fade per slide |
| `{%motion:carve-* %}` | Carve headline | Split wipe L/R |
| `{%motion:focus-list%}` | Focus disciplines | Stagger mega |
| `{%motion:lenis-scroll%}` | `data-smooth="1"` | Soft wheel approx |

## Image style prompts

Every `PartImage` includes a **style-of-image** prompt (photographic grade + role). Toggle "style prompt" on empty zones, or read `lib/work.ts` → `IMAGE_STYLE`.

- Hero: B&W fashion portrait, studio wall
- Manifesto: vertical editorial stills 3:4
- Work slides: full-bleed lifestyle/brand photo
- About: centered B&W portrait on dark seamless
- Footer: wide atmospheric curtain

## Branding

Strip source personal name + client brands. Generic project slots only.
