"use client";

import { PartText } from "./PartText";
import { PartMotion } from "./PartMotion";
import { TalkGrid } from "./LetterGrid";
import Link from "next/link";

/** Black invert talk footer — LET'S / TALK letter matrix + socials */
export function PartFooter() {
  return (
    <footer id="bottom" data-part="{%part:section-footer%}" className="bg-ink text-paper mt-auto">
      <div className="mx-auto max-w-site px-[var(--gutter)] md:px-5">
        <div className="grid grid-cols-3 items-center py-3.5 text-[16px]">
          <Link href="/about" className="justify-self-start text-paper/80 transition hover:text-paper">
            About
          </Link>
          <Link href="/" className="justify-self-center text-[24px] font-light tracking-widest">
            ※
          </Link>
          <a href="/#works" className="justify-self-end text-paper/80 transition hover:text-paper">
            Works
          </a>
        </div>

        <div className="relative">
          <p className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 text-[16px] text-mist md:block">
            Let&apos;s
          </p>
          <p className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 text-[16px] text-mist md:block">
            Create
          </p>
          <PartMotion partId="{%motion:talk-grid%}" type="fade" trigger="inView">
            <TalkGrid />
          </PartMotion>
        </div>

        <div className="grid grid-cols-3 items-end gap-4 pb-10 pt-6 text-[16px] text-mist">
          <div className="flex flex-col gap-1">
            <PartText
              partId="{%part:footer-email%}"
              as="a"
              href="mailto:hello@example.com"
              className="text-mist transition hover:text-paper"
              prompt={`Footer contact label.
Original nuance: "Email".
Chunk size: 1 word.
Return only the label.`}
              previewText="Email"
            />
            <PartText
              partId="{%part:footer-linkedin%}"
              as="span"
              prompt={`Footer social 1. Original: "LinkedIn". 1 word.`}
              previewText="LinkedIn"
            />
            <PartText
              partId="{%part:footer-instagram%}"
              as="span"
              prompt={`Footer social 2. Original: "Instagram". 1 word.`}
              previewText="Instagram"
            />
          </div>
          <PartText
            partId="{%part:footer-invite%}"
            as="p"
            className="text-center text-paper/90"
            prompt={`Footer invite line for a graphic portfolio [USER_PROJECT].
Original nuance: "I'd love to hear from you."
Chunk size: 5–8 words.
Tone: warm, personal, quiet.
Avoid: sales language.
Return only the sentence.`}
            previewText="I'd love to hear from you."
          />
          <p className="justify-self-end text-mist">©2026</p>
        </div>
      </div>
    </footer>
  );
}
