import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { organizationSchema, websiteSchema } from "./structured-data";

// Body: neutral sans. Display: tight grotesk.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

// Display: transitional serif. The tight grotesk (Archivo) read as a tech
// brand; capital-stewardship brands (Blackstone, Brookfield, KKR) all set
// display type in a high-contrast serif. Body/UI stays Inter.
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const title = "Perkway Group | Diversified Holding Company";
const description =
  "Perkway Group is a diversified holding company with principal investments spanning real estate, hospitality, technology, and financial services.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.perkways.com"),
  title,
  description,
  // The apex 307s to www, so www is the one host Google should consolidate on.
  // "./" resolves per-route, so every page canonicals to itself, not to home.
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: "Perkway Group",
    title,
    description,
    url: "https://www.perkways.com",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Perkway Group" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // suppressHydrationWarning: the inline script in <head> strips `no-js` from
  // <html> before React hydrates, so server and client className deliberately
  // differ. Without it, every page load logs a hydration mismatch error.
  return (
    <html lang="en" className={`no-js ${inter.variable} ${sourceSerif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.remove('no-js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, websiteSchema]) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
