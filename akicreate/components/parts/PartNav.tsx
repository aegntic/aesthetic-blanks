"use client";

import Link from "next/link";
import { PartText } from "./PartText";

/** Aki sticky nav: About | ※ | Works — 16px body / 24px mark */
export function PartNav({ variant = "default" }: { variant?: "default" | "minimal" }) {
  return (
    <header
      data-part="{%part:nav-primary%}"
      className="sticky top-0 z-50 bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/80"
    >
      <nav className="mx-auto grid h-[var(--nav-h)] max-w-site grid-cols-3 items-center px-[var(--gutter)] md:px-5">
        <Link
          href="/about"
          className="justify-self-start text-[16px] leading-6 text-ink transition hover:opacity-55"
        >
          <PartText
            partId="{%part:nav-about%}"
            as="span"
            prompt={`Nav left label for a graphic portfolio [USER_PROJECT].
Original nuance: "About" only.
Chunk size: 1 word.
Tone: quiet portfolio chrome.
Return only the label.`}
            previewText="About"
          />
        </Link>

        <Link
          href="/"
          className="justify-self-center text-[24px] font-light leading-6 tracking-widest text-ink transition hover:opacity-55"
          aria-label="Home"
          data-part="{%part:nav-mark%}"
        >
          ※
        </Link>

        <Link
          href={variant === "minimal" ? "#top" : "/#works"}
          className="justify-self-end text-[16px] leading-6 text-ink transition hover:opacity-55"
        >
          <PartText
            partId="{%part:nav-works%}"
            as="span"
            prompt={`Nav right label for a graphic portfolio [USER_PROJECT].
Original nuance: "Works" (or "Back to top" on long case pages).
Chunk size: 1–3 words.
Return only the label.`}
            previewText={variant === "minimal" ? "Back to top" : "Works"}
          />
        </Link>
      </nav>
    </header>
  );
}
