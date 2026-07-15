"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BLANKS, ADVANTAGES } from "@/lib/blanks";
import { useExportUnlocked } from "@/lib/useExportUnlocked";

function LetterGrid({ hot }: { hot: string[] }) {
  const rows = [
    ["C", "P", "U", "E", "H"],
    ["T", "·", "·", "·", "J"],
    ["Q", "L", "V", "S", "F"],
    ["Y", "X", "0", "S", "Z"],
  ];
  return (
    <div className="letter-grid py-20 md:py-28">
      {rows.map((row, ri) =>
        row.map((ch, ci) => {
          const hotChar = ri === 1 && ci >= 1 && ci <= 3 ? hot[ci - 1] : null;
          return (
            <span key={`${ri}-${ci}`} className={hotChar ? "hot" : "ghost"}>
              {hotChar ?? ch}
            </span>
          );
        })
      )}
    </div>
  );
}

export default function HomePage() {
  const slides = useMemo(() => {
    const out: (typeof BLANKS)[] = [];
    for (let i = 0; i < BLANKS.length; i += 2) {
      out.push(BLANKS.slice(i, i + 2));
    }
    return out;
  }, []);
  const [slide, setSlide] = useState(0);
  const [activeAdv, setActiveAdv] = useState<string | null>("live");
  const [demoText, setDemoText] = useState("Click me — live edit free");
  const [showParts, setShowParts] = useState(false);
  const unlocked = useExportUnlocked();

  const pair = slides[slide] ?? [];

  return (
    <div data-live={showParts ? "1" : undefined}>
      <div className="fixed right-0 top-1/3 z-30 hidden md:block">
        <div className="bg-mint text-paper text-[10px] tracking-widest uppercase px-2 py-5">
          <span className="[writing-mode:vertical-rl] rotate-180">Pass-2 · Aki DNA</span>
        </div>
      </div>

      <section className="relative min-h-[72vh] flex flex-col justify-center">
        <p className="pointer-events-none absolute left-[17px] top-[40%] hidden text-sm text-mist md:block">
          Aesthetic
        </p>
        <p className="pointer-events-none absolute right-[17px] top-[40%] hidden text-sm text-mist md:block">
          Blanks
        </p>
        <LetterGrid hot={["A", "B", "S"]} />
      </section>

      <section className="mx-auto grid max-w-site grid-cols-1 md:grid-cols-3 gap-8 px-[17px] md:px-5 pb-16 items-end">
        <p className="text-sm text-mist leading-relaxed md:max-w-[14rem]">
          Capture a site.
          <br />
          Strip the brand.
          <br />
          Keep the motion.
        </p>
        <a href="#advantages" className="justify-self-center text-sm text-ink underline-offset-4 hover:underline">
          See advantages
        </a>
        <p className="text-sm text-mist leading-relaxed md:max-w-[14rem] md:justify-self-end md:text-right">
          Multi-page blanks.
          <br />
          Live edit free.
          <br />
          Export requires $$.
        </p>
      </section>

      {/* Interactive advantages — demo the product */}
      <section id="advantages" className="bg-sky text-ink">
        <div className="mx-auto max-w-site px-[17px] md:px-5 py-14 md:py-20">
          <div className="mb-8 flex justify-between text-sm text-ink/60">
            <span>Why</span>
            <span>Advantages · click to demo</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-10">
            {ADVANTAGES.map((a) => (
              <button
                key={a.id}
                type="button"
                data-on={activeAdv === a.id ? "1" : "0"}
                onClick={() => {
                  setActiveAdv(a.id);
                  if (a.id === "parts") setShowParts(true);
                  if (a.id === "live") setShowParts(true);
                  if (a.id !== "parts" && a.id !== "live") setShowParts(false);
                }}
                className="advantage-card text-left border border-ink/15 bg-paper/40 p-4 transition hover:border-ink/30"
              >
                <h2 className="text-base font-medium mb-1">{a.title}</h2>
                <p className="text-sm text-ink/75 leading-relaxed">{a.body}</p>
              </button>
            ))}
          </div>

          {/* Live demo pane */}
          <div className="border border-ink/20 bg-paper p-6 md:p-8 min-h-[10rem]">
            {activeAdv === "live" || activeAdv === "parts" ? (
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-mist mb-3">
                  {activeAdv === "parts" ? "part overlay demo" : "live edit demo"}
                </p>
                <p
                  data-block="{%part:demo-headline%}"
                  className="relative text-2xl md:text-3xl font-display text-quartz tracking-tight outline-none"
                  contentEditable
                  suppressContentEditableWarning
                  onInput={(e) => setDemoText(e.currentTarget.textContent || "")}
                >
                  {demoText}
                </p>
                <p className="mt-3 text-sm text-mute">
                  Stored in localStorage when you edit a blank. Export still gated.
                </p>
              </div>
            ) : activeAdv === "export" ? (
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-mist mb-3">export gate</p>
                <p className="text-2xl font-display text-quartz mb-2">
                  {unlocked ? "Unlocked — download from any blank" : "Export locked · $29"}
                </p>
                <Link href="/pricing" className="text-sm underline underline-offset-4">
                  {unlocked ? "Manage unlock →" : "Unlock export →"}
                </Link>
              </div>
            ) : activeAdv === "multipage" ? (
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-mist mb-3">multi-page IA</p>
                <p className="text-sm text-mute mb-3">
                  Aki pass-2 graph: home · about · 6 case studies. Open a blank and switch pages.
                </p>
                <Link href="/blank/akicreate" className="text-sm underline underline-offset-4">
                  Open akicreate blank →
                </Link>
              </div>
            ) : activeAdv === "motion" ? (
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-mist mb-3">motion DNA</p>
                <p className="text-sm leading-relaxed text-mute">
                  Captured stack: Webflow + GSAP + ScrollTrigger. Blank approximates letter fade, works
                  slider (3 dots / arrows), section gates — not a timeline clone.
                </p>
              </div>
            ) : (
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-mist mb-3">isolated ship</p>
                <p className="text-sm font-mono text-mute">
                  git sparse-checkout set akicreate && cd akicreate && npm i && npm run dev
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Collection as works slider (Aki DNA) */}
      <section id="collection" className="px-[17px] md:px-5 py-16 md:py-24">
        <div className="mx-auto max-w-site">
          <div className="mb-10 flex justify-between text-sm text-mist">
            <span>Featured</span>
            <span>Blanks · {BLANKS.length}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 min-h-[16rem]">
            {pair.map((blank) => (
              <BlankCard key={blank.slug} blank={blank} />
            ))}
            {pair.length === 1 && <div />}
          </div>

          <div className="mt-10 flex items-center justify-between">
            <button
              type="button"
              aria-label="Previous"
              className="p-3"
              onClick={() => setSlide((s) => (s - 1 + slides.length) % slides.length)}
            >
              <span className="slider-arrow prev" />
            </button>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setSlide(i)}
                  className={`slider-dot ${i === slide ? "active" : ""}`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next"
              className="p-3"
              onClick={() => setSlide((s) => (s + 1) % slides.length)}
            >
              <span className="slider-arrow" />
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-ink text-paper">
        <div className="mx-auto max-w-site px-[17px] md:px-5 py-16">
          <div className="letter-grid invert py-10">
            {["Q", "W", "E", "R", "T"].map((c) => (
              <span key={c} className="ghost">
                {c}
              </span>
            ))}
            {["L", "I", "V", "E", "·"].map((c) => (
              <span key={c} className="hot">
                {c}
              </span>
            ))}
            {["E", "D", "I", "T", "·"].map((c) => (
              <span key={`e${c}`} className="hot">
                {c}
              </span>
            ))}
            {["H", "J", "K", "L", "Z"].map((c) => (
              <span key={c} className="ghost">
                {c}
              </span>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-3 text-sm text-mist items-end">
            <Link href="/pricing" className="hover:text-paper">
              Unlock export
            </Link>
            <p className="text-center text-paper/90">Edit free. Ship when ready.</p>
            <p className="text-right">©2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BlankCard({ blank }: { blank: (typeof BLANKS)[0] }) {
  return (
    <Link href={`/blank/${blank.slug}`} className="group block">
      <div className="mb-3 flex items-baseline justify-between gap-3 text-sm">
        <span className="text-ink group-hover:opacity-60 transition">{blank.name}</span>
        <span className="text-mist">{blank.category}</span>
      </div>
      <div className="aspect-[4/3] bg-soft border border-ink/5 p-6 flex flex-col justify-between group-hover:border-ink/20 transition">
        <p className="text-xs font-mono uppercase tracking-[0.16em] text-mist">{blank.archetype}</p>
        <div>
          <p className="text-sm text-mute leading-relaxed max-w-sm">{blank.notes}</p>
          <p className="mt-4 text-xs text-mist font-mono">{blank.pages.length} pages · open →</p>
        </div>
      </div>
    </Link>
  );
}
