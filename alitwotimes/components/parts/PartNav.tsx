"use client";
import Link from "next/link";
import { PartText } from "./PartText";

export function PartNav() {
  return (
    <header
      data-part="{%part:nav-primary%}"
      className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
    >
      <nav className="max-w-[1600px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between text-xs uppercase tracking-[0.2em]">
        <Link href="/" className="text-paper hover:opacity-70 transition">
          <PartText
            partId="{%part:nav-logo%}"
            as="span"
            prompt={`Write a short logo / home mark for the nav of [USER_PROJECT].
Original nuance: lowercase name or monogram, very small.
Chunk size: 1–2 words or initials.
Tone: quiet identity.
Return only the mark.`}
            previewText="[logo]"
          />
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/#work" className="text-paper/80 hover:text-paper transition">
            <PartText
              partId="{%part:nav-work%}"
              as="span"
              prompt={`Write the "work" nav label.
Original nuance: "Work" or "Selected".
Chunk size: 1 word.
Return only the label.`}
              previewText="work"
            />
          </Link>
          <Link href="/contact" className="text-paper/80 hover:text-paper transition">
            <PartText
              partId="{%part:nav-contact%}"
              as="span"
              prompt={`Write the contact nav label.
Original nuance: "Contact".
Chunk size: 1 word.
Return only the label.`}
              previewText="contact"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
