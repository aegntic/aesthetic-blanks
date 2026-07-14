"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PartText } from "./PartText";
import clsx from "clsx";

const LINKS = [
  { href: "/", id: "home", label: "Home" },
  { href: "/work", id: "work", label: "Work" },
  { href: "/services", id: "services", label: "Services" },
  { href: "/about", id: "about", label: "About" },
] as const;

export function PartNav() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      <header
        data-part="{%part:nav-primary%}"
        className="fixed top-0 left-0 right-0 z-50"
        style={{ height: "var(--navbar-height)" }}
      >
        <div className="max-w-site mx-auto h-full px-4 md:px-6 flex items-center justify-between gap-4">
          <Link href="/" className="font-medium tracking-tight" onClick={() => setOpen(false)}>
            <PartText
              partId="{%part:nav-logo%}"
              as="span"
              className="text-sm md:text-base"
              prompt={`Write studio wordmark for [USER_PROJECT] nav.
Original nuance: two-word studio name, title case.
Chunk size: 1–3 words.
Return only the mark.`}
              previewText="Studio Name"
            />
          </Link>

          <div className="flex items-center gap-3 md:gap-5">
            <div
              data-part="{%part:theme-toggle%}"
              className="hidden sm:flex items-center gap-1 text-[11px] uppercase tracking-label text-[color:var(--muted)]"
            >
              <button
                type="button"
                onClick={() => setDark(false)}
                className={clsx("px-2 py-1 rounded transition", !dark && "text-[color:var(--fg)]")}
              >
                Light
              </button>
              <button
                type="button"
                onClick={() => setDark(true)}
                className={clsx("px-2 py-1 rounded transition", dark && "text-[color:var(--fg)]")}
              >
                Dark
              </button>
            </div>

            <Link
              href="#contact"
              className="hidden md:inline-flex text-xs uppercase tracking-label border border-[color:var(--border)] px-3 py-2 hover:bg-[color:var(--fg)] hover:text-[color:var(--bg)] transition"
            >
              <PartText
                partId="{%part:nav-cta%}"
                as="span"
                prompt={`Nav CTA. Original: "Let's talk". Chunk size: 2–3 words. Return only the label.`}
                previewText="Let's talk"
              />
            </Link>

            <button
              type="button"
              data-part="{%part:nav-menu-toggle%}"
              onClick={() => setOpen((v) => !v)}
              className="text-sm uppercase tracking-label"
              aria-expanded={open}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      <div
        id="site-menu"
        data-part="{%part:nav-menu%}"
        className={clsx(
          "fixed inset-0 z-40 bg-[color:var(--bg)] text-[color:var(--fg)] transition-opacity duration-500",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <nav className="max-w-site mx-auto px-4 md:px-6 pt-28 pb-12 h-full flex flex-col justify-between">
          <ul className="space-y-4 md:space-y-6">
            {LINKS.map((l) => (
              <li key={l.id}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-display text-5xl md:text-7xl tracking-tightest leading-none hover:opacity-60 transition"
                >
                  <PartText
                    partId={`{%part:nav-link-${l.id}%}`}
                    as="span"
                    prompt={`Menu label for ${l.label}. Return only the label.`}
                    previewText={l.label}
                  />
                </Link>
              </li>
            ))}
            <li>
              <a
                href="#games"
                onClick={() => setOpen(false)}
                className="block font-display text-5xl md:text-7xl tracking-tightest leading-none hover:opacity-60 transition"
              >
                <PartText
                  partId="{%part:nav-link-games%}"
                  as="span"
                  prompt={`Sister division nav label. Original nuance: gaming/Web3 division name.
Chunk size: 2–3 words. Return only the label.`}
                  previewText="Games Lab"
                />
              </a>
            </li>
          </ul>
          <PartText
            partId="{%part:nav-menu-note%}"
            as="p"
            className="text-sm text-[color:var(--muted)] max-w-md"
            prompt={`Short note under full-screen menu for [USER_PROJECT].
Original nuance: senior-led digital product studio line.
Chunk size: 8–16 words.
Return only the note.`}
            previewText="Senior-led digital product studio"
          />
        </nav>
      </div>
    </>
  );
}
