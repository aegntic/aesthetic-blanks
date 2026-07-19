"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PartImage } from "./PartImage";
import { IMAGE_STYLE, type Project } from "@/lib/work";

/**
 * Project card with the signature bleibtgleich hover "image-storm":
 * on enter (desktop only), floating stills spawn at random viewport positions
 * fading in/out on a cycle, behind a tinted layer and a two-line heading.
 * Encrypted entries render a masked still + "i can't show it" copy.
 *
 * Source spawns ~10 stills @ 500ms; blank caps at 4 styled stills for portability.
 * Brand pass: swap styled stills for real PartImage dropzones / CMS media.
 */
export function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState<number[]>([]);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const encrypted = project.encrypted;

  useEffect(() => {
    if (!active || reduce) {
      if (timer.current) clearInterval(timer.current);
      setVisible([]);
      return;
    }
    let i = 0;
    const max = 4;
    timer.current = setInterval(() => {
      i += 1;
      setVisible((prev) => [...prev, i].slice(-max));
    }, 500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [active, reduce]);

  const stills = encrypted
    ? [IMAGE_STYLE.encryptedMask, IMAGE_STYLE.encryptedMask, IMAGE_STYLE.encryptedMask]
    : [IMAGE_STYLE.projectStill, IMAGE_STYLE.projectStill, IMAGE_STYLE.projectStill];

  return (
    <div
      data-part={`{%part:project-card-${project.index}%}`}
      className="grid__item relative"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="grid__item-img overflow-hidden bg-ash">
        {encrypted ? (
          <div className="flex h-full w-full items-center justify-center bg-paperDim text-mute">
            <span className="font-mono text-[10px] uppercase tracking-label">[ encrypted ]</span>
          </div>
        ) : (
          <PartImage
            partId={`{%part:project-${project.index}-cover%}`}
            aspectRatio={4 / 3}
            objectFit="cover"
            placeholder={`${IMAGE_STYLE.projectStill} — ${project.label}`}
            className="h-full w-full border-0 bg-ash"
          />
        )}
      </div>

      <div className="grid__item-caption mt-3">
        <p className="text-sm text-ink/80">
          <span data-label={project.label}>{project.label}</span>
        </p>
      </div>

      {/* hover storm (desktop, non-reduced) */}
      {active && !reduce && (
        <div className="pointer-events-none fixed inset-0 z-[70]" aria-hidden="true">
          <motion.div
            className="absolute inset-0"
            style={{ background: "var(--ink)", mixBlendMode: encrypted ? "difference" : "multiply" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: encrypted ? 0.2 : 0.4 }}
            transition={{ duration: 0.5, ease: "power2.out" }}
          />
          <div className="absolute left-4 top-4 max-w-[min(28rem,80vw)] md:left-8 md:top-8">
            <p className="font-mono text-[10px] uppercase tracking-label text-paper/70">
              [ {project.label} ]
            </p>
            <div className="mt-3 font-sans text-display lowercase text-paper leading-[0.95]">
              <motion.p
                initial={{ y: "1.2em", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                {encrypted ? "i can't show it." : "see it live."}
              </motion.p>
              <motion.p
                initial={{ y: "1.2em", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {encrypted ? "but trust me, it exists." : "before it's lost."}
              </motion.p>
            </div>
          </div>

          {visible.map((id, idx) => {
            const src = stills[idx % stills.length];
            const left = 8 + ((id * 37) % 60);
            const top = 18 + ((id * 53) % 55);
            return (
              <motion.div
                key={id}
                className="storm-img"
                style={{
                  left: `${left}vw`,
                  top: `${top}vh`,
                  background: encrypted ? "var(--paper-dim)" : "var(--ash)",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: [0, 1, 1, 0], scale: 1 }}
                transition={{ duration: 1.8, times: [0, 0.15, 0.85, 1], ease: "easeInOut" }}
              >
                <div className="flex h-full w-[14em] items-center justify-center p-3 text-center font-mono text-[9px] uppercase tracking-label text-paper/50">
                  {encrypted ? "[ masked ]" : src.slice(0, 48)}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
