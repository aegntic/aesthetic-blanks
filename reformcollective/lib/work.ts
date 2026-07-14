/** Semantic project slots — brand names are placeholders, not originals. */
export type WorkItem = {
  slug: string;
  index: number;
  services: string[];
};

export const WORK: WorkItem[] = [
  { slug: "project-01", index: 1, services: ["Art Direction", "Branding", "Web Design", "Development"] },
  { slug: "project-02", index: 2, services: ["Art Direction", "Branding", "Web Design", "Development"] },
  { slug: "project-03", index: 3, services: ["Art Direction", "Branding", "Web Design", "Web Development"] },
  { slug: "project-04", index: 4, services: ["Art Direction", "Branding", "Web Design", "Development"] },
  { slug: "project-05", index: 5, services: ["Art Direction", "Branding", "Web Design", "Web Development"] },
  { slug: "project-06", index: 6, services: ["Art Direction", "Branding", "Web Design", "Web Development"] },
  { slug: "project-07", index: 7, services: ["Art Direction", "Brand Identity"] },
  { slug: "project-08", index: 8, services: ["Art Direction", "Branding", "Web Design", "Development"] },
  { slug: "project-09", index: 9, services: ["Art Direction", "Branding", "Web Design", "Web Development"] },
  { slug: "project-10", index: 10, services: ["Art Direction", "Branding", "Web Design", "Development"] },
  { slug: "project-11", index: 11, services: ["Branding", "Web Design", "Development", "Art Direction"] },
  { slug: "project-12", index: 12, services: ["iOS Design", "UI", "UX", "Web Design", "Art Direction"] },
];

export function getWork(slug: string): WorkItem | undefined {
  return WORK.find((w) => w.slug === slug);
}

export function nextWork(slug: string): WorkItem {
  const i = WORK.findIndex((w) => w.slug === slug);
  return WORK[(i + 1) % WORK.length]!;
}
