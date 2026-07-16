"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { PartText } from "./PartText";
import clsx from "clsx";

/**
 * Blumenkopf nav. Capture: minimal top-left wordmark + top-right "menu" toggle;
 * full-screen overlay lists the four primary routes. mix-blend-difference keeps
 * the chrome legible over the light paper + dark case sections.
 */
const LINKS = [
  {
    href: "/home",
    id: "home",
    preview: "Home",
    sub: "Index — the front plate",
    prompt: `Write the Home nav label for [USER_PROJECT].
Original nuance: "Home" — the index/front plate, not "Work".
Chunk size: 1 word.
Tone: minimal editorial.
Return only the label.`,
  },
  {
    href: "/about",
    id: "about",
    preview: "About",
    sub: "The studio behind the work",
    prompt: `Write the About nav label for [USER_PROJECT].
Original nuance: "About" — studio identity page.
Chunk size: 1 word.
Tone: direct, archival.
Return only the label.`,
  },
  {
    href: "/work",
    id: "work",
    preview: "Work",
    sub: "Selected case studies, six slots",
    prompt: `Write the Work nav label for [USER_PROJECT].
Original nuance: "Work" — case-study index, no "Our".
Chunk size: 1 word.
Tone: confident, sparse.
Return only the label.`,
  },
  {
    href: "/imprint",
    id: "imprint",
    preview: "Imprint",
    sub: "Legal, credits, contact",
    prompt: `Write the Imprint nav label for [USER_PROJECT].
Original nuance: "Imprint" (European legal/credits page, not "Contact").
Chunk size: 1 word.
Tone: formal small-print.
Return only the label.`,
  },
] as const;

export function PartNav({ variant = "default" }: { variant?: "default" | "minimal" }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        data-part="{%part:nav-primary%}"
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 mix-blend-difference",
          variant === "minimal" && "mix-blend-normal",
        )}
      >
        <div className="max-w-site mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
          <Link
            href="/home"
            className="text-paper hover:opacity-70 transition"
            onClick={() => setOpen(false)}
          >
            <PartText
              partId="{%part:nav-logo%}"
              as="span"
              className="font-sans text-sm md:text-base font-medium tracking-label uppercase"
              prompt={`Write the top-left wordmark for [USER_PROJECT].
Original nuance: the project name as a tight uppercase logotype ("Blumenkopf" class) — 1 word.
Chunk size: 1 word.
Tone: identity mark, no tagline.
Return only the wordmark.`}
              previewText="Blumenkopf"
            />
          </Link>

          <button
            type="button"
            data-part="{%part:nav-menu-toggle%}"
            onClick={() => setOpen((v) => !v)}
            className="text-paper text-sm uppercase tracking-label hover:opacity-70 transition"
            aria-expanded={open}
            aria-controls="site-menu"
          >
            <PartText
              partId="{%part:nav-menu-label%}"
              as="span"
              prompt={`Write the menu toggle label for [USER_PROJECT].
Original nuance: "menu" when closed, "close" when open — single lowercase word.
Chunk size: 1 word.
Return only the label.`}
              previewText="menu"
            />
          </button>
        </div>
      </header>

      <div
        id="site-menu"
        data-part="{%part:nav-menu-overlay%}"
        className={clsx(
          "fixed inset-0 z-40 bg-ink text-paper transition-opacity duration-500",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <nav className="max-w-site mx-auto px-5 md:px-10 pt-24 pb-12 h-full flex flex-col justify-between">
          <ul className="space-y-5 md:space-y-7">
            {LINKS.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group block border-b border-line pb-3 md:pb-5"
                >
                  <PartText
                    partId={`{%part:nav-link-${link.id}%}`}
                    as="span"
                    className="font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-tightest block group-hover:text-accent transition-colors duration-300"
                    prompt={link.prompt}
                    previewText={link.preview}
                  />
                  <PartText
                    partId={`{%part:nav-link-${link.id}-sub%}`}
                    as="span"
                    className="mt-2 block text-sm text-paper/50 max-w-md"
                    prompt={`Write a one-line subcopy under the ${link.preview} menu item for [USER_PROJECT].
Original nuance: short editorial descriptor under each big menu label.
Chunk size: 4–9 words.
Tone: dry, studio.
Return only the subline.`}
                    previewText={link.sub}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-6 text-[10px] uppercase tracking-label text-paper/50">
            {["Instagram", "Are.na", "Awwwards", "LinkedIn", "Mail"].map((s) => (
              <PartText
                key={s}
                partId={`{%part:nav-social-${s.toLowerCase().replace(/[^a-z]/g, "")}%}`}
                as="span"
                prompt={`Write a social/external platform label for the menu footer.
Original nuance: platform name only (${s}).
Chunk size: 1 word.
Return only the platform name.`}
                previewText={s}
              />
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
