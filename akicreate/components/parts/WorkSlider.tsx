"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { PartImage } from "./PartImage";
import { PartText } from "./PartText";
import { PartMotion } from "./PartMotion";
import type { WorkItem } from "@/lib/work";

/** Webflow-class works slider: 3 slides of pairs, dots + hairline arrows */
export function WorkSlider({ projects }: { projects: WorkItem[] }) {
  const slides: [WorkItem, WorkItem][] = [];
  for (let i = 0; i < projects.length; i += 2) {
    if (projects[i + 1]) slides.push([projects[i], projects[i + 1]]);
  }
  const [index, setIndex] = useState(0);
  const n = Math.max(slides.length, 1);
  const pair = slides[index];

  if (!pair) return null;

  return (
    <div data-part="{%part:works-slider%}" className="relative">
      <PartMotion partId={`{%motion:works-slider-${index}%}`} type="fade" trigger="inView">
        <div className="grid min-h-[18rem] grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <WorkCard project={pair[0]} />
          <WorkCard project={pair[1]} />
        </div>
      </PartMotion>

      <div className="mt-12 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setIndex((v) => (v - 1 + n) % n)}
          aria-label="Previous works"
          className="group p-3"
        >
          <span className="slider-arrow prev transition group-hover:opacity-55" />
        </button>

        <div className="flex items-center gap-2.5" data-part="{%part:slider-dots%}">
          {slides.map((_, di) => (
            <button
              key={di}
              type="button"
              aria-label={`Works slide ${di + 1}`}
              onClick={() => setIndex(di)}
              className={clsx("slider-dot", di === index && "active")}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIndex((v) => (v + 1) % n)}
          aria-label="Next works"
          className="group p-3"
        >
          <span className="slider-arrow transition group-hover:opacity-55" />
        </button>
      </div>
    </div>
  );
}

export function WorkCard({ project }: { project: WorkItem }) {
  const n = project.index;
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block"
      data-part={`{%part:work-card-${n}%}`}
    >
      <div className="mb-3 flex items-baseline justify-between gap-3 text-[16px] text-mist">
        <PartText
          partId={`{%part:work-${n}-title%}`}
          as="span"
          className="text-ink transition group-hover:opacity-55"
          prompt={`Featured work title for portfolio card ${n} in [USER_PROJECT].
Original nuance: short project name (1–3 words), gallery-wall label, 16px PP Neue Montreal.
Avoid: client trademarks from source.
Return only the title.`}
          previewText={`Project ${String(n).padStart(2, "0")}`}
        />
        <span>{project.category}</span>
      </div>
      <PartImage
        partId={`{%part:work-${n}-img%}`}
        aspectRatio={4 / 3}
        placeholder={`Featured still for ${project.category.toLowerCase()} project — clean studio light, product/editorial photography role (not brand asset)`}
        className="w-full border-0 bg-soft"
      />
    </Link>
  );
}
