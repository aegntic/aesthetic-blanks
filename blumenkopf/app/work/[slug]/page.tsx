import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartMotion } from "@/components/parts/PartMotion";
import { PartImage } from "@/components/parts/PartImage";
import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";
import { WORK, getWork, nextWork } from "@/lib/work";

export function generateStaticParams() {
  return WORK.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getWork(slug);
  return { title: item ? `Case ${String(item.index).padStart(2, "0")} — Blumenkopf` : "Case Study" };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) notFound();
  const nxt = nextWork(slug);
  const n = item.index;
  const num = String(n).padStart(2, "0");

  return (
    <main className="relative flex-1 bg-paper text-ink">
      <PartNav />

      {/* ── CASE HERO ─────────────────────────────────────────────────── */}
      <PartSection
        partId="{%part:section-case-hero%}"
        label="Case Hero"
        className="pt-28 md:pt-32 px-5 md:px-10 pb-12"
      >
        <div className="max-w-site mx-auto">
          <div className="flex items-baseline justify-between gap-6 border-b-3 border-line pb-4 mb-10">
            <PartText
              partId="{%part:case-breadcrumb%}"
              as="a"
              href="/work"
              className="text-xs uppercase tracking-label text-muted hover:text-accent transition"
              prompt={`Write the back-to-work breadcrumb for a case study in [USER_PROJECT].
Original nuance: "← back to work" lowercase.
Chunk size: 3–4 words.
Return only the breadcrumb.`}
              previewText="← back to work"
            />
            <PartText
              partId="{%part:case-index%}"
              as="span"
              className="text-xs uppercase tracking-label text-muted"
              prompt={`Write the case index marker.
Original nuance: "case 01 / 06" — current / total.
Chunk size: 3 tokens.
Return only the marker.`}
              previewText={`case ${num} / ${String(WORK.length).padStart(2, "0")}`}
            />
          </div>

          <PartMotion partId="{%motion:case-title%}" type="mask" trigger="load">
            <PartText
              partId="{%part:case-title%}"
              as="h1"
              className="font-sans text-[clamp(2.5rem,9vw,7rem)] font-light tracking-tightest leading-[0.9] lowercase"
              prompt={`Write the case study title for case ${num} in [USER_PROJECT].
Original nuance: short lowercase brand/project name (1–2 words).
Chunk size: 1–3 words.
Tone: identity, sparse.
Avoid: descriptive subtitles baked in.
Return only the title.`}
              previewText={`[project ${num}]`}
            />
          </PartMotion>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 border-t-3 border-line pt-6">
            {[
              { id: "category", label: "category", val: item.category },
              { id: "year", label: "year", val: item.year },
              { id: "services", label: "services", val: item.services.slice(0, 3).join(" · ") },
              { id: "role", label: "role", val: "Art Direction" },
            ].map((m) => (
              <PartText
                key={m.id}
                partId={`{%part:case-meta-${m.id}%}`}
                as="div"
                className="text-xs uppercase tracking-label text-muted leading-relaxed"
                prompt={`Write the ${m.label} meta value for case ${num} in [USER_PROJECT].
Original nuance: short uppercase/studio-credit style value.
Chunk size: 1–5 words.
Return only the value.`}
                previewText={m.val}
              />
            ))}
          </div>
        </div>
      </PartSection>

      {/* ── CASE HERO MEDIA ───────────────────────────────────────────── */}
      <PartSection
        partId="{%part:section-case-media%}"
        label="Case Hero Media"
        className="px-5 md:px-10 pb-16 md:pb-24"
      >
        <div className="max-w-site mx-auto">
          <div data-part="{%part:case-hero-media%}" className="aspect-[16/9] overflow-hidden bg-black3 border-3 border-line">
            <PartImage
              partId={`{%part:case-${n}-hero-media%}`}
              aspectRatio={16 / 9}
              objectFit="cover"
              placeholder={`Case ${num} hero plate — full-bleed art-directed still on the studio paper-ink palette; the single image that defines the case`}
              className="w-full h-full"
            />
          </div>
        </div>
      </PartSection>

      {/* ── CASE BODY ─────────────────────────────────────────────────── */}
      <PartSection
        partId="{%part:section-case-body%}"
        label="Case Body"
        className="px-5 md:px-10 py-20 md:py-28 border-t-3 border-line"
      >
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <PartText
              partId="{%part:case-lede%}"
              as="p"
              className="font-serif italic text-xl md:text-2xl leading-snug text-ink/90"
              prompt={`Write the case lede for case ${num} in [USER_PROJECT].
Original nuance: a one-sentence italic serif pull-quote framing the project's core tension.
Chunk size: 15–25 words.
Tone: editorial.
Return only the lede.`}
              previewText="[italic lede — the project's core tension]"
            />
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-5">
            <PartMotion partId="{%motion:case-body-a%}" type="fade" trigger="inView">
              <PartText
                partId="{%part:case-body-a%}"
                as="p"
                className="font-serif text-base md:text-lg leading-relaxed text-ink/85"
                prompt={`Write case body paragraph A for case ${num} in [USER_PROJECT].
Original nuance: the brief / problem — what was asked, what constrained it.
Chunk size: 50–70 words, 3–4 sentences.
Tone: precise, narrative.
Return only the paragraph.`}
                previewText="[the brief — what was asked, what constrained it]"
              />
            </PartMotion>
            <PartMotion partId="{%motion:case-body-b%}" type="fade" trigger="inView">
              <PartText
                partId="{%part:case-body-b%}"
                as="p"
                className="font-serif text-base md:text-lg leading-relaxed text-ink/85"
                prompt={`Write case body paragraph B for case ${num} in [USER_PROJECT].
Original nuance: the move — what the studio did, the decisive design choice.
Chunk size: 50–70 words, 3–4 sentences.
Tone: confident, specific.
Return only the paragraph.`}
                previewText="[the move — the decisive design choice]"
              />
            </PartMotion>
          </div>
        </div>
      </PartSection>

      {/* ── CASE GALLERY ──────────────────────────────────────────────── */}
      <PartSection
        partId="{%part:section-case-gallery%}"
        label="Case Gallery"
        className="px-5 md:px-10 py-12 md:py-16 border-t-3 border-line"
      >
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[1, 2, 3].map((g) => (
            <div
              key={g}
              data-part={`{%part:case-${n}-gallery-${g}%}`}
              className={`overflow-hidden bg-black3 border-3 border-line ${g === 3 ? "md:col-span-2 aspect-[21/9]" : "aspect-[4/5]"}`}
            >
              <PartImage
                partId={`{%part:case-${n}-gallery-${g}-media%}`}
                aspectRatio={g === 3 ? 21 / 9 : 4 / 5}
                objectFit="cover"
                placeholder={`Case ${num} gallery frame ${g} — supporting still, detail, or spread; same paper-ink grade`}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </PartSection>

      {/* ── CASE NEXT ─────────────────────────────────────────────────── */}
      <PartSection
        partId="{%part:section-case-next%}"
        label="Next Case"
        className="px-5 md:px-10 py-20 md:py-28 border-t-3 border-line"
      >
        <div className="max-w-site mx-auto">
          <PartText
            partId="{%part:case-next-label%}"
            as="p"
            className="text-xs uppercase tracking-label text-muted mb-4"
            prompt={`Write the "next case" label for [USER_PROJECT].
Original nuance: "( next )" lowercase.
Chunk size: 1 word.
Return only the label.`}
            previewText="( next )"
          />
          <Link href={`/work/${nxt.slug}`} className="group block">
            <PartText
              partId="{%part:case-next-title%}"
              as="span"
              className="font-sans text-[clamp(2rem,7vw,5rem)] font-light tracking-tightest lowercase group-hover:text-accent transition-colors"
              prompt={`Write the next-case title cue for [USER_PROJECT].
Original nuance: lowercase "next →" or the next project name.
Chunk size: 1–3 words.
Return only the cue.`}
              previewText="next →"
            />
          </Link>
        </div>
      </PartSection>

      <PartFooter />
    </main>
  );
}
