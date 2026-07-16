"use client";

import { useEffect } from "react";

/**
 * Lightweight CSS-class-only smooth scroll approximation.
 * The original site had no Lenis/GSAP (Nuxt/Vue + CSS transitions).
 * This adds the `lenis` class for Tailwind utilities and an opt-in RAF easing
 * loop (disabled by default). Agents can replace the body with real `lenis`
 * when branding.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.add("lenis");
    // Prefer reduced-motion users skip artificial easing.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      return () => {
        document.documentElement.classList.remove("lenis");
      };
    }

    let raf = 0;
    let current = window.scrollY;
    let target = window.scrollY;
    let active = false;

    const onWheel = (e: WheelEvent) => {
      // Only soft-smooth modest deltas; leave trackpads mostly native.
      if (Math.abs(e.deltaY) < 4) return;
      e.preventDefault();
      target = Math.max(
        0,
        Math.min(
          document.documentElement.scrollHeight - window.innerHeight,
          target + e.deltaY * 0.85,
        ),
      );
      if (!active) {
        active = true;
        loop();
      }
    };

    const loop = () => {
      current += (target - current) * 0.12;
      if (Math.abs(target - current) < 0.4) {
        current = target;
        active = false;
        window.scrollTo(0, current);
        return;
      }
      window.scrollTo(0, current);
      raf = requestAnimationFrame(loop);
    };

    // Disabled by default for predictability in templates; enable with data-smooth="1" on <html>
    const enabled = document.documentElement.dataset.smooth === "1";
    if (enabled) {
      window.addEventListener("wheel", onWheel, { passive: false });
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("wheel", onWheel);
      document.documentElement.classList.remove("lenis");
    };
  }, []);

  return <>{children}</>;
}
