"use client";

import { useEffect, useState } from "react";

/** Clay theme toggle. No-FOUC init runs in layout <head>; this just flips + persists. */
export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("clay-theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
    setDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="clay clay-pressable clay-text-carved flex h-10 w-10 items-center justify-center rounded-clay-sm text-lg text-clay-ink"
    >
      {mounted ? (dark ? "☀" : "☾") : ""}
    </button>
  );
}
