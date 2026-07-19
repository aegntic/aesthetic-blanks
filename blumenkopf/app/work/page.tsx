import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartMotion } from "@/components/parts/PartMotion";
import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";
import { WorkCard } from "@/components/parts/WorkCard";
import { WORK } from "@/lib/work";

export default function WorkIndexPage() {
  return (
    <main className="relative flex-1 bg-paper text-ink">
      <PartNav />

      {/* ── WORK LEAD ─────────────────────────────────────────────────── */}
      <PartSection
        partId="{%part:section-work-lead%}"
        label="Work Lead"
        className="pt-28 md:pt-36 px-5 md:px-10 pb-16 md:pb-20"
      >
        <div className="max-w-site mx-auto">
          <div className="flex items-baseline justify-between gap-6 border-b-3 border-line pb-6 mb-10">
            <PartText
              partId="{%part:work-tag%}"
              as="p"
              className="text-xs uppercase tracking-label text-muted"
              prompt={`Write the Work section tag for [USER_PROJECT].
Original nuance: "( work )" parenthesised lowercase label.
Chunk size: 1 word.
Return only the tag.`}
              previewText="( work )"
            />
            <PartText
              partId="{%part:work-count%}"
              as="p"
              className="text-xs uppercase tracking-label text-muted"
              prompt={`Write a small count label for the work index.
Original nuance: "06 selected" — 2-digit count + word.
Chunk size: 2 tokens.
Return only the label.`}
              previewText={`${String(WORK.length).padStart(2, "0")} selected`}
            />
          </div>

          <PartMotion partId="{%motion:work-heading%}" type="mask" trigger="inView">
            <PartText
              partId="{%part:work-heading%}"
              as="h1"
              className="font-sans text-[clamp(2.5rem,9vw,7rem)] font-light tracking-tightest leading-[0.9] lowercase"
              prompt={`Write the work index primary heading for [USER_PROJECT].
Original nuance: a single huge lowercase word ("work" / "index").
Chunk size: 1 word.
Tone: editorial, sparse.
Return only the heading.`}
              previewText="work"
            />
          </PartMotion>

          <PartText
            partId="{%part:work-dek%}"
            as="p"
            className="mt-8 font-serif text-lg md:text-xl text-ink/80 max-w-2xl"
            prompt={`Write the work index dek for [USER_PROJECT].
Original nuance: one sentence framing the selection — what unites these cases, not a list.
Chunk size: 12–22 words.
Tone: curatorial, lowercase.
Return only the dek.`}
            previewText="[one sentence framing the selection]"
          />
        </div>
      </PartSection>

      {/* ── WORK GRID ─────────────────────────────────────────────────── */}
      <PartSection
        partId="{%part:section-work-grid%}"
        label="Work Grid"
        className="px-5 md:px-10 py-12 md:py-16 border-t-3 border-line"
      >
        <div className="max-w-site mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 md:gap-y-24"
            data-part="{%motion:work-grid-scroll%}"
          >
            {WORK.map((item) => (
              <WorkCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </PartSection>

      <PartFooter />
    </main>
  );
}
