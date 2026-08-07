"use client";
import { PartText } from "./PartText";
import { TruthText } from "./TruthText";
import { Rule } from "./Rule";
import { useShuffle } from "./useShuffle";

/**
 * Footer — source "drop me a message" blurred bg field + truth CTA
 * ("let's build something that matters.") + big telegram/mail links (shuffle) +
 * "made with hate (love crossed out)" sign-off + long-truth rationale.
 */
export function PartFooter() {
  const tg = useShuffle("telegram");
  const mail = useShuffle("mail");

  return (
    <footer
      data-part="{%part:section-footer%}"
      className="relative overflow-hidden bg-paper px-4 pt-32 pb-10 text-ink md:px-6"
    >
      {/* blurred bg field */}
      <div className="pointer-events-none absolute inset-x-0 top-16 flex justify-center">
        <p className="bg-field text-mega lowercase text-ink/60 select-none">
          drop me a message
        </p>
      </div>

      <div className="relative mx-auto max-w-site">
        <Rule axis="x" />

        <div className="grid gap-12 py-20 md:grid-cols-2">
          <div>
            <TruthText
              partId="{%part:footer-cta%}"
              as="h2"
              variant="truth"
              className="text-display lowercase leading-[0.95]"
              prompt={`Footer CTA manifesto for [USER_PROJECT].
Original nuance: "let's build something that matters." — lowercase, direct.
Chunk size: 4–6 words.
Tone: quiet conviction, no sales.
Avoid: generic "let's work together".
Return only the line.`}
              previewText="let's build something that matters."
            />
            <PartText
              partId="{%part:footer-availability%}"
              as="p"
              className="mt-6 text-sm text-mute"
              prompt={`Footer availability micro-line.
Original nuance: "[ available for small projects ]" bracketed, lowercase.
Chunk size: 4–6 words.
Return only the line.`}
              previewText="[ available for small projects ]"
            />
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={tg.onEnter}
              className="text-display lowercase leading-none hover:opacity-60 transition"
            >
              telegram
            </a>
            <a
              href="mailto:hello@example.com"
              onMouseEnter={mail.onEnter}
              className="text-display lowercase leading-none hover:opacity-60 transition"
            >
              mail
            </a>
          </div>
        </div>

        <Rule axis="x" />

        {/* sign-off row */}
        <div className="grid gap-8 py-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-lead lowercase">
              made with{" "}
              <span className="relative inline-block text-accent">hate</span>
              <span className="relative ml-2 inline-block text-mute">
                <span className="relative">love</span>
                <span className="absolute inset-0 top-1/2 h-px w-full -translate-y-1/2 rotate-[-6deg] bg-mute" />
              </span>
            </p>
            <TruthText
              partId="{%part:footer-rationale%}"
              as="p"
              variant="long"
              className="mt-4 max-w-md text-sm leading-relaxed text-mute"
              prompt={`Footer rationale for the "made with hate" sign-off.
Original nuance: "because perfection isn't born out of love, it's forged in frustration, obsession, and an unrelenting pursuit of something better."
Chunk size: 28–40 words.
Tone: blunt craft confession.
Return only the paragraph.`}
              previewText="because perfection isn't born out of love, it's forged in frustration, obsession, and an unrelenting pursuit of something better."
            />
          </div>

          <div className="flex flex-col gap-2 md:col-span-4 md:col-start-7">
            <PartText
              partId="{%part:footer-f12%}"
              as="p"
              className="font-mono text-xs uppercase tracking-label text-mute"
              prompt={`Footer easter-egg micro-line.
Original nuance: '"F12" = details.' monospace, uppercase.
Chunk size: 3–4 words.
Return only the line.`}
              previewText='"F12" = details.'
            />
          </div>

          <div className="text-right md:col-span-2 md:col-start-11">
            <PartText
              partId="{%part:footer-copyright%}"
              as="p"
              className="text-display lowercase leading-none"
              prompt={`Footer copyright mark.
Original nuance: "©'25" tight, lowercase.
Chunk size: 2–4 chars.
Return only the mark.`}
              previewText="©'25"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
