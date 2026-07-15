import { PartText } from "./PartText";

/** Dual edge rails — specialties left, manifesto right, Let's Create center */
export function EdgeRails() {
  return (
    <div
      data-part="{%part:edge-rails%}"
      className="mx-auto grid max-w-site grid-cols-1 items-end gap-10 px-[var(--gutter)] pb-16 md:grid-cols-[1fr_auto_1fr] md:gap-8 md:px-5"
    >
      <div className="text-[16px] leading-6 text-mist md:max-w-[13rem]">
        <PartText
          partId="{%part:rail-left-label%}"
          as="p"
          className="mb-3"
          prompt={`Left rail label above specialties.
Original nuance: "Specialize in".
Chunk size: 1–2 words.
Return only the label.`}
          previewText="Specialize in"
        />
        <PartText
          partId="{%part:rail-left-list%}"
          as="p"
          className="whitespace-pre-line text-mist"
          prompt={`Left specialty list for graphic portfolio [USER_PROJECT].
Original nuance: multi-line "Branding / Web ※ Motion / Publication".
Chunk size: 3–5 short lines.
Tone: quiet inventory.
Avoid: marketing adjectives.
Return only the list lines.`}
          previewText={"Branding\nWeb ※ Motion\nPublication"}
        />
      </div>

      <div className="justify-self-center">
        <a
          href="#bottom"
          className="text-[16px] text-ink underline-offset-4 transition hover:underline"
          data-part="{%part:cta-lets-create%}"
        >
          <PartText
            partId="{%part:cta-lets-create-text%}"
            as="span"
            prompt={`Center mid-page CTA.
Original nuance: "Let's Create".
Chunk size: 2 words.
Tone: invitation, not sales.
Return only the CTA.`}
            previewText="Let's Create"
          />
        </a>
      </div>

      <div className="text-[16px] leading-6 text-mist md:max-w-[13rem] md:justify-self-end md:text-right">
        <PartText
          partId="{%part:rail-right%}"
          as="p"
          className="whitespace-pre-line"
          prompt={`Right rail manifesto microcopy for [USER_PROJECT].
Original nuance: "Creative at heart / Love for / ※ Design / & Creativity".
Chunk size: 4 short lines.
Tone: personal, soft portfolio.
Avoid: corporate mission statements.
Return only the lines.`}
          previewText={"Creative at heart\nLove for\n※ Design\n& Creativity"}
        />
      </div>
    </div>
  );
}
