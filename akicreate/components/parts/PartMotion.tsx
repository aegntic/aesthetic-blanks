"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, Children, isValidElement, cloneElement } from "react";
import clsx from "clsx";

type MotionType =
  | "stagger"
  | "mask"
  | "fade"
  | "slide"
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
  /** stagger delay between children (seconds) */
  stagger?: number;
  duration?: number;
}

const easeReform = [0.22, 1, 0.36, 1] as const;

/**
 * Reverse-engineered Reform Collective motion:
 * - mask: vertical wipe (CSS translateY 110%→0) matching captured keyframes
 * - marquee: infinite horizontal strip (details club motif)
 * - stagger: out-expo child cascade
 * - fade: opacity reveal
 */
export function PartMotion({
  partId,
  type = "stagger",
  trigger = "inView",
  children,
  className,
  stagger = 0.07,
  duration = 0.85,
}: Props) {
  const reduce = useReducedMotion();

  if (reduce || type === "custom") {
    return (
      <div data-part={partId} className={className}>
        {children}
      </div>
    );
  }

  if (type === "marquee") {
    return (
      <div data-part={partId} className={clsx("overflow-hidden whitespace-nowrap", className)}>
        <div className="inline-flex w-max animate-marquee-x will-change-transform">
          <div className="inline-flex shrink-0">{children}</div>
          <div className="inline-flex shrink-0" aria-hidden>
            {children}
          </div>
        </div>
      </div>
    );
  }

  if (type === "mask") {
    return (
      <motion.div
        data-part={partId}
        className={clsx("overflow-hidden", className)}
        initial="hidden"
        whileInView={trigger === "inView" ? "show" : undefined}
        animate={trigger === "load" ? "show" : undefined}
        viewport={{ once: true, margin: "-8%" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
        }}
      >
        {Children.map(children, (child) => (
          <motion.div
            className="overflow-hidden"
            variants={{
              hidden: {},
              show: {},
            }}
          >
            <motion.div
              variants={{
                hidden: { y: "110%" },
                show: {
                  y: "0%",
                  transition: { duration, ease: easeReform },
                },
              }}
            >
              {child}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    );
  }

  if (type === "fade") {
    return (
      <motion.div
        data-part={partId}
        className={className}
        initial={{ opacity: 0, y: 16 }}
        whileInView={trigger === "inView" ? { opacity: 1, y: 0 } : undefined}
        animate={trigger === "load" ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration, ease: easeReform }}
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
        initial={{ opacity: 0, x: 40 }}
        whileInView={trigger === "inView" ? { opacity: 1, x: 0 } : undefined}
        animate={trigger === "load" ? { opacity: 1, x: 0 } : undefined}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration, ease: easeReform }}
      >
        {children}
      </motion.div>
    );
  }

  // default: stagger
  return (
    <motion.div
      data-part={partId}
      className={className}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: stagger, delayChildren: 0.08 },
        },
      }}
      initial="hidden"
      whileInView={trigger === "inView" ? "show" : undefined}
      animate={trigger === "load" ? "show" : undefined}
      viewport={{ once: true, margin: "-10%" }}
    >
      {Children.map(children, (child) => {
        if (!isValidElement(child)) {
          return (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration, ease: easeReform },
                },
              }}
            >
              {child}
            </motion.div>
          );
        }
        return (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 28 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration, ease: easeReform },
              },
            }}
          >
            {cloneElement(child)}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
