import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartMotion } from "@/components/parts/PartMotion";
import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";

const PILLARS = [
  {
    id: "websites",
    n: "01",
    title: "Websites & Digital Experiences",
    tabs: ["Business value", "Our advantage", "Execution tools", "Use cases"],
  },
  {
    id: "apps",
    n: "02",
    title: "Apps, Platforms & Real-Time Systems",
    tabs: ["Business value", "Our advantage", "Execution tools", "Use cases"],
  },
  {
    id: "commerce",
    n: "03",
    title: "E-Commerce & Product Storytelling",
    tabs: ["Business value", "Our advantage", "Execution tools", "Use cases"],
  },
  {
    id: "web3",
    n: "04",
    title: "Web3 & On-Chain Platforms",
    tabs: ["Business value", "Our advantage", "Execution tools", "Use cases"],
  },
] as const;

const SERVICE_BLOCKS = [
  {
    n: "01",
    title: "Product Strategy",
    items: ["Product Discovery", "Market & User Research", "Competitor Analysis", "Technical Feasibility", "Product Roadmapping", "MVP Scoping"],
  },
  {
    n: "02",
    title: "UX/UI Design",
    items: ["UX/UI Audits", "High-End UI Design", "User Experience Design", "Design Systems", "Rapid Prototyping", "Interaction Design"],
  },
  {
    n: "03",
    title: "3D, Motion & Immersive Design",
    items: ["Art Direction", "Digital Branding", "Motion Systems", "3D Asset Production", "Cinematic Web Moments"],
  },
  {
    n: "04",
    title: "Creative Frontend & App Engineering",
    items: ["Component Libraries", "High-Performance Frontend", "App Engineering", "Accessibility", "Fluid Scaling Systems"],
  },
  {
    n: "05",
    title: "Backend, CMS & System Engineering",
    items: ["API Architecture", "CMS Integration", "High-Concurrency Backends", "DevOps", "Observability"],
  },
  {
    n: "06",
    title: "Web3 & On-Chain Engineering",
    items: ["On-Chain Integrations", "Wallet UX", "Real-Time Systems", "Gaming Surfaces", "Protocol Frontends"],
  },
] as const;

const PROCESS = [
  { id: "explore", title: "Exploration & Alignment" },
  { id: "plan", title: "Planning & Roadmapping" },
  { id: "deliver", title: "Delivery & Project Management" },
  { id: "comms", title: "Communication & Reporting" },
] as const;

