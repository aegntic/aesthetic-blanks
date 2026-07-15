"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { buildExportPayload, isExportUnlocked, clearEdits } from "@/lib/store";

export function EditorChrome({
  blankSlug,
  live,
  onLiveChange,
}: {
  blankSlug: string;
  live: boolean;
  onLiveChange: (v: boolean) => void;
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    const sync = () => setUnlocked(isExportUnlocked());
    sync();
    window.addEventListener("ab-unlock", sync);
    return () => window.removeEventListener("ab-unlock", sync);
  }, []);

  function handleExport() {
    if (!isExportUnlocked()) {
      setMsg("Export is paid. Unlock on Pricing.");
      return;
    }
    const payload = buildExportPayload(blankSlug);
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${blankSlug}-edits.json`;
    a.click();
    URL.revokeObjectURL(url);
    setMsg("Exported.");
  }

  return (
    <div className="flex flex-wrap items-center gap-2 border-b border-ink/5 bg-paper px-4 py-3 md:px-5">
      <button
        type="button"
        onClick={() => onLiveChange(!live)}
        className={
          live
            ? "rounded-full bg-mint px-3 py-1.5 text-xs font-medium text-paper"
            : "rounded-full border border-ink/15 px-3 py-1.5 text-xs font-medium"
        }
      >
        {live ? "Live edit ON" : "Live edit"}
      </button>
      <button type="button" onClick={handleExport} className="rounded-full bg-ink px-3 py-1.5 text-xs font-medium text-paper">
        Export {unlocked ? "↓" : "$$"}
      </button>
      <button
        type="button"
        onClick={() => {
          clearEdits(blankSlug);
          window.location.reload();
        }}
        className="rounded-full border border-ink/10 px-3 py-1.5 text-xs text-mute"
      >
        Reset edits
      </button>
      {!unlocked && (
        <Link href="/pricing" className="text-xs text-mint underline-offset-2 hover:underline">
          Unlock export →
        </Link>
      )}
      {msg && <span className="text-xs text-mute">{msg}</span>}
    </div>
  );
}
