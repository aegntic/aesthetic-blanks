import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";
import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartImage } from "@/components/parts/PartImage";
import { PartMotion } from "@/components/parts/PartMotion";
import { FOCUS, IMAGE_STYLE } from "@/lib/work";

export default function AboutPage() {
  return (
    <main className="relative bg-paper text-ink">
      <PartNav />

      {/* Carve it Into Memory hero */}
      <PartSection
        partId="{%part:about-carve%}"
        label="About carve hero"
        className="flex min-h-screen items-center px-4 py-28 md:px-6"
      >
        <div className="mx-auto flex w-full max-w-site flex-col items-center gap-8 md:flex-row md:justify-center md:gap-6">
          <PartMotion partId="{%motion:about-carve-l%}" type="split" trigger="load">
            <PartText
              partId="{%part:about-carve-left%}"
              as="p"
              className="text-mega text-ash"
              prompt={`About carve left. Original: "Carve it". 2 words.`}
              previewText="Carve it"
            />
          </PartMotion>
          <div className="relative w-full max-w-[18rem] md:max-w-[22rem]">
            <PartImage
              partId="{%part:about-hero-portrait%}"
              aspectRatio={450 / 644}
              placeholder={IMAGE_STYLE.aboutPortrait}
              className="w-full border-0 bg-ash"
            />
            <PartText
              partId="{%part:about-carve-mid%}"
              as="p"
              className="pointer-events-none absolute inset-0 flex items-center justify-center text-display text-paper mix-blend-difference"
              prompt={`About carve mid. Original: "Into". 1 word.`}
              previewText="Into"
            />
          </div>
          <PartMotion partId="{%motion:about-carve-r%}" type="split" trigger="load">
            <PartText
              partId="{%part:about-carve-right%}"
              as="p"
              className="text-mega text-ash"
              prompt={`About carve right. Original: "Memory". 1 word.`}
              previewText="Memory"
            />
          </PartMotion>
        </div>
      </PartSection>

      {/* Manifesto block on dark */}
      <PartSection
        partId="{%part:about-manifesto%}"
        label="About manifesto"
        className="bg-ink px-4 py-24 text-paper md:px-6 md:py-32"
      >
        <div className="mx-auto max-w-3xl space-y-4">
          <PartMotion partId="{%motion:about-manifesto%}" type="stagger" trigger="inView">
            <PartText
              partId="{%part:about-m1%}"
              as="p"
              className="text-2xl font-extrabold tracking-tighter md:text-[2.5rem] md:leading-[1.05]"
              prompt={`About manifesto 1. Original: unforgettable memories line. 6–10 words.`}
              previewText="Unforgettable memories are not defined by details."
            />
            <PartText
              partId="{%part:about-m2%}"
              as="p"
              className="text-2xl font-extrabold tracking-tighter md:text-[2.5rem]"
              prompt={`About manifesto 2. Original: "They are felt." 3 words.`}
              previewText="They are felt."
            />
            <PartText
              partId="{%part:about-m3%}"
              as="p"
              className="mt-8 text-2xl font-extrabold tracking-tighter md:text-[2.5rem] md:leading-[1.05]"
              prompt={`About manifesto 3. Original: design translates emotion. 5–7 words.`}
              previewText="Design translates emotion into form."
            />
            <PartText
              partId="{%part:about-m4%}"
              as="p"
              className="text-2xl font-extrabold tracking-tighter md:text-[2.5rem]"
              prompt={`About manifesto 4. Original: "Form that evokes." 3 words.`}
              previewText="Form that evokes."
            />
          </PartMotion>
        </div>
      </PartSection>

      {/* Bio */}
      <PartSection
        partId="{%part:about-bio%}"
        label="About bio"
        className="px-4 py-24 md:px-6 md:py-32"
      >
        <div className="mx-auto grid max-w-site gap-12 md:grid-cols-2">
          <PartText
            partId="{%part:about-bio-body%}"
            as="p"
            className="text-base leading-relaxed text-ash md:text-lg"
            prompt={`About bio for multidisciplinary designer [USER_PROJECT].
Original nuance: independent designer focused on Branding and Art Direction; years building startups / own practice; now open for brand work.
Chunk size: 50–90 words.
Tone: first person, warm confidence.
Avoid: original personal name, original employer brands.
Return only the paragraph.`}
            previewText="I am an independent designer focused on Branding and Art Direction. I've been building with startups for years — now carving identities that last."
          />
          <div className="grid grid-cols-2 gap-3">
            <PartImage
              partId="{%part:about-gallery-1%}"
              aspectRatio={3 / 4}
              placeholder={`${IMAGE_STYLE.manifestoStill} — about gallery 1`}
              className="w-full border-0 bg-soft"
            />
            <PartImage
              partId="{%part:about-gallery-2%}"
              aspectRatio={3 / 4}
              placeholder={`${IMAGE_STYLE.manifestoStill} — about gallery 2`}
              className="mt-8 w-full border-0 bg-soft"
            />
          </div>
        </div>
      </PartSection>

      {/* Focus + values */}
      <PartSection
        partId="{%part:about-focus%}"
        label="About focus"
        className="bg-ink px-4 py-24 text-paper md:px-6"
      >
        <div className="mx-auto max-w-site">
          <PartText
            partId="{%part:about-focus-label%}"
            as="p"
            className="mb-8 text-sm uppercase tracking-widest text-mist"
            prompt={`Focus label. Original: "Areas of focus".`}
            previewText="Areas of focus"
          />
          <PartMotion partId="{%motion:about-focus%}" type="stagger" trigger="inView">
            <ul className="space-y-1">
              {FOCUS.map((f, i) => (
                <li key={f}>
                  <PartText
                    partId={`{%part:about-focus-${i + 1}%}`}
                    as="p"
                    className="text-mega"
                    prompt={`Focus item ${i + 1}. Original disciplines list. 1–2 words.`}
                    previewText={f}
                  />
                </li>
              ))}
            </ul>
          </PartMotion>
        </div>
      </PartSection>

      <PartSection
        partId="{%part:about-values%}"
        label="About values"
        className="px-4 py-24 md:px-6 md:py-32"
      >
        <div className="mx-auto max-w-3xl">
          <PartText
            partId="{%part:about-values-body%}"
            as="p"
            className="text-xl leading-relaxed md:text-2xl"
            prompt={`Core values paragraph. Original: made by people / brands are history / one chance to be remembered. 35–55 words.`}
            previewText="Made by people. Shaped for people. Brands aren't explanations, they are history. Because you only get one chance to be remembered."
          />
        </div>
      </PartSection>

      <PartFooter />
    </main>
  );
}
