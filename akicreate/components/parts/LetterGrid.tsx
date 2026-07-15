"use client";

import { PartText } from "./PartText";
import { PartMotion } from "./PartMotion";

/** Tobias letter matrix with ghost key grid (Aki DNA) */
export function LetterGrid({
  hot,
  invert = false,
  partId = "{%part:letter-grid%}",
}: {
  hot: string[];
  invert?: boolean;
  partId?: string;
}) {
  const ghostRows = [
    ["C", "P", "U", "E", "H"],
    ["T", "·", "·", "·", "J"],
    ["Q", "L", "V", "S", "F"],
    ["Y", "X", "0", "S", "Z"],
  ];

  return (
    <PartMotion partId="{%motion:letter-grid%}" type="fade" trigger="load">
      <div data-part={partId} className={`letter-grid py-20 md:py-28 ${invert ? "invert" : ""}`}>
        {ghostRows.map((row, ri) =>
          row.map((ch, ci) => {
            const isHot = ri === 1 && ci >= 1 && ci <= 3;
            const hotChar = isHot ? hot[ci - 1] : null;
            return (
              <span key={`${ri}-${ci}`} className={hotChar ? "hot" : "ghost"}>
                {hotChar ?? ch}
              </span>
            );
          })
        )}
      </div>
      <span className="sr-only">
        <PartText
          partId="{%part:letter-grid-prompt%}"
          as="span"
          prompt={`Letter-matrix identity mark for [USER_PROJECT].
Original nuance (akicreate): Tobias serif hot letters ~43px, color #313131 on white; embedded in faint PP Neue Montreal ghost keyboard grid.
Chunk size: 3 characters for a name mark.
Tone: quiet Awwwards-class typographic confidence.
Avoid: oversized marketing slogans, logo icons, gradients.
Return only the hot characters.`}
          previewText={hot.join("")}
        />
      </span>
    </PartMotion>
  );
}

export function TalkGrid() {
  const rows: { ch: string; hot?: boolean }[][] = [
    [{ ch: "Q" }, { ch: "W" }, { ch: "E" }, { ch: "R" }, { ch: "T" }],
    [
      { ch: "L", hot: true },
      { ch: "E", hot: true },
      { ch: "T", hot: true },
      { ch: "'", hot: true },
      { ch: "S", hot: true },
    ],
    [
      { ch: "T", hot: true },
      { ch: "A", hot: true },
      { ch: "L", hot: true },
      { ch: "K", hot: true },
      { ch: "G" },
    ],
    [{ ch: "H" }, { ch: "J" }, { ch: "K" }, { ch: "L" }, { ch: "Z" }],
  ];

  return (
    <div data-part="{%part:talk-grid%}" className="letter-grid invert py-20 md:py-28">
      {rows.flatMap((row, ri) =>
        row.map((cell, ci) => (
          <span key={`${ri}-${ci}`} className={cell.hot ? "hot" : "ghost"}>
            {cell.ch}
          </span>
        ))
      )}
    </div>
  );
}
