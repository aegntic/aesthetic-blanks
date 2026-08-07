# Prompts

Every `PartText` and `TruthText` embeds its prompt inline (`prompt={...}` prop). This file
is the human-readable index for branding passes — what each prompt asks for and the rules
they share.

## Shared conventions

```
Write <thing> for [USER_PROJECT].
Original nuance: <shape the source used, abstracted away from the brand>.
Chunk size: <word count / token budget>.
Tone: <voice>.
Avoid: <forbidden generics + "do not reuse source brand names">.
Return only <the value>.
```

- `[USER_PROJECT]` is the substitution token.
- `Original nuance` is **shape, not content** — *how* the source worded a thing (lowercase,
  deadpan self-deprecation, period-separated clauses) without copying brand words.
- `previewText` is the placeholder rendered (and animated) until a real value is supplied.
  It is a shape hint, never a shipped string.
- "Return only …" forces single-value output.

## Prompt hot-spots by route

- **`/`** — hero wordmark (1 lowercase word), hero truth-top ("another burnt-out soul behind
  the screen" shape), hero truth-bot ("scroll, sigh, and exit." shape), blurred role field,
  services truth ("i'm just doing design…" shape), services long-truth + coda, vision creed
  ("design isn't magic…" shape), projects truth ("at least it felt that way" shape) +
  rationale + coda, marks (f'22 / tp®).
- **`/about`** — lead statement, lead body, capability labels + mega disciplines (do / love),
  availability closing.
- **`PartNav`** — logo (shuffle), about label, socials in/tg/mail.
- **`PartFooter`** — "drop a message" field, CTA ("let's build something that matters."),
  availability micro-line, rationale ("…forged in frustration…"), f12 easter egg, ©'25.

## Media prompts

`PartImage` uses a `placeholder` string describing **style + role** — warm-paper / muted
grade + layout role — never brand content. The shared `IMAGE_STYLE` bank lives in
`lib/work.ts` (`visionBg`, `projectStill`, `encryptedMask`, `aboutPortrait`, `footerField`).

## Encrypted slots

`lib/work.ts` → `PROJECTS` entries with `encrypted: true` render a masked still + scrambled
label + "i can't show it. but trust me, it exists." hover copy. Use these for NDA / live-only
cases the brand can't display.

## Running a branding pass

1. Grep for `prompt={` across `app/` and `components/parts/`.
2. For each, feed the prompt to the model with `[USER_PROJECT]` resolved.
3. Replace `previewText` with the returned value (or wire to CMS).
4. Keep chunk sizes and tones — they encode the source's deadpan rhythm.
5. `env -u NODE_ENV npm run build` → green → ship.
