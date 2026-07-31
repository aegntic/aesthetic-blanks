# GlassUI — Clay · Metal · Liquid Glass

> Three materials, one system. Soft clay substrate, polished metal accent, a liquid-glass overlay that refracts the aurora behind it.

> **Design — Mattae Cooper, [aegntic.ai](https://aegntic.ai)**

A fusion material identity for the web. Where the [`clayui`](../clayui) blank is
pure clay, **GlassUI stacks three materials**:

- **Clay** — the substrate. Matte surface, pillowy shadows, rounded forms.
  Everything rests on it. (`.clay`, `.clay-inset`, `.clay-pressable`)
- **Metal** — the accent. A six-stop polished-steel gradient that shifts on hover,
  or a fine brushed grain. (`.metal`, `.metal-brushed`, `.metal-pressable`)
- **Liquid glass** — the overlay. Real `backdrop-filter` blur + saturation, a
  refraction rim, two specular highlights. It floats over whatever sits beneath.
  (`.glass`, `.glass-pressable`)

Liquid glass needs a vivid backdrop to refract, so `body` paints a fixed aurora
(cyan / warm / navy radial blobs + grain). The hero makes the material literal:
a real transmission shader (react-three-fiber `MeshTransmissionMaterial`) that
bends the colored backplate through a glass blob — drag it.

## Run

```bash
cd glassui
npm install
npm run dev    # http://localhost:3000
```

Build: `npm run build && npm start`.

## Stack

Next.js 15 (App Router) · React 19 · Tailwind 3.4 · framer-motion ·
react-three-fiber + drei (3D transmission hero).

## Structure

```
glassui/
├── app/
│   ├── layout.tsx       fonts (Nunito + Baloo 2) + no-FOUC theme script
│   ├── globals.css      the three-material system: clay, metal, glass + aurora
│   └── page.tsx         demo — the three materials + stacked composition
├── components/
│   ├── GlassHero.tsx    3D liquid-glass blob (drei MeshTransmissionMaterial)
│   ├── GlassPanel.tsx   translucent glass surface (scoped `.glass`)
│   ├── MetalButton.tsx  metallic button (polished | brushed)
│   └── ThemeToggle.tsx  light/dark flip + persist
├── public/
│   ├── ae-logo-black.png   aegntic.ai logo (light theme footer)
│   └── ae-logo-white.png   aegntic.ai logo (dark theme footer)
├── lib/
│   ├── design-tokens.ts clay material → web token mapping
│   └── cn.ts            className merge
├── tailwind.config.ts   clay palette, radii, shadows, gradients
└── package.json
```

## The material recipe (core)

All three materials live as CSS vars + utilities in `app/globals.css`:

- **Aurora backdrop** — four fixed radial-gradient blobs (cyan/warm/navy) + grain
  on `body`, so glass refracts and metal reflects.
- **Clay** — `linear-gradient(155deg, light, dark)` matte surface + pillowy
  `--clay-raised`/`--clay-pressed` shadows. `.clay` (raised), `.clay-inset`
  (sunk), `.clay-pressable` (press-to-sink).
- **Metal** — 6-stop steel gradient (`background-size:200%` → shifts on hover) or
  brushed repeating grain. `.metal`, `.metal-brushed`, `.metal-pressable`.
- **Glass** — translucent white sheen + `backdrop-filter: blur() saturate()`, a
  refraction rim (inset shadows), `::before`/`::after` specular. `.glass`,
  `.glass-pressable`.
- **Typography** — `.clay-text` (raised emboss), `.metal-text` (brushed-silver
  gradient clip), `.glass-text` (cool frosted gradient clip).

Palette: clay `#C9C7C4`, cyan `#4FB3C4`, navy `#16263A`, warm `#C75D4B`,
ink `#2B2724`. Dark mode flips via the `.dark` class.

## Branding it

Unbranded blank. Swap the wordmark, copy, and accent colors — the three-material
geometry (surfaces, sheens, the transmission hero) stays the identity.
See `AGENTS.md` and `APPLY.md`.
