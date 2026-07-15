import { notFound } from "next/navigation";
import Link from "next/link";
import { PartSection } from "@/components/parts/PartSection";
import { PartText } from "@/components/parts/PartText";
import { PartImage } from "@/components/parts/PartImage";
import { PartMotion } from "@/components/parts/PartMotion";
import { PartNav } from "@/components/parts/PartNav";
import { PartFooter } from "@/components/parts/PartFooter";
import { WORK, getWork, nextWork, prevWork } from "@/lib/work";

export function generateStaticParams() {
  return WORK.map((w) => ({ slug: w.slug }));
}

const SECTION_HEADS = [
  {
    n: "01",
    headPrompt: `Case section 01 heading for [USER_PROJECT].
Original nuance: short evocative title establishing context (e.g. "A Gallery Between Stations").
Chunk size: 3–7 words.
Tone: editorial.
Return only the heading.`,
    bodyPrompt: `Case section 01 body for [USER_PROJECT].
Original nuance: brief + audience + format goals.
Chunk size: 40–70 words.
Tone: first-person designer diary, clear.
Avoid: marketing fluff, source client names.
Return only the paragraph.`,
  },
  {
    n: "02",
    headPrompt: `Case section 02 heading for [USER_PROJECT].
Original nuance: process / system title (e.g. "Following the Line").
Chunk size: 3–6 words.
Return only the heading.`,
    bodyPrompt: `Case section 02 body for [USER_PROJECT].
Original nuance: organization, system, or design approach.
Chunk size: 40–70 words.
Tone: craft process, first person.
Return only the paragraph.`,
  },
  {
    n: "03",
    headPrompt: `Case section 03 heading for [USER_PROJECT].
Original nuance: outcome / craft resolution title.
Chunk size: 3–7 words.
Return only the heading.`,
    bodyPrompt: `Case section 03 body for [USER_PROJECT].
Original nuance: grid, materials, consistency, final system.
Chunk size: 40–70 words.
Tone: craft outcome.
Return only the paragraph.`,
  },
] as const;

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const found = getWork(slug);
  if (!found) notFound();
  const item = found;
  const next = nextWork(slug);
  const prev = prevWork(slug);
  const n = item.index;

  return (
    <main id="top" className="relative flex-1">
      <header className="sticky top-0 z-50 border-b border-ink/5 bg-paper/90 backdrop-blur">
        <nav className="mx-auto grid h-[var(--nav-h)] max-w-site grid-cols-3 items-center px-[var(--gutter)] text-[16px] md:px-5">
          <Link href="/about" className="justify-self-start transition hover:opacity-55">
            About
          </Link>
          <Link href="/" className="justify-self-center text-[24px] font-light tracking-widest">
            ※
          </Link>
          <a
            href="mailto:hello@example.com"
            className="justify-self-end text-mute transition hover:text-ink"
          >
            hello@example.com
          </a>
        </nav>
      </header>

      {/* Case meta row */}
      <PartSection
        partId={`{%part:case-${n}-meta%}`}
        label="Case meta"
        className="px-[var(--gutter)] pb-10 pt-12 md:px-5"
      >
        <div className="mx-auto grid max-w-site grid-cols-1 gap-8 md:grid-cols-12">
          <div className="space-y-3 md:col-span-3">
            <PartMotion partId={`{%motion:case-${n}-title%}`} type="mask" trigger="load">
              <PartText
                partId={`{%part:case-${n}-title%}`}
                as="h1"
                className="text-2xl font-medium"
                prompt={`Case study title for project ${n} of [USER_PROJECT].
Original nuance: short project name (1–3 words).
Avoid: source client trademarks.
Return only the title.`}
                previewText={`Project ${String(n).padStart(2, "0")}`}
              />
            </PartMotion>
            <PartText
              partId={`{%part:case-${n}-blurb%}`}
              as="p"
              className="text-[16px] leading-relaxed text-mute"
              prompt={`Case study one-line blurb for project ${n}.
Original nuance: what the project is in one sentence.
Chunk size: 12–22 words.
Tone: calm gallery caption.
Avoid: client trademarks.
Return only the sentence.`}
              previewText="[one-line project description]"
            />
          </div>
          <div className="space-y-4 text-[16px] md:col-span-3">
            <div>
              <p className="text-mist">Project Type</p>
              <p>{item.type}</p>
            </div>
            <div>
              <p className="text-mist">Role</p>
              <p>{item.role}</p>
            </div>
            <div>
              <p className="text-mist">Year</p>
              <p>{item.year}</p>
            </div>
          </div>
          <div className="md:col-span-6">
            <PartImage
              partId={`{%part:case-${n}-hero%}`}
              aspectRatio={16 / 10}
              placeholder={`Case hero key visual for ${item.category.toLowerCase()} project (role: opening still)`}
              className="w-full border-0 bg-soft"
            />
          </div>
        </div>
      </PartSection>

      {SECTION_HEADS.map((sec, si) => (
        <PartSection
          key={sec.n}
          partId={`{%part:case-${n}-sec-${sec.n}%}`}
          label={`Case section ${sec.n}`}
          className="px-[var(--gutter)] py-12 md:px-5 md:py-16"
        >
          <div className="mx-auto max-w-site">
            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-12">
              <PartMotion
                partId={`{%motion:case-${n}-h-${sec.n}%}`}
                type="fade"
                trigger="inView"
                className="md:col-span-4"
              >
                <PartText
                  partId={`{%part:case-${n}-h-${sec.n}%}`}
                  as="h2"
                  className="text-xl font-medium"
                  prompt={sec.headPrompt}
                  previewText={`[section ${sec.n} heading]`}
                />
              </PartMotion>
              <PartText
                partId={`{%part:case-${n}-b-${sec.n}%}`}
                as="p"
                className="text-[16px] leading-relaxed text-mute md:col-span-5"
                prompt={sec.bodyPrompt}
                previewText="[process + rationale paragraph]"
              />
              <p className="text-[16px] text-mist md:col-span-3 md:text-right">{sec.n}</p>
            </div>

            <div
              className="grid grid-cols-1 gap-3 p-4 md:grid-cols-2 md:p-8"
              style={{ background: item.tints[si] ?? "#f3f3f3" }}
            >
              <PartImage
                partId={`{%part:case-${n}-m-${sec.n}-a%}`}
                aspectRatio={4 / 3}
                placeholder={`Case media A — section ${sec.n} (role: spread / product still)`}
                className="w-full border-0 bg-white/40"
              />
              <PartImage
                partId={`{%part:case-${n}-m-${sec.n}-b%}`}
                aspectRatio={4 / 3}
                placeholder={`Case media B — section ${sec.n} (role: detail / environment)`}
                className="w-full border-0 bg-white/40"
              />
            </div>
          </div>
        </PartSection>
      ))}

      {/* Next / prev pair */}
      <PartSection
        partId={`{%part:case-${n}-next%}`}
        label="Adjacent projects"
        className="border-t border-ink/5 px-[var(--gutter)] py-16 md:px-5"
      >
        <div className="mx-auto grid max-w-site grid-cols-1 gap-10 md:grid-cols-2">
          <Link href={`/work/${prev.slug}`} className="group block">
            <p className="mb-2 text-[16px] text-mist">{prev.category}</p>
            <p className="mb-3 text-lg transition group-hover:opacity-55">
              Project {String(prev.index).padStart(2, "0")}
            </p>
            <PartImage
              partId={`{%part:case-${n}-prev-thumb%}`}
              aspectRatio={4 / 3}
              placeholder="Previous project thumbnail"
              className="w-full border-0 bg-soft"
            />
          </Link>
          <Link href={`/work/${next.slug}`} className="group block">
            <p className="mb-2 text-right text-[16px] text-mist">{next.category}</p>
            <p className="mb-3 text-right text-lg transition group-hover:opacity-55">
              Project {String(next.index).padStart(2, "0")}
            </p>
            <PartImage
              partId={`{%part:case-${n}-next-thumb%}`}
              aspectRatio={4 / 3}
              placeholder="Next project thumbnail"
              className="w-full border-0 bg-soft"
            />
          </Link>
        </div>
      </PartSection>

      <PartFooter />
    </main>
  );
}
