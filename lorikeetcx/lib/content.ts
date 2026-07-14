export type Story = {
  slug: string;
  index: number;
  sector: "Finance" | "Health" | "Energy" | "Complex SaaS";
};

export const STORIES: Story[] = [
  { slug: "story-01", index: 1, sector: "Finance" },
  { slug: "story-02", index: 2, sector: "Health" },
  { slug: "story-03", index: 3, sector: "Finance" },
  { slug: "story-04", index: 4, sector: "Complex SaaS" },
  { slug: "story-05", index: 5, sector: "Energy" },
  { slug: "story-06", index: 6, sector: "Health" },
  { slug: "story-07", index: 7, sector: "Finance" },
  { slug: "story-08", index: 8, sector: "Complex SaaS" },
];

export const INTEGRATIONS = [
  { id: "intercom", cat: "Ticketing system" },
  { id: "zendesk", cat: "Ticketing system" },
  { id: "salesforce", cat: "Ticketing system" },
  { id: "hubspot", cat: "Ticketing system" },
  { id: "front", cat: "Ticketing system" },
  { id: "slack", cat: "Tools and actions" },
  { id: "twilio", cat: "Telephony" },
  { id: "stripe", cat: "Tools and actions" },
  { id: "notion", cat: "Knowledge base" },
  { id: "mcp", cat: "Tools and actions" },
  { id: "shopify", cat: "Tools and actions" },
  { id: "sendgrid", cat: "Tools and actions" },
] as const;

export function getStory(slug: string) {
  return STORIES.find((s) => s.slug === slug);
}
export function nextStory(slug: string) {
  const i = STORIES.findIndex((s) => s.slug === slug);
  return STORIES[(i + 1) % STORIES.length]!;
}
