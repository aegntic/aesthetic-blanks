"use client";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("design") === "1") {
      document.documentElement.setAttribute("data-design", "true");
    }
  }, []);
  return <>{children}</>;
}
