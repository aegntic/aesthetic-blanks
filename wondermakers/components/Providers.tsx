"use client";

import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("design") === "1") {
      document.documentElement.setAttribute("data-design", "true");
    }
  }, []);
  return <>{children}</>;
}
