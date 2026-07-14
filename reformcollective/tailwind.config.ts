import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F9F8EE",
        ink: "#0A0A0A",
        black2: "#27282E",
        black3: "#212121",
        black4: "#4A4C5B",
        muted: "#6B6758",
        cream: "#C9B6A0",
        cream2: "#C7C5AF",
        accent: "#FE3712",
        videored: "#EA4C2C",
        red2: "#D00401",
        blue1: "#0006F2",
        yellow1: "#F3DC11",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Georgia", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tightest: "-0.06em",
        label: "0.14em",
      },
      fontWeight: {
        thin: "200",
        light: "300",
      },
      maxWidth: {
        site: "1600px",
      },
      transitionTimingFunction: {
        reform: "cubic-bezier(0.22, 1, 0.36, 1)",
        mask: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      keyframes: {
        "mask-up": {
          "0%": { transform: "translateY(110%)" },
          "100%": { transform: "translateY(0%)" },
        },
        "marquee-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-swap": {
          "0%": { opacity: "0" },
          "35%": { opacity: "1" },
          "70%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
        "slide-loop": {
          "0%": { transform: "translateX(140%)" },
          "33.333%": { transform: "translateX(0)" },
          "66.666%": { transform: "translateX(-140%)" },
          "100%": { transform: "translateX(-140%)" },
        },
      },
      animation: {
        "mask-up": "mask-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        "marquee-x": "marquee-x 28s linear infinite",
        "fade-swap": "fade-swap 4.5s ease-in-out infinite",
        "slide-loop": "slide-loop 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
