import Link from "next/link";
import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartImage } from "@/components/parts/PartImage";
import { PartMotion } from "@/components/parts/PartMotion";
import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";

const CAPABILITIES = [
  {
    id: "branding",
    title: "Branding",
    items: ["Brand Strategy", "Logo Identity", "Content Creation", "Brand Motion", "Brand Systems"],
  },
  {
    id: "digital",
    title: "Digital Design",
    items: ["Websites", "Interface Design", "Motion Design", "Prototyping", "Illustration"],
  },
  {
    id: "development",
    title: "Development",
    items: ["Front End", "WebGL", "Architecture", "Motion", "Deployment"],
  },
] as const;

const TESTIMONIALS = [1, 2, 3, 4, 5] as const;

export default function AboutPage() {
  return (
    <main className="relative flex-1">
      <PartNav />

      {/* ── ABOUT HERO ─────────────────────────────────────── */}
      <PartSection
        partId="{%part:section-about-hero%}"
        label="About Hero"
        className="pt-28 md:pt-36 px-5 md:px-10 pb-16 md:pb-24"
      >
        <div className="max-w-site mx-auto">
          <PartMotion partId="{%motion:about-hero%}" type="mask" trigger="load">
            <PartText
              partId="{%part:about-kicker%}"
              as="p"
              className="text-sm md:text-base font-medium uppercase tracking-wide mb-6"
              prompt={`Write about-page kicker for [USER_PROJECT].
Original nuance: "ALL PINKIES UP SINCE 2015" — cheeky establishment line.
Chunk size: 4–7 words.
Tone: irreverent studio club.
Return only the kicker.`}
              previewText="All pinkies up since [year]"
            />
            <PartText
              partId="{%part:about-lede%}"
              as="p"
              className="font-sans text-xl md:text-2xl font-medium leading-snug max-w-4xl"
              prompt={`Write the about lede for [USER_PROJECT].
Original nuance: we live in the details — pixels, code, moments that make digital feel effortless; brands that stand out; solid creative development; process that respects it all.
Chunk size: 45–70 words.
Tone: craft manifesto, slightly snobby in a charming way.
Return only the lede.`}
              previewText="[lede — details in pixels, code, and moments]"
            />
          </PartMotion>
          <Link
            href="/work"
            className="inline-block mt-10 text-sm uppercase tracking-label border-b border-ink/30 pb-1 hover:border-accent hover:text-accent transition"
          >
            <PartText
              partId="{%part:about-see-work%}"
              as="span"
              prompt={`CTA to work from about. Original: "SEE OUR WORK". Return only the label.`}
              previewText="See our work →"
            />
          </Link>
        </div>
      </PartSection>

      {/* ── MARQUEE ────────────────────────────────────────── */}
      <PartSection
        partId="{%part:section-marquee%}"
        label="Details Marquee"
        className="py-8 md:py-12 border-y border-ink/10 overflow-hidden bg-paper"
      >
        <PartMotion partId="{%motion:marquee-details%}" type="marquee">
          <div className="flex items-center gap-10 px-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <PartText
                key={i}
                partId="{%part:marquee-phrase%}"
                as="span"
                className="font-sans text-lg md:text-xl uppercase tracking-wide whitespace-nowrap"
                prompt={`Write a short repeating marquee phrase for [USER_PROJECT] about page.
Original nuance: "WE LIVE IN THE DETAILS" repeated.
Chunk size: 3–6 words, uppercase friendly.
Tone: club motto.
Return only the phrase.`}
                previewText="We live in the details"
              />
            ))}
          </div>
        </PartMotion>
      </PartSection>

      {/* ── CAPABILITIES ───────────────────────────────────── */}
      <PartSection
        partId="{%part:section-capabilities%}"
        label="Capabilities"
        className="px-5 md:px-10 py-20 md:py-32"
      >
        <div className="max-w-site mx-auto">
          <PartText
            partId="{%part:capabilities-label%}"
            as="p"
            className="text-sm font-medium uppercase tracking-wide mb-12 md:mb-16"
            prompt={`Section label. Original: "OUR CAPABILITIES". Return only the label.`}
            previewText="Our capabilities"
          />

          <div className="space-y-16 md:space-y-24" data-part="{%motion:capability-stagger%}">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.id}
                data-part={`{%part:capability-${cap.id}%}`}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 border-t border-ink/10 pt-10"
              >
                <div className="md:col-span-5">
                  <PartMotion partId={`{%motion:capability-${cap.id}-title%}`} type="mask" trigger="inView">
                    <PartText
                      partId={`{%part:capability-${cap.id}-title%}`}
                      as="h2"
                      className="font-display text-[clamp(2.5rem,8vw,6.6rem)] font-thin tracking-tightest leading-[0.9]"
                      prompt={`Write capability title for ${cap.title} pillar of [USER_PROJECT].
Original nuance: single word or two, massive thin display type.
Chunk size: 1–2 words.
Return only the title.`}
                      previewText={cap.title}
                    />
                  </PartMotion>
                  <ul className="mt-6 space-y-1">
                    {cap.items.map((item, i) => (
                      <li key={item}>
                        <PartText
                          partId={`{%part:capability-${cap.id}-item-${i + 1}%}`}
                          as="span"
                          className="text-sm text-muted"
                          prompt={`Write a service bullet under ${cap.title} for [USER_PROJECT].
Original nuance: short discipline name (e.g. "${item}").
Chunk size: 1–3 words.
Return only the service name.`}
                          previewText={item}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-7 flex items-end">
                  <PartText
                    partId={`{%part:capability-${cap.id}-blurb%}`}
                    as="p"
                    className="text-base md:text-lg leading-relaxed text-ink/75 max-w-xl font-body"
                    prompt={`Write a short capability blurb for ${cap.title} at [USER_PROJECT].
Original nuance: 1–2 sentences on systems / storytelling / performance code depending on pillar.
Chunk size: 25–45 words.
Tone: precise craft.
Return only the blurb.`}
                    previewText={`[${cap.title.toLowerCase()} capability blurb]`}
                  />
                </div>
              </div>
            ))}

            {/* Start a Project row */}
            <div
              data-part="{%part:capability-start%}"
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 border-t border-ink/10 pt-10"
            >
              <div className="md:col-span-5">
                <PartMotion partId="{%motion:capability-start-title%}" type="mask" trigger="inView">
                  <PartText
                    partId="{%part:capability-start-title%}"
                    as="h2"
                    className="font-display text-[clamp(2.5rem,8vw,6.6rem)] font-thin tracking-tightest leading-[0.9]"
                    prompt={`Write final capability/CTA row title.
Original nuance: "Start a Project".
Chunk size: 2–4 words.
Return only the title.`}
                    previewText="Start a Project"
                  />
                </PartMotion>
              </div>
              <div className="md:col-span-7 flex flex-col justify-end gap-6">
                <PartText
                  partId="{%part:capability-start-blurb%}"
                  as="p"
                  className="text-base md:text-lg leading-relaxed text-ink/75 max-w-xl font-body"
                  prompt={`Write CTA blurb under Start a Project for [USER_PROJECT].
Original nuance: live in the details — pixels, code, timing; if you're building something real, we'll meet you there.
Chunk size: 20–40 words.
Tone: invitation, high bar.
Return only the blurb.`}
                  previewText="[invitation — if you're building something real]"
                />
                <Link
                  href="/contact"
                  className="inline-block text-sm uppercase tracking-label border-b border-ink/30 pb-1 w-fit hover:border-accent hover:text-accent transition"
                >
                  <PartText
                    partId="{%part:capability-start-cta%}"
                    as="span"
                    prompt={`CTA. Original: "LET'S CHAT". Return only the label.`}
                    previewText="Let's chat →"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </PartSection>

      {/* ── PEOPLE ─────────────────────────────────────────── */}
      <PartSection
        partId="{%part:section-people%}"
        label="People"
        className="px-5 md:px-10 py-20 md:py-28 border-t border-ink/10"
      >
        <div className="max-w-site mx-auto">
          <PartText
            partId="{%part:people-label%}"
            as="p"
            className="text-sm font-medium uppercase tracking-wide mb-6"
            prompt={`Section label. Original: "OUR PEOPLE". Return only the label.`}
            previewText="Our people"
          />
          <PartMotion partId="{%motion:people-heading%}" type="mask" trigger="inView">
            <PartText
              partId="{%part:people-heading%}"
              as="h2"
              className="font-display text-[clamp(1.75rem,4vw,3.125rem)] font-thin tracking-tight max-w-3xl"
              prompt={`Write people section heading for [USER_PROJECT].
Original nuance: "We design, develop, and have fun doing it."
Chunk size: 6–12 words.
Tone: warm, human.
Return only the heading.`}
              previewText="We design, develop, and have fun doing it."
            />
          </PartMotion>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-3">
                <div className="relative aspect-[3/4] bg-black3 overflow-hidden">
                  <PartImage
                    partId={`{%part:person-${i}-photo%}`}
                    aspectRatio={3 / 4}
                    objectFit="cover"
                    placeholder={`Team member ${i} portrait — natural light, studio personality`}
                    className="w-full h-full absolute inset-0"
                  />
                </div>
                <PartText
                  partId={`{%part:person-${i}-name%}`}
                  as="p"
                  className="text-sm font-medium"
                  prompt={`Team member ${i} name for [USER_PROJECT]. Return only a plausible first + last name placeholder, not a real Reform employee.`}
                  previewText={`[person ${i}]`}
                />
                <PartText
                  partId={`{%part:person-${i}-role%}`}
                  as="p"
                  className="text-xs text-muted uppercase tracking-label"
                  prompt={`Team member ${i} role. Chunk size: 2–4 words. Return only the role.`}
                  previewText="[role]"
                />
              </div>
            ))}
          </div>
        </div>
      </PartSection>

      {/* ── TESTIMONIALS ───────────────────────────────────── */}
      <PartSection
        partId="{%part:section-testimonials%}"
        label="Testimonials"
        className="px-5 md:px-10 py-20 md:py-32 bg-ink text-paper"
      >
        <div className="max-w-site mx-auto">
          <PartText
            partId="{%part:testimonials-label%}"
            as="p"
            className="text-sm font-medium uppercase tracking-wide text-paper/60 mb-12"
            prompt={`Testimonials label. Original: "(SOME) CLIENTS LOVE US". Cheeky. Return only the label.`}
            previewText="(Some) clients love us"
          />

          <div className="space-y-16 md:space-y-24" data-part="{%motion:testimonial-swap%}">
            {TESTIMONIALS.map((i) => (
              <blockquote
                key={i}
                data-part={`{%part:testimonial-${i}%}`}
                className="border-t border-paper/10 pt-10"
              >
                <PartMotion partId={`{%motion:testimonial-${i}%}`} type="fade" trigger="inView">
                  <PartText
                    partId={`{%part:testimonial-${i}-quote%}`}
                    as="p"
                    className="font-display text-[clamp(1.5rem,4vw,3.5rem)] font-thin leading-[1.15] tracking-tight max-w-5xl"
                    prompt={`Write client testimonial ${i} for [USER_PROJECT].
Original nuance: large thin display quote — specific metrics or craft praise; one intentionally comedic/negative Google-style review is ok for personality (index 4 energy).
Chunk size: 20–45 words.
Tone: human, specific, not generic 5-star blurbs.
Avoid: inventing real people's names from Reform's site.
Return only the quote.`}
                    previewText={`[testimonial ${i} quote]`}
                  />
                  <footer className="mt-8 flex flex-col gap-1">
                    <PartText
                      partId={`{%part:testimonial-${i}-name%}`}
                      as="p"
                      className="text-sm"
                      prompt={`Attribution name for testimonial ${i}. Use a clearly fictional placeholder name. Return only the name.`}
                      previewText="[name]"
                    />
                    <PartText
                      partId={`{%part:testimonial-${i}-org%}`}
                      as="p"
                      className="text-[10px] uppercase tracking-label text-paper/45"
                      prompt={`Attribution org for testimonial ${i}. Fictional company. Return only the org.`}
                      previewText="[org]"
                    />
                  </footer>
                </PartMotion>
              </blockquote>
            ))}
          </div>
        </div>
      </PartSection>

      <PartFooter />
    </main>
  );
}
