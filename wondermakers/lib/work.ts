export type WorkItem = {
  slug: string;
  index: number;
  kind: string;
};

/** Semantic project slots — no original client names. */
export const WORK: WorkItem[] = [
  { slug: "project-01", index: 1, kind: "Company Website" },
  { slug: "project-02", index: 2, kind: "Mobile App" },
  { slug: "project-03", index: 3, kind: "Web App" },
  { slug: "project-04", index: 4, kind: "Premium Storefront" },
  { slug: "project-05", index: 5, kind: "Web3 App" },
  { slug: "project-06", index: 6, kind: "Immersive Website" },
  { slug: "project-07", index: 7, kind: "Immersive Website" },
  { slug: "project-08", index: 8, kind: "Product Website" },
  { slug: "project-09", index: 9, kind: "Immersive Website" },
  { slug: "project-10", index: 10, kind: "Product Website" },
  { slug: "project-11", index: 11, kind: "Web3 App" },
  { slug: "project-12", index: 12, kind: "Company Website" },
];

export const SECTORS = [
  "Gaming",
  "Web3",
  "Fintech",
  "Premium Retail",
  "Education",
  "Real Estate",
] as const;

export function getWork(slug: string): WorkItem | undefined {
  return WORK.find((w) => w.slug === slug);
}

export function nextWork(slug: string): WorkItem {
  const i = WORK.findIndex((w) => w.slug === slug);
  return WORK[(i + 1) % WORK.length]!;
}
