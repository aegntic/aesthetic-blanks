import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartMotion } from "@/components/parts/PartMotion";
import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";
import { WorkCard } from "@/components/parts/WorkCard";
import { WORK } from "@/lib/work";
import Link from "next/link";

export default function HomePage() {
  const featured = WORK.slice(0, 5);

  return (
    <main className="relative flex-1">
      <PartNav />

      {/* ── HERO INTRO ─────────────────────────────────────── */}
      <PartSection
        partId="{%part:section-hero%}"
        label="Hero Intro"
        className="pt-28 md:pt-36 px-5 md:px-10 min-h-[70vh] flex flex-col justify-end pb-16"
      >
        <div className="max-w-site mx-auto w-full">
          <PartMotion partId="{%motion:mask-reveal%}" type="mask" trigger="load">
            <PartText
              partId="{%part:hero-est%}"
              as="p"
              className="text-xs uppercase tracking-label text-muted mb-6"
              prompt={`Write a small establishment mark for [USER_PROJECT] hero.
Original nuance: "EST. 2015" + optional "( SCROLL DOWN )" cue.
Chunk size: 2–6 words.
Tone: archival studio stamp.
Return only the mark.`}
              previewText="EST. [year]"
            />
            <PartText
              partId="{%part:hero-manifesto-short%}"
              as="h1"
              className="font-display text-[clamp(2.5rem,8vw,6rem)] font-thin leading-[0.95] tracking-tightest max-w-4xl"
              prompt={`Write the primary hero manifesto line for a digital design agency [USER_PROJECT].
Original nuance: short craft mantra, e.g. "We live in the details" energy — not a long slogan.
Chunk size: 4–8 words.
Tone: confident, editorial, slightly cheeky.
Avoid: generic "we build digital experiences".
Return only the line.`}
              previewText="We live in the details"
            />
          </PartMotion>

          <PartMotion partId="{%motion:hero-sub%}" type="fade" trigger="load">
            <PartText
              partId="{%part:hero-scroll-cue%}"
              as="p"
              className="mt-10 text-[10px] uppercase tracking-label text-muted"
              prompt={`Write a scroll cue label for the hero.
Original nuance: "( SCROLL DOWN )" with parentheses.
Chunk size: 2–4 words.
Return only the cue.`}
              previewText="( scroll down )"
            />
          </PartMotion>
        </div>
      </PartSection>

      {/* ── FEATURED WORK ──────────────────────────────────── */}
      <PartSection
        partId="{%part:section-featured-work%}"
        label="Featured Work"
        className="px-5 md:px-10 py-12 md:py-20 border-t border-ink/10"
      >
        <div className="max-w-site mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
            <PartMotion partId="{%motion:featured-heading%}" type="mask" trigger="inView">
              <PartText
                partId="{%part:featured-heading%}"
                as="h2"
                className="font-display text-4xl md:text-6xl font-thin tracking-tightest leading-[1.05]"
                prompt={`Write the featured work section heading for [USER_PROJECT].
Original nuance: stacked multi-line "Our / featured / Work" energy — short words, display weight thin.
Chunk size: 2–4 words (may include line breaks as spaces).
Tone: editorial agency.
Return only the heading.`}
                previewText="Our featured Work"
              />
            </PartMotion>
            <PartText
              partId="{%part:featured-dek%}"
              as="p"
              className="text-xs md:text-sm uppercase tracking-label text-muted max-w-xs"
              prompt={`Write a short dek under featured work for [USER_PROJECT].
Original nuance: "BUILDING BRANDS FOR AMBITIOUS START UPS" — all-caps mission line.
Chunk size: 5–10 words.
Tone: agency positioning.
Return only the dek.`}
              previewText="Building brands for ambitious startups"
            />
          </div>

          <div className="grid grid-cols-1 gap-12 md:gap-16" data-part="{%motion:featured-scroll%}">
            {featured.map((item, i) => (
              <WorkCard key={item.slug} item={item} featured={i === 0} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/work"
              className="inline-block text-sm uppercase tracking-label border-b border-ink/30 pb-1 hover:border-accent hover:text-accent transition"
            >
              <PartText
                partId="{%part:featured-see-all%}"
                as="span"
                prompt={`Write a "see all work" link label.
Original nuance: "See our work" / "View all".
Chunk size: 2–4 words.
Return only the label.`}
                previewText="See all work →"
              />
            </Link>
          </div>
        </div>
      </PartSection>

      {/* ── MANIFESTO SPLIT ────────────────────────────────── */}
      <PartSection
        partId="{%part:section-manifesto%}"
        label="Manifesto"
        className="px-5 md:px-10 py-24 md:py-40 border-t border-ink/10 bg-paper"
      >
        <div className="max-w-site mx-auto">
          <PartMotion partId="{%motion:manifesto-type%}" type="mask" trigger="inView" stagger={0.12}>
            <PartText
              partId="{%part:manifesto-line-1%}"
              as="p"
              className="font-display text-[clamp(2.5rem,10vw,6.75rem)] font-thin leading-[0.95] tracking-tightest"
              prompt={`Write line 1 of a two-line large manifesto for [USER_PROJECT].
Original nuance: "We do many" — incomplete thought that continues on next line.
Chunk size: 2–4 words.
Tone: conversational confidence, thin display type.
Return only line 1.`}
              previewText="We do many"
            />
            <PartText
              partId="{%part:manifesto-line-2%}"
              as="p"
              className="font-display text-[clamp(2.5rem,10vw,6.75rem)] font-thin leading-[0.95] tracking-tightest"
              prompt={`Write line 2 of a two-line large manifesto for [USER_PROJECT].
Original nuance: "things very well." — completes the prior line.
Chunk size: 2–4 words including period.
Tone: understated brag.
Return only line 2.`}
              previewText="things very well."
            />
          </PartMotion>

          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 max-w-5xl">
            <PartMotion partId="{%motion:manifesto-body-a%}" type="fade" trigger="inView">
              <PartText
                partId="{%part:manifesto-body-a%}"
                as="p"
                className="text-base md:text-lg leading-relaxed text-ink/80 font-body"
                prompt={`Write manifesto body paragraph A for [USER_PROJECT] agency about page-home hybrid.
Original nuance: founders' purpose — late nights, wild ideas, belief — not a pitch deck.
Chunk size: 35–55 words, 2–3 sentences.
Tone: human, earnest, anti-corporate.
Avoid: "synergy", "leverage", "solutions".
Return only the paragraph.`}
                previewText="[purpose paragraph — belief behind the work]"
              />
            </PartMotion>
            <PartMotion partId="{%motion:manifesto-body-b%}" type="fade" trigger="inView">
              <PartText
                partId="{%part:manifesto-body-b%}"
                as="p"
                className="text-base md:text-lg leading-relaxed text-ink/80 font-body"
                prompt={`Write manifesto body paragraph B for [USER_PROJECT].
Original nuance: story needs motion — brands, interfaces, digital products that move markets.
Chunk size: 35–55 words, 2–3 sentences.
Tone: craft-forward, cinematic.
Return only the paragraph.`}
                previewText="[craft paragraph — brands, interfaces, products that move]"
              />
            </PartMotion>
          </div>
        </div>
      </PartSection>

      {/* ── NOVA / PROGRAM CTA ─────────────────────────────── */}
      <PartSection
        partId="{%part:section-nova-cta%}"
        label="Program CTA"
        className="px-5 md:px-10 py-24 md:py-32 bg-ink text-paper"
      >
        <div className="max-w-site mx-auto">
          <PartMotion partId="{%motion:nova-cta%}" type="mask" trigger="inView">
            <PartText
              partId="{%part:nova-cta-heading%}"
              as="h2"
              className="font-display text-[clamp(1.75rem,4vw,2.4rem)] font-thin tracking-tight uppercase max-w-3xl leading-snug"
              prompt={`Write a program CTA heading for [USER_PROJECT]'s startup accelerator / equity-design offering.
Original nuance: "CREATE YOUR VISION. EXTEND YOUR RUNWAY." — two short imperative clauses.
Chunk size: 6–10 words.
Tone: bold, founder-facing.
Return only the heading.`}
              previewText="Create your vision. Extend your runway."
            />
          </PartMotion>
          <PartText
            partId="{%part:nova-cta-body%}"
            as="p"
            className="mt-8 text-xs md:text-sm uppercase tracking-wide text-paper/60 max-w-2xl leading-relaxed"
            prompt={`Write body copy for the equity-for-design program CTA on [USER_PROJECT] home.
Original nuance: not just a service — a partnership trading world-class design/dev/brand for equity.
Chunk size: 30–50 words.
Tone: direct founder pitch, no fluff.
Return only the body.`}
            previewText="[program partnership pitch — design/dev/brand for equity]"
          />
          <Link
            href="/nova"
            className="inline-block mt-10 text-sm uppercase tracking-label border-b border-paper/40 pb-1 hover:border-accent hover:text-accent transition"
          >
            <PartText
              partId="{%part:nova-cta-link%}"
              as="span"
              prompt={`Write link text to the accelerator program page.
Original nuance: program name + "learn more" energy.
Chunk size: 2–5 words.
Return only the link text.`}
              previewText="Explore the program →"
            />
          </Link>
        </div>
      </PartSection>

      <PartFooter />
    </main>
  );
}
