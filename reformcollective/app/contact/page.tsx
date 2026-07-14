"use client";

import { useState } from "react";
import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartMotion } from "@/components/parts/PartMotion";
import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";
import clsx from "clsx";

const SERVICES = [
  { id: "branding", label: "Branding" },
  { id: "web", label: "Web Design" },
  { id: "ux", label: "UX / Product Design" },
  { id: "dev", label: "Development" },
] as const;

const BUDGETS = [
  { id: "b1", label: "$30–50K" },
  { id: "b2", label: "$50–75K" },
  { id: "b3", label: "$100K+" },
] as const;

export default function ContactPage() {
  const [services, setServices] = useState<string[]>([]);
  const [budget, setBudget] = useState<string | null>(null);
  const [step, setStep] = useState<1 | 2>(1);

  const toggle = (id: string) =>
    setServices((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <main className="relative flex-1">
      <PartNav />

      <PartSection
        partId="{%part:section-contact-hero%}"
        label="Contact Hero"
        className="pt-28 md:pt-36 px-5 md:px-10 pb-10"
      >
        <div className="max-w-site mx-auto">
          <PartMotion partId="{%motion:contact-title%}" type="mask" trigger="load">
            <PartText
              partId="{%part:contact-title%}"
              as="h1"
              className="font-display text-[clamp(3rem,12vw,9rem)] font-thin tracking-tightest leading-[0.9]"
              prompt={`Write contact page title for [USER_PROJECT].
Original nuance: "Book a Call" — massive thin display.
Chunk size: 2–4 words.
Tone: direct invitation.
Return only the title.`}
              previewText="Book a Call"
            />
          </PartMotion>
          <PartText
            partId="{%part:contact-intro%}"
            as="p"
            className="mt-6 md:mt-8 text-base md:text-lg text-ink/70 max-w-xl"
            prompt={`Write contact intro for [USER_PROJECT].
Original nuance: "Tell us more about what you're building and how we can help."
Chunk size: 10–20 words.
Tone: warm, low-pressure.
Return only the intro.`}
            previewText="Tell us more about what you're building and how we can help."
          />
        </div>
      </PartSection>

      <PartSection
        partId="{%part:section-contact-form%}"
        label="Contact Form"
        className="px-5 md:px-10 pb-24 md:pb-32"
      >
        <div className="max-w-3xl mx-auto">
          {step === 1 ? (
            <div className="space-y-12" data-part="{%part:contact-step-1%}">
              <div>
                <PartText
                  partId="{%part:contact-services-label%}"
                  as="p"
                  className="text-sm uppercase tracking-label text-muted mb-4"
                  prompt={`Label above service multi-select. Original: select services to partner on. Return only the label.`}
                  previewText="Select the services you want to partner on"
                />
                <div className="flex flex-wrap gap-3">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => toggle(s.id)}
                      data-part={`{%part:contact-service-${s.id}%}`}
                      className={clsx(
                        "px-4 py-2 text-sm uppercase tracking-wide border transition",
                        services.includes(s.id)
                          ? "bg-ink text-paper border-ink"
                          : "border-ink/20 hover:border-ink/50",
                      )}
                    >
                      <PartText
                        partId={`{%part:contact-service-${s.id}-label%}`}
                        as="span"
                        prompt={`Service chip label: ${s.label}. Return only the label.`}
                        previewText={s.label}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <PartText
                  partId="{%part:contact-budget-label%}"
                  as="p"
                  className="text-sm uppercase tracking-label text-muted mb-4"
                  prompt={`Budget question label. Original: "What's the budget you have set aside for this project?" Return only the label.`}
                  previewText="What's the budget set aside for this project?"
                />
                <div className="flex flex-wrap gap-3">
                  {BUDGETS.map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setBudget(b.id)}
                      data-part={`{%part:contact-budget-${b.id}%}`}
                      className={clsx(
                        "px-4 py-2 text-sm uppercase tracking-wide border transition",
                        budget === b.id
                          ? "bg-ink text-paper border-ink"
                          : "border-ink/20 hover:border-ink/50",
                      )}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 bg-ink text-paper text-sm uppercase tracking-label hover:bg-accent transition"
                >
                  <PartText
                    partId="{%part:contact-next%}"
                    as="span"
                    prompt={`Next step button. Original: "ONE LAST BIT OF INFO". Return only the label.`}
                    previewText="One last bit of info"
                  />
                </button>
                <PartText
                  partId="{%part:contact-email-alt%}"
                  as="p"
                  className="text-xs text-muted max-w-sm"
                  prompt={`Alt email note. Original: don't like forms, email is ok + address.
Chunk size: 12–20 words.
Return only the note (include placeholder email).`}
                  previewText="Don't like forms? Email hello@yourstudio.com"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-6" data-part="{%part:contact-step-2%}">
              <PartText
                partId="{%part:contact-details-label%}"
                as="p"
                className="text-sm uppercase tracking-label text-muted"
                prompt={`Step 2 label. Original: "Let's grab some general info". Return only the label.`}
                previewText="Let's grab some general info"
              />
              {(["name", "company", "email", "project"] as const).map((field) => (
                <label key={field} className="block" data-part={`{%part:contact-field-${field}%}`}>
                  <PartText
                    partId={`{%part:contact-field-${field}-label%}`}
                    as="span"
                    className="text-[10px] uppercase tracking-label text-muted"
                    prompt={`Form field label for ${field}. Return only the label.`}
                    previewText={
                      field === "name"
                        ? "Your name"
                        : field === "company"
                          ? "Company name"
                          : field === "email"
                            ? "Email"
                            : "Briefly tell us about your project"
                    }
                  />
                  {field === "project" ? (
                    <textarea
                      className="mt-2 w-full border border-ink/15 bg-transparent px-4 py-3 text-base min-h-[120px] focus:outline-none focus:border-ink/40"
                      placeholder="[project brief]"
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      className="mt-2 w-full border border-ink/15 bg-transparent px-4 py-3 text-base focus:outline-none focus:border-ink/40"
                      placeholder={`[${field}]`}
                    />
                  )}
                </label>
              ))}
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  type="button"
                  className="px-6 py-3 bg-ink text-paper text-sm uppercase tracking-label hover:bg-accent transition"
                >
                  <PartText
                    partId="{%part:contact-submit%}"
                    as="span"
                    prompt={`Submit button. Original: "SUBMIT INFO". Return only the label.`}
                    previewText="Submit info"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3 text-sm uppercase tracking-label text-muted hover:text-ink transition"
                >
                  <PartText
                    partId="{%part:contact-back%}"
                    as="span"
                    prompt={`Back button. Original: "GO BACK". Return only the label.`}
                    previewText="Go back"
                  />
                </button>
              </div>
            </div>
          )}
        </div>
      </PartSection>

      <PartFooter />
    </main>
  );
}
