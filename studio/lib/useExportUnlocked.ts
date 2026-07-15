"use client";

import { useEffect, useState } from "react";

/** Avoid SSR mismatch for unlock flag */
export function useExportUnlocked() {
  const [unlocked, setUnlocked] = useState(false);
  useEffect(() => {
    const sync = () => setUnlocked(window.localStorage.getItem("ab-studio-export-unlocked") === "1");
    sync();
    window.addEventListener("ab-unlock", sync);
    return () => window.removeEventListener("ab-unlock", sync);
  }, []);
  return unlocked;
}
