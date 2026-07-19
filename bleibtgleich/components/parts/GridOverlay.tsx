"use client";
import { useEffect, useState } from "react";

const STORAGE_KEY = "bg-grid-open";
const TOGGLE_EVENT = "bg-grid-toggle";

/**
 * Fixed 12-column overlay (source `.general-grids`). Low-opacity ink columns
 * with mix-blend-difference; each column scaleX(0→1) on open. Toggled by the
 * nav grid-button via a CustomEvent so the overlay and the button stay decoupled.
 * State persists in localStorage (source: `gridClicked`).
 */
export function GridOverlay() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY) === "1");
    const onToggle = () => {
      setOpen((v) => {
        const next = !v;
        localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
        return next;
      });
    };
    window.addEventListener(TOGGLE_EVENT, onToggle);
    return () => window.removeEventListener(TOGGLE_EVENT, onToggle);
  }, []);

  return (
    <div
      data-part="{%part:grid-overlay%}"
      className="grid-overlay"
      data-open={open ? "true" : "false"}
      aria-hidden="true"
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="grid-overlay__col" />
      ))}
    </div>
  );
}

/** Dispatch from anywhere (the nav grid-button) to flip the overlay. */
export function toggleGridOverlay() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(TOGGLE_EVENT));
}
