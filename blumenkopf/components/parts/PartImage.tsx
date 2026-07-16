"use client";
import { useState, useCallback } from "react";
import clsx from "clsx";

interface Props {
  partId: string;
  aspectRatio?: number;
  objectFit?: "cover" | "contain" | "fill";
  placeholder: string;
  className?: string;
  accept?: string;
}

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

  const onFile = useCallback((file: File) => {
    const url = URL.createObjectURL(file);
    setSrc(url);
  }, []);

  return (
    <div
      data-part={partId}
      className={clsx(
        "relative overflow-hidden bg-zinc-900 border border-dashed transition-colors",
        dragging ? "border-accent" : "border-zinc-700/60",
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
          {accept.includes("video") && src.includes("blob") ? (
            <video
              src={src}
              className="w-full h-full object-cover"
              style={{ objectFit }}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src} alt="" className="w-full h-full" style={{ objectFit }} />
          )}
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition flex items-center justify-center gap-3">
            <label className="cursor-pointer bg-paper text-ink text-xs font-medium px-4 py-2 rounded">
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
              className="bg-zinc-800 text-paper text-xs px-4 py-2 rounded"
            >
              Reset
            </button>
          </div>
        </>
      ) : (
        <label className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer text-zinc-500 p-6 text-center gap-2">
          <span className="text-2xl">↑</span>
          <span className="text-xs font-medium tracking-wide">Drop or click to upload</span>
          <span className="text-[10px] opacity-60 max-w-[220px] leading-snug">{placeholder}</span>
          <input
            type="file"
            accept={accept}
            className="hidden"
            onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])}
          />
        </label>
      )}
    </div>
  );
}
