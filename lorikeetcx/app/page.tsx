import Link from "next/link";
import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartMotion } from "@/components/parts/PartMotion";
import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";

const STATUS_CHIPS = [
  "Payroll plan upgraded",
  "Insurance policy updated",
  "Rent payment processed",
  "Medication express shipped",
  "Flight rescheduled",
] as const;

const METRICS = [
  { n: "97%", label: "Faster resolution" },
  { n: "60%", label: "Uplift in conversion" },
  { n: "99%", label: "Accuracy" },
] as const;

const NODES = [
  "Workflow matching",
  "getRecentTransactions",
  "Triage ticket",
  "Gather / Get Status",
  "Execute action",
  "Resolve + notify",
] as const;

const TICKETS = [
  { ch: "Chat", q: "Cancel my subscription" },
  { ch: "Chat", q: "I'd like to schedule an appointment" },
  { ch: "Voice", q: "I'm running into an issue with my account" },
  { ch: "Email", q: "I was charged twice" },
  { ch: "SMS", q: "I can't make my repayment" },
] as const;

export default function HomePage() {
  return (
    <main>
      <PartNav />

      {/* HERO */}
      <PartSection
        partId="{%part:section-hero%}"
        label="Hero"
        className="relative pt-28 md:pt-36 pb-20 md:pb-28 px-4 md:px-6 overflow-hidden"
      >
        <div className="max-w-site mx-auto relative z-10 text-center">
          <PartMotion partId="{%motion:hero-title%}" type="fade" trigger="load">
            <PartText
              partId="{%part:hero-title%}"
              as="h1"
              className="font-display text-[length:var(--hero)] tracking-tightest leading-[1.02] max-w-4xl mx-auto"
              prompt={`Write homepage H1 for [USER_PROJECT] AI customer concierge / complex support product.
Original nuance: "The AI Customer Concierge for complex companies" — category + audience.
Chunk size: 8–14 words.
Tone: confident B2B product, not chatbot hype.
Return only the headline.`}
              previewText="The AI Customer Concierge for complex companies"
            />
          </PartMotion>
          <PartText
            partId="{%part:hero-sub%}"
            as="p"
            className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
            prompt={`Hero subcopy for [USER_PROJECT].
Original nuance: highest CX standards; solve complicated support cases in complex industries 24/7 all channels.
Chunk size: 25–40 words.
Return only the paragraph.`}
            previewText="Solve the most complicated support cases in complex industries — 24/7, across every channel."
          />
          <div className="mt-8 flex justify-center">
            <Link href="/get-a-demo" className="inline-flex bg-ink text-paper text-sm px-5 py-3 rounded-full hover:bg-accent transition">
              <PartText partId="{%part:hero-cta%}" as="span" prompt={`Hero CTA. Original: "Get a demo". Return only the label.`} previewText="Get a demo" />
            </Link>
          </div>
        </div>

        {/* Scroll-linked status chips */}
        <div
          data-part="{%motion:status-chips%}"
          className="relative max-w-wide mx-auto mt-16 md:mt-20 h-[220px] md:h-[280px]"
        >
          {STATUS_CHIPS.map((chip, i) => (
            <PartMotion
              key={chip}
              partId={`{%motion:status-chip-${i + 1}%}`}
              type="chips"
              className="absolute"
              // spread chips across hero stage
            >
              <div
                className="rounded-full border border-line bg-paper shadow-sm px-4 py-2 text-sm whitespace-nowrap animate-floaty"
                style={{
                  left: `${8 + (i % 5) * 18}%`,
                  top: `${12 + (i % 3) * 28}%`,
                  animationDelay: `${i * 0.35}s`,
                }}
              >
                <span className="inline-block w-2 h-2 rounded-full bg-success mr-2 align-middle" />
                <PartText
                  partId={`{%part:status-chip-${i + 1}%}`}
                  as="span"
                  prompt={`Floating status chip ${i + 1} for complex CX product UI mock.
Original examples: payroll upgraded, insurance updated, rent processed, medication shipped, flight rescheduled.
Chunk size: 2–4 words, past-tense completed action.
Avoid original client-specific claims.
Return only the chip text.`}
                  previewText={chip}
                />
              </div>
            </PartMotion>
          ))}
          <div
            data-part="{%motion:webgl-hero%}"
            className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-accentSoft/60 to-transparent"
            aria-hidden
          />
        </div>
      </PartSection>

      {/* PROOF */}
      <PartSection partId="{%part:section-proof%}" label="Proof" className="px-4 md:px-6 py-16 md:py-24 border-t border-line">
        <div className="max-w-site mx-auto">
          <PartMotion partId="{%motion:proof-heading%}" type="fade" trigger="inView">
            <PartText
              partId="{%part:proof-heading%}"
              as="h2"
              className="font-display text-[length:var(--h2)] tracking-tightest max-w-3xl"
              prompt={`Proof section H2. Original: "Proof, not promises". Return only the heading.`}
              previewText="Proof, not promises"
            />
          </PartMotion>
          <PartText
            partId="{%part:proof-body%}"
            as="p"
            className="mt-5 text-lg text-muted max-w-2xl leading-relaxed"
            prompt={`Proof section body for [USER_PROJECT].
Original nuance: where other agents deflect, product leans in on high-stakes problems with precision.
Chunk size: 18–30 words.
Return only the paragraph.`}
            previewText="Where other agents deflect, we lean in — handling high-stakes problems with precision."
          />
        </div>
      </PartSection>

      {/* METRICS */}
      <PartSection partId="{%part:section-metrics%}" label="Metrics" className="px-4 md:px-6 pb-20">
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-3 gap-6" data-part="{%motion:metric-reveal%}">
          {METRICS.map((m, i) => (
            <PartMotion key={m.n} partId={`{%motion:metric-${i + 1}%}`} type="metric" trigger="inView">
              <div data-part={`{%part:metric-${i + 1}%}`} className="rounded-3xl border border-line bg-soft p-8 md:p-10">
                <PartText
                  partId={`{%part:metric-${i + 1}-n%}`}
                  as="p"
                  className="font-display text-[length:var(--hero)] tracking-tightest leading-none"
                  prompt={`Big metric number ${i + 1}. Original style: 97%, 60%, 99%. Return only the number string.`}
                  previewText={m.n}
                />
                <PartText
                  partId={`{%part:metric-${i + 1}-label%}`}
                  as="p"
                  className="mt-3 text-sm text-muted"
                  prompt={`Metric label for ${m.label}. Chunk size: 2–4 words. Return only the label.`}
                  previewText={m.label}
                />
                <PartText
                  partId={`{%part:metric-${i + 1}-attr%}`}
                  as="p"
                  className="mt-6 text-sm"
                  prompt={`Fictional attribution name + role for metric ${i + 1}. Return "Name · Role".`}
                  previewText="[name · role]"
                />
              </div>
            </PartMotion>
          ))}
        </div>
      </PartSection>

      {/* COMPARE / DEFLECT */}
      <PartSection partId="{%part:section-compare%}" label="Compare" className="px-4 md:px-6 py-16 md:py-24 bg-ink text-paper">
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <PartText
              partId="{%part:compare-bad%}"
              as="p"
              className="text-lg md:text-xl leading-relaxed text-paper/70"
              prompt={`Anti-pattern copy: generic bots that know articles not answers; stall, deflect, vanish.
Chunk size: 18–28 words.
Return only the paragraph.`}
              previewText="They know the articles. Not the answers. When things go sideways, they stall, deflect, or vanish."
            />
          </div>
          <div className="rounded-2xl bg-paper/10 border border-paper/15 p-6 space-y-3">
            <PartText
              partId="{%part:compare-sim-label%}"
              as="p"
              className="text-xs uppercase tracking-label text-paper/50"
              prompt={`Sim panel label e.g. "Customer has left the conversation". Return only the label.`}
              previewText="Customer has left the conversation"
            />
            {[1, 2, 3].map((i) => (
              <PartText
                key={i}
                partId={`{%part:compare-msg-${i}%}`}
                as="p"
                className="text-sm bg-paper/10 rounded-xl px-4 py-3"
                prompt={`Failed bot conversation line ${i} (customer frustration or bot deflection). Chunk size: 8–16 words. Return only the line.`}
                previewText={`[failed conversation line ${i}]`}
              />
            ))}
          </div>
        </div>
      </PartSection>

      {/* WORKFLOW NODES */}
      <PartSection partId="{%part:section-workflow%}" label="Workflow" className="px-4 md:px-6 py-20 md:py-28">
        <div className="max-w-site mx-auto">
          <PartText
            partId="{%part:workflow-heading%}"
            as="h2"
            className="font-display text-[length:var(--h2)] tracking-tightest max-w-3xl"
            prompt={`Workflow section heading for agent tool-calling / resolution pipeline.
Chunk size: 4–10 words.
Return only the heading.`}
            previewText="Tools that finish the work"
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4" data-part="{%motion:workflow-nodes%}">
            {NODES.map((node, i) => (
              <PartMotion key={node} partId={`{%motion:node-${i + 1}%}`} type="nodes">
                <div className="rounded-2xl border border-line bg-chip px-4 py-5 text-sm font-medium shadow-sm">
                  <PartText
                    partId={`{%part:node-${i + 1}%}`}
                    as="span"
                    prompt={`Workflow node label ${i + 1}. Original examples: Workflow matching, getRecentTransactions, Triage ticket, Gather/Get Status.
Chunk size: 1–4 words / camelCase ok.
Return only the label.`}
                    previewText={node}
                  />
                </div>
              </PartMotion>
            ))}
          </div>
        </div>
      </PartSection>

      {/* TICKET STACK */}
      <PartSection partId="{%part:section-tickets%}" label="Resolved Tickets" className="px-4 md:px-6 pb-24">
        <div className="max-w-site mx-auto">
          <PartText
            partId="{%part:tickets-heading%}"
            as="h2"
            className="font-display text-[length:var(--h2)] tracking-tightest mb-10"
            prompt={`Resolved tickets section heading. Chunk size: 3–8 words. Return only the heading.`}
            previewText="Resolved across every channel"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-part="{%motion:ticket-stack%}">
            {TICKETS.map((t, i) => (
              <PartMotion key={i} partId={`{%motion:ticket-${i + 1}%}`} type="stack">
                <div className="rounded-2xl border border-line bg-paper p-5 shadow-sm">
                  <PartText
                    partId={`{%part:ticket-${i + 1}-channel%}`}
                    as="p"
                    className="text-xs uppercase tracking-label text-success mb-2"
                    prompt={`Ticket channel badge ${i + 1}: Chat/Voice/Email/SMS + "Ticket Resolved". Return only the badge.`}
                    previewText={`${t.ch} Ticket Resolved`}
                  />
                  <PartText
                    partId={`{%part:ticket-${i + 1}-quote%}`}
                    as="p"
                    className="text-sm text-muted leading-relaxed"
                    prompt={`Customer quote for resolved ticket ${i + 1}. Chunk size: 6–14 words. Return only the quote.`}
                    previewText={`“${t.q}”`}
                  />
                </div>
              </PartMotion>
            ))}
          </div>
        </div>
      </PartSection>

      {/* TESTIMONIALS */}
      <PartSection partId="{%part:section-testimonials%}" label="Testimonials" className="px-4 md:px-6 py-20 bg-soft border-y border-line">
        <div className="max-w-site mx-auto space-y-10">
          {[1, 2, 3].map((i) => (
            <blockquote key={i} data-part={`{%part:testimonial-${i}%}`} className="max-w-3xl">
              <PartMotion partId={`{%motion:testimonial-${i}%}`} type="fade" trigger="inView">
                <PartText
                  partId={`{%part:testimonial-${i}-quote%}`}
                  as="p"
                  className="text-xl md:text-2xl tracking-tight leading-snug"
                  prompt={`Testimonial ${i} for complex AI CX product. Fictional. Chunk size: 25–45 words. Outcome-focused. Return only the quote.`}
                  previewText={`[testimonial ${i}]`}
                />
                <footer className="mt-4 text-sm text-muted">
                  <PartText partId={`{%part:testimonial-${i}-name%}`} as="span" prompt={`Fictional name. Return only name.`} previewText="[name]" />
                  {" · "}
                  <PartText partId={`{%part:testimonial-${i}-role%}`} as="span" prompt={`Role · company (fictional). Return only.`} previewText="[role · org]" />
                </footer>
              </PartMotion>
            </blockquote>
          ))}
        </div>
      </PartSection>

      {/* CTA */}
      <PartSection partId="{%part:section-cta%}" label="CTA" className="px-4 md:px-6 py-20 md:py-28 text-center">
        <div className="max-w-site mx-auto">
          <PartText
            partId="{%part:cta-heading%}"
            as="h2"
            className="font-display text-[length:var(--h2)] tracking-tightest"
            prompt={`Bottom CTA heading. Original energy: ready to learn more / see if fit.
Chunk size: 3–8 words.
Return only the heading.`}
            previewText="Ready to learn more?"
          />
          <PartText
            partId="{%part:cta-body%}"
            as="p"
            className="mt-4 text-muted max-w-xl mx-auto"
            prompt={`CTA body. Discuss use case / fit for complex support. Chunk size: 15–25 words. Return only.`}
            previewText="Talk through your use case and see if the platform fits your complexity."
          />
          <Link href="/get-a-demo" className="inline-flex mt-8 bg-ink text-paper text-sm px-6 py-3 rounded-full hover:bg-accent transition">
            <PartText partId="{%part:cta-button%}" as="span" prompt={`CTA button. Original: Book a demo / Get a demo. Return only.`} previewText="Book a demo" />
          </Link>
        </div>
      </PartSection>

      <PartFooter />
    </main>
  );
}
