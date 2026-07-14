import Link from "next/link";
import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartImage } from "@/components/parts/PartImage";
import { PartMotion } from "@/components/parts/PartMotion";
import { PartNav } from "@/components/parts/PartNav";

const FAQS = [1, 2, 3, 4, 5, 6] as const;

export default function NovaPage() {
  return (
    <main className="relative flex-1 bg-ink text-paper min-h-screen">
      <PartNav variant="minimal" />

      {/* ── NOVA HERO ──────────────────────────────────────── */}
      <PartSection
        partId="{%part:section-nova-hero%}"
        label="Program Hero"
        className="pt-28 md:pt-36 px-5 md:px-10 pb-16"
      >
        <div className="max-w-site mx-auto">
          <div className="flex justify-end mb-10">
            <Link
              href="/contact"
              className="text-sm uppercase tracking-label border border-paper/30 px-5 py-2 hover:bg-paper hover:text-ink transition"
            >
              <PartText
                partId="{%part:nova-apply-top%}"
                as="span"
                prompt={`Top-right apply CTA. Original: "APPLY". Return only the label.`}
                previewText="Apply"
              />
            </Link>
          </div>

          <PartText
            partId="{%part:nova-dek%}"
            as="p"
            className="text-xs md:text-sm uppercase tracking-wide text-paper/55 max-w-2xl mb-10 leading-relaxed"
            prompt={`Write program dek for [USER_PROJECT] equity-for-design accelerator.
Original nuance: trade world-class design, development, and brand strategy for equity — startups move faster, stand out, scale smarter.
Chunk size: 25–40 words.
Tone: founder pitch, all-caps friendly.
Return only the dek.`}
            previewText="[trade design/dev/brand for equity — move faster, stand out, scale smarter]"
          />

          <PartMotion partId="{%motion:nova-mega-type%}" type="mask" trigger="load">
            <PartText
              partId="{%part:nova-mega%}"
              as="p"
              className="font-display text-[clamp(3rem,18vw,25rem)] font-thin leading-[0.85] tracking-tightest"
              prompt={`Write mega display phrase for the accelerator page of [USER_PROJECT].
Original nuance: "Equity Over Cash" — 2–4 words, enormous thin type filling the viewport.
Chunk size: 2–4 words.
Tone: radical clarity.
Return only the phrase.`}
              previewText="Equity Over Cash"
            />
          </PartMotion>
        </div>
      </PartSection>

      {/* ── MEDIA STRIP ────────────────────────────────────── */}
      <PartSection
        partId="{%part:section-nova-media%}"
        label="Program Media"
        className="px-5 md:px-10 py-8"
      >
        <div className="max-w-site mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative aspect-[4/5] bg-black3 overflow-hidden">
              <PartImage
                partId={`{%part:nova-media-${i}%}`}
                aspectRatio={4 / 5}
                objectFit="cover"
                placeholder={`Program lifestyle / studio / founder moment ${i}`}
                className="w-full h-full absolute inset-0"
              />
            </div>
          ))}
        </div>
      </PartSection>

      {/* ── BODY ───────────────────────────────────────────── */}
      <PartSection
        partId="{%part:section-nova-body%}"
        label="Program Body"
        className="px-5 md:px-10 py-20 md:py-28"
      >
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <PartMotion partId="{%motion:nova-body-title%}" type="mask" trigger="inView">
              <PartText
                partId="{%part:nova-body-title%}"
                as="h1"
                className="font-display text-[clamp(1.75rem,4vw,3.125rem)] font-thin tracking-tight leading-snug"
                prompt={`Write program body title for [USER_PROJECT].
Original nuance: "We are your full time design and development team."
Chunk size: 8–14 words.
Tone: partnership, full-stack studio.
Return only the title.`}
                previewText="We are your full-time design and development team."
              />
            </PartMotion>
          </div>
          <div className="md:col-span-5">
            <PartText
              partId="{%part:nova-body-copy%}"
              as="p"
              className="text-sm md:text-base leading-relaxed text-paper/70 whitespace-pre-line"
              prompt={`Write program body copy for [USER_PROJECT].
Original nuance: hiring design+dev is expensive; waiting to raise slows you down; we remove those barriers and become your team.
Chunk size: 40–70 words, can use line breaks.
Tone: founder empathy, direct.
Return only the copy.`}
              previewText="Hiring a design and dev team is expensive.\nWaiting to raise capital before you build slows you down.\nWe remove those barriers."
            />
            <Link
              href="/contact"
              className="inline-block mt-8 text-sm uppercase tracking-label border-b border-paper/40 pb-1 hover:border-accent hover:text-accent transition"
            >
              <PartText
                partId="{%part:nova-apply-mid%}"
                as="span"
                prompt={`Mid-page apply CTA. Original: "APPLY FOR NOVA". Return only the label.`}
                previewText="Apply for the program →"
              />
            </Link>
          </div>
        </div>
      </PartSection>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <PartSection
        partId="{%part:section-nova-faq%}"
        label="Founder FAQ"
        className="px-5 md:px-10 py-20 md:py-28 border-t border-paper/10"
      >
        <div className="max-w-site mx-auto">
          <PartMotion partId="{%motion:nova-faq-title%}" type="mask" trigger="inView">
            <PartText
              partId="{%part:nova-faq-title%}"
              as="h2"
              className="font-display text-[clamp(2.5rem,8vw,7.5rem)] font-thin tracking-tightest leading-[0.9] mb-16 md:mb-20"
              prompt={`FAQ section title. Original: "Founder questions, answered". Return only the title.`}
              previewText="Founder questions, answered"
            />
          </PartMotion>

          <div className="divide-y divide-paper/10">
            {FAQS.map((i) => (
              <details
                key={i}
                data-part={`{%part:nova-faq-${i}%}`}
                className="group py-6 md:py-8"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                  <PartText
                    partId={`{%part:nova-faq-${i}-q%}`}
                    as="span"
                    className="font-sans text-lg md:text-2xl font-light tracking-tight"
                    prompt={`Write founder FAQ question ${i} about an equity-for-design studio program.
Topics rotate: equity %, ownership, timeline, fit, IP, what you get.
Chunk size: 6–14 words.
Tone: founder plain-speak.
Return only the question.`}
                    previewText={`[faq question ${i}]`}
                  />
                  <span className="text-paper/40 text-xl group-open:rotate-45 transition">+</span>
                </summary>
                <PartText
                  partId={`{%part:nova-faq-${i}-a%}`}
                  as="p"
                  className="mt-4 text-sm md:text-base text-paper/65 max-w-2xl leading-relaxed"
                  prompt={`Write answer for founder FAQ ${i} about equity-for-design program [USER_PROJECT].
Chunk size: 40–80 words.
Tone: transparent, non-legalistic, honest.
Return only the answer.`}
                  previewText={`[faq answer ${i}]`}
                />
              </details>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-block text-sm uppercase tracking-label border border-paper/30 px-8 py-3 hover:bg-paper hover:text-ink transition"
            >
              <PartText
                partId="{%part:nova-apply-bottom%}"
                as="span"
                prompt={`Bottom apply CTA. Original: "Apply for Nova". Return only the label.`}
                previewText="Apply for the program"
              />
            </Link>
          </div>
        </div>
      </PartSection>

      <div className="px-5 md:px-10 py-10 border-t border-paper/10 text-center">
        <PartText
          partId="{%part:nova-footer-domain%}"
          as="p"
          className="text-xs uppercase tracking-label text-paper/40"
          prompt={`Small domain/credit under program page. Return a placeholder domain for [USER_PROJECT].`}
          previewText="yourstudio.com"
        />
      </div>
    </main>
  );
}
