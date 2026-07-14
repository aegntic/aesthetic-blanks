/**
 * Design + motion tokens from lorikeetcx.ai capture (Framer + Lenis + WebGL).
 * Scroll DNA: floating status chips scale/opacity, metric cards y-translate,
 * workflow nodes scale, ticket cards scale stack, fixed nav, sticky CTA.
 */
export const tokens = {
  colors: {
    paper: "#FFFFFF",
    ink: "#0A0A0A",
    muted: "#5C5C5C",
    soft: "#F4F4F5",
    line: "#E8E8EA",
    accent: "#5B5CE2",
    accentSoft: "#EEF0FF",
    success: "#12B76A",
  },
  typography: {
    hero: "clamp(2.75rem, 7vw, 6rem)", // ~96px captured
    h2: "clamp(2rem, 4.5vw, 4.7rem)", // ~75px
    metric: "clamp(2.5rem, 5vw, 4.5rem)", // ~72px
    body: "1.25rem",
    small: "0.875rem",
  },
  motion: {
    stack: ["Framer", "Lenis", "WebGL canvas", "scroll-linked transform/opacity"],
    ease: [0.22, 1, 0.36, 1] as const,
    presets: {
      statusChips: "absolute chips scale+opacity on scroll (Payroll plan upgraded…)",
      metrics: "97%/60%/99% cards with y-translate enter",
      workflowNodes: "node labels scale up mid-scroll (Triage ticket, Gather…)",
      ticketStack: "resolved ticket cards scale 0.7→1 stack",
      stickyNav: "fixed product/industries/customers nav",
      lenis: "smooth scroll present on most pages",
      webgl: "decorative canvases on home hero",
    },
  },
  capture: {
    source: "https://www.lorikeetcx.ai/",
    pages: 45,
    method: "cloakbrowser full-depth + scroll motion timeline",
    capturedAt: "2026-07-15",
    stackHint: "Framer site, Lenis, WebGL, outcome-priced AI CX",
  },
} as const;
