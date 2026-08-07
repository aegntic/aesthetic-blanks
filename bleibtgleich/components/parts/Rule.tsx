"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import clsx from "clsx";

/**
 * Thin ink divider that grows on first enter.
 * Source: horizontal rules width 0→100% (3s power4.out), vertical rule height
 * 0→100% (8s). Encoded in globals.css `.rule-x` / `.rule-y` + `.is-in`.
 */
export function Rule({
  axis = "x",
  className,
  partId,
}: {
  axis?: "x" | "y";
  className?: string;
  partId?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px -5% 0px" });
  return (
    <div
      ref={ref}
      data-part={partId ?? `{%part:rule-${axis}%}`}
      className={clsx(axis === "x" ? "rule-x" : "rule-y", inView && "is-in", className)}
    />
  );
}
