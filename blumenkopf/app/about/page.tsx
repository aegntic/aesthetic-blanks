import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartMotion } from "@/components/parts/PartMotion";
import { PartImage } from "@/components/parts/PartImage";
import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";

const CAPABILITIES = [
  "Art Direction",
  "Brand Identity",
  "Editorial Design",
  "Web Design",
  "Development",
  "Photography",
] as const;

const CLIENTS = ["client a", "client b", "client c", "client d", "client e", "client f"] as const;

export default function AboutPage() {
  return (
    <main className="relative flex-1 bg-paper text-ink">
      <PartNav />

      {/* ── ABOUT LEAD ────────────────────────────────────────────────── */}
      <PartSection
        partId="{%part:section-about-lead%}"
        label="About Lead"
        className="pt-28 md:pt-36 px-5 md:px-10 pb-20 md:pb-28"
      >
        <div className="max-w-site mx-auto">
          <PartText
            partId="{%part:about-section-tag%}"
            as="p"
            className="text-xs uppercase tracking-label text-muted mb-8"
            prompt={`Write the About section tag for [USER_PROJECT].
Original nuance: "( about )" parenthesised lowercase label.
Chunk size: 1 word.
Return only the tag.`}
            previewText="( about )"
          />
          <PartMotion partId="{%motion:about-statement%}" type="mask" trigger="inView" stagger={0.08}>
            <PartText
              partId="{%part:about-statement-1%}"
              as="h1"
              className="font-sans text-[clamp(2.25rem,7vw,5.5rem)] font-light leading-[1] tracking-tightest lowercase max-w-5xl"
              prompt={`Write line 1 of the about statement for [USER_PROJECT].
Original nuance: lowercase definitional sentence ("we are a studio that") carried into line 2.
Chunk size: 4–8 words.
Tone: direct, lowercase.
Return only line 1.`}
              previewText="we are a studio"
            />
            <PartText
              partId="{%part:about-statement-2%}"
              as="h1"
              className="font-serif italic text-[clamp(2.25rem,7vw,5.5rem)] font-normal leading-[1] tracking-tight max-w-5xl"
              prompt={`Write line 2 of the about statement for [USER_PROJECT].
Original nuance: italic serif completion ("builds quiet, durable identities.") — pairs with the sans line 1.
Chunk size: 4–8 words.
Tone: warm, specific.
Return only line 2.`}
              previewText="building quiet, durable identities."
            />
          </PartMotion>
        </div>
      </PartSection>

      {/* ── PORTRAIT + BODY ───────────────────────────────────────────── */}
      <PartSection
        partId="{%part:section-about-portrait%}"
        label="Studio Portrait"
        className="px-5 md:px-10 py-16 md:py-24 border-t-3 border-line"
      >
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div
            data-part="{%part:about-portrait%}"
            className="md:col-span-5 aspect-[4/5] overflow-hidden bg-black3 border-3 border-line"
          >
            <PartImage
              partId="{%part:about-portrait-media%}"
              aspectRatio={4 / 5}
              objectFit="cover"
              placeholder="Studio portrait — full-bleed editorial still, muted grade; either a workspace, a person, or an art-directed object on the paper-ink palette"
              className="w-full h-full"
            />
          </div>

          <div className="md:col-span-7 md:pt-6 space-y-6">
            <PartMotion partId="{%motion:about-body-a%}" type="fade" trigger="inView">
              <PartText
                partId="{%part:about-body-a%}"
                as="p"
                className="font-serif text-lg md:text-xl leading-relaxed text-ink/85"
                prompt={`Write about body paragraph A for [USER_PROJECT].
Original nuance: who the studio is — founders, place, the kind of problems taken on. Human, not a pitch.
Chunk size: 45–65 words, 2–3 sentences.
Tone: grounded, first-person plural.
Avoid: "passionate", "world-class".
Return only the paragraph.`}
                previewText="[who we are — founders, place, problems we take]"
              />
            </PartMotion>
            <PartMotion partId="{%motion:about-body-b%}" type="fade" trigger="inView">
              <PartText
                partId="{%part:about-body-b%}"
                as="p"
                className="font-serif text-base md:text-lg leading-relaxed text-ink/75"
                prompt={`Write about body paragraph B for [USER_PROJECT].
Original nuance: how the studio works — process, collaboration rhythm, what a project feels like.
Chunk size: 40–55 words, 2–3 sentences.
Tone: practical, warm.
Return only the paragraph.`}
                previewText="[how we work — process, rhythm, feel of a project]"
              />
            </PartMotion>
          </div>
        </div>
      </PartSection>

      {/* ── CAPABILITIES ──────────────────────────────────────────────── */}
      <PartSection
        partId="{%part:section-capabilities%}"
        label="Capabilities"
        className="px-5 md:px-10 py-20 md:py-28 border-t-3 border-line"
      >
        <div className="max-w-site mx-auto">
          <PartText
            partId="{%part:capabilities-heading%}"
            as="h2"
            className="font-sans text-2xl md:text-3xl font-light tracking-tight lowercase mb-10"
            prompt={`Write the capabilities section heading for [USER_PROJECT].
Original nuance: a single lowercase word or short phrase ("what we do").
Chunk size: 1–3 words.
Return only the heading.`}
            previewText="what we do"
          />
          <ul className="divide-y divide-line border-y-3 border-line">
            {CAPABILITIES.map((cap, i) => (
              <li key={cap} className="group">
                <PartMotion partId={`{%motion:capability-${i}%}`} type="fade" trigger="inView">
                  <div className="flex items-baseline justify-between gap-4 py-5 md:py-7">
                    <PartText
                      partId={`{%part:capability-${i}%}`}
                      as="span"
                      className="font-sans text-2xl md:text-4xl font-light tracking-tight lowercase group-hover:text-accent transition-colors"
                      prompt={`Write capability ${i + 1} label for [USER_PROJECT].
Original nuance: a discipline noun in lowercase ("art direction" / "brand identity").
Chunk size: 1–2 words.
Tone: plain, no buzzwords.
Return only the label.`}
                      previewText={cap.toLowerCase()}
                    />
                    <PartText
                      partId={`{%part:capability-${i}-num%}`}
                      as="span"
                      className="text-xs uppercase tracking-label text-muted shrink-0"
                      prompt={`Write a small index marker for capability ${i + 1}.
Original nuance: 2-digit index ("01", "02"…).
Chunk size: 1 token.
Return only the index.`}
                      previewText={String(i + 1).padStart(2, "0")}
                    />
                  </div>
                </PartMotion>
              </li>
            ))}
          </ul>
        </div>
      </PartSection>

      {/* ── CLIENTS MARQUEE ───────────────────────────────────────────── */}
      <PartSection
        partId="{%part:section-clients%}"
        label="Clients"
        className="px-5 md:px-10 py-16 md:py-20 border-t-3 border-line"
      >
        <div className="max-w-site mx-auto">
          <PartText
            partId="{%part:clients-heading%}"
            as="p"
            className="text-xs uppercase tracking-label text-muted mb-8"
            prompt={`Write the clients section label for [USER_PROJECT].
Original nuance: "selected clients" — small caps label.
Chunk size: 2–3 words.
Return only the label.`}
            previewText="selected clients"
          />
          <div className="overflow-hidden border-y-3 border-line py-5">
            <div className="marquee-track animate-marquee-x">
              {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((c, i) => (
                <PartText
                  key={i}
                  partId="{%part:clients-item%}"
                  as="span"
                  className="font-sans text-2xl md:text-3xl font-light lowercase px-8 inline-flex items-center gap-8 text-ink/80"
                  prompt={`Write one client slot label for the clients marquee in [USER_PROJECT].
Original nuance: a lowercase client/project name placeholder — single unit, will repeat.
Chunk size: 1–2 words.
Return only one unit.`}
                  previewText={c}
                />
              ))}
            </div>
          </div>
        </div>
      </PartSection>

      <PartFooter />
    </main>
  );
}
