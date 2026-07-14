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
    <main>
      <PartNav />

      <PartSection
        partId={`{%part:case-${n}-hero%}`}
        label="Case Hero"
        className="pt-[calc(var(--navbar-height)+2rem)] px-4 md:px-6 pb-10"
      >
        <div className="max-w-site mx-auto">
          <PartMotion partId={`{%motion:case-${n}-title%}`} type="split" trigger="load">
            <PartText
              partId={`{%part:case-${n}-title%}`}
              as="h1"
              className="font-display text-[length:var(--text-7xl)] tracking-tightest uppercase leading-[0.92]"
              prompt={`Case study ${n} title for [USER_PROJECT]. Short brand-style uppercase name. Avoid original client names. Return only the title.`}
              previewText={`[project ${String(n).padStart(2, "0")}]`}
            />
          </PartMotion>
          <PartText
            partId={`{%part:case-${n}-context-label%}`}
            as="p"
            className="mt-8 text-xs uppercase tracking-label text-[color:var(--muted)]"
            prompt={`Context label. Original: "CONTEXT". Return only the label.`}
            previewText="Context"
          />
          <PartText
            partId={`{%part:case-${n}-lede%}`}
            as="h2"
            className="mt-3 max-w-3xl text-xl md:text-2xl tracking-tight leading-snug uppercase"
            prompt={`Case ${n} lede for [USER_PROJECT]. Original nuance: helping brand reintroduce itself / immersive concept line.
Chunk size: 10–20 words.
Return only the lede.`}
            previewText="[project lede — problem space in one line]"
          />
          <PartText
            partId={`{%part:case-${n}-body%}`}
            as="p"
            className="mt-6 max-w-2xl text-sm md:text-base text-[color:var(--muted)] leading-relaxed"
            prompt={`Case ${n} narrative for [USER_PROJECT]. Chunk size: 60–100 words. Tone: studio case study. Avoid real client IP. Return only the narrative.`}
            previewText="[case narrative — challenge, approach, outcome]"
          />
        </div>
      </PartSection>

      <PartSection partId={`{%part:case-${n}-meta%}`} label="Case Meta" className="px-4 md:px-6 pb-12">
        <div className="max-w-site mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
          {[
            { id: "client", label: "Client" },
            { id: "location", label: "Location" },
            { id: "sector", label: "Sector" },
            { id: "year", label: "Year" },
            { id: "timing", label: "Timing" },
          ].map((m) => (
            <div key={m.id} data-part={`{%part:case-${n}-meta-${m.id}%}`}>
              <PartText
                partId={`{%part:case-${n}-meta-${m.id}-label%}`}
                as="p"
                className="text-[11px] uppercase tracking-label text-[color:var(--muted)] mb-1"
                prompt={`Meta label: ${m.label}. Return only the label.`}
                previewText={m.label}
              />
              <PartText
                partId={`{%part:case-${n}-meta-${m.id}-value%}`}
                as="p"
                className="uppercase tracking-tight"
                prompt={`Meta value for ${m.label} on case ${n}. Fictional placeholder. Chunk size: 1–5 words. Return only the value.`}
                previewText={`[${m.label.toLowerCase()}]`}
              />
            </div>
          ))}
        </div>
        <div className="max-w-site mx-auto mt-8">
          <PartText
            partId={`{%part:case-${n}-visit%}`}
            as="a"
            href="#"
            className="text-sm uppercase tracking-label border-b border-[color:var(--fg)] pb-1 hover:opacity-60 transition"
            prompt={`Visit site CTA. Original: "Visit website". Return only the label.`}
            previewText="Visit website →"
          />
        </div>
      </PartSection>

      <PartSection partId={`{%part:case-${n}-hero-media%}`} label="Hero Media" className="px-4 md:px-6 pb-12">
        <div className="max-w-site mx-auto relative aspect-[16/9] bg-[color:var(--soft)] overflow-hidden">
          <PartImage
            partId={`{%part:case-${n}-media-hero%}`}
            aspectRatio={16 / 9}
            objectFit="cover"
            placeholder="Case hero still / film frame — full-bleed craft"
            className="w-full h-full absolute inset-0"
          />
        </div>
      </PartSection>

      <PartSection partId={`{%part:case-${n}-concept%}`} label="Creative Concept" className="px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <PartText
              partId={`{%part:case-${n}-concept-label%}`}
              as="p"
              className="text-xs uppercase tracking-label text-[color:var(--muted)]"
              prompt={`Concept label. Original: "CREATIVE CONCEPT". Return only the label.`}
              previewText="Creative concept"
            />
          </div>
          <div className="md:col-span-8">
            <PartText
              partId={`{%part:case-${n}-concept-body%}`}
              as="p"
              className="text-base md:text-lg leading-relaxed"
              prompt={`Creative concept body for case ${n}. Chunk size: 50–90 words. Return only the body.`}
              previewText="[creative concept narrative]"
            />
          </div>
        </div>
      </PartSection>

      <PartSection partId={`{%part:case-${n}-media-grid%}`} label="Media Grid" className="px-4 md:px-6 pb-16">
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {[1, 2, 3, 4, 5, 6].map((m) => (
            <div
              key={m}
              className={`relative bg-[color:var(--soft)] overflow-hidden ${m === 1 ? "md:col-span-2 aspect-[21/9]" : "aspect-[4/3]"}`}
            >
              <PartImage
                partId={`{%part:case-${n}-shot-${m}%}`}
                aspectRatio={m === 1 ? 21 / 9 : 4 / 3}
                objectFit="cover"
                placeholder={`Case ${n} detail ${m} — UI, 3D, or motion still`}
                className="w-full h-full absolute inset-0"
              />
            </div>
          ))}
        </div>
      </PartSection>

      <PartSection partId={`{%part:case-${n}-quote%}`} label="Quote" className="px-4 md:px-6 py-16 md:py-24 bg-[color:var(--panel)]">
        <div className="max-w-site mx-auto max-w-4xl">
          <PartText
            partId={`{%part:case-${n}-quote-text%}`}
            as="blockquote"
            className="font-display text-2xl md:text-4xl tracking-tight leading-snug"
            prompt={`Client quote for case ${n}. Fictional. Chunk size: 25–45 words. Return only the quote.`}
            previewText="[client quote about collaboration quality]"
          />
          <PartText
            partId={`{%part:case-${n}-quote-attr%}`}
            as="p"
            className="mt-6 text-sm text-[color:var(--muted)]"
            prompt={`Quote attribution — fictional name + role. Return only the attribution.`}
            previewText="[name · role · org]"
          />
        </div>
      </PartSection>

      <PartSection partId={`{%part:case-${n}-outcome%}`} label="Outcome" className="px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-site mx-auto max-w-3xl">
          <PartText
            partId={`{%part:case-${n}-outcome-label%}`}
            as="p"
            className="text-xs uppercase tracking-label text-[color:var(--muted)] mb-4"
            prompt={`Outcome label. Original: "THE OUTCOME" / "VALUE". Return only the label.`}
            previewText="The outcome"
          />
          <PartText
            partId={`{%part:case-${n}-outcome-body%}`}
            as="p"
            className="text-base md:text-lg leading-relaxed"
            prompt={`Outcome body for case ${n}. Chunk size: 40–70 words. Return only the body.`}
            previewText="[outcome — what shipped and why it matters]"
          />
        </div>
      </PartSection>

      <PartSection partId={`{%part:case-${n}-next%}`} label="Next Case" className="px-4 md:px-6 py-12 border-t border-[color:var(--border)]">
        <div className="max-w-site mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <Link href="/work" className="text-sm uppercase tracking-label text-[color:var(--muted)] hover:text-[color:var(--fg)] transition">
            <PartText
              partId={`{%part:case-${n}-back%}`}
              as="span"
              prompt={`Back to work label. Return only the label.`}
              previewText="← All work"
            />
          </Link>
          <Link
            href={`/case-studies/${next.slug}`}
            className="font-display text-2xl md:text-3xl tracking-tight uppercase hover:opacity-60 transition"
          >
            <PartText
              partId={`{%part:case-${n}-next-link%}`}
              as="span"
              prompt={`Next case CTA. Return only the label.`}
              previewText="Next case →"
            />
          </Link>
        </div>
      </PartSection>

      <PartFooter />
    </main>
  );
}
