import type { Metadata, Viewport } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow-family",
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

// hero "design." only (as on nano-design.ch); separate instance keeps the other weights upright-only
const barlowItalic = Barlow({
  variable: "--font-barlow-italic",
  weight: "300",
  style: "italic",
  subsets: ["latin"],
});

// search snippet: service first, origin ("aus", not "in": clients come from all of Switzerland), brand last
const title = "Webdesign & Logodesign aus Orpund bei Biel | nano design";
const description =
  "Webdesign, Logodesign, Print Design und Online-Shops aus Orpund bei Biel, für die ganze Schweiz. Websites ab CHF 690.–, Logos ab CHF 250.–. Jetzt anfragen.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nano-design.ch"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: "/",
    siteName: "nano design",
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#080808",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH" className={`${barlow.variable} ${barlowItalic.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
