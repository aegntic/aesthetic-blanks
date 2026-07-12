import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parts Clone — Director Portfolio Wireframe",
  description: "Semantic reconstruction of a high-end director showreel site. All original brand & copy removed. Ready for agent branding.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-ink text-paper">
      <body className="min-h-screen antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
