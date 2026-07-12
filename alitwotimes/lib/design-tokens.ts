/**
 * Design tokens extracted / normalized from the original site.
 * Dark cinematic palette, large display type, tight tracking.
 */
export const tokens = {
  colors: {
    ink: "#0a0a0a",
    paper: "#f5f0eb",
    muted: "#888880",
    accent: "#e8d5c4",
    white: "#ffffff",
  },
  typography: {
    display: {
      family: "system-ui, -apple-system, sans-serif", // replace with your display face
      weights: { medium: 500, bold: 700 },
      tracking: { tightest: "-0.06em", tighter: "-0.04em" },
    },
    body: {
      family: "system-ui, -apple-system, sans-serif",
      sizes: { xs: "0.75rem", sm: "0.875rem", base: "1rem", lg: "1.125rem" },
    },
  },
  motion: {
    ease: [0.22, 1, 0.36, 1], // Exo Ape / GSAP-like out-expo feel
    stagger: 0.08,
    duration: 0.7,
  },
  layout: {
    max: "1600px",
    gutter: { mobile: "1.5rem", desktop: "3rem" },
  },
} as const;
