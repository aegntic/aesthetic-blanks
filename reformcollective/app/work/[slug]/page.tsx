import { notFound } from "next/navigation";
import Link from "next/link";
import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartImage } from "@/components/parts/PartImage";
import { PartMotion } from "@/components/parts/PartMotion";
import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";
import { WORK, getWork, nextWork } from "@/lib/work";

export function generateStaticParams() {
  return WORK.map((w) => ({ slug: w.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const found = getWork(slug);
  if (!found) notFound();
  const item = found;
  const next = nextWork(slug);
  const n = item.index;

  return (
    <main className="relative flex-1">
      <PartNav />

      {/* ── CASE HERO ──────────────────────────────────────── */}
      <PartSection
        partId={`{%part:case-${n}-hero%}`}
        label="Case Study Hero"
        className="pt-28 md:pt-32 px-5 md:px-10 pb-10"
      >
        <div className="max-w-site mx-auto">
          <PartMotion partId={`{%motion:case-${n}-title%}`} type="mask" trigger="load">
            <PartText
              partId={`{%part:case-${n}-title%}`}
              as="h1"
              className="font-sans text-sm md:text-[1.375rem] font-medium uppercase tracking-wide"
              prompt={`Write case study ${n} brand title for [USER_PROJECT].
Original nuance: short uppercase brand name (1–2 words).
Avoid: original Reform client names.
Return only the title.`}
              previewText={`[project ${String(n).padStart(2, "0")}]`}
            />
            <PartText
              partId={`{%part:case-${n}-tagline%}`}
              as="p"
              className="mt-2 text-sm md:text-[1.375rem] font-light text-muted"
              prompt={`Write case study ${n} product tagline.
Original nuance: one-line category definition.
Chunk size: 4–12 words.
Return only the tagline.`}
              previewText="[product one-liner]"
            />
          </PartMotion>

          <PartText
            partId={`{%part:case-${n}-services%}`}
            as="p"
            className="mt-6 text-[10px] uppercase tracking-label text-muted"
            prompt={`Services list for case ${n}. Original: Art Direction / Branding / Web Design / Development.
Return only the services line.`}
            previewText={item.services.join(" · ")}
          />
        </div>
      </PartSection>

      {/* ── HERO MEDIA ─────────────────────────────────────── */}
      <PartSection
        partId={`{%part:case-${n}-media-hero%}`}
        label="Case Hero Media"
        className="px-5 md:px-10"
      >
        <div className="max-w-site mx-auto">
          <div className="relative aspect-[16/9] md:aspect-[21/9] bg-black3 overflow-hidden">
            <PartImage
              partId={`{%part:case-${n}-hero-media%}`}
              aspectRatio={21 / 9}
              objectFit="cover"
              placeholder="Case study hero film still or product UI full-bleed — high craft, cinematic grade"
              className="w-full h-full absolute inset-0"
            />
          </div>
        </div>
      </PartSection>

      {/* ── BODY ───────────────────────────────────────────── */}
      <PartSection
        partId={`{%part:case-${n}-body%}`}
        label="Case Body"
        className="px-5 md:px-10 py-16 md:py-24"
      >
        <div className="max-w-3xl mx-auto">
          <PartMotion partId={`{%motion:case-${n}-body%}`} type="fade" trigger="inView">
            <PartText
              partId={`{%part:case-${n}-story%}`}
              as="p"
              className="text-base md:text-lg leading-relaxed text-ink/80 font-body"
              prompt={`Write the primary case study narrative for project ${n} of [USER_PROJECT].
Original nuance: client came for a specific product/problem; studio partnered on brand + full web design/dev; result feels modern/trustworthy without losing human side; site makes technical product approachable.
Chunk size: 80–140 words, 3–5 sentences.
Tone: studio case study, confident craft, no hype adjectives.
Avoid: original client names and proprietary claims.
Return only the narrative.`}
              previewText="[case narrative — problem, partnership, outcome]"
            />
          </PartMotion>

          <div className="mt-10 flex flex-wrap gap-6">
            <PartText
              partId={`{%part:case-${n}-visit-cta%}`}
              as="a"
              className="text-sm uppercase tracking-label border-b border-ink/30 pb-1 hover:border-accent hover:text-accent transition"
              href="#"
              prompt={`Write "visit live site" CTA for case ${n}.
Original nuance: "VISIT [BRAND]".
Chunk size: 2–4 words.
Return only the CTA.`}
              previewText="Visit project →"
            />
            <Link
              href="/work"
              className="text-sm uppercase tracking-label text-muted hover:text-ink transition"
            >
              <PartText
                partId={`{%part:case-${n}-back%}`}
                as="span"
                prompt={`Write back-to-work link. Original: "BACK TO ALL WORK". Return only the label.`}
                previewText="← Back to all work"
              />
            </Link>
          </div>
        </div>
      </PartSection>

      {/* ── MEDIA GRID ─────────────────────────────────────── */}
      <PartSection
        partId={`{%part:case-${n}-media-grid%}`}
        label="Case Media Grid"
        className="px-5 md:px-10 pb-16 md:pb-24"
      >
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {[1, 2, 3, 4].map((m) => (
            <div
              key={m}
              className={`relative bg-black3 overflow-hidden ${m === 1 ? "md:col-span-2 aspect-[21/9]" : "aspect-[4/3]"}`}
            >
              <PartImage
                partId={`{%part:case-${n}-shot-${m}%}`}
                aspectRatio={m === 1 ? 21 / 9 : 4 / 3}
                objectFit="cover"
                placeholder={`Case ${n} detail shot ${m} — UI, brand system, or motion still`}
                className="w-full h-full absolute inset-0"
              />
            </div>
          ))}
        </div>
      </PartSection>

      {/* ── NEXT CASE ──────────────────────────────────────── */}
      <PartSection
        partId={`{%part:case-${n}-next%}`}
        label="Next Case"
        className="px-5 md:px-10 py-16 md:py-20 border-t border-ink/10"
      >
        <div className="max-w-site mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <PartText
            partId={`{%part:case-${n}-next-label%}`}
            as="p"
            className="text-sm text-muted"
            prompt={`Write "interested to see more / next case" label.
Original nuance: "Interested to see more?" + "SEE NEXT CASE STUDY".
Chunk size: 3–6 words.
Return only the label.`}
            previewText="Interested to see more?"
          />
          <Link
            href={`/work/${next.slug}`}
            className="font-display text-2xl md:text-4xl font-thin tracking-tight hover:text-accent transition"
          >
            <PartText
              partId={`{%part:case-${n}-next-link%}`}
              as="span"
              prompt={`Write next case study CTA.
Original nuance: "SEE NEXT CASE STUDY".
Chunk size: 3–5 words.
Return only the CTA.`}
              previewText="See next case study →"
            />
          </Link>
        </div>
      </PartSection>

      <PartFooter />
    </main>
  );
}
