"use client";
import Link from "next/link";
import { PartText } from "./PartText";
import { useShuffle } from "./useShuffle";
import { toggleGridOverlay } from "./GridOverlay";

/**
 * Top nav — source: logo left · 12-col grid-toggle · about · socials (in/tg/mail).
 * mix-blend-difference so it reads over paper and over dark hover layers.
 * Logo scrambles on hover; grid button rotates 90° on hover and toggles the
 * fixed 12-col GridOverlay.
 */
export function PartNav() {
  const logo = useShuffle("bleibtgleich");

  return (
    <header
      data-part="{%part:nav-primary%}"
      className="fixed top-0 left-0 right-0 z-[60] mix-blend-difference"
    >
      <div className="mx-auto flex h-14 max-w-site items-center justify-between gap-4 px-4 md:px-6">
        {/* logo (shuffle on hover) */}
        <Link href="/" className="text-paper text-sm md:text-base">
          <span
            onMouseEnter={logo.onEnter}
            className="inline-block transition-transform duration-[2s] ease-vf lowercase"
          >
            bleibtgleich
          </span>
        </Link>

        {/* grid toggle */}
        <button
          type="button"
          data-part="{%part:nav-grid-toggle%}"
          onClick={toggleGridOverlay}
          aria-label="toggle 12-column grid overlay"
          className="group relative h-4 w-4 text-paper transition-transform duration-500 ease-bg hover:rotate-90"
        >
          <span className="absolute inset-0 m-auto h-px w-4 bg-paper" />
          <span className="absolute inset-0 m-auto h-4 w-px bg-paper" />
        </button>

        {/* about */}
        <Link
          href="/about"
          className="text-paper text-sm md:text-base lowercase hover:opacity-70 transition"
        >
          <PartText
            partId="{%part:nav-about%}"
            as="span"
            prompt={`Nav internal link label.
Original nuance: "about" lowercase, single word.
Chunk size: 1 word.
Return only the label.`}
            previewText="about"
          />
        </Link>

        {/* socials */}
        <div className="flex items-center gap-4 text-paper text-sm lowercase">
          <PartText
            partId="{%part:nav-social-in%}"
            as="a"
            href="https://www.linkedin.com/"
            prompt={`Nav social label — professional network.
Original nuance: "in" (two-letter lowercase).
Chunk size: 2 chars.
Return only the label.`}
            previewText="in"
          />
          <PartText
            partId="{%part:nav-social-tg%}"
            as="a"
            href="https://t.me/"
            prompt={`Nav social label — messenger.
Original nuance: "tg" lowercase.
Chunk size: 2 chars.
Return only the label.`}
            previewText="tg"
          />
          <PartText
            partId="{%part:nav-social-mail%}"
            as="a"
            href="mailto:hello@example.com"
            prompt={`Nav social label — email.
Original nuance: "mail" lowercase.
Chunk size: 1 word.
Return only the label.`}
            previewText="mail"
          />
        </div>
      </div>
    </header>
  );
}
