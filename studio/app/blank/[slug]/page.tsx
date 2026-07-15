"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { getBlank } from "@/lib/blanks";
import { EditableBlock } from "@/components/EditableBlock";
import { EditorChrome } from "@/components/EditorChrome";
import clsx from "clsx";

export default function BlankEditorPage() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const blank = useMemo(() => getBlank(params.slug), [params.slug]);
  const [pageSlug, setPageSlug] = useState("home");
  const [live, setLive] = useState(true);

  useEffect(() => {
    if (blank) setPageSlug(blank.pages[0]?.slug ?? "home");
  }, [blank]);

  useEffect(() => {
    if (live) document.documentElement.setAttribute("data-live", "1");
    else document.documentElement.removeAttribute("data-live");
    return () => document.documentElement.removeAttribute("data-live");
  }, [live]);

  if (!blank) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-mute">Blank not found.</p>
        <Link href="/" className="text-sm">
          ← collection
        </Link>
      </div>
    );
  }

  const page = blank.pages.find((p) => p.slug === pageSlug) ?? blank.pages[0];

  return (
    <div className="min-h-full">
      <div className="border-b border-ink/5">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3 px-4 py-4 md:px-5">
          <div>
            <button type="button" onClick={() => router.push("/")} className="text-xs text-mist hover:text-ink">
              ← collection
            </button>
            <h1 className="text-xl font-medium tracking-tight">{blank.name}</h1>
            <p className="text-xs text-mist font-mono">{blank.archetype} · {blank.source}</p>
          </div>
          <span className="rounded-full bg-mint/15 text-ink px-3 py-1 text-xs">{blank.pages.length} pages</span>
        </div>
        <div className="mx-auto flex max-w-[1440px] gap-1 overflow-x-auto px-4 pb-3 md:px-5">
          {blank.pages.map((p) => (
            <button
              key={p.slug}
              type="button"
              onClick={() => setPageSlug(p.slug)}
              className={clsx(
                "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition",
                p.slug === page.slug ? "bg-ink text-paper" : "border border-ink/10 text-mute hover:text-ink"
              )}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <EditorChrome blankSlug={blank.slug} live={live} onLiveChange={setLive} />

      <div className="mx-auto max-w-[1440px] px-4 py-10 md:px-5 md:py-14">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {page.blocks.map((block) => (
            <EditableBlock
              key={`${page.slug}-${block.id}`}
              blankSlug={blank.slug}
              blockId={`${page.slug}/${block.id}`}
              role={block.role}
              defaultText={block.text}
              span={block.span}
              live={live}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
