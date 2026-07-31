"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ClayButton } from "@/components/ClayButton";
import { ClayCard } from "@/components/ClayCard";
import { ClayInput } from "@/components/ClayInput";
import { ClayToggle } from "@/components/ClayToggle";
import { ClayNav } from "@/components/ClayNav";
import { ThemeToggle } from "@/components/ThemeToggle";

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

// Sibling theme blanks in this repo. Empty href = the current theme (no self-link).
const THEMES = [
  { name: "ClayUI", href: "" },
  { name: "GlassUI", href: "https://github.com/aegntic/aesthetic-blanks/tree/main/glassui" },
  { name: "Nero", href: "https://github.com/aegntic/aesthetic-blanks/tree/main/neroui" },
];

// Brand sites — same set on every theme's footer.
const SITES = [
  { name: "aegntic.ai", href: "https://aegntic.ai" },
  { name: "socialskills.ninja", href: "https://socialskills.ninja" },
  { name: "clawreform.com", href: "https://clawreform.com" },
  { name: "cldcde.cc", href: "https://cldcde.cc" },
  { name: "prompt.fail", href: "https://prompt.fail" },
  { name: "karen.city", href: "https://karen.city" },
  { name: "hlfstr.com", href: "https://hlfstr.com" },
];

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
          <span className="clay-text font-display text-2xl font-extrabold tracking-tight text-clay-ink">
            ClayUI
          </span>
        </div>
        <ClayNav items={["Overview", "System", "Hero", "Tokens"]} />
        <ThemeToggle />
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
          <h1 className="clay-text mt-5 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-clay-ink sm:text-6xl">
            Everything is clay.
          </h1>
          <p className="mt-5 max-w-md text-lg text-clay-muted">
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
        <motion.h2 {...rise} className="clay-text font-display text-3xl font-bold tracking-tight text-clay-ink">
          The clay system
        </motion.h2>
        <motion.p {...rise} className="mt-2 max-w-xl text-clay-muted">
          Every primitive inherits the same tactile identity — no redesign per element.
        </motion.p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h3 className="clay-text font-display text-xl font-bold text-clay-ink">Buttons</h3>
            <p className="mt-1 text-sm text-clay-muted">Press to sink into clay.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <ClayButton>Default</ClayButton>
              <ClayButton variant="gradient">Gradient</ClayButton>
              <ClayButton variant="ghost">Ghost</ClayButton>
              <ClayButton variant="dark">Carved</ClayButton>
            </div>
          </Card>

          <Card>
            <h3 className="clay-text font-display text-xl font-bold text-clay-ink">Toggle</h3>
            <p className="mt-1 text-sm text-clay-muted">Knob slides across a clay well.</p>
            <div className="mt-5">
              <ClayToggle />
            </div>
          </Card>

          <Card>
            <h3 className="clay-text font-display text-xl font-bold text-clay-ink">Nav</h3>
            <p className="mt-1 text-sm text-clay-muted">Active item sinks in.</p>
            <div className="mt-5">
              <ClayNav items={["Home", "Work", "About"]} />
            </div>
          </Card>

          <Card className="sm:col-span-2 lg:col-span-2">
            <h3 className="clay-text font-display text-xl font-bold text-clay-ink">Field</h3>
            <p className="mt-1 text-sm text-clay-muted">Text sits in an impression in the clay.</p>
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

      {/* footer — sibling themes + brand sites + centered logo */}
      <footer className="mt-24 border-t border-clay-dark/40 pt-8 pb-10">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* sibling themes */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-clay-ink/40">Themes</span>
            {THEMES.map((t) =>
              t.href ? (
                <a
                  key={t.name}
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-clay-ink/70 transition-colors hover:text-clay-cyan"
                >
                  {t.name}
                </a>
              ) : (
                <span key={t.name} className="clay-text font-display font-bold text-clay-ink">
                  {t.name}
                </span>
              ),
            )}
          </div>

          {/* brand sites */}
          <nav
            aria-label="Sites"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm"
          >
            {SITES.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-clay-ink/70 transition-colors hover:text-clay-cyan"
              >
                {s.name}
              </a>
            ))}
          </nav>

          {/* centered logo at the bottom */}
          <div className="mt-2 flex flex-col items-center gap-2">
            <div className="flex justify-center">
              {/* aegntic.ai logo — black on light, white on dark */}
              <img
                src="/ae-logo-black.png"
                alt="aegntic.ai"
                width={40}
                height={40}
                className="h-10 w-10 dark:hidden"
              />
              <img
                src="/ae-logo-white.png"
                alt="aegntic.ai"
                width={40}
                height={40}
                className="hidden h-10 w-10 dark:block"
              />
            </div>
            <span className="text-xs text-clay-ink/50">
              design by{" "}
              <a
                href="https://aegntic.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-clay-ink/70 hover:text-clay-cyan"
              >
                Mattae Cooper · aegntic.ai
              </a>
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
