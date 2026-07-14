/**
 * Design tokens reverse-engineered from reformcollective.com capture.
 * Original uses Display-P3 CSS variables; values below are sRGB approximations.
 * Motion: Lenis smooth-scroll + CSS keyframe mask/marquee/slide-loop.
 */
export const tokens = {
  colors: {
    paper: "#F9F8EE", // --offwhite1
    cream: "#C9B6A0", // --offwhite3
    cream2: "#C7C5AF", // --offwhite2
    ink: "#0A0A0A",
    black2: "#27282E",
    black3: "#212121",
    black4: "#4A4C5B",
    accent: "#FE3712", // --red1
    videored: "#EA4C2C",
    red2: "#D00401",
    blue1: "#0006F2",
    yellow1: "#F3DC11",
    white: "#FFFFFF",
  },
  typography: {
    display: {
      family: "system-ui, sans-serif",
      weights: { thin: 200, light: 300, regular: 400, medium: 500 },
      // Hero / capability titles: ~106–148px desktop, weight 200
      scales: {
        mega: "clamp(3.5rem, 12vw, 9.25rem)",
        hero: "clamp(2.5rem, 8vw, 6.75rem)",
        display: "clamp(2rem, 5vw, 3.125rem)",
        title: "clamp(1.25rem, 2vw, 1.375rem)",
      },
    },
    body: {
      family: "Georgia, 'Times New Roman', serif",
      sizes: { sm: "0.875rem", base: "1rem", lg: "1.125rem", xl: "1.25rem" },
    },
    label: {
      size: "0.875rem",
      tracking: "0.14em",
      transform: "uppercase" as const,
    },
  },
  motion: {
    // Captured libs: Lenis present; heavy CSS @keyframes for mask/marquee
    stack: ["Lenis", "CSS keyframes", "Framer Motion (reconstruction)"],
    ease: [0.22, 1, 0.36, 1] as const, // out-expo-ish
    easeMask: [0.65, 0, 0.35, 1] as const,
    stagger: 0.07,
    duration: 0.85,
    presets: {
      maskUp: "overflow-hidden + translateY(110%→0) ~0.9s",
      marquee: "horizontal infinite ~28s linear",
      slideLoop: "translateX 140%→0→-140% ~9s (captured k1z05j7r)",
      fadeSwap: "opacity pulse 0→1→0 ~4.5s (captured kvwecjm)",
      workHover: "media scale 1.03 / 0.7s ease-reform",
    },
  },
  layout: {
    max: "1600px",
    gutter: { mobile: "1.25rem", desktop: "2.5rem" },
    headerH: "4.5rem",
  },
  capture: {
    source: "https://www.reformcollective.com/",
    pages: 24,
    method: "cloakbrowser full-depth crawl + motion timeline",
    capturedAt: "2026-07-15",
  },
} as const;
