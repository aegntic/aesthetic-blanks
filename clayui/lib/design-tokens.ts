/**
 * Soft Industrial Clay design tokens.
 *
 * Source identity: the validated material pack in materials/soft-clay (Blender
 * render PASS, matte clay + soft subsurface sheen, cyan->navy gradient).
 * This file maps that *material* identity onto a *web* design language.
 *
 * Core idea — "every element is clay":
 *   - Surfaces are matte clay: a subtle top-light -> bottom-shade gradient fakes
 *     soft curvature on flat DOM elements.
 *   - Shadows are pillowy (neumorphism-tuned-for-premium): a top inner highlight,
 *     a soft ambient diffuse, and a tight contact drop. No hard 1px borders.
 *   - Forms are round (large radii). Claymation is rounded.
 *   - Interaction = deformation: pressing an element sinks it INTO the clay
 *     (inset shadow, translate down). The clay deforms — same idea as the 3D hero.
 *
 * Color anchors match the Blender material:
 *   clay-base #C9C7C4 · cyan #4FB3C4 · navy #16263A · ink #2B2724
 */
export const tokens = {
  color: {
    clayBase: "#C9C7C4",
    clayBg: "#E6E4DF",
    claySurface: "#D2D0CC",
    clayLight: "#DAD8D4",
    clayDark: "#B6B4AF",
    ink: "#2B2724",
    inkSoft: "#6B6660",
    cyan: "#4FB3C4",
    navy: "#16263A",
    warm: "#C75D4B",
  },
  surface: {
    // matte clay curvature on flat elements
    gradient: "linear-gradient(155deg, #DAD8D4 0%, #C5C3BE 100%)",
    cyanNavy: "linear-gradient(160deg, #4FB3C4 0%, #16263A 100%)",
  },
  shadow: {
    raised:
      "inset 0 1.5px 1px rgba(255,255,255,0.7), inset 0 -1px 2px rgba(43,39,36,0.12), 0 1px 2px rgba(43,39,36,0.10), 0 10px 20px -6px rgba(43,39,36,0.18), 0 24px 48px -16px rgba(43,39,36,0.22)",
    pressed:
      "inset 0 2px 5px rgba(43,39,36,0.30), inset 0 -1px 1px rgba(255,255,255,0.35)",
  },
  radius: { sm: "1rem", md: "1.5rem", lg: "2rem", xl: "2.75rem" },
  motion: {
    ease: [0.16, 1, 0.3, 1] as const, // out-expo — soft clay settle
    duration: 0.28,
  },
  type: {
    sans: "var(--font-sans)", // Nunito — rounded soft sans
    display: "var(--font-display)", // Baloo 2 — rounded display
    note: "Rounded terminals chosen to match the claymation feel; originals are free Google fonts.",
  },
} as const;
