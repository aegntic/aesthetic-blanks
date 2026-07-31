"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { GlassPanel } from "@/components/GlassPanel";
import { MetalButton } from "@/components/MetalButton";
import { ThemeToggle } from "@/components/ThemeToggle";

// three.js is client-only.
const GlassHero = dynamic(
  () => import("@/components/GlassHero").then((m) => m.GlassHero),
  {
    ssr: false,
    loading: () => <div className="glass h-full min-h-[360px] w-full animate-pulse rounded-clay-lg" />,
  },
);

const ease = [0.16, 1, 0.3, 1] as const;
const rise = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease },
};

const NAV = ["Glass", "Metal", "Clay", "Tokens"];

// Sibling theme blanks in this repo. Empty href = the current theme (no self-link).
const THEMES = [
  { name: "ClayUI", href: "https://github.com/aegntic/aesthetic-blanks/tree/main/clayui" },
  { name: "GlassUI", href: "" },
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


export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-8 sm:py-12">
      {/* top bar */}
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="glass flex h-10 w-10 items-center justify-center rounded-clay-sm" aria-hidden>
            <span className="metal h-4 w-4 rounded-full" />
          </span>
          <span className="glass-text font-display text-2xl font-extrabold tracking-tight">
            GlassUI
          </span>
        </div>
        <nav className="glass-inset hidden items-center gap-1 rounded-full p-1 sm:flex" aria-label="Materials">
          {NAV.map((item) => (
            <span
              key={item}
              className="rounded-full px-4 py-1.5 text-sm font-semibold text-clay-ink/80"
            >
              {item}
            </span>
          ))}
        </nav>
        <ThemeToggle />
      </header>

      {/* hero */}
      <motion.section
        {...rise}
        className="mt-12 grid items-center gap-10 md:mt-20 md:grid-cols-2"
      >
        <div>
          <span className="clay-inset clay-text inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-clay-ink">
            Clay · Metal · Liquid Glass
          </span>
          <h1 className="glass-text mt-5 font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
            Three materials,
            <br />
            one surface.
          </h1>
          <p className="mt-5 max-w-md text-lg text-clay-ink/70">
            Soft clay substrate, polished metal accent, a liquid-glass overlay
            that refracts the aurora behind it. The hero is a real transmission
            shader — drag it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <MetalButton variant="polished">Get the metal</MetalButton>
            <button className="glass glass-pressable glass-text rounded-clay-sm px-6 py-3 font-semibold">
              Through the glass
            </button>
            <button className="clay clay-pressable clay-text rounded-clay-sm px-6 py-3 font-semibold text-clay-ink">
              Into the clay
            </button>
          </div>
        </div>
        <div className="h-[360px] w-full md:h-[460px]">
          <GlassHero className="h-full w-full" />
        </div>
      </motion.section>

      {/* materials showcase */}
      <section id="materials" className="mt-20 md:mt-28">
        <motion.h2 {...rise} className="metal-text font-display text-3xl font-bold tracking-tight">
          The three materials
        </motion.h2>
        <motion.p {...rise} className="mt-2 max-w-xl text-clay-ink/70">
          Each panel is built from one material. Stack them: clay holds, metal
          accents, glass floats above.
        </motion.p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {/* GLASS */}
          <motion.div {...rise}>
            <GlassPanel className="glass-pressable h-full">
              <span className="text-xs font-bold uppercase tracking-widest text-clay-cyan">Glass</span>
              <h3 className="glass-text mt-2 font-display text-2xl font-bold">Liquid overlay</h3>
              <p className="mt-2 text-sm text-clay-ink/70">
                Backdrop blur + saturation, a refraction rim, two specular
                highlights. It floats over whatever sits beneath it.
              </p>
              <button className="glass glass-pressable glass-text mt-5 rounded-clay-sm px-5 py-2.5 text-sm font-semibold">
                Frost it
              </button>
            </GlassPanel>
          </motion.div>

          {/* METAL */}
          <motion.div {...rise}>
            <GlassPanel className="glass-pressable h-full">
              <span className="text-xs font-bold uppercase tracking-widest text-clay-muted">Metal</span>
              <h3 className="metal-text mt-2 font-display text-2xl font-bold">Polished accent</h3>
              <p className="mt-2 text-sm text-clay-ink/70">
                A six-stop steel gradient that shifts on hover, or a fine brushed
                grain. Press to dent.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <MetalButton variant="polished" className="px-4 py-2 text-sm">
                  Polished
                </MetalButton>
                <MetalButton variant="brushed" className="px-4 py-2 text-sm">
                  Brushed
                </MetalButton>
              </div>
            </GlassPanel>
          </motion.div>

          {/* CLAY */}
          <motion.div {...rise}>
            <div className="clay h-full rounded-clay p-6">
              <span className="clay-text text-xs font-bold uppercase tracking-widest text-clay-warm">Clay</span>
              <h3 className="clay-text mt-2 font-display text-2xl font-bold text-clay-ink">Soft substrate</h3>
              <p className="mt-2 text-sm text-clay-muted">
                Matte surface, pillowy shadows, rounded forms. Everything rests
                on it — press to sink.
              </p>
              <button className="clay clay-pressable clay-text mt-5 rounded-clay-sm px-5 py-2.5 text-sm font-semibold text-clay-ink">
                Press the clay
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* token strip */}
      <motion.section {...rise} className="mt-16">
        <GlassPanel className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <h3 className="glass-text font-display text-xl font-bold">Stack them</h3>
            <p className="text-sm text-clay-ink/70">Clay panel · metal button · glass badge — one composition.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="glass glass-text rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
              Live
            </span>
            <MetalButton variant="polished">Ship it</MetalButton>
          </div>
        </GlassPanel>
      </motion.section>

      {/* footer — sibling themes + brand sites + centered logo */}
      <footer className="mt-24 border-t border-clay-dark/30 pt-8 pb-10">
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
                <span key={t.name} className="glass-text font-display font-bold">
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
