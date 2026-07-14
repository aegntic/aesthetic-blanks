import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Parts Clone — AI Customer Concierge Platform",
  description:
    "Semantic reconstruction of an AI CX concierge product site (Lorikeet style). Scroll-linked chips, metrics, workflow nodes, ticket stacks. Brand assets and copy stripped.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
