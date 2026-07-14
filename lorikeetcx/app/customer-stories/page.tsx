import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartMotion } from "@/components/parts/PartMotion";
import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";
import { StoryCard } from "@/components/parts/StoryCard";
import { STORIES } from "@/lib/content";

const FILTERS = ["All", "Finance", "Health", "Energy", "Complex SaaS"] as const;

export default function StoriesPage() {
  return (
    <main>
      <PartNav />
      <PartSection partId="{%part:section-stories-hero%}" label="Stories Hero" className="pt-28 md:pt-36 px-4 md:px-6 pb-10">
        <div className="max-w-site mx-auto">
          <PartMotion partId="{%motion:stories-hero%}" type="fade" trigger="load">
            <PartText
              partId="{%part:stories-hero-title%}"
              as="h1"
              className="font-display text-[length:var(--hero)] tracking-tightest"
              prompt={`Stories H1. Original: "Our customers". Return only.`}
              previewText="Our customers"
            />
          </PartMotion>
          <div className="mt-8 flex flex-wrap gap-2" data-part="{%part:stories-filters%}">
            {FILTERS.map((f) => (
              <span key={f} className="text-sm px-3 py-1.5 rounded-full border border-line bg-paper">
                <PartText partId={`{%part:filter-${f.toLowerCase().replace(/\s+/g, "-")}%}`} as="span" prompt={`Filter chip: ${f}. Return only.`} previewText={f} />
              </span>
            ))}
          </div>
        </div>
      </PartSection>

      <PartSection partId="{%part:section-stories-grid%}" label="Stories Grid" className="px-4 md:px-6 pb-24">
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {STORIES.map((s) => (
            <StoryCard key={s.slug} story={s} />
          ))}
        </div>
      </PartSection>
      <PartFooter />
    </main>
  );
}
