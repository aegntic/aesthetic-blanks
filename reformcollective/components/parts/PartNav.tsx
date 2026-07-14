"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { PartText } from "./PartText";
import clsx from "clsx";

const LINKS = [
  {
    href: "/work",
    id: "work",
    preview: "Our Work",
    sub: "B2B, SaaS, eCom, Brands, Startups",
    prompt: `Write the primary Work nav label for [USER_PROJECT].
Original nuance: "Our Work" with a secondary line listing verticals (B2B, SaaS, eCom, Brands, Startups).
Chunk size: label 1–2 words; subline 4–8 words.
Tone: agency menu, confident.
Return only the main label.`,
  },
  {
    href: "/about",
    id: "about",
    preview: "About Us",
    sub: "We live in the details",
    prompt: `Write the About nav label for [USER_PROJECT].
Original nuance: "About Us" + a cheeky subline about craft / details.
Chunk size: 1–2 words.
Tone: warm, slightly irreverent agency.
Return only the main label.`,
  },
  {
    href: "/nova",
    id: "nova",
    preview: "Studio Program",
    sub: "An accelerator built just for startups",
    prompt: `Write the product / accelerator program nav label for [USER_PROJECT].
Original nuance: named studio program (not "Services"), with a subline about startups / equity partnership.
Chunk size: 1–3 words.
Tone: productized offering.
Return only the main label.`,
  },
  {
    href: "/contact",
    id: "contact",
    preview: "Start a Project",
    sub: "Book a call",
    prompt: `Write the primary CTA nav label for [USER_PROJECT].
Original nuance: "Start a Project" / "Book a Call" — action oriented.
Chunk size: 2–4 words.
Tone: direct invitation.
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
          "fixed top-0 left-0 right-0 z-50",
          variant === "minimal" ? "mix-blend-normal" : "mix-blend-difference",
        )}
      >
        <div className="max-w-site mx-auto px-5 md:px-10 h-[4.5rem] flex items-center justify-between">
          <Link href="/" className="text-paper hover:opacity-70 transition" onClick={() => setOpen(false)}>
            <PartText
              partId="{%part:nav-logo%}"
              as="span"
              className="text-xs md:text-sm tracking-label uppercase font-medium"
              prompt={`Write a short award / credibility pill for the top-left nav of [USER_PROJECT].
Original nuance: "Award winning ( digital ) agency" — parenthetical word rotates (digital/creative/etc).
Chunk size: 3–6 words.
Tone: understated brag, editorial.
Return only the pill text.`}
              previewText="Award winning ( digital ) agency"
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
            {open ? "Close" : "Menu"}
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
        <nav className="max-w-site mx-auto px-5 md:px-10 pt-28 pb-16 h-full flex flex-col justify-between">
          <ul className="space-y-6 md:space-y-8">
            {LINKS.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group block border-b border-paper/10 pb-4 md:pb-6"
                >
                  <PartText
                    partId={`{%part:nav-link-${link.id}%}`}
                    as="span"
                    className="font-display text-4xl md:text-6xl lg:text-7xl font-thin tracking-tightest block group-hover:text-accent transition-colors duration-300"
                    prompt={link.prompt}
                    previewText={link.preview}
                  />
                  <PartText
                    partId={`{%part:nav-link-${link.id}-sub%}`}
                    as="span"
                    className="mt-2 block text-sm text-paper/50 max-w-md"
                    prompt={`Write a one-line subcopy under the ${link.preview} menu item for [USER_PROJECT].
Original nuance: short descriptor under each big menu label.
Chunk size: 5–12 words.
Tone: playful, agency.
Return only the subline.`}
                    previewText={link.sub}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-6 text-[10px] uppercase tracking-label text-paper/50">
            {["LinkedIn", "Instagram", "Awwwards", "X", "Dribbble"].map((s) => (
              <PartText
                key={s}
                partId={`{%part:nav-social-${s.toLowerCase()}%}`}
                as="span"
                prompt={`Write a social platform label for the menu footer.
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
