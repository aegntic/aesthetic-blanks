import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";
import { LetterGrid } from "@/components/parts/LetterGrid";
import { EdgeRails } from "@/components/parts/EdgeRails";
import { PartText } from "@/components/parts/PartText";
import { PartImage } from "@/components/parts/PartImage";
import { PartSection } from "@/components/parts/PartSection";
import { PartMotion } from "@/components/parts/PartMotion";

export default function AboutPage() {
  return (
    <main id="top" className="relative flex-1">
      <PartNav />

      <PartSection
        partId="{%part:about-hero%}"
        label="About hero"
        className="flex min-h-[52vh] flex-col justify-center"
      >
        <LetterGrid hot={["A", "K", "I"]} />
      </PartSection>

      <EdgeRails />

      {/* Sky bio band — measured #72a1c8 */}
      <PartSection partId="{%part:about-band%}" label="About band" className="bg-sky text-ink">
        <div className="mx-auto max-w-site px-[var(--gutter)] py-12 md:px-5 md:py-16">
          <PartMotion partId="{%motion:about-header%}" type="fade" trigger="inView">
            <div className="mb-10 grid grid-cols-2 gap-4 text-[16px] md:grid-cols-4">
              <PartText
                partId="{%part:about-what-label%}"
                as="h2"
                className="text-xl font-medium md:text-2xl"
                prompt={`About section title.
Original nuance: "What I do".
Chunk size: 2–4 words.
Return only the title.`}
                previewText="What I do"
              />
              <PartText
                partId="{%part:about-love-1%}"
                as="p"
                className="whitespace-pre-line text-ink/70"
                prompt={`About love column 1. Original: "Love / Creativity". 2 short lines.`}
                previewText={"Love\nCreativity"}
              />
              <PartText
                partId="{%part:about-love-2%}"
                as="p"
                className="whitespace-pre-line text-ink/70"
                prompt={`About love column 2. Original: "Love / Learning". 2 short lines.`}
                previewText={"Love\nLearning"}
              />
              <PartText
                partId="{%part:about-love-3%}"
                as="p"
                className="whitespace-pre-line text-ink/70 md:text-right"
                prompt={`About love column 3. Original: "Love / Design". 2 short lines.`}
                previewText={"Love\nDesign"}
              />
            </div>
          </PartMotion>

          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-12">
            <div className="space-y-4 text-[16px] leading-relaxed text-ink/90 md:col-span-4">
              <PartText
                partId="{%part:about-bio-1%}"
                as="p"
                prompt={`About bio paragraph 1 for graphic portfolio [USER_PROJECT].
Original nuance: city-based designer; focuses on branding, UX, packaging, print, motion; helping things look and feel the way they should.
Chunk size: 30–50 words, 2–3 sentences.
Tone: warm, factual, first person.
Avoid: award bragging lists, corporate speak, source personal name.
Return only the paragraph.`}
                previewText="I'm a graphic designer living in [CITY]. I focus on branding, UX, packaging, print and motion, helping things look and feel the way they should."
              />
              <PartText
                partId="{%part:about-bio-2%}"
                as="p"
                prompt={`About bio paragraph 2 for [USER_PROJECT].
Original nuance: portfolio recently nominated; open to opportunities.
Chunk size: 15–30 words.
Tone: humble, open.
Avoid: hard sell.
Return only the paragraph.`}
                previewText="My portfolio was recently nominated, and I'm currently open to design opportunities."
              />
              <PartText
                partId="{%part:about-bio-3%}"
                as="p"
                prompt={`About bio paragraph 3 for [USER_PROJECT].
Original nuance: hobbies when not designing (drawing, walking, biking / off screens).
Chunk size: 15–30 words.
Tone: personal, light.
Return only the paragraph.`}
                previewText="When I'm not designing, I like drawing, walking, or biking. Just getting off screens and being outside for a bit."
              />
            </div>
            <div className="md:col-span-5">
              <PartImage
                partId="{%part:about-portrait%}"
                aspectRatio={3 / 4}
                placeholder="Environmental portrait — person looking outward over landscape (role: human presence, not stock smile headshot)"
                className="w-full border-0 bg-sky/40"
              />
            </div>
            <div className="min-h-[12rem] bg-skyAlt/40 md:col-span-3" aria-hidden />
          </div>
        </div>
      </PartSection>

      <PartFooter />
    </main>
  );
}
