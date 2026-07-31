"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { Loader } from "@/components/Loader";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useNeroMotion } from "@/lib/useNeroMotion";

const THEMES = [
  { name: "ClayUI", href: "https://github.com/aegntic/aesthetic-blanks/tree/main/clayui" },
  { name: "GlassUI", href: "https://github.com/aegntic/aesthetic-blanks/tree/main/glassui" },
  { name: "Nero", href: "" },
];
const SITES = [
  { name: "aegntic.ai", href: "https://aegntic.ai" },
  { name: "socialskills.ninja", href: "https://socialskills.ninja" },
  { name: "clawreform.com", href: "https://clawreform.com" },
  { name: "cldcde.cc", href: "https://cldcde.cc" },
  { name: "prompt.fail", href: "https://prompt.fail" },
  { name: "karen.city", href: "https://karen.city" },
  { name: "hlfstr.com", href: "https://hlfstr.com" },
];
const MAISON = [
  { k: "I · Pietra", h: "Marble", p: "Veined nero stone, deep and cool to the touch. The substrate everything rests on." },
  { k: "II · Oro", h: "Gilded", p: "Hairline gold rules and engraved foil wordmarks. Restraint, not opulence." },
  { k: "III · Vino", h: "Wine", p: "A single deep accent — the one note of color in a stone gallery." },
];

