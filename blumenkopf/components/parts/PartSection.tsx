"use client";
import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  partId: string;
  label: string;
  className?: string;
  children: ReactNode;
}

export function PartSection({ partId, label, className, children }: Props) {
  return (
    <section
      data-part={partId}
      data-label={label}
      className={clsx("relative", className)}
    >
      {children}
    </section>
  );
}
