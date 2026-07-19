import type { Config } from "tailwindcss";

/**
 * Blumenkopf tokens. Paper #E8EBEC + ink #000 + 3px black line dividers,
 * orange #E67E22 marquee accent. Suisse Intl / SangBleu OG originals mapped to
 * free Inter Tight + Newsreader via next/font in app/layout.tsx.
 */
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#E8EBEC",
        ink: "#000000",
        line: "#000000",
        muted: "#5C5C5C",
        accent: "#E67E22",
        olive: "#7D8A74",
        clay: "#C75D4B",
        white: "#FFFFFF",
        // grayscale aliases kept so the shared Part kit (WorkCard etc.) resolves.
        black2: "#1A1A1A",
        black3: "#161616",
        black4: "#3A3A3A",
        cream: "#D9D6CC",
        cream2: "#C7C5AF",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "Times New Roman", "serif"],
        body: ["var(--font-serif)", "Georgia", "Times New Roman", "serif"],
      },
      letterSpacing: {
        tighter: "-0.03em",
        tightest: "-0.05em",
        label: "0.18em",
        wider: "0.06em",
      },
      fontWeight: {
        thin: "300",
        light: "350",
        book: "400",
        medium: "500",
        bold: "600",
      },
      maxWidth: {
        site: "1600px",
      },
      borderWidth: {
        line: "3px",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
        gate: "cubic-bezier(0.33, 1, 0.68, 1)",
      },
      keyframes: {
        "gate-in": {
          "0%": { opacity: "0", transform: "translateY(1.25rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "carousel-fade": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "marquee-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "line-grow": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        "wordmark-in": {
          "0%": { opacity: "0", transform: "translateY(0.4em)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "gate-in": "gate-in 0.6s cubic-bezier(0.33, 1, 0.68, 1) both",
        "carousel-fade": "carousel-fade 0.5s ease-out both",
        "marquee-x": "marquee-x 22s linear infinite",
        "line-grow": "line-grow 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "wordmark-in": "wordmark-in 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
