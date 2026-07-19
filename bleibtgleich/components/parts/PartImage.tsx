"use client";
import { useState, useCallback } from "react";
import clsx from "clsx";

interface Props {
  partId: string;
  aspectRatio?: number;
  objectFit?: "cover" | "contain" | "fill";
  /** Style + role prompt for the image (shown in empty state) */
  placeholder: string;
  className?: string;
  accept?: string;
}

/**
 * Drop zone with style-of-image prompt.
 * `placeholder` should describe photographic style + composition role.
 */
export function PartImage({
  partId,
  aspectRatio = 16 / 9,
  objectFit = "cover",
  placeholder,
  className,
  accept = "image/*,video/*",
}: Props) {
  const [src, setSrc] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  const onFile = useCallback((file: File) => {
    setSrc(URL.createObjectURL(file));
  }, []);

  return (
    <div
      data-part={partId}
      className={clsx(
        "relative overflow-hidden border border-dashed transition-colors",
        dragging ? "border-paper" : "border-paper/20",
        !src && "bg-ash",
        className
      )}
      style={{ aspectRatio: className?.includes("absolute") ? undefined : aspectRatio }}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragging(false);
        const f = e.dataTransfer.files?.[0];
        if (f) onFile(f);
      }}
    >
      {src ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" className="h-full w-full" style={{ objectFit }} />
          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/50 opacity-0 transition hover:opacity-100">
            <label className="cursor-pointer rounded bg-paper px-4 py-2 text-xs font-medium text-ink">
              Replace
              <input
                type="file"
                accept={accept}
                className="hidden"
                onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])}
              />
            </label>
            <button
              type="button"
              onClick={() => setSrc(null)}
              className="rounded bg-ink px-4 py-2 text-xs text-paper"
            >
              Reset
            </button>
          </div>
        </>
      ) : (
        <label className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-2 p-6 text-center text-mist">
          <span className="text-2xl">↑</span>
          <span className="text-xs font-medium tracking-wide text-paper/80">
            Drop or click to upload
          </span>
          <span className="max-w-[min(28rem,90%)] text-[10px] leading-snug opacity-70">
            {placeholder.slice(0, 160)}
            {placeholder.length > 160 ? "…" : ""}
          </span>
          <button
            type="button"
            className="mt-1 text-[9px] uppercase tracking-widest text-paper/50 hover:text-paper"
            onClick={(e) => {
              e.preventDefault();
              setShowPrompt((v) => !v);
            }}
          >
            {showPrompt ? "hide style prompt" : "style prompt"}
          </button>
          <input
            type="file"
            accept={accept}
            className="hidden"
            onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])}
          />
        </label>
      )}
      {showPrompt && !src && (
        <pre className="absolute bottom-0 left-0 right-0 z-20 max-h-40 overflow-auto border-t border-paper/10 bg-ink/95 p-3 text-[10px] leading-relaxed text-paper/80 whitespace-pre-wrap">
          {placeholder}
        </pre>
      )}
    </div>
  );
}
