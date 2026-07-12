import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartImage } from "@/components/parts/PartImage";
import { PartMotion } from "@/components/parts/PartMotion";
import { PartNav } from "@/components/parts/PartNav";
import { ProjectCard } from "@/components/parts/ProjectCard";
import { BigNumber } from "@/components/parts/BigNumber";

export default function Home() {
  return (
    <main className="relative">
      {/* ── NAV ─────────────────────────────────────────────── */}
      <PartNav />

      {/* ── HERO ────────────────────────────────────────────── */}
      <PartSection partId="{%part:section-hero%}" label="Hero" className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24">
        <div className="absolute inset-0 z-0">
          <PartImage
            partId="{%part:hero-video-still%}"
            aspectRatio={16/9}
            objectFit="cover"
            placeholder="Full-bleed cinematic hero still or looping video (original: dramatic portrait / commercial frame, dark cinematic grade)"
            className="w-full h-full absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full">
          <PartMotion partId="{%motion:hero-name-reveal%}" type="stagger" trigger="load">
            <PartText
              partId="{%part:hero-name%}"
              as="h1"
              className="font-display text-[18vw] md:text-[14vw] leading-[0.85] tracking-tightest font-medium lowercase"
              prompt={`Write the primary identity mark / name treatment for [USER_PROJECT] hero.
Original nuance: all-lowercase, extremely large display type, tight tracking, single or two-word name that functions as both logo and headline.
Chunk size: 1–2 words, max 12 characters total preferred.
Tone: pure confidence, no decoration, cinematic authority.
Avoid: any slogan, any tagline, any descriptive phrase.
Return only the name text.`}
              previewText="your name"
            />
          </PartMotion>

          <div className="mt-6 md:mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <PartText
              partId="{%part:hero-tagline%}"
              as="p"
              className="text-sm md:text-base tracking-wide uppercase text-muted max-w-xs"
              prompt={`Write a short role / discipline line for [USER_PROJECT] hero.
Original nuance: "Directors Showreel 2020©" style — year + discipline + copyright mark feel.
Chunk size: 3–6 words.
Tone: archival, precise, slightly formal.
Avoid: marketing adjectives.
Return only the line.`}
              previewText="[role / year]"
            />
            <PartText
              partId="{%part:hero-bio-short%}"
              as="p"
              className="text-sm md:text-base leading-relaxed text-paper/80 max-w-md text-right md:text-left"
              prompt={`Write a one-sentence bio for the hero of [USER_PROJECT].
Original nuance: "is a commercials director from Cairo—Egypt and the Founder of Good People". Location + role + one affiliation.
Chunk size: 12–20 words, one sentence.
Tone: factual, understated authority, zero hype.
Avoid: "award-winning", "visionary", "pioneering".
Return only the sentence.`}
              previewText="[short bio]"
            />
          </div>
        </div>
      </PartSection>

      {/* ── QUOTE / CREDENTIAL ─────────────────────────────── */}
      <PartSection partId="{%part:section-credential%}" label="Credential Quote" className="py-24 md:py-40 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <PartMotion partId="{%motion:quote-stagger%}" type="stagger" trigger="inView">
            <PartText
              partId="{%part:credential-quote%}"
              as="blockquote"
              className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight font-medium"
              prompt={`Write a powerful third-party credential quote for [USER_PROJECT].
Original nuance: large centered statement in quotes, e.g. named by a prestigious report as one of the top X in the world.
Chunk size: 18–32 words, one long sentence or two short ones.
Tone: authoritative, understated pride, formal.
Avoid: self-praise language. Keep it as if spoken by an external ranking body.
Return only the quoted text (include the quotation marks).`}
              previewText="“[credential quote]”"
            />
          </PartMotion>
          <PartText
            partId="{%part:credential-source%}"
            as="p"
            className="mt-8 text-xs uppercase tracking-[0.2em] text-muted"
            prompt={`Write the source attribution for the credential quote above.
Original nuance: small caps or uppercase, e.g. "GLOBAL MOVIE DIRECTOR RANK" or report name + year.
Chunk size: 3–6 words.
Tone: archival label.
Return only the source line.`}
            previewText="[source]"
          />
        </div>
      </PartSection>

      {/* ── SELECTED WORK ────────────────────────────────── */}
      <PartSection partId="{%part:section-selected-work%}" label="Selected Work" className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-baseline justify-between mb-12 md:mb-16">
            <PartText
              partId="{%part:work-heading%}"
              as="h2"
              className="text-xs uppercase tracking-[0.25em] text-muted"
              prompt={`Write the section heading for the portfolio grid of [USER_PROJECT].
Original nuance: "SELECTED WORK" — short, uppercase, archival label.
Chunk size: 1–3 words.
Tone: quiet, institutional.
Return only the heading.`}
              previewText="selected work"
            />
            <PartText
              partId="{%part:work-count%}"
              as="span"
              className="text-xs text-muted tabular-nums"
              prompt={`Write a short project count or year range for the work section.
Original nuance: simple "12 projects" or "2018—2024".
Chunk size: 1–4 words.
Return only the text.`}
              previewText="—"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {[1, 2, 3, 4].map((i) => (
              <ProjectCard key={i} index={i} />
            ))}
          </div>
        </div>
      </PartSection>

      {/* ── BIG NUMBER / IMPACT ────────────────────────────── */}
      <PartSection partId="{%part:section-impact%}" label="Impact Number" className="py-24 md:py-40 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto">
          <PartText
            partId="{%part:impact-label%}"
            as="p"
            className="text-xs uppercase tracking-[0.25em] text-muted mb-6"
            prompt={`Write a small label above a massive impact number for [USER_PROJECT].
Original nuance: "VIRAL CAMPAIGN" or "REACH" style single short phrase.
Chunk size: 1–3 words.
Tone: quiet archival.
Return only the label.`}
            previewText="[metric label]"
          />
          <BigNumber />
          <PartText
            partId="{%part:impact-desc%}"
            as="p"
            className="mt-8 text-sm md:text-base text-muted max-w-md leading-relaxed"
            prompt={`Write a short description under a big impact number for [USER_PROJECT].
Original nuance: one or two sentences explaining what the number represents (views, reach, revenue, etc.).
Chunk size: 12–25 words.
Tone: factual, understated.
Return only the description.`}
            previewText="[what the number means]"
          />
        </div>
      </PartSection>

      {/* ── CONTACT TEASER ───────────────────────────────── */}
      <PartSection partId="{%part:section-contact-teaser%}" label="Contact Teaser" className="py-24 md:py-32 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <PartText
            partId="{%part:contact-heading%}"
            as="h2"
            className="font-display text-4xl md:text-6xl tracking-tight mb-6"
            prompt={`Write a contact section heading for [USER_PROJECT].
Original nuance: "Get in touch" or similar short invitation.
Chunk size: 2–4 words.
Tone: direct, warm but professional.
Return only the heading.`}
            previewText="get in touch"
          />
          <PartText
            partId="{%part:contact-note%}"
            as="p"
            className="text-muted text-sm md:text-base leading-relaxed mb-10"
            prompt={`Write a short personality note for the contact section of [USER_PROJECT].
Original nuance: "I'm notoriously slow at getting back to emails. In a hurry? contact my awesome producers."
Chunk size: 1–2 short sentences, 15–30 words.
Tone: self-aware, human, slightly humorous, still professional.
Avoid: corporate "we look forward to hearing from you".
Return only the note.`}
            previewText="[personality note about response time]"
          />
          <a
            href="/contact"
            className="inline-block text-sm uppercase tracking-[0.2em] border-b border-paper/40 pb-1 hover:border-paper transition"
          >
            <PartText
              partId="{%part:contact-cta%}"
              as="span"
              prompt={`Write the link text to the full contact / producers page.
Original nuance: "contact my producers" or "view representation".
Chunk size: 2–4 words.
Tone: clear, low-pressure.
Return only the link text.`}
              previewText="contact producers →"
            />
          </a>
        </div>
      </PartSection>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer data-part="{%part:section-footer%}" className="py-12 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs text-muted">
          <PartText
            partId="{%part:footer-credit%}"
            as="p"
            prompt={`Write a minimal footer credit line for [USER_PROJECT].
Original nuance: site name + year or "built with care".
Chunk size: 3–8 words.
Tone: quiet.
Return only the line.`}
            previewText="© [year] [project]"
          />
          <PartText
            partId="{%part:footer-email%}"
            as="a"
            className="hover:text-paper transition"
            prompt={`Write a primary contact email display for the footer.
Original nuance: simple email address.
Chunk size: the email only.
Return only the email.`}
            previewText="hello@yourproject.com"
          />
        </div>
      </footer>
    </main>
  );
}
