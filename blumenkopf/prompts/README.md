# Prompts

Every `PartText` embeds its prompt inline (`prompt={...}` prop). This file is the
human-readable index for branding passes — what each prompt asks for and the rules
they share.

## Shared conventions

All prompts follow the same shape, distilled from the Blumenkopf capture:

```
Write <thing> for [USER_PROJECT].
Original nuance: <what the source actually did, abstracted away from the brand>.
Chunk size: <word count / token budget>.
Tone: <voice>.
Avoid: <forbidden generics>.
Return only <the value>.
```

- `[USER_PROJECT]` is the substitution token — the agent replaces it with the brand it
  is generating for.
- `Original nuance` is **shape, not content** — it tells the agent *how* the source
  worded a thing (parentheses, lowercase, period-separated clauses) without copying the
  brand's actual words.
- `previewText` is the placeholder rendered until a real value is supplied. It is a
  shape hint, never a shipped string.
- "Return only …" forces single-value output, no preamble.

## Prompt hot-spots by route

- **`/home`** — hero wordmark (1 word, lowercase mixed-case), definitional tagline
  ("is no studio. with everything you need." shape), two-line serif+sans manifesto,
  selected-work heading.
- **`/about`** — lowercase statement (sans line + serif-italic line), capability list
  (one discipline noun each), clients marquee unit.
- **`/work`** — index heading (1 lowercase word), dek framing the selection, per-case
  title/category/year/services.
- **`/work/[slug]`** — case title, lede (italic serif pull-quote), brief paragraph +
  move paragraph, gallery frame descriptions, next-case cue.
- **`/imprint`** — publisher / contact / credits / legal blocks (European Impressum shape).
- **`PartNav`** — wordmark, menu toggle, four route labels + sublines, socials.
- **`PartFooter`** — the signature orange marquee unit ("buy this website ★" shape),
  inquiry CTA, copyright, colophon.

## Media prompts

`PartImage` uses a `placeholder` string (not the `prompt` prop) describing **style +
role** — photographic grade, crop, layout role — never brand content. Cinematic/art-
director blanks additionally share an `IMAGE_STYLE` bank; Blumenkopf keeps per-image
placeholders inline since the grade is uniform (paper-ink palette).

## Running a branding pass

1. Grep for `prompt={` across `app/` and `components/parts/`.
2. For each, feed the prompt to the model with `[USER_PROJECT]` resolved.
3. Replace `previewText` with the returned value (or wire to CMS).
4. Keep chunk sizes and tones — they encode the original's rhythm.
