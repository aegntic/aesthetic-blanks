"""
Soft Industrial Clay — detail map generator.

Headless Blender (bpy) script. Generates the three custom detail maps that
separate Soft Industrial Clay from a drop-in ambientCG material. This is the
"custom 30%" layer defined in materials/soft-clay/material.json.

Run (agent pipeline — no GUI, no GPU needed for generation):
    blender --background --python gen_detail_maps.py -- <output_dir> <seed>

All maps are 1024x1024, 8-bit PNG, **seamlessly tileable**. Tiling is
guaranteed by construction: the noise is a sum of sines with integer
wavenumbers over the unit square, so it is periodic edge-to-edge.

Maps:
  detail-fingerprint  RGB   very-low-contrast anisotropic finger-oil smudge streaks
  detail-compression  GRAY  low-frequency compression dimples -> drives displacement
  detail-micro-rough  GRAY  fine noise modulating roughness directly in 0.72-0.88

Deterministic: pass an integer seed. Output is reproducible.
"""
import sys
import os
import math
import numpy as np
import bpy

SIZE = 1024
SEED = 7


def parse_args():
    # After `--` come user args in `blender -b -P script -- <out> <seed>`.
    argv = sys.argv
    if "--" in argv:
        argv = argv[argv.index("--") + 1:]
    else:
        argv = []
    out_dir = argv[0] if len(argv) > 0 else "."
    seed = int(argv[1]) if len(argv) > 1 else SEED
    return out_dir, seed


def grid(n):
    # u,v in [0,1). Periodic domain.
    idx = np.arange(n)
    u = np.broadcast_to(idx[:, None], (n, n)) / n
    v = np.broadcast_to(idx[None, :], (n, n)) / n
    return u, v


def periodic_noise(u, v, kx_range, ky_range, octaves, rng):
    """Sum of sines with integer wavenumbers -> exactly periodic noise."""
    acc = np.zeros_like(u)
    weight = 0.0
    for o in range(octaves):
        amp = 0.5 ** o
        kx = int(rng.integers(kx_range[0], kx_range[1] + 1))
        ky = int(rng.integers(ky_range[0], ky_range[1] + 1))
        phx = rng.uniform(0, 2 * math.pi)
        phy = rng.uniform(0, 2 * math.pi)
        acc += amp * np.sin(2 * math.pi * kx * u + phx) * np.sin(2 * math.pi * ky * v + phy)
        weight += amp
    return acc / weight


def norm01(x):
    lo, hi = x.min(), x.max()
    return (x - lo) / (hi - lo + 1e-9)


def save_png(name, rgb, out_dir):
    """rgb: (h,w,3) float [0,1]. Bottom row first for bpy."""
    h, w, _ = rgb.shape
    rgba = np.dstack([rgb, np.ones((h, w), dtype=np.float32)])
    # bpy wants row 0 at the bottom; flip so image reads top-down correctly.
    rgba = np.flipud(rgba).astype(np.float32).ravel()
    img = bpy.data.images.new(name, width=w, height=h, alpha=True, float_buffer=False)
    img.pixels = rgba
    img.file_format = "PNG"
    path = os.path.join(out_dir, name + ".png")
    img.filepath_raw = path
    img.save()
    bpy.data.images.remove(img)
    return path


def main():
    out_dir, seed = parse_args()
    os.makedirs(out_dir, exist_ok=True)
    rng = np.random.default_rng(seed)
    u, v = grid(SIZE)

    # --- detail-fingerprint: anisotropic, low-contrast vertical streaks ----
    # Stretched noise: tiny horizontal wavenumber, larger vertical wavenumber.
    fp = periodic_noise(u, v, kx_range=(1, 3), ky_range=(8, 22), octaves=4, rng=rng)
    fp = norm01(fp)
    # Keep contrast very low (the spec). Blend toward neutral.
    fp = 0.5 + (fp - 0.5) * 0.06
    # Faint cool tint over a warm-cool clay grey (#C9C7C4).
    base = np.array([0.788, 0.781, 0.769], dtype=np.float32)
    tint = np.array([-0.006, -0.004, -0.010], dtype=np.float32)  # cool shadow in streaks
    rgb_fp = base + (fp - 0.5)[..., None] * 4.0 + tint[None, None, :] * (fp - 0.5)[..., None] * 8.0
    rgb_fp = np.clip(rgb_fp, 0.0, 1.0).astype(np.float32)

    # --- detail-compression: low-frequency dimples -> displacement ----------
    comp = periodic_noise(u, v, kx_range=(2, 5), ky_range=(2, 5), octaves=3, rng=rng)
    comp = norm01(comp)
    # Subtle dimples centered on 0.5 (matches Blender Displacement midlevel).
    comp = 0.5 + (comp - 0.5) * 0.18
    rgb_comp = np.repeat(comp[..., None], 3, axis=2).astype(np.float32)

    # --- detail-micro-rough: fine noise mapped to roughness 0.72-0.88 ------
    mr = periodic_noise(u, v, kx_range=(6, 14), ky_range=(6, 14), octaves=5, rng=rng)
    mr = norm01(mr)
    mr = 0.72 + mr * (0.88 - 0.72)
    rgb_mr = np.repeat(mr[..., None], 3, axis=2).astype(np.float32)

    p1 = save_png("detail-fingerprint", rgb_fp, out_dir)
    p2 = save_png("detail-compression", rgb_comp, out_dir)
    p3 = save_png("detail-micro-rough", rgb_mr, out_dir)

    print("DETAIL_MAPS_GENERATED")
    print(p1)
    print(p2)
    print(p3)


if __name__ == "__main__":
    main()
