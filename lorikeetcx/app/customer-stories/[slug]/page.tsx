import { notFound } from "next/navigation";
import Link from "next/link";
import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartImage } from "@/components/parts/PartImage";
import { PartMotion } from "@/components/parts/PartMotion";
import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";
import { STORIES, getStory, nextStory } from "@/lib/content";

export function generateStaticParams() {
  return STORIES.map((s) => ({ slug: s.slug }));
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const found = getStory(slug);
  if (!found) notFound();
  const story = found;
  const next = nextStory(slug);
  const n = story.index;

  return (
    <main>
      <PartNav />
      <PartSection partId={`{%part:cs-${n}-hero%}`} label="Story Hero" className="pt-28 md:pt-36 px-4 md:px-6 pb-10">
        <div className="max-w-site mx-auto">
          <PartText partId={`{%part:cs-${n}-sector%}`} as="p" className="text-xs uppercase tracking-label text-accent mb-4" prompt={`Sector. Return only.`} previewText={story.sector} />
          <PartMotion partId={`{%motion:cs-${n}-title%}`} type="fade" trigger="load">
            <PartText
              partId={`{%part:cs-${n}-title%}`}
              as="h1"
              className="font-display text-[length:var(--h2)] tracking-tightest max-w-4xl leading-[1.05]"
              prompt={`Customer story ${n} H1 — outcome led, no original client names. Chunk size: 12–20 words. Return only.`}
              previewText={`[story ${n} outcome headline]`}
            />
          </PartMotion>
        </div>
      </PartSection>

      <PartSection partId={`{%part:cs-${n}-media%}`} label="Hero Media" className="px-4 md:px-6 pb-12">
        <div className="max-w-site mx-auto relative aspect-[21/9] rounded-3xl overflow-hidden bg-soft">
          <PartImage partId={`{%part:cs-${n}-hero-media%}`} aspectRatio={21 / 9} objectFit="cover" placeholder="Story hero visual" className="w-full h-full absolute inset-0" />
        </div>
      </PartSection>

      <PartSection partId={`{%part:cs-${n}-metrics%}`} label="Metrics" className="px-4 md:px-6 pb-12">
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border border-line p-6 bg-soft">
              <PartText partId={`{%part:cs-${n}-m${i}-n%}`} as="p" className="font-display text-4xl tracking-tight" prompt={`Story metric ${i} number. Return only.`} previewText="—" />
              <PartText partId={`{%part:cs-${n}-m${i}-l%}`} as="p" className="mt-2 text-sm text-muted" prompt={`Story metric ${i} label. Return only.`} previewText="[metric label]" />
            </div>
          ))}
        </div>
      </PartSection>

      <PartSection partId={`{%part:cs-${n}-body%}`} label="Body" className="px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <PartText partId={`{%part:cs-${n}-body-1%}`} as="p" className="text-lg text-muted leading-relaxed" prompt={`Story ${n} narrative para 1. Chunk size: 50–80 words. No real clients. Return only.`} previewText="[challenge and context]" />
          <PartText partId={`{%part:cs-${n}-body-2%}`} as="p" className="text-lg text-muted leading-relaxed" prompt={`Story ${n} narrative para 2 — approach + outcome. Chunk size: 50–80 words. Return only.`} previewText="[approach and results]" />
        </div>
      </PartSection>

      <PartSection partId={`{%part:cs-${n}-quote%}`} label="Quote" className="px-4 md:px-6 py-16 bg-soft border-y border-line">
        <div className="max-w-3xl mx-auto">
          <PartText partId={`{%part:cs-${n}-quote-text%}`} as="blockquote" className="text-2xl md:text-3xl tracking-tight leading-snug" prompt={`Story quote. Fictional. Chunk size: 20–40 words. Return only.`} previewText="[customer quote]" />
          <PartText partId={`{%part:cs-${n}-quote-attr%}`} as="p" className="mt-4 text-sm text-muted" prompt={`Name · role fictional. Return only.`} previewText="[name · role]" />
        </div>
      </PartSection>

      <PartSection partId={`{%part:cs-${n}-next%}`} label="Next" className="px-4 md:px-6 py-12">
        <div className="max-w-site mx-auto flex justify-between gap-4">
          <Link href="/customer-stories" className="text-sm text-muted hover:text-ink">← All stories</Link>
          <Link href={`/customer-stories/${next.slug}`} className="text-sm text-accent hover:underline">Next story →</Link>
        </div>
      </PartSection>
      <PartFooter />
    </main>
  );
}
