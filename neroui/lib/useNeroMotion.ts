"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Wires up the Nero motion system:
 *   - Lenis buttery smooth scroll, synced to the GSAP ticker (so ScrollTrigger
 *     reads the eased scroll position).
 *   - Parallax on any [data-parallax] element (data-speed < 1 drifts slower).
 *   - Scroll-reveal on [data-reveal] elements (fade + rise).
 * Cleans everything up on unmount. Honors prefers-reduced-motion.
 */
export function useNeroMotion(active: boolean) {
  useEffect(() => {
    if (!active) return;
    if (prefersReduced()) {
      gsap.set("[data-reveal]", { opacity: 1, y: 0 });
      return;
    }

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true, wheelMultiplier: 1 });
    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);
    const ticker = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      // parallax layers
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.speed || "0.3");
        gsap.to(el, {
          yPercent: speed * 100,
          ease: "none",
          scrollTrigger: {
            trigger: el.closest("[data-parallax-scope]") || el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // scroll reveals — staggered within each section
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    });

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      lenis.off("scroll", onScroll);
      gsap.ticker.remove(ticker);
      lenis.destroy();
    };
  }, [active]);
}
