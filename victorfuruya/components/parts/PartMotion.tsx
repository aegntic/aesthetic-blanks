"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ReactNode, Children, isValidElement, cloneElement, useRef } from "react";
import clsx from "clsx";

type MotionType =
  | "stagger"
  | "mask"
  | "split"
  | "fade"
  | "slide"
  | "mega"
  | "gate"
  | "scale"
  | "marquee"
  | "parallax"
  | "custom";

type Trigger = "load" | "inView" | "scroll" | "hover";

interface Props {
  partId: string;
  type?: MotionType;
  trigger?: Trigger;
  factor?: number;
  children: ReactNode;
  className?: string;
  stagger?: number;
  duration?: number;
}

const easeVF = [0.22, 1, 0.36, 1] as const;

/**
 * Motion DNA (victorfuruya capture):
 * - scale: hero full-bleed image scales on scroll (~1.5→1)
 * - split: dual-line / letter-line overflow wipe (Make It Last)
 * - mega: full-screen menu labels
 * - gate: section opacity enter
 * - mask/fade/stagger: standard portfolio reveals
 */
export function PartMotion({
  partId,
  type = "stagger",
  trigger = "inView",
  children,
  className,
  stagger = 0.08,
  duration = 0.9,
  factor = 0.5,
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1 + factor, 1]);

  if (reduce || type === "custom") {
    return (
      <div data-part={partId} className={className}>
        {children}
      </div>
    );
  }

  if (type === "scale") {
    return (
      <div ref={ref} data-part={partId} className={clsx("overflow-hidden", className)}>
        <motion.div style={{ scale }} className="h-full w-full will-change-transform">
          {children}
        </motion.div>
      </div>
    );
  }

  if (type === "marquee") {
    return (
      <div data-part={partId} className={clsx("overflow-hidden whitespace-nowrap", className)}>
        <div className="inline-flex w-max animate-pulse">{children}</div>
      </div>
    );
  }

  if (type === "split" || type === "mask") {
    return (
      <motion.div
        data-part={partId}
        className={className}
        initial="hidden"
        whileInView={trigger === "inView" ? "show" : undefined}
        animate={trigger === "load" ? "show" : undefined}
        viewport={{ once: true, margin: "-8%" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: stagger, delayChildren: 0.04 } },
        }}
      >
        {Children.map(children, (child) => (
          <div className="split-line overflow-hidden">
            <motion.div
              variants={{
                hidden: { y: "110%", opacity: 0.15 },
                show: {
                  y: "0%",
                  opacity: 1,
                  transition: { duration, ease: easeVF },
                },
              }}
            >
              {child}
            </motion.div>
          </div>
        ))}
      </motion.div>
    );
  }

  if (type === "mega") {
    return (
      <motion.div
        data-part={partId}
        className={className}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeVF, staggerChildren: 0.06 }}
      >
        {children}
      </motion.div>
    );
  }

  if (type === "gate" || type === "fade") {
    return (
      <motion.div
        data-part={partId}
        className={className}
        initial={{ opacity: 0, y: 20 }}
        whileInView={trigger === "inView" ? { opacity: 1, y: 0 } : undefined}
        animate={trigger === "load" ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration, ease: easeVF }}
      >
        {children}
      </motion.div>
    );
  }

  if (type === "slide") {
    return (
      <motion.div
        data-part={partId}
        className={className}
        initial={{ opacity: 0, x: 48 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration, ease: easeVF }}
      >
        {children}
      </motion.div>
    );
  }

  // stagger default
  return (
    <motion.div
      data-part={partId}
      className={className}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: stagger, delayChildren: 0.06 },
        },
      }}
      initial="hidden"
      whileInView={trigger === "inView" ? "show" : undefined}
      animate={trigger === "load" ? "show" : undefined}
      viewport={{ once: true, margin: "-10%" }}
    >
      {Children.map(children, (child) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 28 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration, ease: easeVF },
            },
          }}
        >
          {isValidElement(child) ? cloneElement(child) : child}
        </motion.div>
      ))}
    </motion.div>
  );
}
