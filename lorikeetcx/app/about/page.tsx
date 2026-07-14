import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartImage } from "@/components/parts/PartImage";
import { PartMotion } from "@/components/parts/PartMotion";
import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";

const TEAM = [1, 2, 3, 4, 5, 6] as const;

export default function AboutPage() {
  return (
    <main>
      <PartNav />
      <PartSection partId="{%part:section-mission%}" label="Mission" className="pt-28 md:pt-36 px-4 md:px-6 pb-16">
        <div className="max-w-site mx-auto max-w-3xl">
          <PartMotion partId="{%motion:mission%}" type="fade" trigger="load">
            <PartText
              partId="{%part:mission-title%}"
              as="h1"
              className="font-display text-[length:var(--h2)] tracking-tightest"
              prompt={`About H1. Original: "Our mission". Return only.`}
              previewText="Our mission"
            />
          </PartMotion>
          {[1, 2, 3, 4].map((i) => (
            <PartText
              key={i}
              partId={`{%part:mission-p${i}%}`}
              as="p"
              className="mt-6 text-lg text-muted leading-relaxed"
              prompt={`Mission paragraph ${i} for universal AI concierge / complex support company.
Original energy: every company delivers universal concierge; demand better support; high quality human-like assistance; proactive engagement.
Chunk size: 35–60 words.
Return only the paragraph.`}
              previewText={`[mission paragraph ${i}]`}
            />
          ))}
        </div>
      </PartSection>

      <PartSection partId="{%part:section-team%}" label="Team" className="px-4 md:px-6 py-20 border-t border-line bg-soft">
        <div className="max-w-site mx-auto">
          <PartText
            partId="{%part:team-heading%}"
            as="h2"
            className="font-display text-[length:var(--h2)] tracking-tightest max-w-3xl"
            prompt={`Team H2. Original: wide range of global tech leaders and startups / Our team. Return only.`}
            previewText="Our team"
          />
          <PartText
            partId="{%part:team-intro%}"
            as="p"
            className="mt-4 text-muted max-w-2xl"
            prompt={`Team intro: founders from AI research + ops tools. Chunk size: 25–40 words. No real names from Lorikeet. Return only.`}
            previewText="Founders from the AI research frontier and builders of power tools for operations teams."
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
            {TEAM.map((i) => (
              <div key={i} data-part={`{%part:team-${i}%}`} className="space-y-3">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-line">
                  <PartImage partId={`{%part:team-${i}-photo%}`} aspectRatio={1} objectFit="cover" placeholder={`Team ${i} portrait`} className="w-full h-full absolute inset-0" />
                </div>
                <PartText partId={`{%part:team-${i}-name%}`} as="p" className="font-medium" prompt={`Fictional first+last name ${i}. Not real Lorikeet employees. Return only.`} previewText={`[person ${i}]`} />
                <PartText partId={`{%part:team-${i}-role%}`} as="p" className="text-sm text-muted" prompt={`Role for person ${i}. Return only.`} previewText="[role]" />
                <PartText partId={`{%part:team-${i}-quote%}`} as="p" className="text-sm text-muted leading-relaxed" prompt={`Short team quote ${i}. Chunk size: 15–30 words. Return only.`} previewText={`[quote ${i}]`} />
              </div>
            ))}
          </div>
        </div>
      </PartSection>
      <PartFooter />
    </main>
  );
}
