"use client";
import Link from "next/link";
import { PartImage } from "./PartImage";
import { PartText } from "./PartText";
import { PartMotion } from "./PartMotion";
import type { WorkItem } from "@/lib/work";

/**
 * Blumenkopf work tile. Capture: 2-column case grid separated by 3px black lines;
 * each tile = a 4:3 media plate, a short uppercase title, a category + year row,
 * and a services line. No hover affordance on the capture — motion is a quiet
 * scroll-gate fade on enter.
 */
export function WorkCard({ item }: { item: WorkItem }) {
  const n = item.index;
  const num = String(n).padStart(2, "0");

  return (
    <article data-part={`{%part:work-card-${n}%}`} className="group relative">
      <Link href={`/work/${item.slug}`} className="block">
        <div className="relative overflow-hidden bg-black3 mb-5 aspect-[4/3]">
          <PartImage
            partId={`{%part:work-${n}-media%}`}
            aspectRatio={4 / 3}
            objectFit="cover"
            placeholder={`Case ${num} hero media — editorial / brand still, photographic grade matching the studio's muted paper-ink palette; full-bleed, no UI chrome`}
            className="w-full h-full absolute inset-0 transition duration-700 ease-expo group-hover:scale-[1.03]"
          />
        </div>

        <PartMotion partId={`{%motion:work-card-${n}-meta%}`} type="fade" trigger="inView">
          <div className="flex items-baseline justify-between gap-4 border-t-3 border-line pt-3">
            <PartText
              partId={`{%part:work-${n}-title%}`}
              as="h3"
              className="font-sans text-lg md:text-xl font-medium tracking-tight uppercase"
              prompt={`Write a project title for case ${num} in [USER_PROJECT] work index.
Original nuance: short uppercase brand-name title (1–2 words), no descriptor.
Chunk size: 1–3 words.
Tone: editorial studio, sparse.
Avoid: descriptive phrases, original client names.
Return only the title.`}
              previewText={`[project ${num}]`}
            />
            <PartText
              partId={`{%part:work-${n}-year%}`}
              as="span"
              className="text-xs uppercase tracking-label text-muted shrink-0"
              prompt={`Write the year label for case ${num}.
Original nuance: 4-digit year only.
Chunk size: 1 token.
Return only the year.`}
              previewText={item.year}
            />
          </div>

          <div className="mt-2 flex items-baseline justify-between gap-4">
            <PartText
              partId={`{%part:work-${n}-category%}`}
              as="p"
              className="text-sm font-light text-muted"
              prompt={`Write a single-word category label for case ${num} in [USER_PROJECT].
Original nuance: one discipline noun (Editorial / Identity / Hospitality / Portrait / Publication / Cultural).
Chunk size: 1 word.
Return only the category.`}
              previewText={item.category}
            />
            <PartText
              partId={`{%part:work-${n}-services%}`}
              as="p"
              className="text-[10px] uppercase tracking-label text-muted text-right max-w-[60%]"
              prompt={`Write a services line for case ${num}.
Original nuance: middot-separated disciplines e.g. "Art Direction · Branding · Web Design".
Chunk size: 2–4 discipline words.
Tone: studio credit list.
Return only the services line.`}
              previewText={item.services.slice(0, 3).join(" · ")}
            />
          </div>
        </PartMotion>
      </Link>
    </article>
  );
}
