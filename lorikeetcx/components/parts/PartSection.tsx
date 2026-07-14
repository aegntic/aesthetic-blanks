"use client";
import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  partId: string;
  label: string;
  className?: string;
  id?: string;
  children: ReactNode;
}

export function PartSection({ partId, label, className, id, children }: Props) {
  return (
    <section
      id={id}
      data-part={partId}
      data-label={label}
      className={clsx("relative", className)}
    >
      {children}
    </section>
  );
}
