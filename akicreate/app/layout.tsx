import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Parts Clone — Graphic Portfolio (Aki class)",
  description:
    "Semantic reconstruction of an Awwwards-nominee graphic design portfolio. Brand stripped. Agent-ready parts. Webflow+GSAP motion DNA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-paper text-ink">
      <body className="min-h-screen antialiased overflow-x-hidden flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
