/**
 * Design tokens — bleibtgleich.com (Mar 2026 webarchive snapshot)
 *
 * Source: Webflow + GSAP 3.12 + ScrollTrigger + Three.js + Lenis 0.2.28.
 * Single-designer portfolio, Kyiv. Brutalist editorial — warm paper, near-black
 * ink, single orange accent, lowercase everything, "truth" word reveals.
 *
 * Colors measured from source: orange #FF4D00 is the only explicit hue (Three.js
 * shader `lightOrange` mix factor 0.03 + ::selection cycle). Paper/ink approximated
 * from the light, warm, desaturated palette (selection bg #DED7D8).
 */
export const tokens = {
  colors: {
    paper: "#E8E5E0", // warm off-white ground
    paperDim: "#DED7D8", // selection / muted surface
    ink: "#0C0C0B", // near-black, warm
    ash: "#2A2A28",
    mute: "#8A857E", // warm grey body secondary
    haze: "rgba(12,12,11,0.08)", // blurred bg-text fields
    accent: "#FF4D00", // signature orange (shader tint + selection flash)
    white: "#FFFFFF",
  },
  // Semantic aliases used by the source's --_colors---prime / ---bg-prime vars
  // (project-hover storm: multiply on light vs difference on dark).
  semantics: {
    prime: "#0C0C0B", // multiply layer (dark over paper)
    bgPrime: "#E8E5E0", // difference layer (paper)
  },
  typography: {
    family: "Inter Tight, system-ui, sans-serif (source: Webflow shared grotesk; lowercase)",
    body: "15px / 1.5, lowercase",
    bigLogo: "clamp(3rem, 18vw, 16rem) — 'bleibtgleich' wordmark, lowercase, ultra-tight",
    h1: "clamp(2.5rem, 7vw, 6rem) lowercase tracking -0.03em — services bg-text grid",
    h2: "clamp(2rem, 5vw, 4rem) lowercase tracking -0.025em — section heads",
    h4: "clamp(1.4rem, 3vw, 2.4rem) lowercase — truth headings ('i'm just doing design')",
    year: "clamp(3rem, 9vw, 8rem) — f'22 / tp® marks",
  },
  motion: {
    smooth: "Lenis 0.2.28 (duration 1.2, exp easing) — approximated in SmoothScroll.tsx",
    heroWrap:
      ".page-wrap scale 0.01→1, rotate -48deg→0, blur 32em→0 over 3s power4.inOut, once per session",
    truth:
      "word-split → per-word span opacity 0→1, stagger from 'random' (0.18 truth / 0.08 long-truth / 0.1 symbol-truth)",
    ruleX: "horizontal rules width 0→100% over 3s power4.out on enter",
    ruleY: "vertical rule height 0→100% over 8s power4.out on enter",
    gridOverlay: "12-col overlay, each col scaleX(0→1) 0.35s cubic-bezier(.43,.195,.02,1) on toggle",
    projectStorm:
      "project-card hover → floating stills spawn at random viewport positions, height 20em, fade 0.3s in/out every 500ms; bg layer multiply(dark)/difference(paper)",
    shuffle: "link hover → text scramble, 2 iterations @ 80ms, restore on leave",
    selection: "::selection bg cycles #DED7D8 ↔ #ff0000 every 450ms (desktop)",
    webgl:
      "Three.js plane over vision bg image: mouse-data-texture distort + chromatic aberration + 0.03 orange tint (documented; blank ships static placeholder)",
    ease: [0.22, 1, 0.36, 1] as const,
  },
  layout: {
    max: "1440px",
    columns: 12,
    nav: "logo left · grid-toggle · about · socials (in/tg/mail) — mix-blend-difference",
    ground: "warm paper, ultra-tight lowercase mega type, thin rules dividing every section",
  },
} as const;
