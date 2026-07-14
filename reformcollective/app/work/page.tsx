import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartMotion } from "@/components/parts/PartMotion";
import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";
import { WorkCard } from "@/components/parts/WorkCard";
import { WORK } from "@/lib/work";

export default function WorkIndexPage() {
  return (
    <main className="relative flex-1">
      <PartNav />

      <PartSection
        partId="{%part:section-work-intro%}"
        label="Work Intro"
        className="pt-28 md:pt-36 px-5 md:px-10 pb-12 md:pb-16"
      >
        <div className="max-w-site mx-auto">
          <PartMotion partId="{%motion:work-intro%}" type="mask" trigger="load">
            <PartText
              partId="{%part:work-page-title%}"
              as="h1"
              className="font-display text-[clamp(3rem,10vw,7rem)] font-thin tracking-tightest leading-[0.9]"
              prompt={`Write the Work index page title for [USER_PROJECT].
Original nuance: "Our Work" — short display.
Chunk size: 1–3 words.
Tone: clean agency.
Return only the title.`}
              previewText="Our Work"
            />
          </PartMotion>
          <PartText
            partId="{%part:work-page-intro%}"
            as="p"
            className="mt-8 md:mt-10 max-w-3xl text-base md:text-lg leading-relaxed text-ink/75 font-body"
            prompt={`Write the intro paragraph for the full work index of [USER_PROJECT].
Original nuance: it doesn't matter whether you're revolutionizing EVs, building AI, insurtech, or a local dentist — every project gets a compelling story that stands out.
Chunk size: 40–70 words, 2–3 sentences.
Tone: inclusive, mission-driven, craft-first.
Avoid: original client verticals verbatim if possible; keep the spirit.
Return only the paragraph.`}
            previewText="[inclusive mission intro — every project gets a story that stands out]"
          />
        </div>
      </PartSection>

      <PartSection
        partId="{%part:section-work-grid%}"
        label="Work Grid"
        className="px-5 md:px-10 pb-24 md:pb-32"
      >
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-8 md:gap-y-16">
          {WORK.map((item) => (
            <WorkCard key={item.slug} item={item} />
          ))}
        </div>
      </PartSection>

      <PartFooter />
    </main>
  );
}
