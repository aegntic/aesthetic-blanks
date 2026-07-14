import Link from "next/link";
import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartMotion } from "@/components/parts/PartMotion";
import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";
import { WorkCard } from "@/components/parts/WorkCard";
import { WORK } from "@/lib/work";

const BUILD_PILLARS = [
  {
    id: "websites",
    n: "01",
    title: "Websites & Digital Experiences",
    blurb:
      "High-end websites designed to shape perception and strengthen your brand. Immersive storytelling with flawless interaction — without sacrificing performance.",
  },
  {
    id: "apps",
    n: "02",
    title: "Apps, Platforms & Real-Time Systems",
    blurb:
      "Resilient digital products that support demanding operations — from fast MVPs to complex custom systems.",
  },
  {
    id: "commerce",
    n: "03",
    title: "E-Commerce & Product Storytelling",
    blurb:
      "Premium digital presentation that increases perceived product value and conversion quality.",
  },
  {
    id: "web3",
    n: "04",
    title: "Web3 & On-Chain Platforms",
    blurb:
      "On-chain products and gaming surfaces where design systems meet real-time engineering.",
  },
] as const;

const SERVICES = [
  "Product Strategy",
  "UX/UI Design",
  "3D, Motion & Immersive Design",
  "Creative Frontend & App Engineering",
  "Backend, CMS & System Engineering",
  "Web3 & On-Chain Engineering",
] as const;

const EDGE = [
  {
    id: "design",
    title: "Design as strategic value",
    body: "Design is more than aesthetics. It sharpens positioning, increases perceived value, and drives measurable results.",
  },
  {
    id: "fluid",
    title: "Fluid scaling UI",
    body: "Beyond responsive design. Fluid scaling systems keep interfaces consistent across every screen size while maintaining performance.",
  },
  {
    id: "eng",
    title: "Business-driven engineering",
    body: "We start with business goals — from rapid MVP launches to long-horizon platforms that stay flexible.",
  },
  {
    id: "immerse",
    title: "Purposeful immersion",
    body: "3D, motion, and interaction only when they deepen brand storytelling and product clarity.",
  },
] as const;

const FAQ = [1, 2, 3, 4, 5] as const;

