import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartNav } from "@/components/parts/PartNav";

const REPS = [
  { id: "uk", region: "United Kingdom", name: "Rep A" },
  { id: "fr", region: "France", name: "Rep B" },
  { id: "us", region: "United States", name: "Rep C" },
  { id: "de", region: "Germany & Austria", name: "Rep D" },
  { id: "me", region: "Middle East", name: "Rep E" },
];

export default function ContactPage() {
  return (
    <main>
      <PartNav />
      <PartSection partId="{%part:section-contact%}" label="Contact / Representation" className="pt-32 pb-24 px-6 md:px-12 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <PartText
            partId="{%part:contact-page-title%}"
            as="h1"
            className="font-display text-5xl md:text-7xl tracking-tight mb-4"
            prompt={`Write the main title for the contact / representation page of [USER_PROJECT].
Original nuance: "Contact" or "Get in touch" / "Repped by".
Chunk size: 1–3 words.
Tone: clean, direct.
Return only the title.`}
            previewText="contact"
          />
          <PartText
            partId="{%part:contact-page-intro%}"
            as="p"
            className="text-muted text-lg mb-16 max-w-xl"
            prompt={`Write a short intro for the multi-rep contact page of [USER_PROJECT].
Original nuance: brief note that the person is repped in multiple territories.
Chunk size: 1 sentence, 10–20 words.
Tone: professional, understated.
Return only the intro.`}
            previewText="[intro about representation]"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {REPS.map((rep) => (
              <div key={rep.id} data-part={`{%part:rep-${rep.id}%}`} className="space-y-3">
                <PartText
                  partId={`{%part:rep-${rep.id}-region%}`}
                  as="h3"
                  className="text-xs uppercase tracking-[0.2em] text-muted"
                  prompt={`Write the region label for a representation entry.
Original nuance: "United Kingdom", "France", "United States", etc.
Chunk size: 1–4 words.
Return only the region name.`}
                  previewText={rep.region}
                />
                <PartText
                  partId={`{%part:rep-${rep.id}-name%}`}
                  as="p"
                  className="text-xl font-medium"
                  prompt={`Write the company / producer name for this territory.
Original nuance: agency or production company name.
Chunk size: 1–4 words.
Return only the name.`}
                  previewText={rep.name}
                />
                <PartText
                  partId={`{%part:rep-${rep.id}-details%}`}
                  as="div"
                  className="text-sm text-muted leading-relaxed space-y-1"
                  prompt={`Write contact details block for this rep (address lines + phone + email).
Original nuance: multi-line address, phone, email, website.
Chunk size: 4–8 short lines.
Tone: directory style, clean.
Return the details as plain text with line breaks.`}
                  previewText="[address]\\n[phone]\\n[email]\\n[site]"
                />
              </div>
            ))}
          </div>
        </div>
      </PartSection>
    </main>
  );
}
