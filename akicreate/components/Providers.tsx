"use client";

import { useEffect } from "react";
import { SmoothScroll } from "@/components/SmoothScroll";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("design") === "1") {
      document.documentElement.setAttribute("data-design", "true");
    }
  }, []);

  return <SmoothScroll>{children}</SmoothScroll>;
}
