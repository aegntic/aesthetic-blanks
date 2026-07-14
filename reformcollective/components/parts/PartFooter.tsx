"use client";
import Link from "next/link";
import { PartText } from "./PartText";

export function PartFooter() {
  return (
    <footer
      data-part="{%part:section-footer%}"
      className="bg-ink text-paper mt-auto"
    >
      <div className="max-w-site mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {[
            { href: "/work", id: "work", label: "Our Work" },
            { href: "/about", id: "about", label: "About Us" },
            { href: "/nova", id: "nova", label: "Studio Program" },
            { href: "/contact", id: "contact", label: "Contact Us" },
            { href: "/contact", id: "careers", label: "Careers" },
          ].map((l) => (
            <Link
              key={l.id}
              href={l.href}
              className="text-sm md:text-base uppercase tracking-wide hover:text-accent transition-colors"
            >
              <PartText
                partId={`{%part:footer-link-${l.id}%}`}
                as="span"
                prompt={`Write footer nav label for ${l.label} in [USER_PROJECT].
Original nuance: short uppercase-friendly agency footer link.
Chunk size: 1–3 words.
Return only the label.`}
                previewText={l.label}
              />
            </Link>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-paper/10 pt-10">
          <div>
            <PartText
              partId="{%part:footer-cta-prompt%}"
              as="p"
              className="text-sm text-paper/60 mb-3"
              prompt={`Write a soft prompt above the footer chat CTA for [USER_PROJECT].
Original nuance: "Ready to build something with us?"
Chunk size: 5–10 words.
Tone: warm invitation.
Return only the prompt.`}
              previewText="Ready to build something with us?"
            />
            <Link href="/contact" className="inline-block group">
              <PartText
                partId="{%part:footer-cta%}"
                as="span"
                className="font-display text-3xl md:text-5xl font-thin tracking-tight group-hover:text-accent transition-colors"
                prompt={`Write the footer primary CTA for [USER_PROJECT].
Original nuance: "Let's Chat".
Chunk size: 2–3 words.
Tone: casual-professional.
Return only the CTA.`}
                previewText="Let's Chat"
              />
            </Link>
          </div>

          <div className="flex flex-wrap gap-5 text-[10px] uppercase tracking-label text-paper/45">
            {["LinkedIn", "Instagram", "Awwwards", "X", "Dribbble"].map((s) => (
              <PartText
                key={s}
                partId={`{%part:footer-social-${s.toLowerCase()}%}`}
                as="span"
                className="hover:text-paper transition-colors cursor-default"
                prompt={`Social label: ${s}. Return only the platform name.`}
                previewText={s}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
