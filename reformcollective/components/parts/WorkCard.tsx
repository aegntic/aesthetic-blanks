"use client";
import Link from "next/link";
import { PartImage } from "./PartImage";
import { PartText } from "./PartText";
import { PartMotion } from "./PartMotion";
import type { WorkItem } from "@/lib/work";
import clsx from "clsx";

export function WorkCard({
  item,
  featured = false,
}: {
  item: WorkItem;
  featured?: boolean;
}) {
  const n = item.index;
  return (
    <article
      data-part={`{%part:work-card-${n}%}`}
      className={clsx("group", featured ? "md:col-span-2" : "")}
    >
      <Link href={`/work/${item.slug}`} className="block">
        <div
          className={clsx(
            "relative overflow-hidden bg-black3 mb-4",
            featured ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[4/3]",
          )}
        >
          <PartImage
            partId={`{%part:work-${n}-media%}`}
            aspectRatio={featured ? 21 / 9 : 4 / 3}
            objectFit="cover"
            placeholder={`Case study ${n} hero media — full-bleed product UI / brand film still, high craft, muted grade with accent moments`}
            className="w-full h-full absolute inset-0 transition duration-700 ease-reform group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition duration-500" />
        </div>

        <PartMotion partId={`{%motion:work-card-${n}-meta%}`} type="fade" trigger="inView">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <PartText
                partId={`{%part:work-${n}-title%}`}
                as="h3"
                className="font-sans text-lg md:text-[1.375rem] font-medium tracking-tight uppercase"
                prompt={`Write a project title for case study ${n} in [USER_PROJECT] work index.
Original nuance: short brand-name style title in uppercase (1–2 words).
Chunk size: 1–3 words.
Tone: product brand, clean.
Avoid: original Reform client names.
Return only the title.`}
                previewText={`[project ${String(n).padStart(2, "0")}]`}
              />
              <PartText
                partId={`{%part:work-${n}-tagline%}`}
                as="p"
                className="mt-1 text-sm md:text-base font-light text-muted max-w-xl"
                prompt={`Write a one-line product tagline under case study ${n} title for [USER_PROJECT].
Original nuance: category-defining one-liner (what the product is), sentence case or all-caps short phrase.
Chunk size: 4–12 words.
Tone: product marketing, precise.
Avoid: original client taglines.
Return only the tagline.`}
                previewText="[product one-liner]"
              />
            </div>
            <PartText
              partId={`{%part:work-${n}-services%}`}
              as="p"
              className="text-[10px] md:text-xs uppercase tracking-label text-muted"
              prompt={`Write a services line for case study ${n}.
Original nuance: slash or space-separated disciplines e.g. "Art Direction Branding Web Design Development".
Chunk size: 3–6 discipline words.
Tone: studio credit list.
Return only the services line.`}
              previewText={item.services.join(" · ")}
            />
          </div>
        </PartMotion>
      </Link>
    </article>
  );
}
