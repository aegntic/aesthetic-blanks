/**
 * Design tokens — victorfuruya.com
 * Stack: Vite SPA, Satoshi, Lenis-class scroll, letter-split headlines, hero scale
 */
export const tokens = {
  colors: {
    base100: "#ffffff",
    base200: "#3a3a3a",
    base300: "#0f0f0f",
    ash: "#2f2f2f",
    mist: "#939393",
    mute: "#808080",
    soft: "#eeeeee",
    black: "#000000",
  },
  typography: {
    family: "Satoshi, system-ui, sans-serif",
    body: "16px",
    display: "clamp(2.5rem, 5.4vw, 4.86rem) weight 650 tracking -0.035em",
    mega: "clamp(3rem, 8vw, 6rem) weight 600 — full-screen menu",
    year: "clamp(4rem, 10vw, 9rem) weight 650 — portfolio year mark",
    manifesto: "56px weight 800 tracking -1.12px",
  },
  motion: {
    scroll: "Lenis-class fixed scroll shell",
    heroScale: "full-bleed hero image scales ~1.5→1.0 on scroll (captured first pass)",
    letterSplit: "per-character / dual-line split reveal on Make It Last + Carve it Into Memory",
    menu: "full-screen overlay mega type 96px",
    workSlider: "full-bleed project slides with index counters",
    stickyManifesto: "manifesto__previews sticky mid-scroll",
    ease: [0.22, 1, 0.36, 1] as const,
    duration: 0.9,
  },
  layout: {
    max: "1440px",
    nav: "name left · Works, About, Reach out right (opens mega menu)",
    heroPlate: "centered black card over B&W portrait",
  },
} as const;
