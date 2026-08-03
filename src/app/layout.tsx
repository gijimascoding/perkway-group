import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
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

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-archivo",
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
  return (
    <html lang="en" className={`no-js ${inter.variable} ${archivo.variable}`}>
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
