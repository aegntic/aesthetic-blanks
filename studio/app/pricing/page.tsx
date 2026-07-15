"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { isExportUnlocked, unlockExport, lockExport } from "@/lib/store";

const PRICE = 29;

export default function PricingPage() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const sync = () => setUnlocked(isExportUnlocked());
    sync();
    window.addEventListener("ab-unlock", sync);
    return () => window.removeEventListener("ab-unlock", sync);
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 md:px-5">
      <p className="text-xs font-mono uppercase tracking-[0.2em] text-mist">Export</p>
      <h1 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">
        Live edit free.
        <br />
        <span className="text-mist">Export costs money.</span>
      </h1>
      <p className="mt-4 text-mute max-w-xl leading-relaxed text-sm">
        Aki-class showcase of the collection: multi-page blanks, in-browser edit, paid JSON export.
        Stripe later — demo unlock is one click.
      </p>

      <div className="mt-10 border border-ink/10 bg-soft/50 p-6 md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm text-mist">Studio export unlock</p>
            <p className="text-5xl font-display tracking-tight">
              ${PRICE}
              <span className="text-base font-sans font-normal text-mist"> one-time</span>
            </p>
          </div>
          {unlocked ? (
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-ink px-4 py-2 text-sm text-paper">Unlocked</span>
              <button type="button" onClick={() => lockExport()} className="rounded-full border border-ink/15 px-4 py-2 text-sm text-mute">
                Lock again
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => unlockExport()}
              className="rounded-full bg-mint px-5 py-2.5 text-sm font-medium text-paper"
            >
              Unlock export · ${PRICE}
            </button>
          )}
        </div>
        <ul className="mt-6 space-y-2 text-sm text-mute">
          <li>· Multi-page live edit (localStorage)</li>
          <li>· JSON export of block overrides per blank</li>
          <li>· Aki DNA shell — letter grid, rails, work pairs</li>
        </ul>
      </div>

      <p className="mt-8 text-sm">
        <Link href="/" className="hover:underline">
          ← collection
        </Link>
      </p>
    </div>
  );
}
