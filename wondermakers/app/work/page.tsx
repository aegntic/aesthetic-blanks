import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartMotion } from "@/components/parts/PartMotion";
import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";
import { WorkCard } from "@/components/parts/WorkCard";
import { WORK, SECTORS } from "@/lib/work";

export default function WorkPage() {
  return (
    <main>
      <PartNav />

      <PartSection
        partId="{%part:section-work-hero%}"
        label="Work Hero"
        className="pt-[calc(var(--navbar-height)+2rem)] px-4 md:px-6 pb-12 md:pb-16"
      >
        <div className="max-w-site mx-auto">
          <PartMotion partId="{%motion:work-hero%}" type="split" trigger="load">
            <PartText
              partId="{%part:work-page-line-1%}"
              as="h1"
              className="font-display text-[length:var(--text-7xl)] tracking-tightest uppercase leading-[0.92]"
              prompt={`Work page hero line 1. Original: "GLOBAL WORK." Return only the line.`}
              previewText="Global work."
            />
            <PartText
              partId="{%part:work-page-line-2%}"
              as="p"
              className="font-display text-[length:var(--text-7xl)] tracking-tightest uppercase leading-[0.92]"
              prompt={`Work page hero line 2. Original: "ENGINEERED." Return only the line.`}
              previewText="Engineered."
            />
          </PartMotion>
          <PartText
            partId="{%part:work-page-intro%}"
            as="p"
            className="mt-8 max-w-2xl text-sm md:text-base text-[color:var(--muted)] leading-relaxed"
            prompt={`Work page intro for [USER_PROJECT].
Original nuance: global brand websites to scalable systems; high-end design with technical precision across continents.
Chunk size: 30–50 words.
Return only the paragraph.`}
            previewText="[from global brand websites to scalable digital systems]"
          />
        </div>
      </PartSection>

      <PartSection partId="{%part:section-sectors%}" label="Sectors" className="px-4 md:px-6 pb-12">
        <div className="max-w-site mx-auto">
          <PartText
            partId="{%part:sectors-label%}"
            as="h2"
            className="text-sm uppercase tracking-label text-[color:var(--muted)] mb-4"
            prompt={`Sectors label. Original: "EXPERIENCED IN". Return only the label.`}
            previewText="Experienced in"
          />
          <PartMotion partId="{%motion:sectors-marquee%}" type="marquee">
            <div className="flex items-center gap-8 px-2">
              {SECTORS.map((s) => (
                <PartText
                  key={s}
                  partId={`{%part:sector-${s.toLowerCase().replace(/\s+/g, "-")}%}`}
                  as="span"
                  className="text-2xl md:text-3xl uppercase tracking-tight whitespace-nowrap"
                  prompt={`Sector chip: ${s}. Return only the sector name.`}
                  previewText={s}
                />
              ))}
            </div>
          </PartMotion>
        </div>
      </PartSection>

      <PartSection partId="{%part:section-work-grid%}" label="Work Grid" className="px-4 md:px-6 pb-20 md:pb-28">
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {WORK.map((item) => (
            <WorkCard key={item.slug} item={item} />
          ))}
        </div>
      </PartSection>

      <PartSection partId="{%part:section-awards%}" label="Awards" className="px-4 md:px-6 py-20 md:py-28 border-t border-[color:var(--border)]">
        <div className="max-w-site mx-auto">
          <PartMotion partId="{%motion:awards-mega%}" type="mega" trigger="inView">
            <PartText
              partId="{%part:awards-heading%}"
              as="h2"
              className="font-display text-[clamp(3rem,12vw,15rem)] tracking-tightest uppercase leading-[0.85]"
              prompt={`Awards mega title. Original: "OUR AWARDS". Return only the title.`}
              previewText="Our awards"
            />
          </PartMotion>
          <PartText
            partId="{%part:awards-intro%}"
            as="p"
            className="mt-8 max-w-xl text-sm md:text-base text-[color:var(--muted)]"
            prompt={`Awards intro. Original: recognized by leading platforms for visual excellence and technical execution.
Chunk size: 15–30 words.
Return only the paragraph.`}
            previewText="Recognized for visual excellence and technical execution."
          />
          <div className="mt-12 space-y-6 max-w-3xl">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} data-part={`{%part:award-row-${i}%}`} className="border-t border-[color:var(--border)] pt-4">
                <PartText
                  partId={`{%part:award-row-${i}-title%}`}
                  as="h3"
                  className="text-base md:text-lg uppercase tracking-tight"
                  prompt={`Award line ${i} for [USER_PROJECT]. Fictional or generic award mention — do not copy real client award claims.
Chunk size: 8–16 words.
Return only the award line.`}
                  previewText={`[award line ${i}]`}
                />
                <PartText
                  partId={`{%part:award-row-${i}-meta%}`}
                  as="p"
                  className="mt-1 text-xs text-[color:var(--muted)]"
                  prompt={`Award year/meta for row ${i}. Chunk size: 2–5 words. Return only the meta.`}
                  previewText="[year · platform]"
                />
              </div>
            ))}
          </div>
        </div>
      </PartSection>

      <PartSection
        id="games"
        partId="{%part:section-games-cta%}"
        label="Games Division CTA"
        className="px-4 md:px-6 py-20 md:py-28 bg-[color:var(--panel)]"
      >
        <div className="max-w-site mx-auto max-w-3xl">
          <PartText
            partId="{%part:games-heading%}"
            as="h2"
            className="font-display text-[clamp(2rem,6vw,4rem)] tracking-tightest uppercase"
            prompt={`Gaming division CTA heading for [USER_PROJECT].
Original nuance: sister Web3/gaming division name.
Chunk size: 2–4 words.
Return only the heading.`}
            previewText="Games lab"
          />
          <PartText
            partId="{%part:games-body%}"
            as="p"
            className="mt-4 text-sm md:text-base text-[color:var(--muted)] leading-relaxed"
            prompt={`Games division blurb. Original: real-time 3D, animation, immersive web — high performance and interactivity.
Chunk size: 25–40 words.
Return only the paragraph.`}
            previewText="[real-time 3D, animation, immersive web experiences]"
          />
        </div>
      </PartSection>

      <PartFooter />
    </main>
  );
}
