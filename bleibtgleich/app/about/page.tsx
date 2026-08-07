import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";
import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartImage } from "@/components/parts/PartImage";
import { TruthText } from "@/components/parts/TruthText";
import { Rule } from "@/components/parts/Rule";
import { GridOverlay } from "@/components/parts/GridOverlay";
import { PartMotion } from "@/components/parts/PartMotion";
import { CAPABILITIES, IMAGE_STYLE } from "@/lib/work";

export const metadata = { title: "about · bleibtgleich class" };

export default function AboutPage() {
  return (
    <main className="relative">
      <GridOverlay />
      <PartNav />

      {/* ── LEAD ───────────────────────────────────────────────────── */}
      <PartSection
        partId="{%part:section-about-lead%}"
        label="About lead"
        className="relative min-h-[80vh] px-4 pt-32 md:px-6"
      >
        <div className="mx-auto max-w-site">
          <Rule axis="x" />
          <div className="py-12">
            <TruthText
              partId="{%part:about-lead-truth%}"
              as="h1"
              variant="truth"
              className="text-mega lowercase leading-[0.92] text-ink"
              prompt={`About lead statement for [USER_PROJECT].
Original nuance: a blunt lowercase self-introduction (designer who overthinks, ships anyway).
Chunk size: 10–16 words.
Tone: deadpan, anti-hype.
Avoid: "passionate designer" generics.
Return only the statement.`}
              previewText="a designer who turns overthinking into things that actually ship."
            />
          </div>

          <div className="grid gap-8 py-8 md:grid-cols-2">
            <TruthText
              partId="{%part:about-lead-body%}"
              as="p"
              variant="long"
              className="max-w-md text-base leading-relaxed text-mute"
              prompt={`About lead body for [USER_PROJECT].
Original nuance: where you're based, what you do (ux/ui + webflow), how you work (research-led, detail-obsessed, collaborative).
Chunk size: 45–70 words.
Tone: first person, plain.
Avoid: client name-drops, city if sensitive.
Return only the paragraph.`}
              previewText="based in [city], working as a ux/ui designer and webflow developer. research-led, detail-obsessed, occasionally collaborative — building functional, honest interfaces for small teams and stubborn ideas."
            />
            <PartImage
              partId="{%part:about-portrait%}"
              aspectRatio={4 / 5}
              objectFit="cover"
              placeholder={IMAGE_STYLE.aboutPortrait}
              className="w-full max-w-sm border-0 bg-ash md:ml-auto"
            />
          </div>
          <Rule axis="x" />
        </div>
      </PartSection>

      {/* ── CAPABILITIES ───────────────────────────────────────────── */}
      <PartSection
        partId="{%part:section-capabilities%}"
        label="Capabilities"
        className="relative px-4 py-28 md:px-6"
      >
        <div className="mx-auto max-w-site">
          <div className="bg-field flex flex-wrap gap-x-8 gap-y-3 text-h2 lowercase text-ink/50">
            {CAPABILITIES.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>

          <div className="mt-20 grid gap-12 md:grid-cols-2">
            <div>
              <PartText
                partId="{%part:about-do-label%}"
                as="p"
                className="mb-4 font-mono text-[10px] uppercase tracking-label text-mute"
                prompt={`Column label.
Original nuance: "what i do" lowercase. Chunk: 3 words.
Return only the label.`}
                previewText="what i do"
              />
              <PartMotion partId="{%motion:about-do%}" type="stagger" trigger="inView">
                <ul className="space-y-2 text-display lowercase text-ink">
                  {CAPABILITIES.slice(0, 3).map((c, i) => (
                    <li key={c}>
                      <PartText
                        partId={`{%part:about-do-${i + 1}%}`}
                        as="span"
                        prompt={`Capability ${i + 1} for [USER_PROJECT].
Original nuance: discipline noun, lowercase, mega type.
Chunk size: 1–3 words.
Return only the discipline.`}
                        previewText={c}
                      />
                    </li>
                  ))}
                </ul>
              </PartMotion>
            </div>

            <div>
              <PartText
                partId="{%part:about-love-label%}"
                as="p"
                className="mb-4 font-mono text-[10px] uppercase tracking-label text-mute"
                prompt={`Column label.
Original nuance: "what i love" lowercase. Chunk: 3 words.
Return only the label.`}
                previewText="what i love"
              />
              <PartMotion partId="{%motion:about-love%}" type="stagger" trigger="inView">
                <ul className="space-y-2 text-display lowercase text-ink">
                  {CAPABILITIES.slice(3).map((c, i) => (
                    <li key={c}>
                      <PartText
                        partId={`{%part:about-love-${i + 1}%}`}
                        as="span"
                        prompt={`Loved discipline ${i + 1} for [USER_PROJECT].
Original nuance: discipline noun, lowercase, mega type.
Chunk size: 1–3 words.
Return only the discipline.`}
                        previewText={c}
                      />
                    </li>
                  ))}
                </ul>
              </PartMotion>
            </div>
          </div>
        </div>
      </PartSection>

      {/* ── AVAILABLE ─────────────────────────────────────────────── */}
      <PartSection
        partId="{%part:section-available%}"
        label="Available"
        className="relative px-4 py-28 md:px-6"
      >
        <div className="mx-auto max-w-site">
          <Rule axis="x" />
          <div className="py-16">
            <TruthText
              partId="{%part:about-available%}"
              as="p"
              variant="truth"
              className="max-w-3xl text-display lowercase leading-[1.05] text-ink"
              prompt={`Availability / closing statement for [USER_PROJECT].
Original nuance: open for small projects, selective, direct.
Chunk size: 12–20 words.
Tone: quietly confident, no urgency theatre.
Return only the statement.`}
              previewText="open for small projects, stubborn briefs, and the occasional bad idea worth pursuing."
            />
          </div>
          <Rule axis="x" />
        </div>
      </PartSection>

      <PartFooter />
    </main>
  );
}
