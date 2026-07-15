"use client";
import Link from "next/link";
import { PartText } from "./PartText";
import { PartImage } from "./PartImage";
import { PartMotion } from "./PartMotion";
import { IMAGE_STYLE } from "@/lib/work";

export function PartFooter() {
  return (
    <footer
      id="reach"
      data-part="{%part:section-footer%}"
      className="relative min-h-[70vh] overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <PartImage
          partId="{%part:footer-bleed-img%}"
          aspectRatio={16 / 10}
          objectFit="cover"
          placeholder={IMAGE_STYLE.footerBleed}
          className="absolute inset-0 h-full w-full border-0 bg-ash"
        />
        <div className="absolute inset-0 bg-ink/45" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-site flex-col justify-end px-4 pb-12 pt-32 md:px-6 md:pb-16">
        <PartMotion partId="{%motion:footer-cta%}" type="fade" trigger="inView">
          <PartText
            partId="{%part:footer-cta%}"
            as="h2"
            className="mb-8 max-w-xl text-display"
            prompt={`Footer closing manifesto line for multidisciplinary designer portfolio [USER_PROJECT].
Original nuance: short imperative about meaning / memory / lasting work (e.g. "Make it Matter." energy).
Chunk size: 3–6 words.
Tone: monumental, quiet conviction.
Avoid: sales CTAs, original personal slogans verbatim if trademarked.
Return only the line.`}
            previewText="Make it Matter."
          />
        </PartMotion>

        <div className="flex flex-col gap-8 border-t border-paper/15 pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <PartText
              partId="{%part:footer-name%}"
              as="p"
              className="text-sm md:text-base"
              prompt={`Footer name lockup for [USER_PROJECT].
Original nuance: designer name only.
Chunk size: 2–3 words.
Return only the name.`}
              previewText="[Designer Name]"
            />
            <PartText
              partId="{%part:footer-email%}"
              as="a"
              href="mailto:hello@example.com"
              className="mt-2 block text-sm text-mist hover:text-paper transition"
              prompt={`Footer email CTA label or address placeholder.
Original nuance: contact email or "Reach out".
Chunk size: 1–4 words / email form.
Return only the text.`}
              previewText="hello@example.com"
            />
          </div>

          <div className="flex flex-wrap gap-5 text-xs uppercase tracking-widest text-paper/50">
            <Link href="/works" className="hover:text-paper transition">
              Works
            </Link>
            <Link href="/about" className="hover:text-paper transition">
              About
            </Link>
            {["Instagram", "LinkedIn", "Behance"].map((s) => (
              <PartText
                key={s}
                partId={`{%part:footer-social-${s.toLowerCase()}%}`}
                as="span"
                prompt={`Footer social: ${s}. Return only the name.`}
                previewText={s}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
