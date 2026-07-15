export type BlankPage = {
  slug: string;
  label: string;
  blocks: { id: string; role: string; text: string; span?: string }[];
};

export type Blank = {
  slug: string;
  name: string;
  archetype: string;
  source: string;
  notes: string;
  pages: BlankPage[];
  category: string;
};

export const BLANKS: Blank[] = [
  {
    slug: "akicreate",
    name: "Aki Create",
    archetype: "Graphic portfolio",
    source: "akicreate.com",
    category: "Letter-matrix",
    notes: "※ nav · dual rails · paired works · black talk footer · case 01/02/03",
    pages: [
      {
        slug: "home",
        label: "Home",
        blocks: [
          { id: "hero", role: "h1", text: "A K I", span: "col-span-12 text-center" },
          { id: "rail-l", role: "p", text: "Branding · Web ※ Motion · Publication", span: "col-span-12 md:col-span-4" },
          { id: "cta", role: "p", text: "Let's Create", span: "col-span-12 md:col-span-4 text-center" },
          { id: "rail-r", role: "p", text: "Creative at heart · Love for ※ Design", span: "col-span-12 md:col-span-4 text-right" },
          { id: "w1", role: "card", text: "Project 01 — Publication", span: "col-span-12 md:col-span-6" },
          { id: "w2", role: "card", text: "Project 02 — Packaging", span: "col-span-12 md:col-span-6" },
        ],
      },
      {
        slug: "about",
        label: "About",
        blocks: [
          { id: "what", role: "h1", text: "What I do", span: "col-span-12 md:col-span-4" },
          { id: "bio", role: "p", text: "Graphic designer. Branding, packaging, print, motion.", span: "col-span-12 md:col-span-8" },
        ],
      },
      {
        slug: "case",
        label: "Case",
        blocks: [
          { id: "title", role: "h1", text: "Project 01", span: "col-span-12 md:col-span-4" },
          { id: "s01", role: "card", text: "01 — Context", span: "col-span-12 md:col-span-4" },
          { id: "s02", role: "card", text: "02 — System", span: "col-span-12 md:col-span-4" },
          { id: "s03", role: "card", text: "03 — Outcome", span: "col-span-12 md:col-span-4" },
        ],
      },
    ],
  },
  {
    slug: "alitwotimes",
    name: "Ali Two Times",
    archetype: "Director portfolio",
    source: "alitwotimes.com",
    category: "Cinematic",
    notes: "Massive display type · stagger DNA · showreel hero",
    pages: [
      {
        slug: "home",
        label: "Home",
        blocks: [
          { id: "name", role: "h1", text: "Director · [NAME]", span: "col-span-12" },
          { id: "tag", role: "p", text: "Cinematic work. Sparse words.", span: "col-span-12 md:col-span-6" },
          { id: "reel", role: "card", text: "Reel still", span: "col-span-12 md:col-span-6" },
        ],
      },
      {
        slug: "work",
        label: "Work",
        blocks: [
          { id: "t", role: "h1", text: "Selected work", span: "col-span-12" },
          { id: "c1", role: "card", text: "Case 01", span: "col-span-4" },
          { id: "c2", role: "card", text: "Case 02", span: "col-span-4" },
          { id: "c3", role: "card", text: "Case 03", span: "col-span-4" },
        ],
      },
    ],
  },
  {
    slug: "reformcollective",
    name: "Reform Collective",
    archetype: "Digital agency",
    source: "reformcollective.com",
    category: "Agency",
    notes: "Paper/ink · work index · case · program · multi-step contact",
    pages: [
      {
        slug: "home",
        label: "Home",
        blocks: [
          { id: "m", role: "h1", text: "Design that moves product.", span: "col-span-12" },
          { id: "f1", role: "card", text: "Featured A", span: "col-span-6" },
          { id: "f2", role: "card", text: "Featured B", span: "col-span-6" },
        ],
      },
      {
        slug: "work",
        label: "Work",
        blocks: [
          { id: "h", role: "h1", text: "Work index", span: "col-span-12" },
          { id: "g1", role: "card", text: "Case 01", span: "col-span-4" },
          { id: "g2", role: "card", text: "Case 02", span: "col-span-4" },
          { id: "g3", role: "card", text: "Case 03", span: "col-span-4" },
        ],
      },
    ],
  },
  {
    slug: "wondermakers",
    name: "Wonder Makers",
    archetype: "Product studio",
    source: "wondermakers.digital",
    category: "Studio",
    notes: "Split heroes · services depth · light/dark",
    pages: [
      {
        slug: "home",
        label: "Home",
        blocks: [
          { id: "a", role: "h1", text: "We build", span: "col-span-6" },
          { id: "b", role: "h1", text: "what lasts", span: "col-span-6" },
        ],
      },
      {
        slug: "services",
        label: "Services",
        blocks: [
          { id: "h", role: "h1", text: "Services", span: "col-span-12" },
          { id: "p1", role: "card", text: "Discovery", span: "col-span-4" },
          { id: "p2", role: "card", text: "Build", span: "col-span-4" },
          { id: "p3", role: "card", text: "Scale", span: "col-span-4" },
        ],
      },
    ],
  },
  {
    slug: "lorikeetcx",
    name: "Lorikeet CX",
    archetype: "AI CX / SaaS",
    source: "lorikeetcx.ai",
    category: "SaaS",
    notes: "Framer/Lenis · chips · metrics · nodes · stack",
    pages: [
      {
        slug: "home",
        label: "Home",
        blocks: [
          { id: "h", role: "h1", text: "AI that resolves, not deflects", span: "col-span-12" },
          { id: "m1", role: "metric", text: "57%", span: "col-span-3" },
          { id: "m2", role: "metric", text: "4.9★", span: "col-span-3" },
        ],
      },
      {
        slug: "pricing",
        label: "Pricing",
        blocks: [
          { id: "h", role: "h1", text: "Outcome plans", span: "col-span-12" },
          { id: "a", role: "card", text: "Start", span: "col-span-4" },
          { id: "b", role: "card", text: "Scale", span: "col-span-4" },
          { id: "c", role: "card", text: "Enterprise", span: "col-span-4" },
        ],
      },
    ],
  },
];

export function getBlank(slug: string) {
  return BLANKS.find((b) => b.slug === slug);
}

export const ADVANTAGES = [
  {
    id: "parts",
    title: "Every block is a part",
    body: "Text, image, motion tagged {%part%} / {%motion%}. Agents rebrand without hunting DOM.",
  },
  {
    id: "multipage",
    title: "Real multi-page IA",
    body: "Not a single stub. Home, about, cases, services — graph preserved from full-depth capture.",
  },
  {
    id: "live",
    title: "Live edit free",
    body: "Click any block, rewrite in place. Edits stay in the browser until you export.",
  },
  {
    id: "export",
    title: "Export is paid",
    body: "Preview and edit cost nothing. JSON edit map download unlocks after $$.",
  },
  {
    id: "isolated",
    title: "One folder = one ship",
    body: "Sparse-checkout a blank. Zero monorepo glue. npm install and run.",
  },
  {
    id: "motion",
    title: "Motion DNA, not pixels",
    body: "Letter grids, masks, chips, stacks — reverse-engineered intents you can re-skin.",
  },
];