export default function ServicesPage() {
  return (
    <main>
      <PartNav />

      <PartSection
        partId="{%part:section-services-hero%}"
        label="Services Hero"
        className="pt-[calc(var(--navbar-height)+2rem)] px-4 md:px-6 pb-16"
      >
        <div className="max-w-site mx-auto">
          <PartMotion partId="{%motion:services-hero%}" type="split" trigger="load">
            <PartText
              partId="{%part:services-hero-line-1%}"
              as="h1"
              className="font-display text-[length:var(--text-7xl)] tracking-tightest uppercase leading-[0.92]"
              prompt={`Services hero line 1. Original: "FULL-STACK". Return only the line.`}
              previewText="Full-stack"
            />
            <PartText
              partId="{%part:services-hero-line-2%}"
              as="p"
              className="font-display text-[length:var(--text-7xl)] tracking-tightest uppercase leading-[0.92]"
              prompt={`Services hero line 2. Original: "EXPERTISE". Return only the line.`}
              previewText="Expertise"
            />
          </PartMotion>
          <PartText
            partId="{%part:services-hero-intro%}"
            as="p"
            className="mt-8 max-w-2xl text-sm md:text-base text-[color:var(--muted)] leading-relaxed"
            prompt={`Services hero intro for [USER_PROJECT].
Original: discovery to engineering; full product delivery or team augmentation.
Chunk size: 25–40 words.
Return only the paragraph.`}
            previewText="From discovery to engineering — full product delivery or team augmentation."
          />
        </div>
      </PartSection>

      <PartSection partId="{%part:section-pillars%}" label="Build Pillars" className="px-4 md:px-6 py-16 border-t border-[color:var(--border)]">
        <div className="max-w-site mx-auto space-y-16">
          {PILLARS.map((p) => (
            <div key={p.id} data-part={`{%part:svc-pillar-${p.id}%}`} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <PartText
                  partId={`{%part:svc-pillar-${p.id}-n%}`}
                  as="p"
                  className="font-display text-5xl tracking-tight"
                  prompt={`Pillar number. Original: "${p.n}". Return only the number.`}
                  previewText={p.n}
                />
                <PartText
                  partId={`{%part:svc-pillar-${p.id}-title%}`}
                  as="h2"
                  className="mt-3 text-xl md:text-2xl uppercase tracking-tight font-medium"
                  prompt={`Pillar title: ${p.title}. Return only the title.`}
                  previewText={p.title}
                />
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {p.tabs.map((tab, i) => (
                  <div key={tab} className="border-t border-[color:var(--border)] pt-4">
                    <PartText
                      partId={`{%part:svc-pillar-${p.id}-tab-${i + 1}%}`}
                      as="h3"
                      className="text-xs uppercase tracking-label text-[color:var(--muted)] mb-2"
                      prompt={`Tab label: ${tab}. Return only the label.`}
                      previewText={tab}
                    />
                    <PartText
                      partId={`{%part:svc-pillar-${p.id}-tab-${i + 1}-body%}`}
                      as="p"
                      className="text-sm leading-relaxed text-[color:var(--fg)]/80"
                      prompt={`Write body under "${tab}" for pillar "${p.title}" at [USER_PROJECT].
Chunk size: 18–35 words.
Tone: senior studio, concrete.
Return only the body.`}
                      previewText={`[${tab.toLowerCase()} detail for ${p.title}]`}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PartSection>

      <PartSection partId="{%part:section-service-list%}" label="Service List" className="px-4 md:px-6 py-20 md:py-28 bg-[color:var(--panel)]">
        <div className="max-w-site mx-auto">
          <PartMotion partId="{%motion:service-list-heading%}" type="mega" trigger="inView">
            <PartText
              partId="{%part:service-list-heading%}"
              as="h2"
              className="font-display text-[clamp(3rem,12vw,15rem)] tracking-tightest uppercase leading-[0.85]"
              prompt={`Service list mega title. Original: "OUR SERVICES". Return only the title.`}
              previewText="Our services"
            />
          </PartMotion>
          <div className="mt-16 space-y-14">
            {SERVICE_BLOCKS.map((b) => (
              <div key={b.n} data-part={`{%part:service-block-${b.n}%}`} className="grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-[color:var(--border)] pt-8">
                <PartText
                  partId={`{%part:service-block-${b.n}-n%}`}
                  as="p"
                  className="md:col-span-2 font-display text-3xl"
                  prompt={`Block number ${b.n}. Return only the number.`}
                  previewText={b.n}
                />
                <div className="md:col-span-10">
                  <PartText
                    partId={`{%part:service-block-${b.n}-title%}`}
                    as="h3"
                    className="text-xl md:text-2xl uppercase tracking-tight font-medium"
                    prompt={`Service block title: ${b.title}. Return only the title.`}
                    previewText={b.title}
                  />
                  <PartText
                    partId={`{%part:service-block-${b.n}-blurb%}`}
                    as="p"
                    className="mt-3 max-w-2xl text-sm text-[color:var(--muted)] leading-relaxed"
                    prompt={`Service block blurb for ${b.title} at [USER_PROJECT]. Chunk size: 25–45 words. Return only the blurb.`}
                    previewText={`[${b.title.toLowerCase()} value proposition]`}
                  />
                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {b.items.map((item, i) => (
                      <li key={item}>
                        <PartText
                          partId={`{%part:service-block-${b.n}-item-${i + 1}%}`}
                          as="span"
                          className="text-sm"
                          prompt={`Capability bullet: ${item}. Return only the item name.`}
                          previewText={item}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PartSection>

      <PartSection partId="{%part:section-process%}" label="Process" className="px-4 md:px-6 py-20 md:py-28">
        <div className="max-w-site mx-auto">
          <PartText
            partId="{%part:process-heading%}"
            as="h2"
            className="font-display text-[clamp(2rem,6vw,4rem)] tracking-tightest uppercase mb-12"
            prompt={`Process section title. Original: "OUR PROCESS". Return only the title.`}
            previewText="Our process"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROCESS.map((step, i) => (
              <div key={step.id} data-part={`{%part:process-${step.id}%}`} className="border-t border-[color:var(--border)] pt-6">
                <span className="text-xs text-[color:var(--muted)]">{String(i + 1).padStart(2, "0")}</span>
                <PartText
                  partId={`{%part:process-${step.id}-title%}`}
                  as="h3"
                  className="mt-2 text-lg md:text-xl uppercase tracking-tight font-medium"
                  prompt={`Process step title: ${step.title}. Return only the title.`}
                  previewText={step.title}
                />
                <PartText
                  partId={`{%part:process-${step.id}-body%}`}
                  as="p"
                  className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed"
                  prompt={`Process step body for "${step.title}" at [USER_PROJECT]. Chunk size: 30–50 words. Return only the body.`}
                  previewText={`[${step.title.toLowerCase()} detail]`}
                />
              </div>
            ))}
          </div>
        </div>
      </PartSection>

      <PartSection partId="{%part:section-engagement%}" label="Engagement Models" className="px-4 md:px-6 py-20 md:py-28 bg-[color:var(--panel)]">
        <div className="max-w-site mx-auto">
          <PartText
            partId="{%part:engagement-heading%}"
            as="h2"
            className="font-display text-[clamp(2rem,6vw,4rem)] tracking-tightest uppercase mb-10"
            prompt={`Engagement section title. Original: "ENGAGEMENT MODELS". Return only the title.`}
            previewText="Engagement models"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { id: "e2e", n: "01", title: "End-to-end product delivery" },
              { id: "embed", n: "02", title: "Embedded expertise" },
            ].map((m) => (
              <div key={m.id} data-part={`{%part:engagement-${m.id}%}`} className="border-t border-[color:var(--border)] pt-6">
                <PartText
                  partId={`{%part:engagement-${m.id}-n%}`}
                  as="p"
                  className="font-display text-4xl"
                  prompt={`Model number ${m.n}. Return only the number.`}
                  previewText={m.n}
                />
                <PartText
                  partId={`{%part:engagement-${m.id}-title%}`}
                  as="h3"
                  className="mt-2 text-xl uppercase tracking-tight font-medium"
                  prompt={`Engagement model title: ${m.title}. Return only the title.`}
                  previewText={m.title}
                />
                <PartText
                  partId={`{%part:engagement-${m.id}-body%}`}
                  as="p"
                  className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed"
                  prompt={`Engagement model body for "${m.title}" at [USER_PROJECT]. Chunk size: 30–55 words. Return only the body.`}
                  previewText={`[${m.title.toLowerCase()} description]`}
                />
              </div>
            ))}
          </div>
        </div>
      </PartSection>

      <PartSection partId="{%part:section-testimonials%}" label="Testimonials" className="px-4 md:px-6 py-20 md:py-28">
        <div className="max-w-site mx-auto">
          <PartMotion partId="{%motion:testimonials-heading%}" type="mega" trigger="inView">
            <PartText
              partId="{%part:testimonials-heading%}"
              as="h2"
              className="font-display text-[clamp(2rem,7vw,5rem)] tracking-tightest uppercase mb-12"
              prompt={`Testimonials title. Original: "WHAT OUR CLIENTS SAY". Return only the title.`}
              previewText="What our clients say"
            />
          </PartMotion>
          <div className="space-y-12 max-w-4xl">
            {[1, 2, 3, 4].map((i) => (
              <blockquote key={i} data-part={`{%part:testimonial-${i}%}`} className="border-t border-[color:var(--border)] pt-8">
                <PartText
                  partId={`{%part:testimonial-${i}-quote%}`}
                  as="p"
                  className="text-xl md:text-2xl leading-snug tracking-tight"
                  prompt={`Client testimonial ${i} for [USER_PROJECT]. Use fictional attribution. Chunk size: 25–45 words. Tone: specific craft praise. Return only the quote.`}
                  previewText={`[testimonial ${i}]`}
                />
                <footer className="mt-4 text-sm text-[color:var(--muted)]">
                  <PartText
                    partId={`{%part:testimonial-${i}-name%}`}
                    as="span"
                    prompt={`Fictional name for testimonial ${i}. Return only the name.`}
                    previewText="[name]"
                  />
                  {" · "}
                  <PartText
                    partId={`{%part:testimonial-${i}-role%}`}
                    as="span"
                    prompt={`Role/org for testimonial ${i}. Return only role · org.`}
                    previewText="[role · org]"
                  />
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </PartSection>

      <PartFooter />
    </main>
  );
}
