"use client";

import Link from "next/link";
import { PartImage } from "./PartImage";
import { PartText } from "./PartText";
import { PartMotion } from "./PartMotion";
import type { WorkItem } from "@/lib/work";

export function WorkCard({ item }: { item: WorkItem }) {
  const n = item.index;
  return (
    <article data-part={`{%part:work-card-${n}%}`} className="group">
      <Link href={`/case-studies/${item.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--soft)] mb-4">
          <PartImage
            partId={`{%part:work-${n}-media%}`}
            aspectRatio={16 / 10}
            objectFit="cover"
            placeholder={`Project ${n} still — high-end product UI / immersive web frame, crisp craft`}
            className="w-full h-full absolute inset-0 transition duration-700 ease-wonder group-hover:scale-[1.03]"
          />
        </div>
        <PartMotion partId={`{%motion:work-card-${n}-meta%}`} type="fade" trigger="inView">
          <div className="flex items-start justify-between gap-4">
            <div>
              <PartText
                partId={`{%part:work-${n}-title%}`}
                as="h3"
                className="text-lg md:text-xl uppercase tracking-tight font-medium"
                prompt={`Write project title for case ${n} in [USER_PROJECT] work index.
Original nuance: short brand-style uppercase name (1–3 words). Avoid original client names.
Return only the title.`}
                previewText={`[project ${String(n).padStart(2, "0")}]`}
              />
              <PartText
                partId={`{%part:work-${n}-kind%}`}
                as="p"
                className="mt-1 text-sm text-[color:var(--muted)]"
                prompt={`Write project type label for case ${n}.
Original nuance: "Company Website", "Web3 App", "Premium Storefront", "Immersive Website".
Chunk size: 2–4 words.
Return only the type.`}
                previewText={item.kind}
              />
            </div>
          </div>
        </PartMotion>
      </Link>
    </article>
  );
}
