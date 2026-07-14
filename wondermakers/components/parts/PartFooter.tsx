"use client";

import { PartText } from "./PartText";

export function PartFooter() {
  return (
    <footer
      id="contact"
      data-part="{%part:section-footer%}"
      className="relative z-10 min-h-screen bg-black text-white px-4 md:px-6 py-16 md:py-24"
    >
      <div className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        <div className="lg:col-span-5">
          <PartText
            partId="{%part:footer-heading%}"
            as="h2"
            className="font-display text-4xl md:text-6xl tracking-tightest leading-[1.05]"
            prompt={`Footer collab heading for [USER_PROJECT].
Original nuance: "WANT TO COLLABORATE?"
Chunk size: 2–4 words, uppercase friendly.
Return only the heading.`}
            previewText="Want to collaborate?"
          />
          <PartText
            partId="{%part:footer-sub%}"
            as="h3"
            className="mt-4 text-2xl md:text-3xl font-light"
            prompt={`Footer subheading. Original: "LET'S TALK". Return only the line.`}
            previewText="Let's talk"
          />

          <form
            data-part="{%part:footer-form%}"
            className="mt-10 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            {(["name", "email", "message"] as const).map((f) => (
              <label key={f} className="block" data-part={`{%part:footer-field-${f}%}`}>
                <PartText
                  partId={`{%part:footer-field-${f}-label%}`}
                  as="span"
                  className="text-[11px] uppercase tracking-label text-white/50"
                  prompt={`Contact form field label for ${f}. Return only the label.`}
                  previewText={f === "name" ? "Name" : f === "email" ? "Email" : "Message"}
                />
                {f === "message" ? (
                  <textarea
                    className="mt-2 w-full bg-transparent border border-white/20 px-3 py-3 min-h-[120px] focus:outline-none focus:border-white/50"
                    placeholder="[message]"
                  />
                ) : (
                  <input
                    type={f === "email" ? "email" : "text"}
                    className="mt-2 w-full bg-transparent border border-white/20 px-3 py-3 focus:outline-none focus:border-white/50"
                    placeholder={`[${f}]`}
                  />
                )}
              </label>
            ))}
            <button
              type="submit"
              className="mt-2 px-5 py-3 bg-white text-black text-xs uppercase tracking-label hover:bg-white/90 transition"
            >
              <PartText
                partId="{%part:footer-submit%}"
                as="span"
                prompt={`Submit button. Original: send / contact. Return only the label.`}
                previewText="Send message"
              />
            </button>
          </form>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10 content-start">
          <div>
            <PartText
              partId="{%part:footer-ask-label%}"
              as="h4"
              className="text-[11px] uppercase tracking-label text-white/50 mb-3"
              prompt={`Sidebar label. Original: "WANT TO ASK SOMETHING?". Return only the label.`}
              previewText="Want to ask something?"
            />
            <PartText
              partId="{%part:footer-email%}"
              as="p"
              className="text-lg"
              prompt={`Primary studio email display. Return only a placeholder email for [USER_PROJECT].`}
              previewText="hello@yourstudio.com"
            />
            <PartText
              partId="{%part:footer-phone%}"
              as="p"
              className="text-lg text-white/70 mt-1"
              prompt={`Phone display. Return a fictional international number placeholder.`}
              previewText="+00 000 000 000"
            />
          </div>
          <div>
            <PartText
              partId="{%part:footer-visit-label%}"
              as="h4"
              className="text-[11px] uppercase tracking-label text-white/50 mb-3"
              prompt={`Visit label. Original: "WANT TO VISIT US?". Return only the label.`}
              previewText="Want to visit us?"
            />
            <PartText
              partId="{%part:footer-address%}"
              as="p"
              className="text-sm leading-relaxed text-white/80 whitespace-pre-line"
              prompt={`Studio address block for [USER_PROJECT].
Chunk size: 3–5 lines.
Tone: directory.
Return address text with line breaks.`}
              previewText="[street]\n[district]\n[city, country]"
            />
          </div>
          <div className="sm:col-span-2">
            <PartText
              partId="{%part:footer-social-label%}"
              as="h4"
              className="text-[11px] uppercase tracking-label text-white/50 mb-3"
              prompt={`Social label. Original: "STAY IN THE LOOP". Return only the label.`}
              previewText="Stay in the loop"
            />
            <div className="flex flex-wrap gap-4 text-sm">
              {["Dribbble", "Behance", "Instagram", "LinkedIn", "X"].map((s) => (
                <PartText
                  key={s}
                  partId={`{%part:footer-social-${s.toLowerCase()}%}`}
                  as="span"
                  className="underline-offset-4 hover:underline cursor-default"
                  prompt={`Social platform label: ${s}. Return only the name.`}
                  previewText={s}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-site mx-auto mt-16 pt-8 border-t border-white/15 flex flex-col md:flex-row justify-between gap-4 text-[11px] uppercase tracking-label text-white/40">
        <PartText
          partId="{%part:footer-legal%}"
          as="p"
          prompt={`Legal line. Privacy / cookies placeholders. Chunk size: 4–8 words.`}
          previewText="Privacy · Cookies"
        />
        <PartText
          partId="{%part:footer-credit%}"
          as="p"
          prompt={`Footer credit with year for [USER_PROJECT]. Return only the line.`}
          previewText="© [year] [studio]"
        />
      </div>
    </footer>
  );
}
