"use client";

import { useCallback, useEffect, useState } from "react";
import { loadEdits, saveEdit } from "@/lib/store";
import clsx from "clsx";

type Props = {
  blankSlug: string;
  blockId: string;
  role: string;
  defaultText: string;
  span?: string;
  live: boolean;
};

export function EditableBlock({ blankSlug, blockId, role, defaultText, span, live }: Props) {
  const [text, setText] = useState(defaultText);

  useEffect(() => {
    const edits = loadEdits(blankSlug);
    if (edits[blockId] != null) setText(edits[blockId]);
  }, [blankSlug, blockId]);

  const onInput = useCallback(
    (e: React.FormEvent<HTMLElement>) => {
      const next = e.currentTarget.textContent ?? "";
      setText(next);
      saveEdit(blankSlug, blockId, next);
    },
    [blankSlug, blockId]
  );

  const base =
    role === "h1"
      ? "text-3xl md:text-5xl font-display tracking-tight leading-[0.95]"
      : role === "metric"
        ? "text-5xl md:text-7xl font-display tracking-tighter"
        : role === "card"
          ? "text-base min-h-[8rem] flex items-end p-5 border border-ink/10 bg-soft"
          : "text-sm md:text-base text-mute leading-relaxed";

  return (
    <div className={clsx("relative", span ?? "col-span-12")} data-block={blockId}>
      <div
        className={clsx(base, live && "cursor-text")}
        contentEditable={live}
        suppressContentEditableWarning
        onInput={live ? onInput : undefined}
      >
        {text}
      </div>
    </div>
  );
}
