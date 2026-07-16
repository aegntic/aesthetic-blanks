import type { Metadata } from "next";
import { Inter_Tight, Newsreader } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

// Free fallbacks for commercial originals (documented in lib/design-tokens.ts):
//   Suisse Intl (neo-grotesque sans) → Inter Tight
//   SangBleu OG (high-contrast serif) → Newsreader
const sans = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blumenkopf — Editorial Studio Wireframe",
  description:
    "Semantic reconstruction of an editorial design-studio template (Blumenkopf class). Brand assets and copy stripped. Agent-ready {%part%} system; reverse-engineered scroll-gate + carousel-fade motion on a 3px black-line Swiss grid.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} bg-paper text-ink`}>
      <body className="min-h-screen antialiased overflow-x-hidden flex flex-col font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
