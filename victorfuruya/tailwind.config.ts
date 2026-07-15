import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f0f0f",
        paper: "#ffffff",
        ash: "#2f2f2f",
        base200: "#3a3a3a",
        mist: "#939393",
        mute: "#808080",
        soft: "#eeeeee",
        accent: "#ffffff",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.035em",
        tighter: "-0.02em",
      },
      maxWidth: {
        site: "1440px",
      },
      fontSize: {
        mega: ["clamp(3rem, 8vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.035em", fontWeight: "600" }],
        display: ["clamp(2.5rem, 5.4vw, 4.86rem)", { lineHeight: "0.95", letterSpacing: "-0.035em", fontWeight: "650" }],
        year: ["clamp(4rem, 10vw, 9rem)", { lineHeight: "0.85", letterSpacing: "-0.035em", fontWeight: "650" }],
      },
    },
  },
  plugins: [],
};

export default config;
