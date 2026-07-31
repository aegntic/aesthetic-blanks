"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/**
 * Loading sequence. A full-screen marble slab holds while a gold counter
 * climbs 0→100, then two marble panels split apart (curtain reveal) to expose
 * the site. Calls onDone when fully clear. Honors reduced motion (skips).
 */
export function Loader({ onDone }: { onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const counter = useRef<HTMLSpanElement>(null);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setPct(100);
      onDone();
      return;
    }
    const ctx = gsap.context(() => {
      const obj = { v: 0 };
      gsap.to(obj, {
        v: 100,
        duration: 2.2,
        ease: "power2.inOut",
        onUpdate: () => setPct(Math.round(obj.v)),
      });
      const tl = gsap.timeline({ delay: 0.1 });
      tl.from(".loader-line", { scaleX: 0, duration: 2.2, ease: "power2.inOut" }, 0)
        .to(".loader-word", { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.08 }, 0.2)
        .to(".loader-veil", { yPercent: -100, duration: 1.1, ease: "power4.inOut" }, "+=0.15")
        .to(".loader-veil-2", { yPercent: 100, duration: 1.1, ease: "power4.inOut" }, "<")
        .add(() => onDone());
    }, root);
    return () => ctx.revert();
  }, [onDone]);

  return (
    <div ref={root} className="pointer-events-none fixed inset-0 z-[100]">
      {/* two marble panels that split to reveal the site */}
      <div className="loader-veil absolute inset-0 marble-slab" />
      <div className="loader-veil-2 absolute inset-0 marble-slab" style={{ transform: "translateY(0%)" }} />
      {/* center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
        <div className="overflow-hidden">
          <span className="loader-word gold-text block translate-y-6 font-display text-5xl italic opacity-0" style={{ fontFamily: "var(--font-display)" }}>
            Nero
          </span>
        </div>
        <div className="h-px w-48 overflow-hidden bg-[var(--gold)]/20">
          <div className="loader-line h-full origin-left bg-[var(--gold)]" />
        </div>
        <span ref={counter} className="font-sans text-xs tracking-[0.4em] text-[var(--gold-light)]" style={{ fontFamily: "var(--font-sans)" }}>
          {pct}%
        </span>
      </div>
    </div>
  );
}
