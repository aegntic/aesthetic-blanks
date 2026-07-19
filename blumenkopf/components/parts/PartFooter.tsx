"use client";
import Link from "next/link";
import { PartText } from "./PartText";

/**
 * Blumenkopf footer. Signature captured motif: a repeating orange "BUY THIS
 * WEBSITE" marquee strip (the template is self-aware — it sells itself). Below
 * it, a sparse 3px-line-divided footer with the three internal routes + credits.
 */
export function PartFooter() {
  const marqueeItems = Array.from({ length: 8 });

  return (
    <footer data-part="{%part:section-footer%}" className="mt-auto">
      {/* Orange marquee banner — captured motif */}
      <div
        data-part="{%motion:marquee-buy%}"
        className="bg-accent text-paper overflow-hidden border-y-3 border-line"
        aria-label="Promotional marquee"
      >
        <div className="marquee-track animate-marquee-x py-3 md:py-4">
          {marqueeItems.concat(marqueeItems).map((_, i) => (
            <PartText
              key={i}
              partId="{%part:footer-marquee-item%}"
              as="span"
              className="font-sans text-sm md:text-base font-medium tracking-label uppercase px-6 inline-flex items-center gap-6"
              prompt={`Write one unit of the repeating footer marquee for [USER_PROJECT].
Original nuance: a self-aware promotional loop ("BUY THIS WEBSITE ★" class) — short, punchy, repeated. Single unit, will be duplicated.
Chunk size: 2–5 words + optional glyph separator (★ / ✦ / •).
Tone: meta, confident, slightly ironic (the template advertises itself).
Avoid: long sentences, anything earnest.
Return only one repeatable unit.`}
              previewText="Buy this website ★"
            />
          ))}
        </div>
      </div>

      <div className="bg-paper text-ink">
        <div className="max-w-site mx-auto px-5 md:px-10 py-14 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14 border-b-3 border-line pb-10">
            {[
              { href: "/work", id: "work", label: "Work" },
              { href: "/about", id: "about", label: "About" },
              { href: "/imprint", id: "imprint", label: "Imprint" },
              { href: "/home", id: "home", label: "Home" },
            ].map((l) => (
              <Link
                key={l.id}
                href={l.href}
                className="text-sm md:text-base uppercase tracking-label hover:text-accent transition-colors"
              >
                <PartText
                  partId={`{%part:footer-link-${l.id}%}`}
                  as="span"
                  prompt={`Write footer nav label for ${l.label} in [USER_PROJECT].
Original nuance: short uppercase editorial footer link.
Chunk size: 1 word.
Return only the label.`}
                  previewText={l.label}
                />
              </Link>
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <PartText
                partId="{%part:footer-cta-prompt%}"
                as="p"
                className="text-sm text-muted mb-3 uppercase tracking-label"
                prompt={`Write a soft prompt above the footer inquiry CTA for [USER_PROJECT].
Original nuance: a dry invitation ("Have something in mind?") — not "Let's Chat".
Chunk size: 3–7 words.
Tone: understated, European studio.
Return only the prompt.`}
                previewText="Have something in mind?"
              />
              <PartText
                partId="{%part:footer-cta%}"
                as="p"
                className="font-sans text-3xl md:text-5xl font-light tracking-tightest lowercase"
                prompt={`Write the footer primary contact CTA for [USER_PROJECT].
Original nuance: an email-shaped line or short phrase ("say hi" / a hello@ address) — lowercase.
Chunk size: 2–4 words.
Tone: casual, direct.
Return only the CTA.`}
                previewText="say hi"
              />
            </div>

            <div className="flex flex-wrap gap-5 text-[10px] uppercase tracking-label text-muted">
              {["Instagram", "Are.na", "Awwwards", "LinkedIn"].map((s) => (
                <PartText
                  key={s}
                  partId={`{%part:footer-social-${s.toLowerCase().replace(/[^a-z]/g, "")}%}`}
                  as="span"
                  className="hover:text-ink transition-colors cursor-default"
                  prompt={`Social label: ${s}. Return only the platform name.`}
                  previewText={s}
                />
              ))}
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-ink/15 flex flex-col md:flex-row justify-between gap-2 text-[10px] uppercase tracking-label text-muted">
            <PartText
              partId="{%part:footer-copy%}"
              as="span"
              prompt={`Write the footer copyright line for [USER_PROJECT].
Original nuance: "© [year] [project]" — year + name only.
Chunk size: 3–5 words.
Return only the line.`}
              previewText="© [year] Blumenkopf"
            />
            <PartText
              partId="{%part:footer-credit%}"
              as="span"
              prompt={`Write a small colophon / credit line for [USER_PROJECT] footer.
Original nuance: "Designed & built in [city]" or "A template by [studio]" — short.
Chunk size: 4–8 words.
Return only the line.`}
              previewText="A template, ready to brand"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
