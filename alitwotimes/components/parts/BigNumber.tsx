"use client";
import { PartText } from "./PartText";
import { PartMotion } from "./PartMotion";

export function BigNumber() {
  return (
    <PartMotion partId="{%motion:big-number-reveal%}" type="stagger" trigger="inView">
      <PartText
        partId="{%part:impact-number%}"
        as="p"
        className="font-display text-[22vw] md:text-[18vw] leading-none tracking-tightest font-medium tabular-nums"
        prompt={`Write a massive impact number for [USER_PROJECT].
Original nuance: "90 million" style — large round number + unit.
Chunk size: number + unit (e.g. "90M", "120 million", "2.4B").
Tone: pure scale, no adjectives.
Return only the number string.`}
        previewText="00"
      />
    </PartMotion>
  );
}