export default function Page() {
  const [loaded, setLoaded] = useState(false);
  useNeroMotion(loaded);

  // hero intro — plays once the loader curtain lifts
  useEffect(() => {
    if (!loaded) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set("[data-hero]", { opacity: 1, y: 0 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.from("[data-hero]", {
        opacity: 0,
        y: 48,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.05,
      });
    });
    return () => ctx.revert();
  }, [loaded]);

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}

      <div className="relative z-10">
        {/* nav */}
        <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--gold)]/15 bg-marble-black/60 backdrop-blur-md">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <span className="gold-text font-display text-xl italic tracking-wide">Nero</span>
            <div className="hidden items-center gap-9 text-[11px] uppercase tracking-luxe text-muted sm:flex">
              <a href="#maison" className="transition-colors hover:text-[var(--gold-light)]">Maison</a>
              <a href="#stone" className="transition-colors hover:text-[var(--gold-light)]">Stone</a>
              <a href="#atelier" className="transition-colors hover:text-[var(--gold-light)]">Atelier</a>
            </div>
            <ThemeToggle />
          </nav>
        </header>

        {/* hero */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
          {/* parallax marble depth layers */}
          <div data-parallax data-speed="0.25" data-parallax-scope className="pointer-events-none absolute inset-0 -z-10 opacity-60"
            style={{ backgroundImage: "var(--marble-veins)", backgroundSize: "140% 140%" }} />
          <div data-parallax data-speed="-0.15" className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(201,162,74,0.18), transparent 60%)" }} />

          <p data-hero className="text-[11px] uppercase tracking-luxe text-[var(--gold)]">
            <span className="mr-2 inline-block h-px w-8 align-middle bg-[var(--gold)]/60" />
            Pietra &amp; Oro · Material 03
            <span className="ml-2 inline-block h-px w-8 align-middle bg-[var(--gold)]/60" />
          </p>

          <h1 data-hero className="mt-7 max-w-4xl font-display text-[clamp(3rem,9vw,7rem)] font-medium leading-[0.95] text-ink">
            Carved in <span className="gold-text italic">stone,</span>
            <br />
            lined in <span className="gold-text italic">gold.</span>
          </h1>

          <p data-hero className="mt-7 max-w-xl font-display text-lg italic leading-relaxed text-muted sm:text-xl">
            Polished nero marble veined with gold. Gallery restraint, art-deco composure —
            the quiet of a room that costs more than it says.
          </p>

          <div data-hero className="hairline my-9 w-24" />

          <a data-hero href="#maison" className="gold-btn px-10 py-3.5 font-sans text-xs">
            Enter the Maison
          </a>
        </section>

        {/* maison — material cards */}
        <section id="maison" className="mx-auto max-w-6xl px-6 py-32">
          <div className="mb-14 text-center">
            <p data-reveal className="text-[11px] uppercase tracking-luxe text-[var(--gold)]">The Maison</p>
            <h2 data-reveal className="mt-4 font-display text-4xl font-medium text-ink sm:text-5xl">
              Three materials, <span className="gold-text italic">one composure.</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {MAISON.map((m) => (
              <div key={m.k} data-reveal className="marble-slab p-8">
                <div className="relative z-10 flex h-full flex-col">
                  <span className="text-[11px] uppercase tracking-luxe text-[var(--gold)]">{m.k}</span>
                  <h3 className="mt-3 font-display text-3xl italic text-ink">{m.h}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{m.p}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* stone statement band */}
        <section id="stone" className="relative overflow-hidden py-40">
          <div data-parallax data-speed="0.4" className="pointer-events-none absolute inset-0 -z-10 opacity-40"
            style={{ backgroundImage: "var(--marble-veins)", backgroundSize: "160% 160%" }} />
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p data-reveal className="font-display text-3xl font-light italic leading-[1.4] text-ink sm:text-5xl sm:leading-[1.3]">
              “What looks like <span className="gold-text">luxury</span> is usually just
              <span className="gold-text"> restraint</span>, executed with <span className="gold-text">conviction</span>.”
            </p>
          </div>
        </section>

        {/* atelier / cta */}
        <section id="atelier" className="mx-auto max-w-6xl px-6 pb-32">
          <div data-reveal className="marble-slab flex flex-col items-center gap-7 px-10 py-16 text-center">
            <div className="relative z-10 flex flex-col items-center gap-7">
              <p className="text-[11px] uppercase tracking-luxe text-[var(--gold)]">The Atelier</p>
              <h2 className="max-w-2xl font-display text-4xl font-medium text-ink sm:text-5xl">
                Commission a <span className="gold-text italic">surface</span> in stone.
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-muted">
                Nero is an unbranded blank — swap the wordmark, copy, and accent. The marble
                geometry, gold foil, and motion stay the identity.
              </p>
              <a href="https://aegntic.ai" target="_blank" rel="noopener noreferrer" className="gold-btn px-10 py-3.5 font-sans text-xs">
                Commission it
              </a>
            </div>
          </div>
        </section>

        {/* footer — sibling themes + brand sites + centered logo */}
        <footer className="border-t border-[var(--gold)]/15 py-12">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-7 px-6 text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs uppercase tracking-luxe text-muted">
              <span className="text-[var(--gold)]/50">Themes</span>
              {THEMES.map((t) =>
                t.href ? (
                  <a key={t.name} href={t.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--gold-light)]">{t.name}</a>
                ) : (
                  <span key={t.name} className="gold-text font-display italic">{t.name}</span>
                ),
              )}
            </div>
            <nav aria-label="Sites" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs uppercase tracking-luxe text-muted">
              {SITES.map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--gold-light)]">{s.name}</a>
              ))}
            </nav>
            <div className="mt-2 flex flex-col items-center gap-2">
              <div className="flex justify-center">
                {/* aegntic.ai logo — white on dark (default), black on light (statuario) */}
                <img src="/ae-logo-white.png" alt="aegntic.ai" width={40} height={40} className="h-10 w-10 light:hidden" />
                <img src="/ae-logo-black.png" alt="aegntic.ai" width={40} height={40} className="hidden h-10 w-10 light:block" />
              </div>
              <span className="text-[11px] uppercase tracking-luxe text-muted">
                design — <a href="https://aegntic.ai" target="_blank" rel="noopener noreferrer" className="font-display italic normal-case tracking-normal text-[var(--gold-light)]">Mattae Cooper · aegntic.ai</a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
