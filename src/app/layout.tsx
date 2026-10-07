import type { Metadata, Viewport } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow-family",
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const title = "nano design – web & print design";
const description =
  "Schweizer Design-Agentur für Webdesign, Logodesign, Print Design und Online-Shops. Nano Web & Print Design, Orpund.";

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
    <html lang="de-CH" className={`${barlow.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
