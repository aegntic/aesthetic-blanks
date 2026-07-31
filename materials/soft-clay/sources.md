# Sources

Base assets and reference data for the Soft Industrial Clay material. Distinguish
**visual** (look) from **mechanical** (feel) — they come from different worlds.

## Visual base (PBR / look dev)

| Asset | License | Role here |
|-------|---------|-----------|
| **ambientCG** — Plastic, Rubber, Clay, Foam categories | CC0 | Free base for the matte clay / elastomer surface. Tuned, not used as-is. https://ambientcg.com |
| **Adobe Substance 3D Assets** | Commercial | Parametric `.sbsar` alternative for production look-dev (soft plastics, rubber, silicone). |
| **Poly Haven** | CC0 | Photoscanned supporting surfaces / context. |
| **Poliigon** | Commercial | Plastic + rubber collections. |

Why these are only 70%: general libraries ship surfaces that are too glossy or
too uniform. True Soft Industrial Clay needs the authored custom layers —
fingerprint, compression marks, micro-roughness — defined in `material.json`.

## Mechanical (deform / feel)

| Source | Role here |
|--------|-----------|
| **Soft Robotics Materials Database** (Luc Marechal et al.) | Reference library. Tensile data (ASTM D412) + fitted hyperelastic model parameters for a wide range of elastomers, including many Smooth-On silicones. **Source for the Ogden coefficients** flagged `TODO: fetch` in `mechanical/profile.json`. GitHub repo + associated paper. |
| **Smooth-On TDS** — Ecoflex 00-30, Dragon Skin 10/20/30 | De-facto physical soft-surface standard. Shore hardness, tensile, elongation, tear, mix ratio, cure — cited as `datasheet` in `mechanical/profile.json`. https://www.smooth-on.com |

## Physical soft-touch coatings (coating-only haptics, not bulk soft)

These are *coatings applied to rigid substrates* to create a soft/velvety feel.
They are NOT bulk soft materials and are excluded from the deformable profile —
noted only because they deliver the real-world "soft industrial" tactile on
consumer electronics / interiors.

- Polyurethane soft-touch coatings (most common)
- Silicone soft-touch coatings
- TPE (thermoplastic elastomer) overmolds
- Named systems: RepelFlex Soft-Touch, Sherwin-Williams soft-feel systems, specialty silicone soft-touch.

Known failure mode: tackiness / surface degradation over time. The bulk-cast
silicone approach in this material profile sidesteps that.

## Verification status

- **Visual parameters**: locked (tunable), ready for still renders.
- **Datasheet mechanical values**: cited from Smooth-On TDS — nominal; re-verify
  against the latest TDS before FEA.
- **Fitted hyperelastic coefficients**: `TODO: fetch` from the Soft Robotics
  Materials Database. Never fabricated.
