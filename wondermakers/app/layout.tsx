import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Parts Clone — High-End Digital Product Studio",
  description:
    "Semantic reconstruction of a senior-led digital product studio (Wonder Makers style). Split-type headlines, marquee, light/dark, multi-page IA. Brand assets and copy stripped.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
