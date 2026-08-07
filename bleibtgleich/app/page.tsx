import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";
import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartImage } from "@/components/parts/PartImage";
import { TruthText } from "@/components/parts/TruthText";
import { Rule } from "@/components/parts/Rule";
import { GridOverlay } from "@/components/parts/GridOverlay";
import { HeroWrap } from "@/components/parts/HeroWrap";
import { ProjectCard } from "@/components/parts/ProjectCard";
import { PROJECTS, SERVICES, IMAGE_STYLE } from "@/lib/work";

export default function HomePage() {
  return (
    <main className="relative">
      <GridOverlay />
      <PartNav />

      {/* ── HERO (page-wrap scale/rotate/blur-in) ───────────────────── */}
      <PartSection
        partId="{%part:section-hero%}"
        label="Hero page-wrap"
        className="relative min-h-screen px-4 pt-20 md:px-6"
      >
        <HeroWrap>
          <div className="relative mx-auto max-w-site">
            <Rule axis="x" />

            <div className="py-6">
              <TruthText
                partId="{%part:hero-truth-top%}"
                as="p"
                variant="truth"
                className="text-sm lowercase text-ink/80"
                prompt={`Hero top truth line for [USER_PROJECT].
Original nuance: "another burnt-out soul behind the screen" — wry self-deprecation, lowercase.
Chunk size: 6–8 words.
Tone: deadpan confession.
Avoid: motivational clichés.
Return only the line.`}
                previewText="another burnt-out soul behind the screen"
              />
            </div>

            {/* big logo + blurred bg role text */}
            <div className="relative py-10">
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="bg-field text-center text-h1 lowercase text-ink/50">
                  ux/ui designer, [first][last], based in kyiv, work
                </div>
              </div>
              <h1 className="relative text-biglogo lowercase text-ink leading-[0.82]">
                <PartText
                  partId="{%part:hero-logo%}"
                  as="span"
                  prompt={`Hero wordmark for [USER_PROJECT].
Original nuance: "bleibtgleich" — single lowercase word, ultra-tight, fills the row.
Chunk size: 1 word.
Avoid: slogans, taglines.
Return only the wordmark.`}
                  previewText="bleibtgleich"
                />
              </h1>
            </div>

            <div className="py-6">
              <TruthText
                partId="{%part:hero-truth-bot%}"
                as="p"
                variant="truth"
                className="text-sm lowercase text-ink/80"
                prompt={`Hero bottom truth line for [USER_PROJECT].
Original nuance: "scroll, sigh, and exit." — imperative, lowercase, resigned.
Chunk size: 4–5 words.
Tone: deadpan.
Return only the line.`}
                previewText="scroll, sigh, and exit."
              />
            </div>

            <Rule axis="x" />
          </div>
        </HeroWrap>
      </PartSection>

      {/* ── SERVICES (bg-text field + truth) ────────────────────────── */}
      <PartSection
        partId="{%part:section-services%}"
        label="Services bg-text + truth"
        className="relative px-4 py-28 md:px-6"
      >
        <div className="mx-auto max-w-site">
          {/* blurred discipline field */}
          <div className="bg-field flex flex-wrap gap-x-6 gap-y-2 text-h2 lowercase text-ink/50">
            {SERVICES.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>

          <div className="mt-24 grid gap-10 md:grid-cols-2">
            <TruthText
              partId="{%part:services-truth%}"
              as="h2"
              variant="truth"
              className="text-display lowercase leading-[1.02] text-ink"
              prompt={`Services truth heading for [USER_PROJECT].
Original nuance: "i'm just doing design as other / nothing too fancy" — self-minimising, lowercase, line-broken.
Chunk size: 8–12 words.
Tone: anti-selling.
Avoid: capability boast lists.
Return only the heading.`}
              previewText={"i'm just doing\ndesign as other\nnothing too\nfancy"}
            />

            <div className="md:pt-4">
              <TruthText
                partId="{%part:services-long-truth%}"
                as="p"
                variant="long"
                className="max-w-md text-base leading-relaxed text-mute"
                prompt={`Services long-truth body for [USER_PROJECT].
Original nuance: "just turning ideas into functional designs, overthinking every detail, diving into frustration, obsessing over perfection, rethinking it all / and... / finally — delivering."
Chunk size: 30–45 words.
Tone: compulsive-craft confession.
Return only the paragraph (line breaks allowed).`}
                previewText="just turning ideas into functional designs, overthinking every detail, diving into frustration, obsessing over perfection, rethinking it all"
              />
              <TruthText
                partId="{%part:services-and%}"
                as="p"
                variant="truth"
                className="mt-6 text-base lowercase text-mute"
                prompt={`Transitional beat.
Original nuance: "and..."
Chunk size: 1 word.
Return only the beat.`}
                previewText="and..."
              />
              <TruthText
                partId="{%part:services-finally%}"
                as="p"
                variant="truth"
                className="mt-2 text-base lowercase text-ink"
                prompt={`Closing beat.
Original nuance: "finally — delivering."
Chunk size: 2–3 words.
Return only the beat.`}
                previewText="finally — delivering."
              />
            </div>
          </div>

          {/* marks row: mask-logo + f'22 + — + tp® */}
          <div className="mt-20 flex flex-wrap items-center gap-8 lowercase text-ink">
            <PartText
              partId="{%part:services-mark-logo%}"
              as="span"
              className="text-lead"
              prompt={`Small mark beside services sign-off.
Original nuance: a monogram glyph (source: mask svg). Use 2–3 chars.
Chunk size: 2–3 chars.
Return only the mark.`}
              previewText="bg"
            />
            <PartText
              partId="{%part:services-since%}"
              as="span"
              className="text-lead"
              prompt={`Year-since mark.
Original nuance: "f'22" (founded '22), lowercase.
Chunk size: 3–4 chars.
Return only the mark.`}
              previewText="f'22"
            />
            <PartText
              partId="{%part:services-dash%}"
              as="span"
              className="text-lead text-mute"
              prompt={`Separator glyph.
Original nuance: "—". Return only the glyph.`}
              previewText="—"
            />
            <PartText
              partId="{%part:services-mark-tp%}"
              as="span"
              className="text-lead"
              prompt={`Secondary mark.
Original nuance: "tp®" lowercase + registered glyph.
Chunk size: 2–3 chars.
Return only the mark.`}
              previewText="tp®"
            />
          </div>
        </div>
      </PartSection>

      {/* ── MY VISION (sticky + WebGL plate) ───────────────────────── */}
      <PartSection
        partId="{%part:section-vision%}"
        label="My vision sticky + webgl plate"
        className="relative px-4 py-28 md:px-6"
      >
        <div className="mx-auto max-w-site">
          <div className="flex gap-6 lowercase text-sm text-mute">
            <span>how i see design</span>
            <span className="text-ink/40">&amp;</span>
            <span>why it matters</span>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <div className="md:sticky md:top-24 md:self-start">
              <TruthText
                partId="{%part:vision-truth%}"
                as="p"
                variant="long"
                className="text-lead lowercase leading-snug text-ink"
                prompt={`Vision statement for [USER_PROJECT].
Original nuance: "design isn't magic. It's struggle, fixation, and endless rethinking. I take ideas, break them down, overanalyze every detail, and push through the chaos until something finally works."
Chunk size: 30–45 words.
Tone: sober craft creed.
Return only the paragraph.`}
                previewText="design isn't magic. it's struggle, fixation, and endless rethinking. i take ideas, break them down, overanalyze every detail, and push through the chaos until something finally works."
              />
              <TruthText
                partId="{%part:vision-coda%}"
                as="p"
                variant="truth"
                className="mt-8 text-base lowercase text-mute"
                prompt={`Vision coda line.
Original nuance: "nothing extravagant."
Chunk size: 2–3 words.
Return only the line.`}
                previewText="nothing extravagant."
              />
              <TruthText
                partId="{%part:vision-close%}"
                as="p"
                variant="long"
                className="mt-3 max-w-md text-base leading-relaxed text-mute"
                prompt={`Vision close.
Original nuance: "just functional, honest design that does what it's supposed to."
Chunk size: 10–14 words.
Return only the line.`}
                previewText="just functional, honest design that does what it's supposed to."
              />
            </div>

            {/* WebGL distort plate (documented; static placeholder in blank) */}
            <div data-part="{%part:vision-webgl-plate%}">
              <PartImage
                partId="{%part:vision-plate%}"
                aspectRatio={1082 / 1000}
                objectFit="cover"
                placeholder={IMAGE_STYLE.visionBg}
                className="w-full border-0 bg-ash"
              />
              <p className="mt-2 font-mono text-[10px] uppercase tracking-label text-mute">
                [ webgl mouse-distort on brand pass · see AGENTS.md ]
              </p>
            </div>
          </div>
        </div>
      </PartSection>

      {/* ── PROJECTS (grid + hover storm) ──────────────────────────── */}
      <PartSection
        partId="{%part:section-projects%}"
        label="Projects grid + hover storm"
        className="relative px-4 py-28 md:px-6"
      >
        <div className="mx-auto max-w-site">
          <Rule axis="x" />

          <div className="relative py-16">
            <div className="bg-field pointer-events-none absolute inset-0 flex items-center">
              <div className="text-h2 lowercase text-ink/50">
                a curated selection of my most meaningful work.
              </div>
            </div>
            <TruthText
              partId="{%part:projects-truth%}"
              as="h2"
              variant="truth"
              className="relative text-display lowercase text-ink md:ml-auto md:text-right"
              prompt={`Projects truth aside.
Original nuance: "at least it felt that way" — qualifier, lowercase.
Chunk size: 5–7 words.
Tone: self-aware hedge.
Return only the line.`}
              previewText="at least it felt that way"
            />
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>

          <div className="mt-24 grid gap-6 md:grid-cols-12">
            <TruthText
              partId="{%part:projects-once%}"
              as="p"
              variant="truth"
              className="text-base lowercase text-ink md:col-span-2"
              prompt={`Projects footer beat.
Original nuance: "once."
Chunk size: 1 word.
Return only the beat.`}
              previewText="once."
            />
            <TruthText
              partId="{%part:projects-long%}"
              as="p"
              variant="long"
              className="max-w-2xl text-base leading-relaxed text-mute md:col-span-7"
              prompt={`Projects rationale for [USER_PROJECT].
Original nuance: "Tastes change, trends fade, and what seemed great yesterday might not hold up today. but for a brief moment, these projects felt right. no big promises, no overhyped case studies"
Chunk size: 30–45 words.
Tone: honest, anti-case-study.
Return only the paragraph.`}
              previewText="tastes change, trends fade, and what seemed great yesterday might not hold up today. but for a brief moment, these projects felt right. no big promises, no overhyped case studies"
            />
            <TruthText
              partId="{%part:projects-coda%}"
              as="p"
              variant="truth"
              className="text-base lowercase text-ink md:col-span-3"
              prompt={`Projects coda.
Original nuance: "purely the things I enjoyed working on."
Chunk size: 6–9 words.
Return only the line.`}
              previewText="purely the things i enjoyed working on."
            />
          </div>
        </div>
      </PartSection>

      <PartFooter />
    </main>
  );
}
