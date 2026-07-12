"use client";
import { PartImage } from "./PartImage";
import { PartText } from "./PartText";
import { PartMotion } from "./PartMotion";

export function ProjectCard({ index }: { index: number }) {
  return (
    <article
      data-part={`{%part:project-card-${index}%}`}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden mb-4 aspect-[16/10] bg-zinc-900">
        <PartImage
          partId={`{%part:project-${index}-media%}`}
          aspectRatio={16 / 10}
          objectFit="cover"
          placeholder={`Project ${index} hero still or video (original: commercial frame, high production value, cinematic grade)`}
          className="w-full h-full transition duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <PartText
            partId={`{%part:project-${index}-title%}`}
            as="h3"
            className="text-lg md:text-xl font-medium tracking-tight mb-1"
            prompt={`Write a project title for a commercial / film in [USER_PROJECT] portfolio.
Original nuance: brand name or campaign name, short and punchy.
Chunk size: 1–4 words.
Tone: clean, no fluff.
Return only the title.`}
            previewText={`[project ${index} title]`}
          />
          <PartText
            partId={`{%part:project-${index}-meta%}`}
            as="p"
            className="text-xs text-muted uppercase tracking-wider"
            prompt={`Write a short meta line under a project title (client / year / category).
Original nuance: "Floward — 2023" or "Diesel · Be A Follower".
Chunk size: 2–6 words.
Tone: archival label.
Return only the meta line.`}
            previewText="[client · year]"
          />
        </div>
        <PartText
          partId={`{%part:project-${index}-index%}`}
          as="span"
          className="text-xs text-muted tabular-nums pt-1"
          prompt={`Write a simple index number for the project card.
Original nuance: "01", "02" etc.
Chunk size: 2 digits.
Return only the number.`}
          previewText={String(index).padStart(2, "0")}
        />
      </div>
    </article>
  );
}
