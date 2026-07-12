"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  partId: string;
  type?: "stagger" | "parallax" | "fade" | "slide" | "custom";
  trigger?: "load" | "inView" | "scroll" | "hover";
  factor?: number;
  children: ReactNode;
  className?: string;
}

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function PartMotion({
  partId,
  type = "stagger",
  trigger = "inView",
  children,
  className,
}: Props) {
  // Simple high-quality default for GSAP-style text reveals
  if (type === "stagger") {
    return (
      <motion.div
        data-part={partId}
        className={className}
        variants={staggerContainer}
        initial="hidden"
        whileInView={trigger === "inView" ? "show" : undefined}
        animate={trigger === "load" ? "show" : undefined}
        viewport={{ once: true, margin: "-10%" }}
      >
        <motion.div variants={staggerItem}>{children}</motion.div>
      </motion.div>
    );
  }

  // Parallax / other types can be expanded later
  return (
    <div data-part={partId} className={className}>
      {children}
    </div>
  );
}
