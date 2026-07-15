import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";
import { LetterGrid } from "@/components/parts/LetterGrid";
import { EdgeRails } from "@/components/parts/EdgeRails";
import { WorkSlider } from "@/components/parts/WorkSlider";
import { PartText } from "@/components/parts/PartText";
import { PartSection } from "@/components/parts/PartSection";
import { PartMotion } from "@/components/parts/PartMotion";
import { WORK } from "@/lib/work";

export default function HomePage() {
  return (
    <main id="top" className="relative flex-1">
      <PartNav />

      {/* Edge whispers */}
      <div className="pointer-events-none absolute left-[var(--gutter)] top-[42vh] z-10 hidden text-[16px] text-mist md:block">
        Graphic
      </div>
      <div className="pointer-events-none absolute right-[var(--gutter)] top-[42vh] z-10 hidden text-right text-[16px] text-mist md:block">
        Designer
      </div>

      {/* Nominee badge (role, not brand) */}
      <div
        data-part="{%part:badge-nominee%}"
        className="fixed right-0 top-[32%] z-30 hidden md:flex"
      >
        <div className="bg-mint px-2 py-6 text-[10px] uppercase tracking-[0.18em] text-paper">
          <span className="[writing-mode:vertical-rl] rotate-180">W. Nominee</span>
        </div>
      </div>

      {/* ── LETTER HERO ───────────────────────────────────── */}
      <PartSection
        partId="{%part:section-hero%}"
        label="Letter hero"
        className="relative flex min-h-[72vh] flex-col justify-center"
      >
        <LetterGrid hot={["A", "K", "I"]} />
      </PartSection>

      <EdgeRails />

      {/* ── FEATURED WORKS SLIDER ─────────────────────────── */}
      <PartSection
        partId="{%part:section-works%}"
        label="Featured works"
        className="px-[var(--gutter)] pb-24 md:px-5"
        id="works"
      >
        <div className="mx-auto max-w-site">
          <PartMotion partId="{%motion:works-labels%}" type="fade" trigger="inView">
            <div className="mb-10 flex justify-between text-[16px] text-mist">
              <PartText
                partId="{%part:works-label-left%}"
                as="span"
                prompt={`Works section label left.
Original nuance: "Featured".
Chunk size: 1 word.
Return only the label.`}
                previewText="Featured"
              />
              <PartText
                partId="{%part:works-label-right%}"
                as="span"
                prompt={`Works section label right.
Original nuance: "Works".
Chunk size: 1 word.
Return only the label.`}
                previewText="Works"
              />
            </div>
          </PartMotion>
          <WorkSlider projects={WORK} />
        </div>
      </PartSection>

      <PartFooter />
    </main>
  );
}
