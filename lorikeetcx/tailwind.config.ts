import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FFFFFF",
        ink: "#0A0A0A",
        muted: "#5C5C5C",
        soft: "#F4F4F5",
        line: "#E8E8EA",
        accent: "#5B5CE2",
        accentSoft: "#EEF0FF",
        success: "#12B76A",
        chip: "#F8F8FA",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.03em",
        tightest: "-0.05em",
        label: "0.04em",
      },
      transitionTimingFunction: {
        lori: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "chip-in": {
          "0%": { opacity: "0", transform: "scale(0.92) translateY(12px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        floaty: "floaty 5s ease-in-out infinite",
        "chip-in": "chip-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        marquee: "marquee 40s linear infinite",
      },
      maxWidth: { site: "1200px", wide: "1400px" },
    },
  },
  plugins: [],
};
export default config;
