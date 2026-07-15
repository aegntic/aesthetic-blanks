// ponytail: localStorage unlock mock; swap for Stripe session when real $ needed

const UNLOCK_KEY = "ab-studio-export-unlocked";
const EDITS_PREFIX = "ab-studio-edits:";

export function isExportUnlocked(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(UNLOCK_KEY) === "1";
}

export function unlockExport(): void {
  window.localStorage.setItem(UNLOCK_KEY, "1");
  window.dispatchEvent(new Event("ab-unlock"));
}

export function lockExport(): void {
  window.localStorage.removeItem(UNLOCK_KEY);
  window.dispatchEvent(new Event("ab-unlock"));
}

export type EditMap = Record<string, string>;

export function loadEdits(blankSlug: string): EditMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(EDITS_PREFIX + blankSlug);
    return raw ? (JSON.parse(raw) as EditMap) : {};
  } catch {
    return {};
  }
}

export function saveEdit(blankSlug: string, blockId: string, text: string): void {
  const map = loadEdits(blankSlug);
  map[blockId] = text;
  window.localStorage.setItem(EDITS_PREFIX + blankSlug, JSON.stringify(map));
  window.dispatchEvent(new CustomEvent("ab-edit", { detail: { blankSlug, blockId, text } }));
}

export function clearEdits(blankSlug: string): void {
  window.localStorage.removeItem(EDITS_PREFIX + blankSlug);
  window.dispatchEvent(new CustomEvent("ab-edit", { detail: { blankSlug } }));
}

export function buildExportPayload(blankSlug: string) {
  return {
    blank: blankSlug,
    edits: loadEdits(blankSlug),
    exportedAt: new Date().toISOString(),
    format: "aesthetic-blanks-studio-v1",
  };
}
