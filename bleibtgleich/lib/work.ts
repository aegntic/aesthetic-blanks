/**
 * Semantic content slots — bleibtgleich.com (single-designer portfolio).
 *
 * Source home grid: one real case ("instagallery"), one self-slot ("place for
 * this portfolio"), and four `encrypted` entries whose labels are Caesar-shifted
 * and whose stills are masked ("i can't show it. but trust me, it exists.").
 * Brand names stripped to neutral slots; replace per [USER_PROJECT] reality.
 */

export type Project = {
  slug: string;
  index: number;
  /** Neutral label — shown under the card. */
  label: string;
  /** Encrypted entries render a masked still + scrambled hover label. */
  encrypted: boolean;
  /** External "see it live" link target (empty for encrypted/self slots). */
  href: string;
};

export const PROJECTS: Project[] = [
  { slug: "place-for-portfolio", index: 1, label: "place for this portfolio", encrypted: false, href: "" },
  { slug: "project-01", index: 2, label: "case study v1.0", encrypted: false, href: "#" },
  { slug: "project-02", index: 3, label: "hodud", encrypted: true, href: "" },
  { slug: "project-03", index: 4, label: "4a vwudwhjb", encrypted: true, href: "" },
  { slug: "project-04", index: 5, label: "mdjxdu", encrypted: true, href: "" },
  { slug: "project-05", index: 6, label: "dwwr", encrypted: true, href: "" },
];

/** Services grid — source "services" bg-text field (lowercase). */
export const SERVICES: string[] = [
  "ux/ui",
  "design",
  "art direction",
  "expertise",
  "webflow",
  "development",
  "strategy",
  "& research",
  "motion",
  "(with collaborators)",
  "branding",
  "and more",
];

/** Disciplines for the about capabilities block. */
export const CAPABILITIES: string[] = [
  "ux/ui design",
  "webflow development",
  "art direction",
  "strategy & research",
  "motion design",
  "branding",
];

/**
 * Image style bank — cinematic art-director grade matching the source:
 * warm-paper or desaturated grounds, restrained palette, single orange accent,
 * WebGL-distort energy on the vision plate. Style + role, never brand content.
 */
export const IMAGE_STYLE = {
  visionBg:
    "Wide desaturated environment still, warm paper ground, soft daylight, faint grain, near-monochrome with a single orange accent somewhere in frame, subtle chromatic-aberration / data-mosh energy — role: full-bleed my-vision plate behind WebGL distort",
  projectStill:
    "Editorial design still or product surface, muted warm grade, tactile material detail, centered calm composition, 4:3 — role: project card cover (generic, no client marks)",
  encryptedMask:
    "Abstract mask / negative-space graphic on warm paper, blurred or scrambled, unreadable — role: encrypted project placeholder ('i can't show it')",
  aboutPortrait:
    "Centered portrait, three-quarter crop, warm seamless backdrop, soft directional light, contemplative — role: about hero plate",
  footerField:
    "Wide atmospheric warm-paper environment, architectural or quiet still life, faint grain, full-bleed — role: closing footer field",
} as const;
