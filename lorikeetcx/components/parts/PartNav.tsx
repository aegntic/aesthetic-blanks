"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { PartText } from "./PartText";
import clsx from "clsx";

const NAV = [
  {
    id: "product",
    label: "Product",
    items: [
      { href: "/product", label: "Concierge Agent" },
      { href: "/product/coach", label: "Coach Agent" },
    ],
  },
  {
    id: "customers",
    label: "Customers",
    items: [{ href: "/customer-stories", label: "Customer Stories" }],
  },
  {
    id: "company",
    label: "Company",
    items: [
      { href: "/about", label: "About" },
      { href: "/faq", label: "FAQ" },
      { href: "/integrations", label: "Integrations" },
    ],
  },
] as const;

export function PartNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        data-part="{%part:nav-primary%}"
        data-motion="{%motion:sticky-nav%}"
        className={clsx(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled ? "bg-paper/90 backdrop-blur border-b border-line" : "bg-transparent",
        )}
      >
        <div className="max-w-wide mx-auto px-4 md:px-6 h-16 md:h-[72px] flex items-center justify-between gap-4">
          <Link href="/" className="font-medium tracking-tight" onClick={() => setOpen(false)}>
            <PartText
              partId="{%part:nav-logo%}"
              as="span"
              className="text-base"
              prompt={`Write product wordmark for [USER_PROJECT] AI CX platform.
Original nuance: short single-word or compound product name.
Chunk size: 1–2 words.
Return only the mark.`}
              previewText="Concierge"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-sm text-muted">
            <Link href="/product" className="hover:text-ink transition">
              <PartText partId="{%part:nav-product%}" as="span" prompt={`Nav: Product. Return only the label.`} previewText="Product" />
            </Link>
            <Link href="/customer-stories" className="hover:text-ink transition">
              <PartText partId="{%part:nav-customers%}" as="span" prompt={`Nav: Customers. Return only the label.`} previewText="Customers" />
            </Link>
            <Link href="/pricing" className="hover:text-ink transition">
              <PartText partId="{%part:nav-pricing%}" as="span" prompt={`Nav: Pricing. Return only the label.`} previewText="Pricing" />
            </Link>
            <Link href="/integrations" className="hover:text-ink transition">
              <PartText partId="{%part:nav-integrations%}" as="span" prompt={`Nav: Integrations. Return only the label.`} previewText="Integrations" />
            </Link>
            <Link href="/about" className="hover:text-ink transition">
              <PartText partId="{%part:nav-company%}" as="span" prompt={`Nav: Company/About. Return only the label.`} previewText="Company" />
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/get-a-demo"
              className="hidden sm:inline-flex text-sm bg-ink text-paper px-4 py-2 rounded-full hover:bg-accent transition"
            >
              <PartText
                partId="{%part:nav-cta%}"
                as="span"
                prompt={`Primary nav CTA. Original: "Get a demo". Return only the label.`}
                previewText="Get a demo"
              />
            </Link>
            <button type="button" className="lg:hidden text-sm" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      <div
        data-part="{%part:nav-menu%}"
        className={clsx(
          "fixed inset-0 z-40 bg-paper pt-24 px-6 transition-opacity lg:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="space-y-8">
          {NAV.map((g) => (
            <div key={g.id}>
              <p className="text-xs uppercase tracking-label text-muted mb-3">{g.label}</p>
              <ul className="space-y-3">
                {g.items.map((it) => (
                  <li key={it.href}>
                    <Link href={it.href} onClick={() => setOpen(false)} className="text-2xl tracking-tight">
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link href="/pricing" onClick={() => setOpen(false)} className="block text-2xl">
            Pricing
          </Link>
          <Link href="/get-a-demo" onClick={() => setOpen(false)} className="inline-flex bg-ink text-paper px-5 py-3 rounded-full">
            Get a demo
          </Link>
        </div>
      </div>
    </>
  );
}
