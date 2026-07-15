import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        paper: "#ffffff",
        mist: "#c3c3c3",
        quartz: "#313131",
        soft: "#f7f7f7",
        sky: "#72a1c8",
        skyAlt: "#7db2de",
        mute: "#747474",
        mint: "#7eb8a8",
        accent: "#72a1c8",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "Times New Roman", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        site: "1440px",
      },
      letterSpacing: {
        label: "0.12em",
        tightest: "-0.02em",
      },
      keyframes: {
        "marquee-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "marquee-x": "marquee-x 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
