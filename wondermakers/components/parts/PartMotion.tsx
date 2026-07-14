"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Children, ReactNode, isValidElement, cloneElement } from "react";
import clsx from "clsx";

type MotionType =
  | "stagger"
  | "split"
  | "fade"
  | "slide"
  | "marquee"
  | "mega"
  | "gate"
  | "custom";

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

const easeWonder = [0.2, 0.6, 0.35, 1] as const;

/**
 * Wonder Makers motion reconstruction:
 * - split: overflow mask + translateY (captured duplicated headline pattern)
 * - marquee: horizontal infinite strip
 * - mega: large section title fade/slide
 * - gate: opacity section enter
 */
export function PartMotion({
  partId,
  type = "stagger",
  trigger = "inView",
  children,
  className,
  stagger = 0.08,
  duration = 0.9,
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
        <div className="inline-flex w-max animate-marquee will-change-transform">
          <div className="inline-flex shrink-0 items-center">{children}</div>
          <div className="inline-flex shrink-0 items-center" aria-hidden>
            {children}
          </div>
        </div>
      </div>
    );
  }

  if (type === "split") {
    return (
      <motion.div
        data-part={partId}
        className={className}
        initial="hidden"
        whileInView={trigger === "inView" ? "show" : undefined}
        animate={trigger === "load" ? "show" : undefined}
        viewport={{ once: true, margin: "-5%" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: stagger, delayChildren: 0.04 } },
        }}
      >
        {Children.map(children, (child) => (
          <div className="split-line overflow-hidden">
            <motion.div
              variants={{
                hidden: { y: "110%", opacity: 0.2 },
                show: {
                  y: "0%",
                  opacity: 1,
                  transition: { duration, ease: easeWonder },
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

  if (type === "mega" || type === "gate" || type === "fade") {
    return (
      <motion.div
        data-part={partId}
        className={className}
        initial={{ opacity: 0, y: type === "mega" ? 40 : 18 }}
        whileInView={trigger === "inView" ? { opacity: 1, y: 0 } : undefined}
        animate={trigger === "load" ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: type === "mega" ? 1 : duration, ease: easeWonder }}
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
        initial={{ opacity: 0, x: 32 }}
        whileInView={trigger === "inView" ? { opacity: 1, x: 0 } : undefined}
        animate={trigger === "load" ? { opacity: 1, x: 0 } : undefined}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration, ease: easeWonder }}
      >
        {children}
      </motion.div>
    );
  }

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
      {Children.map(children, (child) => {
        const wrap = (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration, ease: easeWonder },
              },
            }}
          >
            {isValidElement(child) ? cloneElement(child) : child}
          </motion.div>
        );
        return wrap;
      })}
    </motion.div>
  );
}
