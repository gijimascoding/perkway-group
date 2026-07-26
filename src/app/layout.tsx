import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
    <html lang="en" className={`no-js ${inter.variable} ${archivo.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.remove('no-js')" }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
