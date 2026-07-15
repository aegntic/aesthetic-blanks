import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";
import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartImage } from "@/components/parts/PartImage";
import { PartMotion } from "@/components/parts/PartMotion";
import { WorkSlider } from "@/components/parts/WorkSlider";
import { FOCUS, IMAGE_STYLE } from "@/lib/work";

export default function HomePage() {
  return (
    <main className="relative">
      <PartNav />

      {/* ── HERO BLEED + PLATE ─────────────────────────────── */}
      <PartSection
        partId="{%part:section-hero%}"
        label="Hero bleed + plate"
        className="bleed relative flex min-h-screen items-center justify-center"
      >
        <div className="absolute inset-0">
          <PartMotion partId="{%motion:hero-scale%}" type="scale" factor={0.45} className="h-full w-full">
            <PartImage
              partId="{%part:hero-portrait%}"
              aspectRatio={16 / 10}
              objectFit="cover"
              placeholder={IMAGE_STYLE.heroPortrait}
              className="absolute inset-0 h-full w-full border-0 bg-ash"
            />
          </PartMotion>
          <div className="absolute inset-0 bg-ink/10" />
        </div>

        <div className="relative z-10 hero-plate shadow-2xl" data-part="{%part:hero-plate%}">
          <PartText
            partId="{%part:hero-role%}"
            as="p"
            className="text-[11px] tracking-wide text-paper/70"
            prompt={`Hero plate role line for multidisciplinary designer [USER_PROJECT].
Original nuance: "Multidisciplinary Designer" small above the big title.
Chunk size: 2–3 words.
Tone: quiet credential.
Return only the line.`}
            previewText="Multidisciplinary Designer"
          />

          <PartMotion partId="{%motion:letter-split-hero%}" type="split" trigger="load" stagger={0.1}>
            <PartText
              partId="{%part:hero-line-1%}"
              as="h1"
              className="text-display"
              prompt={`Hero plate line 1 for [USER_PROJECT].
Original nuance: "Make It" — short clause, heavy Satoshi display, letter-split reveal.
Chunk size: 2 words.
Tone: absolute, lasting.
Return only the line.`}
              previewText="Make It"
            />
            <PartText
              partId="{%part:hero-line-2%}"
              as="h1"
              className="text-display"
              prompt={`Hero plate line 2 for [USER_PROJECT].
Original nuance: "Last" completing "Make It Last".
Chunk size: 1 word.
Return only the word.`}
              previewText="Last"
            />
          </PartMotion>

          <div className="mt-auto flex items-end justify-between gap-4 pt-16">
            <PartText
              partId="{%part:hero-portfolio-label%}"
              as="p"
              className="text-[11px] text-paper/60"
              prompt={`Hero plate portfolio label.
Original nuance: "Portfolio".
Chunk size: 1 word.
Return only the label.`}
              previewText="Portfolio"
            />
            <PartText
              partId="{%part:hero-year%}"
              as="p"
              className="text-year leading-none"
              prompt={`Hero plate year mark.
Original nuance: "‘26" with leading apostrophe.
Chunk size: 2–3 characters.
Return only the year mark.`}
              previewText="‘26"
            />
          </div>
        </div>

        <p
          data-part="{%part:scroll-cue%}"
          className="pointer-events-none absolute bottom-6 right-4 text-[11px] text-paper/50 md:right-6"
        >
          Scroll Down
        </p>
      </PartSection>

      {/* ── MANIFESTO + STICKY PREVIEWS ────────────────────── */}
      <PartSection
        partId="{%part:section-manifesto%}"
        label="Manifesto sticky"
        className="bg-paper px-4 py-24 text-ink md:px-6 md:py-32"
      >
        <div className="mx-auto grid max-w-site gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <PartMotion partId="{%motion:manifesto-lines%}" type="stagger" trigger="inView">
              <PartText
                partId="{%part:manifesto-1%}"
                as="p"
                className="text-2xl font-extrabold tracking-tighter md:text-[2.5rem] md:leading-[1.05]"
                prompt={`Manifesto line 1 for [USER_PROJECT].
Original nuance: "Unforgettable memories are not defined by details."
Chunk size: 6–10 words.
Tone: philosophical brand craft.
Avoid: generic marketing.
Return only the sentence.`}
                previewText="Unforgettable memories are not defined by details."
              />
              <PartText
                partId="{%part:manifesto-2%}"
                as="p"
                className="mt-4 text-2xl font-extrabold tracking-tighter md:text-[2.5rem]"
                prompt={`Manifesto line 2.
Original nuance: "They are felt."
Chunk size: 3 words.
Return only the sentence.`}
                previewText="They are felt."
              />
              <PartText
                partId="{%part:manifesto-3%}"
                as="p"
                className="mt-10 text-2xl font-extrabold tracking-tighter md:text-[2.5rem] md:leading-[1.05]"
                prompt={`Manifesto line 3.
Original nuance: "Design translates emotion into form."
Chunk size: 5–7 words.
Return only the sentence.`}
                previewText="Design translates emotion into form."
              />
              <PartText
                partId="{%part:manifesto-4%}"
                as="p"
                className="mt-4 text-2xl font-extrabold tracking-tighter md:text-[2.5rem]"
                prompt={`Manifesto line 4.
Original nuance: "Form that evokes."
Chunk size: 3 words.
Return only the sentence.`}
                previewText="Form that evokes."
              />
            </PartMotion>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-7" data-part="{%part:manifesto-previews%}">
            {[1, 2, 3].map((n) => (
              <PartImage
                key={n}
                partId={`{%part:manifesto-img-${n}%}`}
                aspectRatio={360 / 516}
                placeholder={`${IMAGE_STYLE.manifestoStill} — sticky preview ${n}`}
                className="w-full border-0 bg-soft"
              />
            ))}
          </div>
        </div>
      </PartSection>

      {/* ── WHO / DRIVES ───────────────────────────────────── */}
      <PartSection
        partId="{%part:section-who%}"
        label="Who / drives"
        className="bg-paper px-4 pb-24 text-ink md:px-6 md:pb-32"
      >
        <div className="mx-auto grid max-w-site gap-12 md:grid-cols-2">
          <PartMotion partId="{%motion:who%}" type="fade" trigger="inView">
            <PartText
              partId="{%part:who-label%}"
              as="h2"
              className="mb-4 text-sm uppercase tracking-widest text-mist"
              prompt={`Section label. Original: "Who am I." Chunk: 2–4 words.`}
              previewText="Who am I."
            />
            <PartText
              partId="{%part:who-body%}"
              as="p"
              className="max-w-md text-base leading-relaxed text-ash"
              prompt={`Who-am-I body for multidisciplinary designer [USER_PROJECT].
Original nuance: based in a city; focused on Art Direction and Branding; former lead designer experience summarized generically; independent path.
Chunk size: 40–70 words.
Tone: first person, confident, no name-drop vanity.
Avoid: original employer brand names.
Return only the paragraph.`}
              previewText="Based in [CITY], focused on Art Direction and Branding. Independent practice after leading design for product brands — now building identities that last."
            />
          </PartMotion>
          <PartMotion partId="{%motion:drives%}" type="fade" trigger="inView">
            <PartText
              partId="{%part:drives-label%}"
              as="h2"
              className="mb-4 text-sm uppercase tracking-widest text-mist"
              prompt={`Section label. Original: "What drives me." Chunk: 2–4 words.`}
              previewText="What drives me."
            />
            <PartText
              partId="{%part:drives-body%}"
              as="p"
              className="max-w-md text-base leading-relaxed text-ash"
              prompt={`What-drives-me body for [USER_PROJECT].
Original nuance: signature ideas, precise typography, meticulous composition; embed in brand culture.
Chunk size: 35–60 words.
Tone: craft manifesto.
Return only the paragraph.`}
              previewText="Signature ideas, precise typography and meticulous composition. Embed in the brand's culture and carve form that people remember."
            />
          </PartMotion>
        </div>
      </PartSection>

      {/* ── WORK SLIDER TEASER ─────────────────────────────── */}
      <PartSection partId="{%part:section-work-slider%}" label="Work slider" className="bg-ink">
        <WorkSlider />
      </PartSection>

      {/* ── CARVE INTO MEMORY ──────────────────────────────── */}
      <PartSection
        partId="{%part:section-carve%}"
        label="Carve into memory"
        className="flex min-h-screen items-center bg-paper px-4 py-24 text-ink md:px-6"
      >
        <div className="mx-auto flex w-full max-w-site flex-col items-center gap-8 md:flex-row md:justify-center md:gap-6">
          <PartMotion partId="{%motion:carve-left%}" type="split" trigger="inView">
            <PartText
              partId="{%part:carve-left%}"
              as="p"
              className="text-mega text-ash"
              prompt={`Carve headline left fragment.
Original nuance: "Carve it".
Chunk size: 2 words.
Return only the fragment.`}
              previewText="Carve it"
            />
          </PartMotion>

          <div className="relative w-full max-w-[18rem] shrink-0 md:max-w-[22rem]">
            <PartImage
              partId="{%part:carve-portrait%}"
              aspectRatio={450 / 644}
              placeholder={IMAGE_STYLE.aboutPortrait}
              className="w-full border-0 bg-ash"
            />
            <PartText
              partId="{%part:carve-mid%}"
              as="p"
              className="pointer-events-none absolute inset-0 flex items-center justify-center text-display text-paper mix-blend-difference"
              prompt={`Carve headline middle word over portrait.
Original nuance: "Into".
Chunk size: 1 word.
Return only the word.`}
              previewText="Into"
            />
          </div>

          <PartMotion partId="{%motion:carve-right%}" type="split" trigger="inView">
            <PartText
              partId="{%part:carve-right%}"
              as="p"
              className="text-mega text-ash"
              prompt={`Carve headline right fragment.
Original nuance: "Memory".
Chunk size: 1 word.
Return only the word.`}
              previewText="Memory"
            />
          </PartMotion>
        </div>
      </PartSection>

      {/* ── AREAS OF FOCUS ─────────────────────────────────── */}
      <PartSection
        partId="{%part:section-focus%}"
        label="Areas of focus"
        className="bg-ink px-4 py-24 md:px-6 md:py-32"
      >
        <div className="mx-auto max-w-site">
          <PartText
            partId="{%part:focus-label%}"
            as="p"
            className="mb-10 text-sm uppercase tracking-widest text-mist"
            prompt={`Focus section label. Original: "Areas of focus". 2–4 words.`}
            previewText="Areas of focus"
          />
          <PartMotion partId="{%motion:focus-list%}" type="stagger" trigger="inView">
            <ul className="space-y-2">
              {FOCUS.map((f, i) => (
                <li key={f}>
                  <PartText
                    partId={`{%part:focus-${i + 1}%}`}
                    as="p"
                    className="text-mega"
                    prompt={`Focus discipline ${i + 1} for [USER_PROJECT].
Original nuance: letter-split mega list item (Strategy / Branding / Art Direction / Visual Design).
Chunk size: 1–2 words.
Return only the discipline.`}
                    previewText={f}
                  />
                </li>
              ))}
            </ul>
          </PartMotion>
        </div>
      </PartSection>

      {/* ── CORE VALUES ────────────────────────────────────── */}
      <PartSection
        partId="{%part:section-values%}"
        label="Core values"
        className="bg-paper px-4 py-24 text-ink md:px-6 md:py-32"
      >
        <div className="mx-auto max-w-3xl">
          <PartText
            partId="{%part:values-label%}"
            as="p"
            className="mb-6 text-sm uppercase tracking-widest text-mist"
            prompt={`Values label. Original: "Core Values: Who." 2–4 words.`}
            previewText="Core Values"
          />
          <PartMotion partId="{%motion:values-body%}" type="fade" trigger="inView">
            <PartText
              partId="{%part:values-body%}"
              as="p"
              className="text-xl leading-relaxed md:text-2xl md:leading-snug"
              prompt={`Core values paragraph for [USER_PROJECT].
Original nuance: made by people / shaped for people; brands are history not explanations; one chance to be remembered.
Chunk size: 35–55 words.
Tone: philosophical brand craft.
Return only the paragraph.`}
              previewText="Made by people. Shaped for people. Brands aren't explanations, they are history. Because you only get one chance to be remembered."
            />
          </PartMotion>
        </div>
      </PartSection>

      <PartFooter />
    </main>
  );
}
