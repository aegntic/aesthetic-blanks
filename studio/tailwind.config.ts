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
        mute: "#747474",
        mint: "#7eb8a8",
        accent: "#72a1c8",
      },
      fontFamily: {
        display: ["Tobias", "Georgia", "Times New Roman", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: { site: "1440px" },
    },
  },
  plugins: [],
};

export default config;
