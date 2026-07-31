import type { Config } from "tailwindcss";

/**
 * Nero — Veined Marble & Gold design tokens.
 *   polished nero marble · gold foil · didone serif · gallery restraint.
 * Nero defaults to dark luxury; `.light` flips to a statuario marble alt.
 * The `light:` variant targets elements inside `.light` (the alt theme).
 */
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        marble: {
          black: "rgb(var(--m-black) / <alpha-value>)",
          deep: "rgb(var(--m-deep) / <alpha-value>)",
          stone: "rgb(var(--m-stone) / <alpha-value>)",
        },
        gold: {
          DEFAULT: "var(--gold)",
          light: "var(--gold-light)",
          deep: "var(--gold-deep)",
        },
        cream: "var(--cream)",
        wine: "var(--wine)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "var(--muted)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      letterSpacing: { luxe: "0.3em" },
      transitionTimingFunction: { lux: "cubic-bezier(0.16, 1, 0.3, 1)" },
    },
  },
  plugins: [
    function ({ addVariant }: { addVariant: (n: string, s: string) => void }) {
      // element is inside the `.light` (statuario) theme
      addVariant("light", ".light &");
    },
  ],
};

export default config;
