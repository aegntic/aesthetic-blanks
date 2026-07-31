# Raw tensile data (vendored)

ASTM D412 (Die C) uniaxial tensile pull-to-failure curves for the two reference
silicones. Columns (semicolon-delimited): `Time (s); True Strain; True Stress (MPa);
Engineering Strain; Engineering Stress (MPa)`.

| File | Material |
|------|----------|
| `Ecoflex_00-30.csv` | Smooth-On Ecoflex 00-30 |
| `Dragon_Skin_10_MEDIUM.csv` | Smooth-On Dragon Skin 10 Medium |

## Provenance

- **Source:** Soft Robotics Materials Database — Marechal et al.
  https://github.com/LucMarechal/Soft-Robotics-Materials-Database
- **Repo commit:** `8ff66c3bdc17bd226eabe83b778e13ea1e2ef8ce`
- **Original paths:** `Tensile-Tests-Data/Ecoflex 00-30.csv`,
  `Tensile-Tests-Data/Dragon Skin 10 MEDIUM.csv`
- **Test:** ASTM D412 Die C, 450 mm/min, room-temp cure, nominal mix ratio,
  Univ. Savoie Mont Blanc - SYMME Lab.
- **Paper:** "Towards a Common Framework and Database of Materials for Soft
  Robotics" (UCL Discovery id 10112846).

## License

Data is **ODC Open Database License (ODbL)** (the source repo's license). It
remains ODbL here — share, use, and modify with attribution to Marechal et al.
and the source repo, and keep downstream databases under ODbL.

## Caveat (from the source paper)

Strain is the **global** (crosshead-derived) strain, which overestimates the
true gauge strain for these very compliant elastomers. The **stress** axis is
trustworthy. The fitted Ogden coefficients in `../fitted-ogden.json` are for
**true stress–true strain** and reproduce this measured curve (see
`../constitutive_check.py`).
