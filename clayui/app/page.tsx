"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ClayButton } from "@/components/ClayButton";
import { ClayCard } from "@/components/ClayCard";
import { ClayInput } from "@/components/ClayInput";
import { ClayToggle } from "@/components/ClayToggle";
import { ClayNav } from "@/components/ClayNav";

// three.js is client-only
const ClayHero = dynamic(
  () => import("@/components/ClayHero").then((m) => m.ClayHero),
  {
    ssr: false,
    loading: () => <div className="clay h-full min-h-[360px] w-full animate-pulse rounded-clay-lg" />,
  },
);

const ease = [0.16, 1, 0.3, 1] as const;
const rise = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease },
};

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div {...rise}>
      <ClayCard className={className}>{children}</ClayCard>
    </motion.div>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-8 sm:py-12">
      {/* top bar */}
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="clay h-9 w-9 rounded-clay-sm" aria-hidden />
          <span className="font-display text-2xl font-extrabold tracking-tight text-clay-ink">
            ClayUI
          </span>
        </div>
        <ClayNav items={["Overview", "System", "Hero", "Tokens"]} />
      </header>

      {/* hero */}
      <motion.section
        {...rise}
        className="mt-12 grid items-center gap-10 md:mt-20 md:grid-cols-2"
      >
        <div>
          <span className="clay-inset inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-clay-muted">
            Soft Industrial Clay
          </span>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-clay-ink sm:text-6xl">
            Everything is clay.
          </h1>
          <p className="mt-5 max-w-md text-lg text-clay-ink-soft">
            A soft-clay design system where every surface is matte, every shadow is
            pillowy, and every press sinks into the clay. The hero is a real
            deformable 3D clay blob.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ClayButton variant="gradient">Press the clay</ClayButton>
            <ClayButton variant="ghost">View tokens</ClayButton>
          </div>
        </div>
        <div className="h-[360px] w-full md:h-[460px]">
          <ClayHero className="h-full w-full" />
        </div>
      </motion.section>

      {/* system showcase */}
      <section id="system" className="mt-20 md:mt-28">
        <motion.h2 {...rise} className="font-display text-3xl font-bold tracking-tight text-clay-ink">
          The clay system
        </motion.h2>
        <motion.p {...rise} className="mt-2 max-w-xl text-clay-ink-soft">
          Every primitive inherits the same tactile identity — no redesign per element.
        </motion.p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h3 className="font-display text-xl font-bold text-clay-ink">Buttons</h3>
            <p className="mt-1 text-sm text-clay-ink-soft">Press to sink into clay.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <ClayButton>Default</ClayButton>
              <ClayButton variant="gradient">Gradient</ClayButton>
              <ClayButton variant="ghost">Ghost</ClayButton>
            </div>
          </Card>

          <Card>
            <h3 className="font-display text-xl font-bold text-clay-ink">Toggle</h3>
            <p className="mt-1 text-sm text-clay-ink-soft">Knob slides across a clay well.</p>
            <div className="mt-5">
              <ClayToggle />
            </div>
          </Card>

          <Card>
            <h3 className="font-display text-xl font-bold text-clay-ink">Nav</h3>
            <p className="mt-1 text-sm text-clay-ink-soft">Active item sinks in.</p>
            <div className="mt-5">
              <ClayNav items={["Home", "Work", "About"]} />
            </div>
          </Card>

          <Card className="sm:col-span-2 lg:col-span-2">
            <h3 className="font-display text-xl font-bold text-clay-ink">Field</h3>
            <p className="mt-1 text-sm text-clay-ink-soft">Text sits in an impression in the clay.</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <ClayInput placeholder="name@clay.studio" />
              <ClayButton variant="gradient" className="shrink-0">
                Subscribe
              </ClayButton>
            </div>
          </Card>

          <motion.div {...rise}>
            <div className="clay-gradient flex h-full flex-col p-7">
              <h3 className="font-display text-xl font-bold text-white">Gradient clay</h3>
              <p className="mt-1 text-sm text-white/80">
                The cyan→navy variant straight from the material spec.
              </p>
              <div className="mt-5">
                <span className="clay-pressable inline-flex items-center justify-center rounded-clay-sm bg-white/15 px-6 py-3 font-semibold text-white">
                  Use it
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="mt-24 border-t border-clay-dark/40 pt-8 pb-4 text-sm text-clay-ink-soft">
        ClayUI · Soft Industrial Clay · every element is clay
        <span className="mx-2 text-clay-dark/50">·</span>
        design by{" "}
        <a href="https://aegntic.ai" className="font-semibold text-clay-ink hover:text-clay-cyan">
          Mattae Cooper
        </a>
      </footer>
    </main>
  );
}
