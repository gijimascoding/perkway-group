import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

const title = "Perkway Group | Diversified Holding Company";
const description =
  "Perkway Group is a diversified holding company with principal investments spanning real estate, hospitality, technology, and financial services.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.perkways.com"),
  title,
  description,
  openGraph: {
    type: "website",
    siteName: "Perkway Group",
    title,
    description,
    url: "https://www.perkways.com",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: "Perkway Group" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <head>
        {/* No-JS fallback: scroll-reveal wrappers render at opacity:0 until JS
            adds `.in`. Without JS, force them visible so content is never hidden. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
