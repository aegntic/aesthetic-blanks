"use client";
import { useRef, useState, useMemo } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import clsx from "clsx";

type Variant = "truth" | "long" | "symbol";

interface Props {
  partId: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  /** Rebrand prompt — role + original nuance + chunk + tone + avoid + "Return only". */
  prompt: string;
  /** Placeholder rendered (and animated) until a real value is supplied. */
  previewText: string;
  /** truth = word split · 0.18 random stagger · long = word · 0.08 · symbol = letter · 0.1 */
  variant?: Variant;
}

const EACH: Record<Variant, number> = { truth: 0.18, long: 0.08, symbol: 0.1 };

/**
 * The signature bleibtgleich reveal: text is split into words (or letters for
 * `symbol`), each unit fades in with a RANDOM per-unit delay on first enter.
 * Source uses GSAP `stagger: { from: "random" }`; we approximate with random
 * per-unit transition delays. `truth` / `long-truth` / `symbol-truth` in capture.
 */
export function TruthText({
  partId,
  as: Tag = "p",
  className,
  prompt,
  previewText,
  variant = "truth",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px -8% 0px" });
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);
  const Comp = Tag as any;

  const units = useMemo(() => {
    if (variant === "symbol") {
      return previewText.split("").map((ch, i) => ({ key: i, text: ch, space: ch === " " }));
    }
    return previewText.split(/(\s+)/).map((tok, i) => ({
      key: i,
      text: tok,
      space: /^\s+$/.test(tok),
    }));
  }, [previewText, variant]);

  const each = EACH[variant];

  return (
    <div ref={ref} className={clsx("relative group", className)} data-part={partId}>
      <Comp
        data-truth={variant}
        data-part-id={partId}
        className={clsx(variant === "symbol" ? "symbol-truth" : variant === "long" ? "long-truth" : "truth")}
      >
        {units.map((u) =>
          u.space ? (
            <span key={u.key}>{u.text}</span>
          ) : (
            <motion.span
              key={u.key}
              data-w=""
              initial={{ opacity: 0 }}
              animate={reduce || inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{
                duration: 0.01,
                delay: reduce ? 0 : Math.random() * each * (units.length > 20 ? 6 : 10),
                ease: "linear",
              }}
              style={{ display: "inline-block" }}
            >
              {u.text}
            </motion.span>
          ),
        )}
      </Comp>

      <button
        type="button"
        onClick={() => setShow((v) => !v)}
        className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 text-[9px] bg-ink/90 text-paper px-1.5 py-0.5 rounded z-20 transition"
      >
        prompt
      </button>
      {show && (
        <pre className="mt-2 p-3 text-[11px] leading-relaxed bg-ink text-paper/90 rounded-lg overflow-auto max-h-56 border border-ink/20 whitespace-pre-wrap z-30 relative font-mono normal-case tracking-normal">
          {prompt}
        </pre>
      )}
    </div>
  );
}
