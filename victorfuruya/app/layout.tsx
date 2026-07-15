import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Parts Clone — Multidisciplinary Designer Portfolio (Victor Furuya class)",
  description:
    "Semantic reconstruction of a cinematic art-director portfolio. Lenis scroll DNA, letter-split headlines, full-bleed work slides. Brand stripped. Agent-ready parts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-ink text-paper" data-smooth="1">
      <body className="min-h-screen antialiased overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
