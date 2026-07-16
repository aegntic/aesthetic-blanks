import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartMotion } from "@/components/parts/PartMotion";
import { PartImage } from "@/components/parts/PartImage";
import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";
import { WorkCard } from "@/components/parts/WorkCard";
import { WORK } from "@/lib/work";
import Link from "next/link";

export default function HomePage() {
  const featured = WORK.slice(0, 3);

  return (
    <main className="relative flex-1 bg-paper text-ink">
      <PartNav />

      {/* ── HERO: oversized wordmark + circular portrait ──────────────── */}
      <PartSection
        partId="{%part:section-hero%}"
        label="Hero Wordmark"
        className="relative pt-24 md:pt-28 px-5 md:px-10 min-h-[92vh] flex flex-col justify-between overflow-hidden"
      >
        <div className="max-w-site mx-auto w-full">
          <PartMotion partId="{%motion:hero-mark%}" type="fade" trigger="load">
            <PartText
              partId="{%part:hero-est%}"
              as="p"
              className="text-xs uppercase tracking-label text-muted mb-6"
              prompt={`Write a small establishment mark for [USER_PROJECT] hero.
Original nuance: "EST. [year] — NO STUDIO." class — a self-defining label, slightly contradictory ("no studio" / "with everything you need").
Chunk size: 3–7 words.
Tone: archival stamp, dry wit.
Return only the mark.`}
              previewText="EST. [year] — no studio."
            />
          </PartMotion>
        </div>

        {/* Circular portrait — floats top-right of the hero, clear of the wordmark */}
        <div className="max-w-site mx-auto w-full relative">
          <div
            data-part="{%part:hero-portrait%}"
            className="absolute right-0 -top-24 md:-top-40 w-[30vw] max-w-[320px] aspect-square rounded-full overflow-hidden border-3 border-line z-0 hidden md:block bg-olive"
          >
            <PartImage
              partId="{%part:hero-portrait-media%}"
              aspectRatio={1}
              objectFit="cover"
              placeholder="Circular hero portrait — full-bleed photographic still on a muted olive/green grade, square crop, editorial studio portrait or art-directed object"
              className="w-full h-full"
            />
          </div>

          <PartMotion partId="{%motion:wordmark-reveal%}" type="mask" trigger="load">
            <PartText
              partId="{%part:hero-wordmark%}"
              as="h1"
              className="relative z-10 font-sans font-medium tracking-tightest leading-[0.82] lowercase text-[clamp(3.5rem,14vw,13rem)]"
              prompt={`Write the oversized hero wordmark for [USER_PROJECT].
Original nuance: the project name as a huge lowercase mixed-case wordmark ("blumenkopf" class) — a single token that doubles as logo + headline. The capital letter sits mid-word in the original; keep it as one word.
Chunk size: 1 word.
Tone: pure identity, no descriptor.
Avoid: taglines, slogans, any second line.
Return only the wordmark.`}
              previewText="blumenkopf"
            />
          </PartMotion>
        </div>

        <div className="max-w-site mx-auto w-full flex items-end justify-between gap-6 pt-10 border-t-3 border-line mt-8">
          <PartText
            partId="{%part:hero-tagline%}"
            as="p"
            className="font-sans text-base md:text-lg font-light max-w-md"
            prompt={`Write the hero supporting line for [USER_PROJECT].
Original nuance: a deadpan definitional claim ("is no studio. with everything you need.") — lowercase, period-separated clauses.
Chunk size: 6–12 words.
Tone: understated, self-aware.
Avoid: marketing adjectives.
Return only the line.`}
            previewText="is no studio. with everything you need."
          />
          <PartText
            partId="{%part:hero-scroll-cue%}"
            as="p"
            className="text-[10px] uppercase tracking-label text-muted shrink-0"
            prompt={`Write a scroll cue label for the hero corner.
Original nuance: "( scroll )" parenthesised, lowercase.
Chunk size: 1–2 words.
Return only the cue.`}
            previewText="( scroll )"
          />
        </div>
      </PartSection>

      {/* ── MANIFESTO ─────────────────────────────────────────────────── */}
      <PartSection
        partId="{%part:section-manifesto%}"
        label="Manifesto"
        className="px-5 md:px-10 py-24 md:py-36 border-t-3 border-line"
      >
        <div className="max-w-site mx-auto">
          <PartMotion partId="{%motion:manifesto-line%}" type="mask" trigger="inView" stagger={0.1}>
            <PartText
              partId="{%part:manifesto-line-1%}"
              as="p"
              className="font-serif italic text-[clamp(2rem,6vw,4.5rem)] leading-[1.05] tracking-tight max-w-5xl"
              prompt={`Write line 1 of a two-line serif manifesto for [USER_PROJECT].
Original nuance: a half-thought in italic serif ("We make things" / "Design as") completed by line 2.
Chunk size: 2–5 words.
Tone: editorial, contemplative.
Return only line 1.`}
              previewText="We make things"
            />
            <PartText
              partId="{%part:manifesto-line-2%}"
              as="p"
              className="font-sans font-light text-[clamp(2rem,6vw,4.5rem)] leading-[1.05] tracking-tightest max-w-5xl"
              prompt={`Write line 2 completing the manifesto for [USER_PROJECT].
Original nuance: completes line 1 in sans ("that hold up.") — the pair mixes serif italic + sans.
Chunk size: 2–5 words.
Tone: quiet confidence.
Return only line 2.`}
              previewText="that hold up."
            />
          </PartMotion>

          <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl">
            <PartMotion partId="{%motion:manifesto-body-a%}" type="fade" trigger="inView">
              <PartText
                partId="{%part:manifesto-body-a%}"
                as="p"
                className="font-serif text-base md:text-lg leading-relaxed text-ink/85"
                prompt={`Write manifesto body paragraph A for [USER_PROJECT] home.
Original nuance: the studio's reason — craft, restraint, the belief that less carries further. Not a capability pitch.
Chunk size: 40–60 words, 2–3 sentences.
Tone: earnest, anti-maximalist.
Avoid: "solutions", "leverage", "passion".
Return only the paragraph.`}
                previewText="[reason paragraph — restraint as method]"
              />
            </PartMotion>
            <PartMotion partId="{%motion:manifesto-body-b%}" type="fade" trigger="inView">
              <PartText
                partId="{%part:manifesto-body-b%}"
                as="p"
                className="font-serif text-base md:text-lg leading-relaxed text-ink/85"
                prompt={`Write manifesto body paragraph B for [USER_PROJECT] home.
Original nuance: what the work looks like — identities, editorials, sites that read as objects. Concrete, not abstract.
Chunk size: 40–60 words, 2–3 sentences.
Tone: craft-forward, specific.
Return only the paragraph.`}
                previewText="[craft paragraph — identities, editorials, sites as objects]"
              />
            </PartMotion>
          </div>
        </div>
      </PartSection>

      {/* ── SELECTED WORK ─────────────────────────────────────────────── */}
      <PartSection
        partId="{%part:section-selected-work%}"
        label="Selected Work"
        className="px-5 md:px-10 py-20 md:py-28 border-t-3 border-line"
      >
        <div className="max-w-site mx-auto">
          <div className="flex items-end justify-between gap-6 mb-12 md:mb-16">
            <PartMotion partId="{%motion:selected-heading%}" type="mask" trigger="inView">
              <PartText
                partId="{%part:selected-heading%}"
                as="h2"
                className="font-sans text-4xl md:text-6xl font-light tracking-tightest lowercase"
                prompt={`Write the selected-work section heading for [USER_PROJECT].
Original nuance: a single lowercase word ("selected" / "work") — huge, sparse.
Chunk size: 1 word.
Tone: editorial restraint.
Return only the heading.`}
                previewText="selected"
              />
            </PartMotion>
            <Link
              href="/work"
              className="text-xs uppercase tracking-label border-b border-ink/30 pb-1 hover:border-accent hover:text-accent transition shrink-0"
            >
              <PartText
                partId="{%part:selected-see-all%}"
                as="span"
                prompt={`Write a "see all work" link label for [USER_PROJECT].
Original nuance: "all work →" / "index" — short.
Chunk size: 1–3 words.
Return only the label.`}
                previewText="all work →"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16" data-part="{%motion:selected-scroll%}">
            {featured.map((item) => (
              <WorkCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </PartSection>

      <PartFooter />
    </main>
  );
}
