import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";
import { WorkSlider } from "@/components/parts/WorkSlider";
import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartMotion } from "@/components/parts/PartMotion";
import { WORK } from "@/lib/work";
import Link from "next/link";

export default function WorksPage() {
  return (
    <main className="relative bg-ink">
      <PartNav />

      <PartSection
        partId="{%part:works-intro%}"
        label="Works intro"
        className="px-4 pb-8 pt-28 md:px-6"
      >
        <PartMotion partId="{%motion:works-title%}" type="split" trigger="load">
          <PartText
            partId="{%part:works-title%}"
            as="h1"
            className="text-mega"
            prompt={`Works page title.
Original nuance: "Works".
Chunk size: 1 word.
Return only the title.`}
            previewText="Works"
          />
        </PartMotion>
        <PartText
          partId="{%part:works-lead%}"
          as="p"
          className="mt-4 max-w-lg text-sm text-mist"
          prompt={`Works page lead for [USER_PROJECT].
Original nuance: short line under portfolio index.
Chunk size: 8–16 words.
Tone: quiet gallery.
Return only the line.`}
          previewText="Selected work across branding, art direction, and visual systems."
        />
      </PartSection>

      <WorkSlider items={WORK} />

      <PartSection
        partId="{%part:works-index%}"
        label="Works list"
        className="border-t border-paper/10 px-4 py-16 md:px-6"
      >
        <ul className="mx-auto max-w-site divide-y divide-paper/10">
          {WORK.map((w) => (
            <li key={w.slug} id={w.slug}>
              <Link
                href={`#${w.slug}`}
                className="flex items-baseline justify-between gap-6 py-6 transition hover:opacity-60"
              >
                <PartText
                  partId={`{%part:works-list-${w.index}%}`}
                  as="span"
                  className="text-2xl md:text-4xl tracking-tightest"
                  prompt={`Works index title ${w.index}.
Original nuance: short project name.
Avoid: source client trademarks.
Return only the title.`}
                  previewText={`Project ${String(w.index).padStart(2, "0")}`}
                />
                <span className="text-sm text-mist">{w.discipline}</span>
                <span className="text-year text-paper/40">
                  {String(w.index).padStart(2, "0")}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </PartSection>

      <PartFooter />
    </main>
  );
}
