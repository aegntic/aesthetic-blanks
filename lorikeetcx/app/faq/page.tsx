import Link from "next/link";
import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";

const FAQ = [1, 2, 3, 4, 5, 6, 7, 8] as const;

export default function FaqPage() {
  return (
    <main>
      <PartNav />
      <PartSection partId="{%part:section-faq-hero%}" label="FAQ Hero" className="pt-28 md:pt-36 px-4 md:px-6 pb-10">
        <div className="max-w-site mx-auto max-w-3xl">
          <PartText partId="{%part:faq-kicker%}" as="p" className="text-sm text-muted mb-3" prompt={`FAQ kicker. Original: practical guide for support leaders. Return only.`} previewText="A practical guide for support leaders evaluating AI automation" />
          <PartText partId="{%part:faq-title%}" as="h1" className="font-display text-[length:var(--h2)] tracking-tightest" prompt={`FAQ title. Return only.`} previewText="FAQ" />
        </div>
      </PartSection>

      <PartSection partId="{%part:section-faq-list%}" label="FAQ List" className="px-4 md:px-6 pb-16">
        <div className="max-w-site mx-auto max-w-3xl divide-y divide-line">
          {FAQ.map((i) => (
            <details key={i} data-part={`{%part:faq-${i}%}`} className="group py-5">
              <summary className="cursor-pointer list-none flex justify-between gap-4">
                <PartText
                  partId={`{%part:faq-${i}-q%}`}
                  as="span"
                  className="text-lg tracking-tight"
                  prompt={`FAQ Q${i} for complex AI CX platform (accuracy, channels, compliance, pricing model, integrations, human handoff). Chunk size: 8–16 words. Return only.`}
                  previewText={`[faq question ${i}]`}
                />
                <span className="text-muted group-open:rotate-45 transition">+</span>
              </summary>
              <PartText
                partId={`{%part:faq-${i}-a%}`}
                as="p"
                className="mt-3 text-muted leading-relaxed"
                prompt={`FAQ A${i}. Chunk size: 40–80 words. Senior, practical. Return only.`}
                previewText={`[faq answer ${i}]`}
              />
            </details>
          ))}
        </div>
      </PartSection>

      <PartSection partId="{%part:section-faq-cta%}" label="FAQ CTA" className="px-4 md:px-6 py-20 bg-soft border-t border-line text-center">
        <PartText partId="{%part:faq-cta-title%}" as="h2" className="font-display text-[length:var(--h2)] tracking-tightest" prompt={`CTA H2. Original: "Ready to learn more?". Return only.`} previewText="Ready to learn more?" />
        <PartText partId="{%part:faq-cta-body%}" as="p" className="mt-4 text-muted max-w-xl mx-auto" prompt={`CTA body for complex support fit. Chunk size: 15–25 words. Return only.`} previewText="Discuss your use case and explore whether the platform fits." />
        <Link href="/get-a-demo" className="inline-flex mt-8 bg-ink text-paper text-sm px-6 py-3 rounded-full">
          <PartText partId="{%part:faq-cta-btn%}" as="span" prompt={`Button. Book a demo. Return only.`} previewText="Book a demo" />
        </Link>
      </PartSection>
      <PartFooter />
    </main>
  );
}
