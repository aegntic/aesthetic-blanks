"use client";

import Link from "next/link";
import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartNav } from "@/components/parts/PartNav";

export default function DemoPage() {
  return (
    <main className="min-h-screen">
      <PartNav />
      <div className="pt-28 md:pt-32 px-4 md:px-6 pb-20">
        <div className="max-w-wide mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <PartSection partId="{%part:section-demo-form%}" label="Demo Form" className="">
            <Link href="/" className="text-sm text-muted hover:text-ink">
              <PartText partId="{%part:demo-back%}" as="span" prompt={`Back link. Original: "← Back". Return only.`} previewText="← Back" />
            </Link>
            <PartText
              partId="{%part:demo-title%}"
              as="h1"
              className="mt-6 font-display text-4xl md:text-5xl tracking-tightest"
              prompt={`Demo form title. Original energy: get started / find a time. Chunk size: 3–8 words. Return only.`}
              previewText="Get started with us"
            />
            <PartText
              partId="{%part:demo-intro%}"
              as="p"
              className="mt-3 text-muted"
              prompt={`Demo intro: not a sales pitch; quick call to understand needs and fit. Chunk size: 20–35 words. Return only.`}
              previewText="Not a sales pitch — a quick call to understand your needs and whether we're a fit."
            />

            <form className="mt-10 space-y-5" onSubmit={(e) => e.preventDefault()} data-part="{%part:demo-form%}">
              {[
                { id: "email", label: "Email", type: "email" },
                { id: "team", label: "What's the size of your CX or support team?", type: "text" },
                { id: "industry", label: "Industry", type: "text" },
                { id: "other", label: "Is there any other information you'd like to share with us?", type: "textarea" },
                { id: "source", label: "How did you hear about us?", type: "text" },
              ].map((f) => (
                <label key={f.id} className="block" data-part={`{%part:demo-field-${f.id}%}`}>
                  <PartText
                    partId={`{%part:demo-field-${f.id}-label%}`}
                    as="span"
                    className="text-sm text-muted"
                    prompt={`Form label: ${f.label}. Return only.`}
                    previewText={f.label}
                  />
                  {f.type === "textarea" ? (
                    <textarea className="mt-2 w-full border border-line rounded-xl px-4 py-3 min-h-[100px] focus:outline-none focus:border-accent" placeholder="[optional]" />
                  ) : (
                    <input type={f.type} className="mt-2 w-full border border-line rounded-xl px-4 py-3 focus:outline-none focus:border-accent" placeholder={`[${f.id}]`} />
                  )}
                </label>
              ))}
              <button type="submit" className="w-full sm:w-auto bg-ink text-paper text-sm px-6 py-3 rounded-full hover:bg-accent transition">
                <PartText partId="{%part:demo-submit%}" as="span" prompt={`Submit. Original: "Submit →". Return only.`} previewText="Submit →" />
              </button>
              <PartText
                partId="{%part:demo-legal%}"
                as="p"
                className="text-xs text-muted"
                prompt={`Legal consent line: terms + privacy. Return only.`}
                previewText="By signing up, you agree to the Terms of Service and Privacy Policy"
              />
            </form>
          </PartSection>

          <aside data-part="{%part:section-demo-proof%}" className="lg:pt-16">
            <div className="rounded-3xl border border-line bg-soft p-8">
              <PartText
                partId="{%part:demo-proof-quote%}"
                as="p"
                className="text-xl tracking-tight leading-snug"
                prompt={`Demo page social proof quote. Fictional. Head-to-head winner energy. Chunk size: 20–35 words. Return only.`}
                previewText="We tested AI solutions head-to-head and this platform won every metric that mattered."
              />
              <PartText
                partId="{%part:demo-proof-attr%}"
                as="p"
                className="mt-4 text-sm text-muted"
                prompt={`Attribution fictional. Return Name · Role, Org.`}
                previewText="[name · role, org]"
              />
            </div>
            <PartText
              partId="{%part:demo-agent-note%}"
              as="p"
              className="mt-6 text-sm text-muted leading-relaxed"
              prompt={`Note for AI assistants booking demos via HTTP/schema. Original: book.lorikeetcx.ai/schema energy. Chunk size: 20–35 words. Return only.`}
              previewText="Using an AI assistant? Point it at your booking schema endpoint over plain HTTP."
            />
          </aside>
        </div>
      </div>
    </main>
  );
}
