"use client";
import Link from "next/link";
import { PartText } from "./PartText";

export function PartFooter() {
  return (
    <footer data-part="{%part:section-footer%}" className="border-t border-line bg-soft">
      <div className="max-w-wide mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <PartText
              partId="{%part:footer-logo%}"
              as="p"
              className="font-medium text-lg mb-3"
              prompt={`Footer wordmark for [USER_PROJECT]. Return only the mark.`}
              previewText="Concierge"
            />
            <PartText
              partId="{%part:footer-tagline%}"
              as="p"
              className="text-sm text-muted max-w-xs leading-relaxed"
              prompt={`Footer tagline for AI CX / concierge product.
Original nuance: universal concierge for complex support, 24/7 all channels.
Chunk size: 12–20 words.
Return only the tagline.`}
              previewText="AI customer concierge for complex support, 24/7 across every channel."
            />
          </div>
          {[
            {
              id: "product",
              title: "Product",
              links: [
                { href: "/product", label: "Concierge" },
                { href: "/product/coach", label: "Coach" },
                { href: "/integrations", label: "Integrations" },
                { href: "/pricing", label: "Pricing" },
              ],
            },
            {
              id: "company",
              title: "Company",
              links: [
                { href: "/about", label: "About" },
                { href: "/customer-stories", label: "Customers" },
                { href: "/faq", label: "FAQ" },
                { href: "/get-a-demo", label: "Get a demo" },
              ],
            },
            {
              id: "legal",
              title: "Legal",
              links: [
                { href: "#", label: "Privacy" },
                { href: "#", label: "Terms" },
              ],
            },
          ].map((col) => (
            <div key={col.id}>
              <PartText
                partId={`{%part:footer-col-${col.id}%}`}
                as="p"
                className="text-xs uppercase tracking-label text-muted mb-4"
                prompt={`Footer column title: ${col.title}. Return only the title.`}
                previewText={col.title}
              />
              <ul className="space-y-2 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-accent transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-6 border-t border-line flex flex-col md:flex-row justify-between gap-3 text-xs text-muted">
          <PartText
            partId="{%part:footer-credit%}"
            as="p"
            prompt={`Footer credit with year for [USER_PROJECT]. Return only the line.`}
            previewText="© [year] [product]"
          />
          <PartText
            partId="{%part:footer-social%}"
            as="p"
            prompt={`Social row label e.g. LinkedIn. Return only the label.`}
            previewText="LinkedIn"
          />
        </div>
      </div>
    </footer>
  );
}
