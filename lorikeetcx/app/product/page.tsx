import Link from "next/link";
import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartMotion } from "@/components/parts/PartMotion";
import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";

const CHANNELS = [
  {
    id: "email",
    title: "Email",
    points: [
      "Parse complex requests with full context awareness",
      "Draft responses that match brand voice and tone",
      "Handle attachments, threads, and forwarded chains",
    ],
  },
  {
    id: "chat",
    title: "Chat",
    points: [
      "Respond instantly without sacrificing accuracy",
      "Maintain conversation flow across session breaks",
      "Escalate seamlessly when human touch is needed",
    ],
  },
  {
    id: "voice",
    title: "Voice",
    points: [
      "Listen actively to understand intent before acting",
      "Handle interruptions, corrections, and callbacks gracefully",
      "Execute actions mid-call without awkward pauses",
    ],
  },
  {
    id: "sms",
    title: "SMS",
    points: [
      "Deliver clear answers within character constraints",
      "Send proactive updates and confirmations",
      "Meet customers on their most personal channel",
    ],
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    points: [
      "Support media, documents, and structured responses",
      "Continue conversations across days and devices",
      "Serve customers in 180+ countries natively",
    ],
  },
] as const;

export default function ProductPage() {
  return (
    <main>
      <PartNav />
      <PartSection partId="{%part:section-product-hero%}" label="Product Hero" className="pt-28 md:pt-36 px-4 md:px-6 pb-16">
        <div className="max-w-site mx-auto">
          <PartMotion partId="{%motion:product-hero%}" type="fade" trigger="load">
            <PartText
              partId="{%part:product-hero-title%}"
              as="h1"
              className="font-display text-[length:var(--hero)] tracking-tightest max-w-4xl leading-[1.02]"
              prompt={`Product page H1. Original: "Concierge Agent for customer care". Chunk size: 5–10 words. Return only.`}
              previewText="Concierge Agent for customer care"
            />
          </PartMotion>
          <PartText
            partId="{%part:product-hero-sub%}"
            as="p"
            className="mt-6 text-lg text-muted max-w-2xl"
            prompt={`Product hero sub: omnichannel, full context, compliance guardrails. Chunk size: 18–30 words. Return only.`}
            previewText="Build experiences with full customer context and compliance guardrails across every channel."
          />
          <Link href="/get-a-demo" className="inline-flex mt-8 bg-ink text-paper text-sm px-5 py-3 rounded-full">
            <PartText partId="{%part:product-hero-cta%}" as="span" prompt={`CTA. Get a demo. Return only.`} previewText="Get a demo" />
          </Link>
        </div>
      </PartSection>

      <PartSection partId="{%part:section-omnichannel%}" label="Omnichannel" className="px-4 md:px-6 py-16 md:py-24 border-t border-line">
        <div className="max-w-site mx-auto">
          <PartText
            partId="{%part:omni-heading%}"
            as="h2"
            className="font-display text-[length:var(--h2)] tracking-tightest max-w-3xl"
            prompt={`Omnichannel H2. Original: "Omnichannel support. Seamlessly delivered." Return only.`}
            previewText="Omnichannel support. Seamlessly delivered."
          />
          <div className="mt-14 space-y-12">
            {CHANNELS.map((ch) => (
              <div key={ch.id} data-part={`{%part:channel-${ch.id}%}`} className="grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-line pt-8">
                <PartText
                  partId={`{%part:channel-${ch.id}-title%}`}
                  as="h3"
                  className="md:col-span-3 font-display text-3xl md:text-4xl tracking-tight"
                  prompt={`Channel title: ${ch.title}. Return only.`}
                  previewText={ch.title}
                />
                <ul className="md:col-span-9 space-y-3">
                  {ch.points.map((pt, i) => (
                    <li key={i}>
                      <PartText
                        partId={`{%part:channel-${ch.id}-pt-${i + 1}%}`}
                        as="p"
                        className="text-base text-muted"
                        prompt={`Capability under ${ch.title}: "${pt}". Return only the line.`}
                        previewText={pt}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PartSection>

      <PartSection partId="{%part:section-coach-teaser%}" label="Coach Teaser" className="px-4 md:px-6 py-20 bg-soft border-y border-line">
        <div className="max-w-site mx-auto max-w-3xl">
          <PartText
            partId="{%part:coach-teaser-title%}"
            as="h2"
            className="font-display text-3xl md:text-4xl tracking-tight"
            prompt={`Coach teaser title. Original: "Coach Agent for continuous improvement". Return only.`}
            previewText="Coach Agent for continuous improvement"
          />
          <PartText
            partId="{%part:coach-teaser-body%}"
            as="p"
            className="mt-4 text-muted leading-relaxed"
            prompt={`Coach teaser body: measure 100% of tickets not just CSAT sample; improve human+AI. Chunk size: 30–50 words. Return only.`}
            previewText="Measure what matters across 100% of tickets — not just the 2–5% that answer CSAT surveys."
          />
          <Link href="/product/coach" className="inline-flex mt-6 text-sm text-accent hover:underline">
            <PartText partId="{%part:coach-teaser-link%}" as="span" prompt={`Link. Discover more. Return only.`} previewText="Discover more →" />
          </Link>
        </div>
      </PartSection>

      <PartSection partId="{%part:section-product-quotes%}" label="Quotes" className="px-4 md:px-6 py-20">
        <div className="max-w-site mx-auto space-y-12">
          {[1, 2, 3].map((i) => (
            <blockquote key={i} className="max-w-3xl border-l-2 border-accent pl-6">
              <PartText
                partId={`{%part:product-quote-${i}%}`}
                as="p"
                className="text-xl md:text-2xl tracking-tight leading-snug"
                prompt={`Product page quote ${i}. POC/head-to-head winner energy. Fictional. Chunk size: 20–40 words. Return only.`}
                previewText={`[product quote ${i}]`}
              />
              <footer className="mt-3 text-sm text-muted">
                <PartText partId={`{%part:product-quote-${i}-attr%}`} as="span" prompt={`Name · role · org fictional. Return only.`} previewText="[name · role · org]" />
              </footer>
            </blockquote>
          ))}
        </div>
      </PartSection>
      <PartFooter />
    </main>
  );
}
