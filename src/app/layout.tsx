import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { doctor } from "@/data";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBottomNav from "@/components/StickyBottomNav";
import FloatingButtons from "@/components/FloatingButtons";
import "./globals.css";

// Sustituto gratuito de "Minion Variable" (sugerida en el intake, de paga):
// Source Serif 4 ofrece la misma personalidad editorial/clínica seria en
// Google Fonts, sin colisionar con las fuentes ya usadas en otros sitios
// del registro (.agents/rules/registro-disenos.md).
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const sourceSerif = Source_Serif_4({ subsets: ["latin"], display: "swap", variable: "--font-source-serif" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: `${doctor.title} ${doctor.name} — ${doctor.specialty} en ${doctor.city}`,
    template: `%s | ${doctor.title} ${doctor.name}`,
  },
  description: `${doctor.specialistTitle}, ${doctor.subspecialty}. ${doctor.philosophy}`,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: `${doctor.title} ${doctor.name}`,
    title: `${doctor.title} ${doctor.name} — ${doctor.specialty} en ${doctor.city}`,
    description: `${doctor.specialistTitle}, ${doctor.subspecialty}.`,
  },
  twitter: {
    card: "summary",
    title: `${doctor.title} ${doctor.name} — ${doctor.specialty}`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#314557",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="pb-16 font-sans md:pb-0">
        <GoogleAnalytics />
        <Header />
        {children}
        <Footer />
        <FloatingButtons />
        <StickyBottomNav />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
