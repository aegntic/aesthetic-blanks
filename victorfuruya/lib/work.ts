/** Generic work slots — strip source client names at rebrand */
export type WorkItem = {
  slug: string;
  index: number;
  discipline: string;
};

export const WORK: WorkItem[] = [
  { slug: "project-01", index: 1, discipline: "Brand System" },
  { slug: "project-02", index: 2, discipline: "Art Direction" },
  { slug: "project-03", index: 3, discipline: "Visual Identity" },
  { slug: "project-04", index: 4, discipline: "Campaign" },
];

export function getWork(slug: string) {
  return WORK.find((w) => w.slug === slug);
}

export function nextWork(slug: string) {
  const i = WORK.findIndex((w) => w.slug === slug);
  return WORK[(i + 1) % WORK.length]!;
}

export const FOCUS = [
  "Strategy",
  "Branding",
  "Art Direction",
  "Visual Design",
] as const;

export const IMAGE_STYLE = {
  heroPortrait:
    "Full-bleed black-and-white fashion/portrait photography, medium shot of seated figure, soft gray studio wall, shallow depth of field, desaturated film grade, high-end art-director portfolio hero — role: atmospheric identity still, NOT a logo",
  manifestoStill:
    "Vertical editorial still, muted color or B&W, tactile material detail or quiet lifestyle fragment, 3:4 crop, gallery-wall calm — role: manifesto sticky preview card",
  workSlide:
    "Full-bleed brand photography, warm natural light, confident subject or product in soft environment, contemporary lifestyle grade, 16:9 cinematic — role: case study cover slide (generic, no client trademarks)",
  aboutPortrait:
    "Centered B&W portrait, three-quarter crop, dark seamless studio backdrop, crisp fashion lighting, contemplative gaze — role: about hero portrait plate",
  footerBleed:
    "Wide atmospheric B&W or muted color environment still, architectural or natural quiet, full-bleed footer curtain — role: closing emotional field",
} as const;
