/**
 * Design tokens from wondermakers.digital capture (Astro + fluid type system).
 * Original face: codec-pro (substituted with system display stack in blank).
 * Motion: split/duplicate headline reveals, marquee, hello-in/out, section opacity gates,
 * Swiper carousels, optional WebGL canvas, light/dark theme.
 */
export const tokens = {
  colors: {
    paper: "#F6F6F6",
    ink: "#0A0A0A",
    muted: "#6D6D6D",
    soft: "#D1D1D1",
    panel: "#F9F9F9",
    neutral500: "#6D6D6D",
    neutral600: "#5D5D5D",
    white: "#FFFFFF",
  },
  typography: {
    family: "codec-pro (source) → system-ui display stack",
    trackingTight: "-0.058em",
    leading: 1.15,
    scales: {
      hero: "clamp(3.5rem, 8.7vw, 7.9rem)", // ~126px desktop captured
      mega: "clamp(4rem, 12vw, 15rem)", // ~240px section titles
      display: "clamp(1.5rem, 3vw, 2.25rem)",
      title: "1.53rem",
      body: "0.924rem",
      small: "0.866rem",
    },
  },
  motion: {
    stack: ["CSS keyframes", "Swiper", "WebGL canvas (home)", "scroll-gated opacity/transform"],
    ease: [0.2, 0.6, 0.35, 1] as const, // --tw-ease
    easeQuart: [0.8, 0, 0.2, 1] as const,
    presets: {
      splitHeadline: "duplicated lines + overflow mask translateY 110%→0 (hello-in companion)",
      marquee: "translate3d(-100%) infinite linear ~32s",
      sectionGate: "opacity 0→1 on enter; some sections translateY while sticky",
      themeSwap: "Light/Dark class toggle on document",
      swiper: "team / testimonials / awards carousels",
      webgl: "home hero decorative canvas (optional PartCanvas)",
    },
    keyframesCaptured: ["hello-in", "hello-out", "marquee", "spin", "swiper-preloader-spin"],
  },
  layout: {
    max: "1600px",
    navbarHeight: "clamp(2.625rem, calc(-0.089rem + 4.241vw), 5rem)",
    gutter: "clamp(0.75rem, calc(0.464rem + 0.446vw), 1rem)",
  },
  capture: {
    source: "https://www.wondermakers.digital/",
    pages: 29,
    method: "cloakbrowser full-depth crawl + motion timeline",
    capturedAt: "2026-07-15",
    stackHint: "Astro + Swiper + fluid clamp type system + light/dark",
  },
} as const;
