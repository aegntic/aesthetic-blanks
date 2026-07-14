import Link from "next/link";
import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartMotion } from "@/components/parts/PartMotion";
import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";

const PLANS = [
  {
    id: "start",
    name: "Start",
    price: "1,500",
    fit: "SMBs and startups with <5,000 monthly ticket volume",
    credits: "18,000 credits per year",
  },
  {
    id: "scale",
    name: "Scale",
    price: "4,000",
    fit: "High-growth companies with 5,000–20,000 monthly ticket volume",
    credits: "Higher annual credits",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    fit: "Complex orgs with high volume and compliance needs",
    credits: "Custom commercial terms",
  },
] as const;

const CREDIT_ROWS = [
  { label: "Chat, email, SMS resolution", value: "0.95" },
  { label: "Voice resolution", value: "1.50" },
  { label: "Routing or analytics tagging, per ticket", value: "0.30" },
  { label: "Automated QA, per ticket", value: "—" },
  { label: "Per seat charges", value: "None" },
  { label: "Implementation or platform fees", value: "None" },
] as const;

export default function PricingPage() {
  return (
    <main>
      <PartNav />
      <PartSection partId="{%part:section-pricing-hero%}" label="Pricing Hero" className="pt-28 md:pt-36 px-4 md:px-6 pb-12">
        <div className="max-w-site mx-auto max-w-3xl">
          <PartMotion partId="{%motion:pricing-hero%}" type="fade" trigger="load">
            <PartText
              partId="{%part:pricing-hero-title%}"
              as="h1"
              className="font-display text-[length:var(--hero)] tracking-tightest leading-[1.05]"
              prompt={`Pricing H1. Original: "Our incentives are aligned with yours." Chunk size: 5–10 words. Return only.`}
              previewText="Our incentives are aligned with yours."
            />
          </PartMotion>
          <PartText
            partId="{%part:pricing-hero-sub%}"
            as="p"
            className="mt-5 text-lg text-muted"
            prompt={`Pricing sub: pay only for resolved tickets / outcomes. Chunk size: 12–20 words. Return only.`}
            previewText="Outcome-based pricing — pay for resolutions, not seats."
          />
        </div>
      </PartSection>

      <PartSection partId="{%part:section-plans%}" label="Plans" className="px-4 md:px-6 pb-16">
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((p) => (
            <div key={p.id} data-part={`{%part:plan-${p.id}%}`} className="rounded-3xl border border-line p-6 md:p-8 bg-paper flex flex-col">
              <PartText partId={`{%part:plan-${p.id}-name%}`} as="h2" className="text-2xl font-medium" prompt={`Plan name: ${p.name}. Return only.`} previewText={p.name} />
              <PartText partId={`{%part:plan-${p.id}-fit%}`} as="p" className="mt-3 text-sm text-muted" prompt={`Best for line: ${p.fit}. Return only.`} previewText={p.fit} />
              <div className="mt-8 flex items-baseline gap-1">
                {p.price !== "Custom" && <span className="text-2xl">$</span>}
                <PartText
                  partId={`{%part:plan-${p.id}-price%}`}
                  as="p"
                  className="font-display text-5xl tracking-tight"
                  prompt={`Plan price: ${p.price}${p.price !== "Custom" ? " /m" : ""}. Return only the price string.`}
                  previewText={p.price}
                />
                {p.price !== "Custom" && <span className="text-muted">/m</span>}
              </div>
              <PartText partId={`{%part:plan-${p.id}-billing%}`} as="p" className="text-xs text-muted mt-1" prompt={`Billing note e.g. paid annually. Return only.`} previewText="paid annually" />
              <PartText partId={`{%part:plan-${p.id}-credits%}`} as="p" className="mt-6 text-sm" prompt={`Credits line: ${p.credits}. Return only.`} previewText={p.credits} />
              <Link href="/get-a-demo" className="mt-auto pt-8 inline-flex justify-center bg-ink text-paper text-sm px-4 py-3 rounded-full hover:bg-accent transition">
                <PartText partId={`{%part:plan-${p.id}-cta%}`} as="span" prompt={`Plan CTA. Get a demo. Return only.`} previewText="Get a demo" />
              </Link>
            </div>
          ))}
        </div>
      </PartSection>

      <PartSection partId="{%part:section-credits%}" label="Credits" className="px-4 md:px-6 py-16 border-t border-line bg-soft">
        <div className="max-w-site mx-auto max-w-3xl">
          <PartText
            partId="{%part:credits-heading%}"
            as="h2"
            className="font-display text-3xl tracking-tight mb-8"
            prompt={`Credits table heading. Return only.`}
            previewText="Credits for"
          />
          <div className="divide-y divide-line rounded-2xl border border-line bg-paper">
            {CREDIT_ROWS.map((r, i) => (
              <div key={r.label} className="flex justify-between gap-4 px-5 py-4 text-sm">
                <PartText partId={`{%part:credit-row-${i + 1}-label%}`} as="span" className="text-muted" prompt={`Credit row label: ${r.label}. Return only.`} previewText={r.label} />
                <PartText partId={`{%part:credit-row-${i + 1}-value%}`} as="span" className="font-medium" prompt={`Credit value: ${r.value}. Return only.`} previewText={r.value} />
              </div>
            ))}
          </div>
        </div>
      </PartSection>
      <PartFooter />
    </main>
  );
}
