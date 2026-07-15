"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/", label: "About" },
  { href: "/#collection", label: "Works" },
  { href: "/pricing", label: "Export $$" },
];

export function SiteNav() {
  const path = usePathname();
  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur">
      <nav className="mx-auto grid h-12 max-w-[1440px] grid-cols-3 items-center px-4 md:px-5">
        <Link
          href="/pricing"
          className={clsx(
            "justify-self-start text-sm transition",
            path === "/pricing" ? "text-ink" : "text-mute hover:text-ink"
          )}
        >
          Export $$
        </Link>
        <Link href="/" className="justify-self-center text-xl font-light tracking-widest" aria-label="Home">
          ※
        </Link>
        <Link href="/#collection" className="justify-self-end text-sm text-mute hover:text-ink transition">
          Works
        </Link>
      </nav>
    </header>
  );
}
