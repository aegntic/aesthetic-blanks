"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Children, ReactNode, useRef } from "react";
import clsx from "clsx";

type MotionType = "stagger" | "fade" | "slide" | "chips" | "metric" | "stack" | "nodes" | "marquee" | "custom";
type Trigger = "load" | "inView";

interface Props {
  partId: string;
  type?: MotionType;
  trigger?: Trigger;
  children: ReactNode;
  className?: string;
  stagger?: number;
  duration?: number;
}

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Lorikeet scroll/animation reconstruction (Framer + Lenis capture):
 * chips — floating status cards scale/opacity
 * metric — big % cards with y enter
 * stack — ticket cards scale stack
 * nodes — workflow node scale pop
 */
export function PartMotion({
  partId,
  type = "stagger",
  trigger = "inView",
  children,
  className,
  stagger = 0.08,
  duration = 0.75,
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const chipScale = useTransform(scrollYProgress, [0.1, 0.45, 0.8], [0.92, 1.02, 0.96]);
  const chipOp = useTransform(scrollYProgress, [0.05, 0.25, 0.85], [0, 1, 0.85]);
  const stackScale = useTransform(scrollYProgress, [0.15, 0.55], [0.72, 1]);

  if (reduce || type === "custom") {
    return (
      <div data-part={partId} className={className}>
        {children}
      </div>
    );
  }

  if (type === "marquee") {
    return (
      <div data-part={partId} className={clsx("overflow-hidden", className)}>
        <div className="inline-flex w-max animate-marquee">
          <div className="inline-flex shrink-0">{children}</div>
          <div className="inline-flex shrink-0" aria-hidden>
            {children}
          </div>
        </div>
      </div>
    );
  }

  if (type === "chips" || type === "nodes") {
    return (
      <motion.div
        ref={ref}
        data-part={partId}
        className={className}
        style={{ scale: chipScale, opacity: chipOp }}
      >
        {children}
      </motion.div>
    );
  }

  if (type === "stack") {
    return (
      <motion.div ref={ref} data-part={partId} className={className} style={{ scale: stackScale }}>
        {children}
      </motion.div>
    );
  }

  if (type === "metric" || type === "fade" || type === "slide") {
    return (
      <motion.div
        data-part={partId}
        className={className}
        initial={{ opacity: 0, y: type === "slide" ? 28 : 18 }}
        whileInView={trigger === "inView" ? { opacity: 1, y: 0 } : undefined}
        animate={trigger === "load" ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, margin: "-12%" }}
        transition={{ duration, ease }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      data-part={partId}
      className={className}
      initial="hidden"
      whileInView={trigger === "inView" ? "show" : undefined}
      animate={trigger === "load" ? "show" : undefined}
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: stagger } },
      }}
    >
      {Children.map(children, (child) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration, ease } },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
