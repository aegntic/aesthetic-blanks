import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartMotion } from "@/components/parts/PartMotion";
import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";
import { INTEGRATIONS } from "@/lib/content";

export default function IntegrationsPage() {
  return (
    <main>
      <PartNav />
      <PartSection partId="{%part:section-int-hero%}" label="Integrations Hero" className="pt-28 md:pt-36 px-4 md:px-6 pb-12">
        <div className="max-w-site mx-auto">
          <PartMotion partId="{%motion:int-hero%}" type="fade" trigger="load">
            <PartText
              partId="{%part:int-hero-title%}"
              as="h1"
              className="font-display text-[length:var(--hero)] tracking-tightest"
              prompt={`Integrations H1. Original: "Integration Library". Return only.`}
              previewText="Integration Library"
            />
          </PartMotion>
          <PartText
            partId="{%part:int-hero-body%}"
            as="p"
            className="mt-5 text-lg text-muted max-w-2xl"
            prompt={`Integrations intro: connect ticketing, knowledge base, internal tools; ingest data and take action. Chunk size: 20–35 words. Return only.`}
            previewText="Connect your ticketing system, knowledge base, and internal tools to ingest data and take action."
          />
        </div>
      </PartSection>

      <PartSection partId="{%part:section-int-grid%}" label="Library" className="px-4 md:px-6 pb-24">
        <div className="max-w-site mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INTEGRATIONS.map((it, i) => (
            <div key={it.id} data-part={`{%part:int-${it.id}%}`} className="rounded-2xl border border-line p-5 bg-paper hover:shadow-md transition">
              <PartText
                partId={`{%part:int-${it.id}-cat%}`}
                as="p"
                className="text-xs uppercase tracking-label text-muted mb-2"
                prompt={`Integration category: ${it.cat}. Return only.`}
                previewText={it.cat}
              />
              <PartText
                partId={`{%part:int-${it.id}-name%}`}
                as="h3"
                className="text-xl font-medium tracking-tight capitalize"
                prompt={`Integration name for slot ${i + 1} (e.g. ${it.id}). Return product name only.`}
                previewText={it.id}
              />
              <PartText
                partId={`{%part:int-${it.id}-body%}`}
                as="p"
                className="mt-2 text-sm text-muted leading-relaxed"
                prompt={`One-line integration value for ${it.id} with AI CX platform. Chunk size: 12–22 words. Return only.`}
                previewText={`[how ${it.id} connects to resolution workflows]`}
              />
            </div>
          ))}
        </div>
      </PartSection>
      <PartFooter />
    </main>
  );
}
