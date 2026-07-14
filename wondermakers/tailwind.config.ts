import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F6F6",
        ink: "#0A0A0A",
        muted: "#6D6D6D",
        soft: "#D1D1D1",
        panel: "#F9F9F9",
        accent: "#0A0A0A",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tightest: "-0.058em",
        label: "0.06em",
      },
      transitionTimingFunction: {
        wonder: "cubic-bezier(0.2, 0.6, 0.35, 1)",
        quart: "cubic-bezier(0.8, 0, 0.2, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-50%,0,0)" },
        },
        "hello-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "hello-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "split-up": {
          "0%": { transform: "translateY(110%)" },
          "100%": { transform: "translateY(0%)" },
        },
        "line-reveal": {
          "0%": { clipPath: "inset(0 0 100% 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "hello-in": "hello-in 0.5s ease both",
        "split-up": "split-up 0.95s cubic-bezier(0.2, 0.6, 0.35, 1) both",
        "line-reveal": "line-reveal 0.9s cubic-bezier(0.2, 0.6, 0.35, 1) both",
      },
      maxWidth: {
        site: "1600px",
      },
    },
  },
  plugins: [],
};

export default config;
