/**
 * Semantic project slots for the Blumenkopf work index.
 *
 * Captured case routes (6) under /work — brand names stripped to neutral slots.
 * Originals were a mixed editorial set (awards, magazines, restaurants, identity).
 * Services reconstructed from the studio's evident discipline spread; replace per
 * [USER_PROJECT] reality.
 */
export type WorkItem = {
  slug: string;
  index: number;
  /** Neutral category the case belongs to — drives the grid label. */
  category: string;
  year: string;
  services: string[];
};

export const WORK: WorkItem[] = [
  {
    slug: "project-01",
    index: 1,
    category: "Editorial",
    year: "2019",
    services: ["Art Direction", "Photography", "Editorial Design"],
  },
  {
    slug: "project-02",
    index: 2,
    category: "Publication",
    year: "2019",
    services: ["Art Direction", "Layout", "Typography"],
  },
  {
    slug: "project-03",
    index: 3,
    category: "Identity",
    year: "2018",
    services: ["Brand Identity", "Art Direction", "Print"],
  },
  {
    slug: "project-04",
    index: 4,
    category: "Hospitality",
    year: "2018",
    services: ["Brand Identity", "Naming", "Web Design"],
  },
  {
    slug: "project-05",
    index: 5,
    category: "Portrait",
    year: "2018",
    services: ["Photography", "Art Direction"],
  },
  {
    slug: "project-06",
    index: 6,
    category: "Cultural",
    year: "2018",
    services: ["Art Direction", "Brand Identity", "Editorial"],
  },
];

export function getWork(slug: string): WorkItem | undefined {
  return WORK.find((w) => w.slug === slug);
}

export function nextWork(slug: string): WorkItem {
  const i = WORK.findIndex((w) => w.slug === slug);
  return WORK[(i + 1) % WORK.length]!;
}
