import Link from "next/link";
import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartMotion } from "@/components/parts/PartMotion";
import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";

const FEATURES = [
  { id: "describe", title: "Describe to configure", body: "Workflow building, configuration, testing, simulations, analysis — run everything through conversation." },
  { id: "wherever", title: "Wherever you work", body: "Talk to Coach in-product, Slack, Claude, ChatGPT, or via MCP." },
  { id: "control", title: "You're in control", body: "Implement improvements on your behalf, or surface suggestions for you to action." },
] as const;

const LOOP = [
  { id: "configure", title: "Configure through conversation" },
  { id: "test", title: "Test workflows automatically" },
  { id: "debug", title: "Debug conversations on the fly" },
] as const;

export default function CoachPage() {
  return (
    <main>
      <PartNav />
      <PartSection partId="{%part:section-coach-hero%}" label="Coach Hero" className="pt-28 md:pt-36 px-4 md:px-6 pb-16">
        <div className="max-w-site mx-auto">
          <PartMotion partId="{%motion:coach-hero%}" type="fade" trigger="load">
            <PartText
              partId="{%part:coach-hero-title%}"
              as="h1"
              className="font-display text-[length:var(--hero)] tracking-tightest"
              prompt={`Coach product H1. Original: "Meet Coach". Chunk size: 2–5 words. Return only.`}
              previewText="Meet Coach"
            />
          </PartMotion>
          <PartText
            partId="{%part:coach-hero-body%}"
            as="p"
            className="mt-6 text-lg text-muted max-w-2xl leading-relaxed"
            prompt={`Coach hero body: operations agent; spot issues, find opportunities, act. Chunk size: 30–50 words. Return only.`}
            previewText="Your operations agent — spot issues, find opportunities, and act across every ticket."
          />
          <Link href="/get-a-demo" className="inline-flex mt-8 bg-ink text-paper text-sm px-5 py-3 rounded-full">
            <PartText partId="{%part:coach-hero-cta%}" as="span" prompt={`CTA. Try Coach / Get a demo. Return only.`} previewText="Try Coach" />
          </Link>
        </div>
      </PartSection>

      <PartSection partId="{%part:section-coach-ops%}" label="Ops Teammate" className="px-4 md:px-6 py-16 border-t border-line">
        <div className="max-w-site mx-auto">
          <PartText
            partId="{%part:coach-ops-heading%}"
            as="h2"
            className="font-display text-[length:var(--h2)] tracking-tightest"
            prompt={`Section H2. Original: "Your operations teammate". Return only.`}
            previewText="Your operations teammate"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.id} data-part={`{%part:coach-feat-${f.id}%}`} className="rounded-2xl border border-line p-6 bg-soft">
                <PartText partId={`{%part:coach-feat-${f.id}-title%}`} as="h3" className="text-xl font-medium tracking-tight" prompt={`Feature title: ${f.title}. Return only.`} previewText={f.title} />
                <PartText partId={`{%part:coach-feat-${f.id}-body%}`} as="p" className="mt-3 text-sm text-muted leading-relaxed" prompt={`Feature body for ${f.title}. Return only.`} previewText={f.body} />
              </div>
            ))}
          </div>
        </div>
      </PartSection>

      <PartSection partId="{%part:section-coach-loop%}" label="Ask Build Test Ship" className="px-4 md:px-6 py-20 bg-ink text-paper">
        <div className="max-w-site mx-auto">
          <PartText
            partId="{%part:coach-loop-heading%}"
            as="h2"
            className="font-display text-[length:var(--h2)] tracking-tightest"
            prompt={`Loop H2. Original: "Ask. Build. Test. Ship." Return only.`}
            previewText="Ask. Build. Test. Ship."
          />
          <div className="mt-12 space-y-8">
            {LOOP.map((s) => (
              <div key={s.id} className="border-t border-paper/15 pt-6">
                <PartText partId={`{%part:coach-loop-${s.id}-title%}`} as="h3" className="text-2xl tracking-tight" prompt={`Step title: ${s.title}. Return only.`} previewText={s.title} />
                <PartText partId={`{%part:coach-loop-${s.id}-body%}`} as="p" className="mt-3 text-paper/70 max-w-2xl" prompt={`Step body for ${s.title} ops agent. Chunk size: 25–40 words. Return only.`} previewText={`[${s.title.toLowerCase()} detail]`} />
              </div>
            ))}
          </div>
        </div>
      </PartSection>

      <PartSection partId="{%part:section-coach-quality%}" label="Quality" className="px-4 md:px-6 py-20">
        <div className="max-w-site mx-auto max-w-3xl">
          <PartText
            partId="{%part:coach-quality-heading%}"
            as="h2"
            className="font-display text-[length:var(--h2)] tracking-tightest"
            prompt={`Quality H2. Original: "Deliver quality, effortlessly". Return only.`}
            previewText="Deliver quality, effortlessly"
          />
          <PartText
            partId="{%part:coach-quality-body%}"
            as="p"
            className="mt-4 text-muted leading-relaxed"
            prompt={`Quality body: sample/score every ticket against standards; reports instantly. Chunk size: 30–50 words. Return only.`}
            previewText="Sample and score every ticket against your standards, then surface stats and reports instantly."
          />
        </div>
      </PartSection>
      <PartFooter />
    </main>
  );
}
