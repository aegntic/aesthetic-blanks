/**
 * Design tokens — Aki Create (https://akicreate.com)
 * Measured via CloakBrowser full-depth + nuances pass.
 * Stack: Webflow + GSAP 3.12 + ScrollTrigger + jQuery
 */
export const tokens = {
  colors: {
    primary: "#ffffff",
    secondary: "#050505",
    tertiary: "#c3c3c3",
    quaternary: "#313131",
    aboutBg: "#72a1c8",
    aboutBgAlt: "#7db2de",
    mute: "#747474",
    soft: "#f7f7f7",
    mint: "#7eb8a8",
  },
  typography: {
    body: {
      family: '"PP Neue Montreal", Arial, system-ui, sans-serif',
      size: "16px",
      lineHeight: "24px",
    },
    nav: { size: "16px", markSize: "24px" },
    letter: {
      family: "Tobias, Georgia, 'Times New Roman', serif",
      size: "clamp(42px, 43px, 44px)",
      color: "#313131",
      weight: 400,
    },
    caption: { size: "12px", lineHeight: "18px" },
  },
  motion: {
    stack: "GSAP + ScrollTrigger (Webflow IX)",
    ease: [0.22, 1, 0.36, 1] as const,
    duration: 0.85,
    works: "Webflow slider — 3 pairs, dots, prev/next hairlines",
    letter: "matrix load fade + soft parallax shell",
  },
  layout: {
    max: "1440px",
    gutter: "17px",
    nav: "About | ※ | Works",
  },
} as const;
