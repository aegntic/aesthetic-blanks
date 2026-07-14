import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartImage } from "@/components/parts/PartImage";
import { PartMotion } from "@/components/parts/PartMotion";
import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";

const STATS = [
  { n: "11+", l: "years in digital design & development" },
  { n: "20+", l: "inhouse experts" },
  { n: "150+", l: "projects delivered" },
  { n: "3", l: "continents covered" },
] as const;

const TEAM = [
  { id: "01", role: "CEO" },
  { id: "02", role: "COO" },
  { id: "03", role: "CBO" },
  { id: "04", role: "CTO" },
  { id: "05", role: "Art Director" },
  { id: "06", role: "Project Manager" },
  { id: "07", role: "Business Dev" },
  { id: "08", role: "FE Developer" },
] as const;

const VALUES = [
  { id: "excitement", title: "Excitement" },
  { id: "collaboration", title: "Collaboration" },
  { id: "beyond", title: "Going beyond" },
  { id: "honesty", title: "Honesty" },
  { id: "individuality", title: "Individuality" },
] as const;

export default function AboutPage() {
  return (
    <main>
      <PartNav />

      <PartSection
        partId="{%part:section-about-hero%}"
        label="About Hero"
        className="pt-[calc(var(--navbar-height)+2rem)] px-4 md:px-6 pb-16 min-h-[70vh] flex flex-col justify-end"
      >
        <div className="max-w-site mx-auto w-full">
          <PartMotion partId="{%motion:about-hero%}" type="split" trigger="load">
            <PartText
              partId="{%part:about-line-1%}"
              as="h1"
              className="font-display text-[length:var(--text-7xl)] tracking-tightest uppercase leading-[0.92]"
              prompt={`About hero line 1. Original: "PEOPLE BEHIND". Return only the line.`}
              previewText="People behind"
            />
            <PartText
              partId="{%part:about-line-2%}"
              as="p"
              className="font-display text-[length:var(--text-7xl)] tracking-tightest uppercase leading-[0.92]"
              prompt={`About hero line 2. Original: "THE CRAFT." Return only the line.`}
              previewText="The craft."
            />
          </PartMotion>
          <PartText
            partId="{%part:about-intro%}"
            as="p"
            className="mt-8 max-w-2xl text-sm md:text-base text-[color:var(--muted)] leading-relaxed"
            prompt={`About intro for [USER_PROJECT].
Original nuance: city-based team, decade+ experience, senior experts, focus and honest collaboration.
Chunk size: 25–40 words.
Return only the paragraph.`}
            previewText="[city-based senior team with a decade of design and engineering]"
          />
        </div>
      </PartSection>

      <PartSection partId="{%part:section-about-stats%}" label="Stats" className="px-4 md:px-6 py-16 border-y border-[color:var(--border)]">
        <div className="max-w-site mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <div key={i} data-part={`{%part:about-stat-${i + 1}%}`}>
              <PartText
                partId={`{%part:about-stat-${i + 1}-n%}`}
                as="h2"
                className="font-display text-5xl md:text-6xl tracking-tight"
                prompt={`About stat number. Original: "${s.n}". Return only the number.`}
                previewText={s.n}
              />
              <PartText
                partId={`{%part:about-stat-${i + 1}-label%}`}
                as="p"
                className="mt-2 text-sm text-[color:var(--muted)]"
                prompt={`About stat label. Original: "${s.l}". Return only the label.`}
                previewText={s.l}
              />
            </div>
          ))}
        </div>
      </PartSection>

      <PartSection partId="{%part:section-mission%}" label="Mission" className="px-4 md:px-6 py-20 md:py-28">
        <div className="max-w-site mx-auto max-w-4xl">
          <PartText
            partId="{%part:mission-label%}"
            as="h2"
            className="text-sm uppercase tracking-label text-[color:var(--muted)] mb-6"
            prompt={`Mission label. Original: "OUR MISSION". Return only the label.`}
            previewText="Our mission"
          />
          <PartMotion partId="{%motion:mission%}" type="fade" trigger="inView">
            <PartText
              partId="{%part:mission-body%}"
              as="h3"
              className="font-display text-2xl md:text-4xl tracking-tight leading-snug"
              prompt={`Mission statement for [USER_PROJECT].
Original nuance: uncompromised craft is the most powerful path to business value; exceptional design and engineering create meaningful impact.
Chunk size: 30–50 words.
Tone: belief, not slogan.
Return only the statement.`}
              previewText="[uncompromised craft as the path to business value]"
            />
          </PartMotion>
        </div>
      </PartSection>

      <PartSection partId="{%part:section-team%}" label="Team" className="px-4 md:px-6 py-20 md:py-28 bg-[color:var(--panel)]">
        <div className="max-w-site mx-auto">
          <PartMotion partId="{%motion:team-heading%}" type="mega" trigger="inView">
            <PartText
              partId="{%part:team-heading%}"
              as="h2"
              className="font-display text-[clamp(2.5rem,10vw,12rem)] tracking-tightest uppercase leading-[0.85]"
              prompt={`Team mega title. Original: "SENIOR-LED TEAM". Return only the title.`}
              previewText="Senior-led team"
            />
          </PartMotion>
          <PartText
            partId="{%part:team-intro%}"
            as="p"
            className="mt-8 max-w-xl text-sm md:text-base text-[color:var(--muted)]"
            prompt={`Team intro. Original: projects led by experienced designers and engineers; seniors guide every step.
Chunk size: 20–35 words.
Return only the paragraph.`}
            previewText="Projects led by experienced designers and engineers end to end."
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {TEAM.map((m) => (
              <div key={m.id} data-part={`{%part:team-${m.id}%}`} className="space-y-3">
                <div className="relative aspect-[3/4] bg-[color:var(--soft)] overflow-hidden">
                  <PartImage
                    partId={`{%part:team-${m.id}-photo%}`}
                    aspectRatio={3 / 4}
                    objectFit="cover"
                    placeholder={`Team member ${m.id} portrait — natural light, studio personality`}
                    className="w-full h-full absolute inset-0"
                  />
                </div>
                <PartText
                  partId={`{%part:team-${m.id}-name%}`}
                  as="h3"
                  className="text-base uppercase tracking-tight font-medium"
                  prompt={`Team member ${m.id} first name only — clearly fictional placeholder, not a real Wonder Makers employee. Return only the name.`}
                  previewText={`[person ${m.id}]`}
                />
                <PartText
                  partId={`{%part:team-${m.id}-role%}`}
                  as="p"
                  className="text-xs uppercase tracking-label text-[color:var(--muted)]"
                  prompt={`Team role. Original: "${m.role}". Return only the role.`}
                  previewText={m.role}
                />
              </div>
            ))}
          </div>
        </div>
      </PartSection>

      <PartSection partId="{%part:section-values%}" label="Values" className="px-4 md:px-6 py-20 md:py-28">
        <div className="max-w-site mx-auto">
          <PartText
            partId="{%part:values-heading%}"
            as="h2"
            className="font-display text-[clamp(2rem,6vw,4rem)] tracking-tightest uppercase mb-12"
            prompt={`Values title. Original: "OUR VALUES". Return only the title.`}
            previewText="Our values"
          />
          <div className="space-y-10">
            {VALUES.map((v) => (
              <div
                key={v.id}
                data-part={`{%part:value-${v.id}%}`}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 border-t border-[color:var(--border)] pt-8"
              >
                <div className="md:col-span-4">
                  <PartText
                    partId={`{%part:value-${v.id}-title%}`}
                    as="h3"
                    className="text-xl md:text-2xl uppercase tracking-tight font-medium"
                    prompt={`Value title: ${v.title}. Return only the title.`}
                    previewText={v.title}
                  />
                </div>
                <div className="md:col-span-5">
                  <PartText
                    partId={`{%part:value-${v.id}-body%}`}
                    as="p"
                    className="text-sm md:text-base text-[color:var(--muted)] leading-relaxed"
                    prompt={`Value body for "${v.title}" at [USER_PROJECT]. Chunk size: 25–40 words. Tone: human, operational. Return only the body.`}
                    previewText={`[${v.title.toLowerCase()} value description]`}
                  />
                </div>
                <div className="md:col-span-3 relative aspect-[4/5] bg-[color:var(--soft)] overflow-hidden">
                  <PartImage
                    partId={`{%part:value-${v.id}-poster%}`}
                    aspectRatio={4 / 5}
                    objectFit="cover"
                    placeholder={`Value poster for ${v.title} — bold graphic print`}
                    className="w-full h-full absolute inset-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </PartSection>

      <PartSection partId="{%part:section-careers%}" label="Careers" className="px-4 md:px-6 py-20 border-t border-[color:var(--border)]">
        <div className="max-w-site mx-auto max-w-2xl">
          <PartText
            partId="{%part:careers-heading%}"
            as="h2"
            className="font-display text-3xl md:text-4xl tracking-tightest uppercase"
            prompt={`Careers heading. Original: "OPEN ROLES". Return only the heading.`}
            previewText="Open roles"
          />
          <PartText
            partId="{%part:careers-body%}"
            as="p"
            className="mt-4 text-sm md:text-base text-[color:var(--muted)] leading-relaxed"
            prompt={`Careers body for [USER_PROJECT]. Original: always looking for senior talent who shares passion for precision.
Chunk size: 20–35 words.
Return only the paragraph.`}
            previewText="Always looking for senior talent who shares a passion for precision."
          />
        </div>
      </PartSection>

      <PartFooter />
    </main>
  );
}
