"use client";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { PartImage } from "./PartImage";
import { PartText } from "./PartText";
import { PartMotion } from "./PartMotion";
import { WORK, IMAGE_STYLE, type WorkItem } from "@/lib/work";

/** Full-bleed work slider — title left, index right, cinematic still */
export function WorkSlider({ items = WORK }: { items?: WorkItem[] }) {
  const [i, setI] = useState(0);
  const item = items[i] ?? items[0];
  if (!item) return null;
  const n = items.length;

  return (
    <div data-part="{%part:work-slider%}" className="relative min-h-screen bg-ink">
      <PartMotion partId={`{%motion:work-slide-${item.index}%}`} type="fade" trigger="inView">
        <div className="absolute inset-0">
          <PartImage
            partId={`{%part:work-${item.index}-cover%}`}
            aspectRatio={16 / 9}
            objectFit="cover"
            placeholder={`${IMAGE_STYLE.workSlide} — project ${item.index} cover`}
            className="absolute inset-0 h-full w-full border-0 bg-ash"
          />
          <div className="absolute inset-0 bg-ink/25" />
        </div>
      </PartMotion>

      <div className="relative z-10 flex min-h-screen flex-col justify-between px-4 py-24 md:px-6 md:py-28">
        <div className="flex items-start justify-between gap-6">
          <Link href={`/works#${item.slug}`} className="group">
            <PartText
              partId={`{%part:work-${item.index}-title%}`}
              as="h2"
              className="text-mega text-paper transition group-hover:opacity-70"
              prompt={`Work slide title for project ${item.index} of [USER_PROJECT].
Original nuance: short brand/project name as huge white type over full-bleed photo.
Chunk size: 1–2 words.
Avoid: real client trademarks from source capture.
Return only the title.`}
              previewText={`Project ${String(item.index).padStart(2, "0")}`}
            />
            <PartText
              partId={`{%part:work-${item.index}-discipline%}`}
              as="p"
              className="mt-3 text-sm text-paper/70"
              prompt={`Discipline line under work title ${item.index}.
Original nuance: short service tag (Brand System / Art Direction).
Chunk size: 1–3 words.
Return only the line.`}
              previewText={item.discipline}
            />
          </Link>

          <PartText
            partId={`{%part:work-${item.index}-index%}`}
            as="p"
            className="text-year text-paper/90"
            prompt={`Work slide index number.
Original nuance: zero-padded "01".
Chunk size: 2 digits.
Return only the number.`}
            previewText={String(item.index).padStart(2, "0")}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setI((v) => (v - 1 + n) % n)}
            className="text-sm text-paper/70 hover:text-paper transition"
          >
            Prev
          </button>
          <div className="flex gap-2">
            {items.map((w, di) => (
              <button
                key={w.slug}
                type="button"
                aria-label={`Slide ${di + 1}`}
                onClick={() => setI(di)}
                className={clsx(
                  "h-1.5 w-1.5 rounded-full transition",
                  di === i ? "bg-paper" : "bg-paper/30"
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setI((v) => (v + 1) % n)}
            className="text-sm text-paper/70 hover:text-paper transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
