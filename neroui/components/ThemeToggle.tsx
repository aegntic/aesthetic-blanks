"use client";

import { useEffect, useState } from "react";

/** Nero theme toggle. Dark luxury is default; 'light' = statuario marble.
 *  No-FOUC init runs in layout <head>; this flips + persists. */
export function ThemeToggle() {
  const [light, setLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLight(document.documentElement.classList.contains("light"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("light");
    document.documentElement.classList.toggle("light", next);
    document.documentElement.style.colorScheme = next ? "light" : "dark";
    try {
      localStorage.setItem("nero-theme", next ? "light" : "dark");
    } catch {
      /* ignore */
    }
    setLight(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? "Switch to dark marble" : "Switch to light marble"}
      className="flex h-10 w-10 items-center justify-center border border-[var(--gold)]/50 text-sm text-[var(--gold-light)] transition-colors hover:border-[var(--gold)]"
    >
      {mounted ? (light ? "◐" : "◑") : ""}
    </button>
  );
}
