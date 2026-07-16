"use client";
import { useState } from "react";
import clsx from "clsx";

interface Props {
  partId: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "blockquote" | "a" | "div";
  className?: string;
  style?: React.CSSProperties;
  prompt: string;
  previewText?: string;
  href?: string;
}

export function PartText({
  partId,
  as: Tag = "p",
  className,
  style,
  prompt,
  previewText = "[prompt ready]",
  href,
}: Props) {
  const [show, setShow] = useState(false);
  const Comp = Tag as any;

  return (
    <div className="relative group" data-part={partId}>
      <Comp
        className={clsx(className)}
        style={style}
        href={href}
        data-part-id={partId}
      >
        {previewText}
      </Comp>
      {/*
        Dev-only prompt toggle. Rendered as a span (not a button) so PartText can be
        nested inside <button>/<a> (nav, links) without producing invalid
        nested-interactive HTML and a React hydration mismatch. Hover-revealed.
      */}
      <span
        role="button"
        tabIndex={0}
        onClick={() => setShow((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setShow((v) => !v);
          }
        }}
        className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer text-[9px] bg-black/90 text-accent px-1.5 py-0.5 rounded z-20 transition"
      >
        prompt
      </span>
      {show && (
        <pre className="mt-2 p-3 text-[11px] leading-relaxed bg-zinc-950 text-zinc-300 rounded-lg overflow-auto max-h-56 border border-zinc-800 whitespace-pre-wrap z-30 relative">
          {prompt}
        </pre>
      )}
    </div>
  );
}
