import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nero — Veined Marble & Gold",
  description:
    "A premium animated theme blank: polished nero marble veined with gold, didone serif, gallery restraint. GSAP parallax + Lenis smooth scroll + loading sequence. Design by Mattae Cooper.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Nero defaults to dark luxury. 'light' = statuario marble alt. Set before paint.
  const themeInit = `(function(){try{var t=localStorage.getItem('nero-theme');if(t==='light'){document.documentElement.classList.add('light');document.documentElement.style.colorScheme='light';}else{document.documentElement.style.colorScheme='dark';}}catch(e){}})();`;
  return (
    <html lang="en" className={`${playfair.variable} ${jost.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
