import Link from "next/link";
import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";
import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartMotion } from "@/components/parts/PartMotion";
import { WorkCard } from "@/components/parts/WorkSlider";
import { WORK } from "@/lib/work";

export default function WorkIndexPage() {
  return (
    <main id="top" className="relative flex-1">
      <PartNav />
      <PartSection
        partId="{%part:work-index%}"
        label="Work index"
        className="px-[var(--gutter)] py-16 md:px-5 md:py-24"
      >
        <div className="mx-auto max-w-site">
          <PartMotion partId="{%motion:work-index-title%}" type="mask" trigger="load">
            <PartText
              partId="{%part:work-index-title%}"
              as="h1"
              className="mb-4 font-display text-[43px] text-quartz"
              prompt={`Work index title for graphic portfolio [USER_PROJECT].
Original nuance: "Works" or "Selected".
Chunk size: 1–2 words.
Return only the title.`}
              previewText="Works"
            />
            <PartText
              partId="{%part:work-index-lead%}"
              as="p"
              className="mb-14 max-w-xl text-[16px] text-mist"
              prompt={`Work index lead for [USER_PROJECT].
Original nuance: short line under works title about featured projects.
Chunk size: 8–16 words.
Tone: quiet gallery.
Return only the line.`}
              previewText="Selected projects across branding, packaging, publication, and motion."
            />
          </PartMotion>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {WORK.map((w) => (
              <WorkCard key={w.slug} project={w} />
            ))}
          </div>

          <p className="mt-16 text-center text-[16px] text-mist">
            <Link href="/" className="underline-offset-4 hover:underline">
              ← home
            </Link>
          </p>
        </div>
      </PartSection>
      <PartFooter />
    </main>
  );
}