export default function HomePage() {
  const featured = WORK.slice(0, 5);

  return (
    <main className="relative">
      <PartNav />

      {/* HERO */}
      <PartSection
        partId="{%part:section-hero%}"
        label="Hero"
        className="min-h-screen pt-[calc(var(--navbar-height)+1rem)] px-4 md:px-6 flex flex-col justify-end pb-16"
      >
        <div className="max-w-site mx-auto w-full">
          <PartMotion partId="{%motion:split-headline%}" type="split" trigger="load" stagger={0.12}>
            <PartText
              partId="{%part:hero-line-1%}"
              as="h1"
              className="font-display text-[length:var(--text-7xl)] tracking-tightest leading-[0.92] uppercase"
              prompt={`Write hero line 1 for a high-end digital product studio [USER_PROJECT].
Original nuance: "HIGH-END DESIGN." — short clause ending with period, uppercase display.
Chunk size: 2–4 words.
Tone: absolute confidence.
Return only the line including period.`}
              previewText="High-end design."
            />
            <PartText
              partId="{%part:hero-line-2%}"
              as="p"
              className="font-display text-[length:var(--text-7xl)] tracking-tightest leading-[0.92] uppercase"
              prompt={`Write hero line 2 for [USER_PROJECT].
Original nuance: "CRAFTED CODE." — pairs with design line.
Chunk size: 2–4 words including period.
Return only the line.`}
              previewText="Crafted code."
            />
          </PartMotion>

          <PartMotion partId="{%motion:hero-body%}" type="fade" trigger="load">
            <PartText
              partId="{%part:hero-body%}"
              as="p"
              className="mt-8 md:mt-10 max-w-2xl text-sm md:text-base leading-relaxed text-[color:var(--muted)]"
              prompt={`Write hero body for [USER_PROJECT] digital product studio.
Original nuance: studio for teams who see design and engineering as competitive advantage; flagship websites to scalable applications; world-class aesthetics meet robust infrastructure.
Chunk size: 40–65 words, 2–3 sentences.
Tone: senior, precise, anti-hype.
Return only the paragraph.`}
              previewText="[studio positioning — design + engineering as competitive advantage]"
            />
          </PartMotion>
        </div>
      </PartSection>

      {/* AWARDS STRIP */}
      <PartSection partId="{%part:section-awards-strip%}" label="Awards Strip" className="px-4 md:px-6 py-10 border-y border-[color:var(--border)]">
        <div className="max-w-site mx-auto flex flex-wrap gap-x-10 gap-y-3 text-sm text-[color:var(--muted)]">
          {["Rated 5.0 on Clutch", "10x awarded by Awwwards", "Awarded by Webaward"].map((t, i) => (
            <PartText
              key={i}
              partId={`{%part:award-pill-${i + 1}%}`}
              as="p"
              prompt={`Write credibility pill ${i + 1} for [USER_PROJECT].
Original nuance: platform rating / award count line (not claiming specific clients).
Chunk size: 3–6 words.
Return only the pill.`}
              previewText={t}
            />
          ))}
        </div>
      </PartSection>

      {/* FEATURED WORK */}
      <PartSection partId="{%part:section-featured-work%}" label="Featured Work" className="px-4 md:px-6 py-20 md:py-28">
        <div className="max-w-site mx-auto">
          <div className="mb-12 md:mb-16 max-w-3xl">
            <PartMotion partId="{%motion:work-heading%}" type="split" trigger="inView">
              <PartText
                partId="{%part:work-heading%}"
                as="h2"
                className="font-display text-[length:var(--text-7xl)] tracking-tightest uppercase leading-[0.92]"
                prompt={`Featured work section title. Original: "WORK". Return only the title.`}
                previewText="Work"
              />
            </PartMotion>
            <PartText
              partId="{%part:work-subhead%}"
              as="h3"
              className="mt-6 text-lg md:text-xl"
              prompt={`Work subhead. Original: "Award-winning craft, technical reliability."
Chunk size: 4–8 words.
Return only the subhead.`}
              previewText="Award-winning craft, technical reliability."
            />
            <PartText
              partId="{%part:work-intro%}"
              as="p"
              className="mt-4 text-sm md:text-base text-[color:var(--muted)] max-w-xl leading-relaxed"
              prompt={`Work intro for [USER_PROJECT].
Original nuance: recognized for visual excellence; built for technical demands of industry-leading brands.
Chunk size: 25–40 words.
Return only the paragraph.`}
              previewText="[recognized for visual excellence and technical demands of leading brands]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {featured.map((item) => (
              <WorkCard key={item.slug} item={item} />
            ))}
          </div>

          <div className="mt-14">
            <Link href="/work" className="text-lg md:text-xl uppercase tracking-tight border-b border-[color:var(--fg)] pb-1 hover:opacity-60 transition">
              <PartText
                partId="{%part:work-see-all%}"
                as="span"
                prompt={`See all work CTA. Original: "SEE ALL WORK". Return only the label.`}
                previewText="See all work"
              />
            </Link>
          </div>
        </div>
      </PartSection>

      {/* WHAT WE BUILD MEGA */}
      <PartSection partId="{%part:section-what-we-build%}" label="What We Build" className="px-4 md:px-6 py-16 border-t border-[color:var(--border)]">
        <div className="max-w-site mx-auto">
          <PartMotion partId="{%motion:mega-type%}" type="mega" trigger="inView">
            <PartText
              partId="{%part:build-mega%}"
              as="h2"
              className="font-display text-[clamp(3rem,14vw,15rem)] tracking-tightest leading-[0.85] uppercase"
              prompt={`Mega section title. Original: "WHAT WE BUILD". Return only the title.`}
              previewText="What we build"
            />
          </PartMotion>
          <PartText
            partId="{%part:build-intro%}"
            as="p"
            className="mt-10 max-w-2xl text-base md:text-lg leading-relaxed text-[color:var(--muted)]"
            prompt={`Intro under what-we-build for [USER_PROJECT].
Original nuance: intersection of high-end design and technical complexity — where approach creates most value.
Chunk size: 25–40 words.
Return only the paragraph.`}
            previewText="[intersection of high-end design and technical complexity]"
          />

          <div className="mt-16 space-y-12 md:space-y-16">
            {BUILD_PILLARS.map((p) => (
              <div
                key={p.id}
                data-part={`{%part:build-pillar-${p.id}%}`}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-t border-[color:var(--border)] pt-8"
              >
                <PartText
                  partId={`{%part:build-pillar-${p.id}-n%}`}
                  as="p"
                  className="md:col-span-2 font-display text-4xl md:text-5xl tracking-tight"
                  prompt={`Index number for pillar. Original: "${p.n}". Return only the number.`}
                  previewText={p.n}
                />
                <div className="md:col-span-10">
                  <PartText
                    partId={`{%part:build-pillar-${p.id}-title%}`}
                    as="h3"
                    className="text-xl md:text-2xl uppercase tracking-tight font-medium"
                    prompt={`Pillar title for ${p.title}. Chunk size: 3–7 words. Return only the title.`}
                    previewText={p.title}
                  />
                  <PartText
                    partId={`{%part:build-pillar-${p.id}-blurb%}`}
                    as="p"
                    className="mt-3 max-w-2xl text-sm md:text-base text-[color:var(--muted)] leading-relaxed"
                    prompt={`Pillar blurb for ${p.title} at [USER_PROJECT].
Chunk size: 25–45 words.
Tone: senior product studio.
Return only the blurb.`}
                    previewText={p.blurb}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </PartSection>

      {/* SERVICES TEASER */}
      <PartSection partId="{%part:section-services-teaser%}" label="Services Teaser" className="px-4 md:px-6 py-20 md:py-28 bg-[color:var(--panel)]">
        <div className="max-w-site mx-auto">
          <PartMotion partId="{%motion:services-heading%}" type="split" trigger="inView">
            <PartText
              partId="{%part:services-heading%}"
              as="h2"
              className="font-display text-[clamp(2.5rem,8vw,6rem)] tracking-tightest uppercase leading-[0.9]"
              prompt={`Services teaser title. Original: "OUR SERVICES". Return only the title.`}
              previewText="Our services"
            />
          </PartMotion>
          <PartText
            partId="{%part:services-intro%}"
            as="p"
            className="mt-6 max-w-xl text-sm md:text-base text-[color:var(--muted)]"
            prompt={`Services teaser intro. Original: from strategy to deployment; full-scope or targeted expertise.
Chunk size: 20–35 words.
Return only the paragraph.`}
            previewText="From strategy to deployment — full-scope delivery or targeted expertise."
          />
          <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {SERVICES.map((s, i) => (
              <li key={s} className="flex gap-4 border-t border-[color:var(--border)] pt-4">
                <span className="text-sm text-[color:var(--muted)] tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <PartText
                  partId={`{%part:service-item-${i + 1}%}`}
                  as="span"
                  className="text-base md:text-lg"
                  prompt={`Service list item. Original: "${s}". Return only the service name.`}
                  previewText={s}
                />
              </li>
            ))}
          </ol>
          <Link href="/services" className="inline-block mt-12 text-sm uppercase tracking-label border-b border-[color:var(--fg)] pb-1 hover:opacity-60 transition">
            <PartText
              partId="{%part:services-explore%}"
              as="span"
              prompt={`Explore services CTA. Original: "Explore Services". Return only the label.`}
              previewText="Explore services →"
            />
          </Link>
        </div>
      </PartSection>

      {/* EDGE */}
      <PartSection partId="{%part:section-edge%}" label="Our Edge" className="px-4 md:px-6 py-20 md:py-28">
        <div className="max-w-site mx-auto">
          <PartMotion partId="{%motion:edge-heading%}" type="mega" trigger="inView">
            <PartText
              partId="{%part:edge-heading%}"
              as="h2"
              className="font-display text-[clamp(2.5rem,8vw,6rem)] tracking-tightest uppercase"
              prompt={`Edge section title. Original: "OUR EDGE". Return only the title.`}
              previewText="Our edge"
            />
          </PartMotion>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {EDGE.map((e) => (
              <div key={e.id} data-part={`{%part:edge-${e.id}%}`} className="border-t border-[color:var(--border)] pt-6">
                <PartText
                  partId={`{%part:edge-${e.id}-title%}`}
                  as="h3"
                  className="text-lg md:text-xl uppercase tracking-tight font-medium"
                  prompt={`Edge card title. Original: "${e.title}". Return only the title.`}
                  previewText={e.title}
                />
                <PartText
                  partId={`{%part:edge-${e.id}-body%}`}
                  as="p"
                  className="mt-3 text-sm md:text-base text-[color:var(--muted)] leading-relaxed"
                  prompt={`Edge card body for "${e.title}" at [USER_PROJECT]. Chunk size: 20–40 words. Return only the body.`}
                  previewText={e.body}
                />
              </div>
            ))}
          </div>
        </div>
      </PartSection>

      {/* STATS */}
      <PartSection partId="{%part:section-stats%}" label="Studio Stats" className="px-4 md:px-6 py-20 md:py-28 border-t border-[color:var(--border)]">
        <div className="max-w-site mx-auto">
          <PartText
            partId="{%part:stats-heading%}"
            as="h2"
            className="font-display text-[clamp(2rem,6vw,4rem)] tracking-tightest uppercase mb-12"
            prompt={`Stats section title. Original: "SENIOR-LED STUDIO". Return only the title.`}
            previewText="Senior-led studio"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: "11+", l: "years in digital design & development" },
              { n: "20+", l: "inhouse experts" },
              { n: "150+", l: "projects delivered" },
              { n: "3", l: "continents covered" },
            ].map((s, i) => (
              <div key={i} data-part={`{%part:stat-${i + 1}%}`}>
                <PartText
                  partId={`{%part:stat-${i + 1}-n%}`}
                  as="p"
                  className="font-display text-5xl md:text-6xl tracking-tight"
                  prompt={`Stat number ${i + 1}. Original: "${s.n}". Return only the number string.`}
                  previewText={s.n}
                />
                <PartText
                  partId={`{%part:stat-${i + 1}-label%}`}
                  as="p"
                  className="mt-2 text-sm text-[color:var(--muted)]"
                  prompt={`Stat label ${i + 1}. Original: "${s.l}". Return only the label.`}
                  previewText={s.l}
                />
              </div>
            ))}
          </div>
        </div>
      </PartSection>

      {/* FAQ */}
      <PartSection partId="{%part:section-faq%}" label="FAQ" className="px-4 md:px-6 py-20 md:py-28 border-t border-[color:var(--border)]">
        <div className="max-w-site mx-auto">
          <PartText
            partId="{%part:faq-heading%}"
            as="h2"
            className="font-display text-[clamp(2.5rem,8vw,6rem)] tracking-tightest uppercase mb-12"
            prompt={`FAQ title. Original: "FAQ". Return only the title.`}
            previewText="FAQ"
          />
          <div className="divide-y divide-[color:var(--border)] max-w-3xl">
            {FAQ.map((i) => (
              <details key={i} data-part={`{%part:faq-${i}%}`} className="group py-5">
                <summary className="cursor-pointer list-none flex justify-between gap-4">
                  <PartText
                    partId={`{%part:faq-${i}-q%}`}
                    as="span"
                    className="text-base md:text-lg"
                    prompt={`FAQ question ${i} for a digital product studio.
Topics: fit, stack, engagement models, timelines, Web3/gaming.
Chunk size: 8–16 words.
Return only the question.`}
                    previewText={`[faq question ${i}]`}
                  />
                  <span className="text-[color:var(--muted)] group-open:rotate-45 transition">+</span>
                </summary>
                <PartText
                  partId={`{%part:faq-${i}-a%}`}
                  as="p"
                  className="mt-3 text-sm md:text-base text-[color:var(--muted)] leading-relaxed"
                  prompt={`FAQ answer ${i} for [USER_PROJECT]. Chunk size: 40–80 words. Tone: senior, clear. Return only the answer.`}
                  previewText={`[faq answer ${i}]`}
                />
              </details>
            ))}
          </div>
        </div>
      </PartSection>

      <PartFooter />
    </main>
  );
}
