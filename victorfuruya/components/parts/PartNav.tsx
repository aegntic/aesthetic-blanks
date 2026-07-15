"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { PartText } from "./PartText";
import { PartMotion } from "./PartMotion";
import clsx from "clsx";

const LINKS = [
  {
    href: "/works",
    id: "works",
    preview: "Works",
    prompt: `Full-screen menu label for portfolio index.
Original nuance: "Works" as mega type (~96px Satoshi 600).
Chunk size: 1 word.
Tone: monumental, quiet.
Return only the label.`,
  },
  {
    href: "/about",
    id: "about",
    preview: "About",
    prompt: `Full-screen menu label for about.
Original nuance: "About" mega type.
Chunk size: 1 word.
Return only the label.`,
  },
  {
    href: "/#reach",
    id: "reach",
    preview: "Reach out",
    prompt: `Full-screen menu CTA label.
Original nuance: "Reach out" mega type.
Chunk size: 2 words.
Tone: direct invitation.
Return only the label.`,
  },
] as const;

export function PartNav() {
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
        className="fixed top-0 left-0 right-0 z-[1000000] mix-blend-difference"
      >
        <div className="mx-auto flex h-14 max-w-site items-center justify-between px-4 md:px-6">
          <Link href="/" className="text-xs md:text-sm text-paper" onClick={() => setOpen(false)}>
            <PartText
              partId="{%part:nav-name%}"
              as="span"
              prompt={`Top-left identity mark for multidisciplinary designer portfolio [USER_PROJECT].
Original nuance: first + last name, small, quiet.
Chunk size: 2–3 words.
Avoid: logos, slogans.
Return only the name mark.`}
              previewText="[Designer Name]"
            />
          </Link>

          <button
            type="button"
            data-part="{%part:nav-menu-toggle%}"
            onClick={() => setOpen((v) => !v)}
            className="text-xs md:text-sm text-paper hover:opacity-70 transition"
            aria-expanded={open}
            aria-controls="vf-menu"
          >
            {open ? "Close" : "Works, About, Reach out"}
          </button>
        </div>
      </header>

      <div
        id="vf-menu"
        data-part="{%part:nav-menu-overlay%}"
        className={clsx(
          "fixed inset-0 z-[1000001] bg-ink text-paper transition-opacity duration-500",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="mx-auto flex h-full max-w-site flex-col justify-between px-4 py-20 md:px-6">
          <div className="flex items-center justify-between text-sm">
            <span className="opacity-60">[Designer Name]</span>
            <button type="button" onClick={() => setOpen(false)} className="hover:opacity-70">
              Close
            </button>
          </div>

          <PartMotion partId="{%motion:menu-mega%}" type="mega" trigger="load">
            <ul className="space-y-2 md:space-y-4">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block font-sans text-mega tracking-tightest transition hover:opacity-60"
                  >
                    <PartText
                      partId={`{%part:nav-link-${link.id}%}`}
                      as="span"
                      prompt={link.prompt}
                      previewText={link.preview}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </PartMotion>

          <div className="space-y-2 text-sm text-paper/50">
            <p className="uppercase tracking-widest text-[10px]">Socials</p>
            <div className="flex flex-wrap gap-5">
              {["Instagram", "LinkedIn", "Behance"].map((s) => (
                <PartText
                  key={s}
                  partId={`{%part:nav-social-${s.toLowerCase()}%}`}
                  as="span"
                  prompt={`Social platform label: ${s}. Return only the name.`}
                  previewText={s}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
