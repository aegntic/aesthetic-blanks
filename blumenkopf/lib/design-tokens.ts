/**
 * Design tokens reverse-engineered from blumenkopf.spatzek.studio capture.
 *
 * Source identity: "Blumenkopf" — a self-aware editorial design-studio template
 * ("BUY THIS WEBSITE" banner in-footer). Light mode, Swiss-line-divided grid.
 *
 * Captured CSS vars (--background-color, --main-color, --lines-color, --borderline):
 *   paper #e8ebec · ink #000 · 3px solid black line dividers everywhere.
 * Captured fonts (commercial): Suisse Intl (neo-grotesque sans) + SangBleu OG (high-
 *   contrast transitional serif). Free fallbacks below: Inter Tight + Newsreader.
 * Captured stack: Nuxt/Vue, NO GSAP / Lenis / Framer / Webflow — motion is CSS +
 *   Vue transitions (scroll-gated opacity gates, Hooper carousel opacity-fade).
 */
export const tokens = {
  colors: {
    paper: "#E8EBEC", // --background-color
    ink: "#000000", // --main-color / --lines-color
    line: "#000000", // 3px dividers (--borderline: 3px #000 solid)
    muted: "#5C5C5C", // secondary copy on paper
    accent: "#E67E22", // vibrant orange — "buy this website" marquee banner
    olive: "#7D8A74", // hero photographic backdrop tone
    clay: "#C75D4B", // secondary editorial accent (case media)
    white: "#FFFFFF",
  },
  line: {
    width: "3px",
    style: "solid",
    color: "#000000",
  },
  typography: {
    // Originals: Suisse Intl (sans) + SangBleu OG (serif). Free pairs loaded in layout.
    sans: { family: "var(--font-sans)", originals: ["Suisse Intl", "Suisse Int'l"] },
    serif: { family: "var(--font-serif)", originals: ["SangBleu OG", "SangBleu OG23"] },
    display: {
      // Oversized mixed-case wordmark ("BlumenKOPF"), uppercase section labels, tight tracking.
      scales: {
        wordmark: "clamp(3.5rem, 14vw, 13rem)", // hero "BlumenKOPF" class — huge, mixed-case
        mega: "clamp(2.5rem, 9vw, 7rem)",
        hero: "clamp(2rem, 6vw, 4.5rem)",
        title: "clamp(1.5rem, 2.5vw, 2.25rem)",
      },
    },
    label: {
      size: "0.75rem",
      tracking: "0.18em",
      transform: "uppercase" as const,
    },
  },
  motion: {
    // No JS scroll lib captured — all motion is CSS / Vue transition derived.
    stack: ["CSS transitions", "Vue <transition> (reconstructed as framer-motion)", "Hooper carousel"],
    ease: [0.16, 1, 0.3, 1] as const, // out-expo
    stagger: 0.06,
    duration: 0.6,
    presets: {
      gate: "opacity 0→1 on scroll enter ~0.6s ease-out (captured scroll-gated divs op 0→0.2→1)",
      carouselFade: "Hooper slide opacity 0.5s cross-fade (captured .slider-item-image transition)",
      marquee: "orange 'buy this website' banner — horizontal infinite ~18s linear",
      lineGrow: "3px divider scaleX 0→1 on enter (editorial line motif)",
    },
  },
  layout: {
    max: "1600px",
    gutter: { mobile: "1.25rem", desktop: "2rem" },
    headerH: "4rem",
  },
  capture: {
    source: "https://blumenkopf.spatzek.studio/about",
    pages: 10,
    method: "CloakBrowser full-depth crawl + deep_nuance pass-2",
    capturedAt: "2026-07-16",
  },
} as const;
