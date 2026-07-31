# ClayUI — Soft Industrial Clay

> Every element is clay. A soft-clay design system with a deformable 3D hero.

The web instantiation of the **Soft Industrial Clay** material identity defined in
[`../materials/soft-clay`](../materials/soft-clay). Where that pack locks the
*material* (matte clay, soft sheen, cyan→navy, validated Blender renders), this
blank locks the *web design language*: matte clay surfaces, pillowy shadows,
rounded forms, and press-to-sink interaction.

The "deform" idea is literal here — the hero is a real morphing 3D clay blob
(react-three-fiber), and every pressable element sinks INTO the clay on `:active`.

## Run

```bash
cd clayui
npm install
npm run dev    # http://localhost:3000
```

Build: `npm run build && npm start`.

## Stack

Next.js 15 (App Router) · React 19 · Tailwind 3.4 · framer-motion ·
react-three-fiber + drei (3D hero).

## Structure

```
clayui/
├── app/
│   ├── layout.tsx       fonts (Nunito + Baloo 2 — rounded, claymation feel)
│   ├── globals.css      the clay system: surface gradient, pillowy shadows, grain
│   └── page.tsx         demo — "everything is clay"
├── components/
│   ├── ClayHero.tsx     deformable 3D clay blob (R3F)
│   ├── ClayButton.tsx   press-to-sink clay button (clay | gradient | ghost)
│   ├── ClayCard.tsx     raised matte-clay surface
│   ├── ClayInput.tsx    sunk-in clay field
│   ├── ClayToggle.tsx   knob slides across a clay well
│   └── ClayNav.tsx      pill nav — active item sinks in
├── lib/
│   ├── design-tokens.ts clay material → web token mapping
│   └── cn.ts            className merge
├── tailwind.config.ts   clay palette, radii, shadows, gradients
└── package.json
```

## The clay recipe (core)

Defined as CSS vars in `app/globals.css`, exposed as Tailwind tokens:

- **Matte clay surface** — `linear-gradient(155deg, light, dark)` fakes soft
  curvature on flat DOM. `.clay`.
- **Pillowy shadows** — top inner highlight + ambient diffuse + contact drop.
  No hard 1px borders. `--clay-raised`.
- **Sunk-in clay** — `--clay-pressed` (inset). Inputs, toggles, active nav.
- **Press-to-sink** — `.clay-pressable` sinks the element into the clay on hover
  (lift) / `:active` (inset). The clay deforms.
- **Grain** — subtle SVG noise on `body` for premium matte.

Palette mirrors the Blender material: clay `#C9C7C4`, cyan `#4FB3C4`, navy
`#16263A`, ink `#2B2724`.

## Branding it

This is an unbranded blank. Swap the wordmark, copy, and palette accents — the
clay geometry (surfaces, shadows, radii, the 3D blob) stays the tactile identity.
See `AGENTS.md`.
