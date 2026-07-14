"use client";
import Link from "next/link";
import { PartText } from "./PartText";
import { PartImage } from "./PartImage";
import { PartMotion } from "./PartMotion";
import type { Story } from "@/lib/content";

export function StoryCard({ story }: { story: Story }) {
  const n = story.index;
  return (
    <article data-part={`{%part:story-card-${n}%}`} className="group border border-line rounded-2xl overflow-hidden bg-paper hover:shadow-lg transition">
      <Link href={`/customer-stories/${story.slug}`} className="block">
        <div className="relative aspect-[16/10] bg-soft">
          <PartImage
            partId={`{%part:story-${n}-media%}`}
            aspectRatio={16 / 10}
            objectFit="cover"
            placeholder={`Customer story ${n} hero — product UI / support ops visual`}
            className="w-full h-full absolute inset-0"
          />
        </div>
        <div className="p-5 md:p-6">
          <PartText
            partId={`{%part:story-${n}-sector%}`}
            as="p"
            className="text-xs uppercase tracking-label text-accent mb-2"
            prompt={`Sector chip for story ${n}. Original filters: Finance, Health, Energy, Complex SaaS. Return only the sector.`}
            previewText={story.sector}
          />
          <PartMotion partId={`{%motion:story-${n}-title%}`} type="fade" trigger="inView">
            <PartText
              partId={`{%part:story-${n}-title%}`}
              as="h3"
              className="text-lg md:text-xl tracking-tight font-medium leading-snug"
              prompt={`Customer story ${n} title for [USER_PROJECT]. Outcome-led, no original client names.
Chunk size: 10–18 words.
Return only the title.`}
              previewText={`[story ${n} outcome title]`}
            />
          </PartMotion>
          <PartText
            partId={`{%part:story-${n}-cta%}`}
            as="p"
            className="mt-4 text-sm text-muted group-hover:text-accent transition"
            prompt={`Story card CTA. Original: "See results". Return only the label.`}
            previewText="See results →"
          />
        </div>
      </Link>
    </article>
  );
}
