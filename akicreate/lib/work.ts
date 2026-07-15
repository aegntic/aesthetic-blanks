/** Generic project slots — strip source brand names at rebrand. */
export type WorkItem = {
  slug: string;
  index: number;
  category: string;
  type: string;
  year: string;
  role: string;
  tints: [string, string, string];
};

export const WORK: WorkItem[] = [
  {
    slug: "project-01",
    index: 1,
    category: "Publication",
    type: "Publication Design",
    year: "2026",
    role: "Designer",
    tints: ["#f3f3f3", "#f0d9c8", "#e8ebe0"],
  },
  {
    slug: "project-02",
    index: 2,
    category: "Packaging",
    type: "Packaging Design",
    year: "2025",
    role: "Designer",
    tints: ["#f3f3f3", "#dce5dc", "#ebe6dc"],
  },
  {
    slug: "project-03",
    index: 3,
    category: "Branding",
    type: "Branding Design",
    year: "2024",
    role: "Designer",
    tints: ["#f3f3f3", "#f8e6dc", "#e8e8e8"],
  },
  {
    slug: "project-04",
    index: 4,
    category: "Editorial",
    type: "Editorial Design",
    year: "2025",
    role: "Designer",
    tints: ["#f3f3f3", "#e8dce8", "#ebe6f0"],
  },
  {
    slug: "project-05",
    index: 5,
    category: "Promotional",
    type: "Promotional Design",
    year: "2025",
    role: "Designer",
    tints: ["#f3f3f3", "#e0e4f0", "#ececec"],
  },
  {
    slug: "project-06",
    index: 6,
    category: "Branding",
    type: "Branding Design",
    year: "2026",
    role: "Designer",
    tints: ["#f3f3f3", "#dceaf5", "#e8f0dc"],
  },
];

export function getWork(slug: string) {
  return WORK.find((w) => w.slug === slug);
}

export function nextWork(slug: string) {
  const i = WORK.findIndex((w) => w.slug === slug);
  return WORK[(i + 1) % WORK.length]!;
}

export function prevWork(slug: string) {
  const i = WORK.findIndex((w) => w.slug === slug);
  return WORK[(i - 1 + WORK.length) % WORK.length]!;
}
