# Soft Industrial Clay — deformable material

Master spec for the **Soft Industrial Clay** tactile identity. Single source of
truth: one material definition that every robot, product, or interface inherits
so the look and the feel stay stable across the whole ecosystem.

This is a **deformable** material — it must read as soft visually *and* behave
correctly under large deformation. Two profiles are therefore locked together:

- **Visual** — PBR values tuned for matte claymation softness (`visual/pbr.json`)
- **Mechanical** — hyperelastic profile matched to real Smooth-On silicones
  (`mechanical/profile.json`)

Off-the-shelf libraries get you ~70% of the visual. The locked custom layers
(fingerprint detail, compression marks, soft anisotropic sheen) are the 30% that
make it read as *Soft Industrial Clay* rather than generic rubber.

---

## Why both profiles

A useful soft-surface library provides either accurate visual response *or*
accurate mechanical response. No single library covers both. The combination
locked here is the force multiplier:

| Need | Source |
|------|--------|
| Look (roughness, sheen, fingerprints, SSS) | `visual/pbr.json` + custom detail maps |
| Feel (force–displacement under load) | `mechanical/profile.json` (Smooth-On matched) |

Use the visual profile alone for still renders. Wire in the mechanical profile
when the object must squeeze, press, or deform.

---

## Tactile targets

| Variant | Shore | Use when |
|---------|-------|----------|
| `soft-clay-0030` | **00-30** | True clay/flesh soft — presses with a fingertip. Hero squishy surfaces. |
| `soft-clay-10a` | **10A** | Firmer gummy elastomer — structural deformable parts that must hold shape. |

Both share the same visual base; only the mechanical compliance differs.

---

## Color language (Soft Industrial Clay)

Cool, desaturated, matte. Two locked palettes:

- **Matte clay neutral** — base `#C9C7C4` (warm-cool grey clay)
- **Gradient cyan→navy elastomer** — `#4FB3C4` → `#16263A`

Apply gradient via the material, not a texture, so deformation stretches it
correctly along the surface.

---

## Authoring the custom 30%

The detail maps below are **authored, not fetched** — they are what separates
this from an ambientCG drop-in. Slots referenced by `visual/pbr.json`:

| Map | Purpose | Authoring note |
|-----|---------|----------------|
| `detail-fingerprint` | Subtle finger oils / contact smudges | Very low contrast, tiling, anisotropic streaks |
| `detail-compression` | Slight compression dimples / tooling marks | Low-frequency, drives micro-displacement |
| `detail-micro-rough` | Grain that breaks the uniform sheen | Fine noise, ~1024px tiling |

Store authored maps next to this README (see `sources.md` for the base assets to
derive them from).

---

## Wiring it up

### Blender (Principled BSDF, Cycles)

Values are in `visual/pbr.json` under `blender.principled_bsdf`. Key call-outs:

- Roughness high (0.72–0.88) — matte, no hard specular hotspot.
- `Subsurface Weight` ~0.08 with a small radius — the soft sheen, not wax.
- `Specular IOR Level` kept low for matte clay.
- Displacement from `detail-compression` for visible soft compression.

### Simulation (FEA / soft-robotics)

Pull hyperelastic coefficients from the Soft Robotics Materials Database into
`mechanical/profile.json` (see the `model` block — fitted coefficients are
flagged `TODO: fetch` until pulled, never fabricated). Target material:

- `soft-clay-0030` → match **Smooth-On Ecoflex 00-30**
- `soft-clay-10a` → match **Smooth-On Dragon Skin 10**

---

## Files

```
materials/soft-clay/
├── README.md                 # this file — the master spec
├── material.json             # machine-readable entry point (refs both profiles)
├── visual/pbr.json           # visual / PBR profile
├── mechanical/profile.json   # mechanical / hyperelastic profile
└── sources.md                # cited base assets + databases
```

## Sources & citations

See `sources.md`. All mechanical datasheet values are cited to Smooth-On TDS;
fitted hyperelastic coefficients are sourced from / flagged against the Soft
Robotics Materials Database (Marechal et al.). No invented constants.
