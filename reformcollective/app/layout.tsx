import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Parts Clone — Digital Design Agency Wireframe",
  description:
    "Semantic reconstruction of a high-craft digital design agency (Reform Collective style). Brand assets and marketing copy stripped. Agent-ready {%part%} system with reverse-engineered Lenis + mask/marquee motion.",
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
