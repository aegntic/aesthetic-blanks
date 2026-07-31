import type { Config } from "tailwindcss";

/**
 * Soft Industrial Clay tokens. Translates the validated material
 * (materials/soft-clay) into a web design language:
 *   matte clay surface · pillowy soft shadows · rounded forms · press-to-sink.
 *
 * Palette mirrors the Blender render: matte clay neutral, cyan->navy gradient,
 * warm clay accents. Fonts: Nunito (rounded soft sans) + Baloo 2 (rounded
 * display) — rounded terminals match the claymation feel.
 */
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        clay: {
          base: "rgb(var(--c-base) / <alpha-value>)",
          bg: "rgb(var(--c-bg) / <alpha-value>)",
          surface: "rgb(var(--c-surface) / <alpha-value>)",
          light: "rgb(var(--c-light) / <alpha-value>)",
          dark: "rgb(var(--c-dark) / <alpha-value>)",
          ink: "rgb(var(--c-ink) / <alpha-value>)",
          muted: "rgb(var(--c-muted) / <alpha-value>)",
          cyan: "rgb(var(--c-cyan) / <alpha-value>)",
          navy: "rgb(var(--c-navy) / <alpha-value>)",
          warm: "rgb(var(--c-warm) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        clay: "1.5rem",
        "clay-sm": "1rem",
        "clay-lg": "2rem",
        "clay-xl": "2.75rem",
      },
      boxShadow: {
        // pillowy clay: top highlight + ambient diffuse + contact drop
        raised: "var(--clay-raised)",
        pressed: "var(--clay-pressed)",
        soft: "0 18px 40px -14px rgba(43,39,36,0.30)",
      },
      backgroundImage: {
        "clay-surface": "var(--clay-surface-grad)",
        "clay-cyan-navy": "linear-gradient(160deg, #4FB3C4 0%, #16263A 100%)",
      },
      transitionTimingFunction: {
        clay: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        morph: {
          "0%,100%": { borderRadius: "42% 58% 63% 37% / 41% 44% 56% 59%" },
          "50%": { borderRadius: "58% 42% 37% 63% / 56% 59% 41% 44%" },
        },
      },
      animation: {
        morph: "morph 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
