"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

const SESSION_KEY = "bg-hero-animated";

/**
 * The source `.page-wrap` mount animation: scale 0.01→1, rotate -48deg→0,
 * blur 32em→0 over 3s (power4.inOut), once per session (sessionStorage gated).
 * We approximate the power curve with framer's [0.16,1,0.3,1] ease.
 */
export function HeroWrap({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const done = sessionStorage.getItem(SESSION_KEY) === "1";
    if (done || reduce) {
      sessionStorage.setItem(SESSION_KEY, "1");
      setAnimate(true);
    } else {
      // next tick so the initial state paints first
      const id = requestAnimationFrame(() => {
        setAnimate(true);
        sessionStorage.setItem(SESSION_KEY, "1");
      });
      return () => cancelAnimationFrame(id);
    }
  }, [reduce]);

  return (
    <motion.div
      data-part="{%part:hero-page-wrap%}"
      initial={
        reduce
          ? false
          : { opacity: 0, scale: 0.01, rotate: -48, filter: "blur(32em)" }
      }
      animate={
        reduce
          ? { opacity: 1, scale: 1, rotate: 0, filter: "blur(0em)" }
          : animate
            ? { opacity: 1, scale: 1, rotate: 0, filter: "blur(0em)" }
            : { opacity: 0, scale: 0.01, rotate: -48, filter: "blur(32em)" }
      }
      transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: "transform, filter, opacity" }}
    >
      {children}
    </motion.div>
  );
}
