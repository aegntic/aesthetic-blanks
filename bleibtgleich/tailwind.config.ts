import type { Config } from "tailwindcss";

/**
 * Bleibtgleich tokens — warm paper / near-black ink / single orange accent.
 * Lowercase ultra-tight mega type, thin rule dividers, 12-col grid overlay.
 * Source stack: Webflow + GSAP + Three.js + Lenis (documented, not硬coded).
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#E8E5E0",
        paperDim: "#DED7D8",
        ink: "#0C0C0B",
        ash: "#2A2A28",
        mute: "#8A857E",
        haze: "rgba(12,12,11,0.08)",
        accent: "#FF4D00",
        white: "#FFFFFF",
        // shared-kit aliases
        base200: "#2A2A28",
        mist: "#8A857E",
        soft: "#DED7D8",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        tight: "-0.02em",
        label: "0.18em",
      },
      maxWidth: {
        site: "1440px",
      },
      borderWidth: {
        rule: "1px",
      },
      transitionTimingFunction: {
        bg: "cubic-bezier(0.43, 0.195, 0.02, 1)",
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
        vf: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "rule-x": { "0%": { transform: "scaleX(0)" }, "100%": { transform: "scaleX(1)" } },
        "rule-y": { "0%": { transform: "scaleY(0)" }, "100%": { transform: "scaleY(1)" } },
        "grid-in": { "0%": { transform: "scaleX(0)" }, "100%": { transform: "scaleX(1)" } },
        "selection-cycle": {
          "0%,100%": { backgroundColor: "#DED7D8" },
          "50%": { backgroundColor: "#FF0000" },
        },
      },
      animation: {
        "rule-x": "rule-x 3s cubic-bezier(0.16,1,0.3,1) both",
        "rule-y": "rule-y 8s cubic-bezier(0.16,1,0.3,1) both",
        "grid-in": "grid-in 0.35s cubic-bezier(0.43,0.195,0.02,1) both",
      },
      fontSize: {
        biglogo: [
          "clamp(3rem, 18vw, 16rem)",
          { lineHeight: "0.82", letterSpacing: "-0.05em", fontWeight: "500" },
        ],
        mega: [
          "clamp(2.5rem, 7vw, 6rem)",
          { lineHeight: "0.9", letterSpacing: "-0.035em", fontWeight: "500" },
        ],
        display: [
          "clamp(2rem, 5vw, 4rem)",
          { lineHeight: "0.92", letterSpacing: "-0.03em", fontWeight: "500" },
        ],
        lead: [
          "clamp(1.4rem, 3vw, 2.4rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "500" },
        ],
        year: [
          "clamp(3rem, 9vw, 8rem)",
          { lineHeight: "0.85", letterSpacing: "-0.035em", fontWeight: "500" },
        ],
      },
    },
  },
  plugins: [],
};

export default config;
