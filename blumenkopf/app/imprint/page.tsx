import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartMotion } from "@/components/parts/PartMotion";
import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";

export default function ImprintPage() {
  return (
    <main className="relative flex-1 bg-paper text-ink">
      <PartNav />

      <PartSection
        partId="{%part:section-imprint%}"
        label="Imprint"
        className="pt-28 md:pt-36 px-5 md:px-10 pb-20 md:pb-28"
      >
        <div className="max-w-3xl mx-auto">
          <PartText
            partId="{%part:imprint-tag%}"
            as="p"
            className="text-xs uppercase tracking-label text-muted mb-6"
            prompt={`Write the Imprint section tag for [USER_PROJECT].
Original nuance: "( imprint )" parenthesised lowercase label.
Chunk size: 1 word.
Return only the tag.`}
            previewText="( imprint )"
          />

          <PartMotion partId="{%motion:imprint-heading%}" type="mask" trigger="inView">
            <PartText
              partId="{%part:imprint-heading%}"
              as="h1"
              className="font-sans text-[clamp(2.25rem,7vw,5rem)] font-light tracking-tightest lowercase mb-12"
              prompt={`Write the imprint page heading for [USER_PROJECT].
Original nuance: a single lowercase word ("imprint" / "legal").
Chunk size: 1 word.
Return only the heading.`}
              previewText="imprint"
            />
          </PartMotion>

          <div className="space-y-10 border-t-3 border-line pt-10">
            {[
              {
                id: "publisher",
                label: "publisher",
                prompt: `Write the publisher block for [USER_PROJECT] imprint.
Original nuance: legal entity — name, address, city, country. European Impressum style.
Chunk size: 4–8 lines / 30–60 words.
Tone: formal small-print.
Return only the block.`,
                preview: "[studio name]\n[street address]\n[postal code city, country]",
              },
              {
                id: "contact",
                label: "contact",
                prompt: `Write the contact block for [USER_PROJECT] imprint.
Original nuance: email + phone, plain.
Chunk size: 2–4 lines.
Return only the block.`,
                preview: "hello@[project]\n+00 000 000 000",
              },
              {
                id: "credits",
                label: "credits",
                prompt: `Write the credits / colophon block for [USER_PROJECT] imprint.
Original nuance: design + build credit, typefaces used, year.
Chunk size: 3–6 lines.
Return only the block.`,
                preview: "design & build — [studio]\nset in [sans] + [serif]\n© [year]",
              },
              {
                id: "legal",
                label: "legal",
                prompt: `Write the liability / legal note for [USER_PROJECT] imprint.
Original nuance: standard Impressum liability disclaimer — content ownership, external links.
Chunk size: 40–70 words, 2–3 sentences.
Tone: formal.
Return only the note.`,
                preview: "[liability note — content ownership, external links]",
              },
            ].map((row) => (
              <PartMotion key={row.id} partId={`{%motion:imprint-${row.id}%}`} type="fade" trigger="inView">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-8 border-t border-ink/15 pt-6 first:border-t-0 first:pt-0">
                  <PartText
                    partId={`{%part:imprint-${row.id}-label%}`}
                    as="p"
                    className="text-xs uppercase tracking-label text-muted"
                    prompt={`Write the ${row.label} row label for [USER_PROJECT] imprint.
Original nuance: lowercase one-word row key.
Chunk size: 1 word.
Return only the label.`}
                    previewText={row.label}
                  />
                  <PartText
                    partId={`{%part:imprint-${row.id}%}`}
                    as="div"
                    className="md:col-span-3 font-serif text-base md:text-lg leading-relaxed text-ink/85 whitespace-pre-line"
                    prompt={row.prompt}
                    previewText={row.preview}
                  />
                </div>
              </PartMotion>
            ))}
          </div>
        </div>
      </PartSection>

      <PartFooter />
    </main>
  );
}
