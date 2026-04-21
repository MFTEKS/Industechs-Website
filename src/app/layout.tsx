import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollToTop from "@/components/shared/ScrollToTop";
import CookieConsent from "@/components/shared/CookieConsent";
import { Providers } from "@/components/providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://industechs.com"),
  title: {
    default: "Industechs — Your operations, finally connected.",
    template: "%s | Industechs",
  },
  description:
    "Egypt's technology partner for industrial operations. Odoo ERP, AI agents, industrial automation, and digital transformation — built by engineers, driven by data.",
  keywords: [
    "Odoo partner Egypt",
    "industrial automation Cairo",
    "AI agents Egypt",
    "SCADA Egypt",
    "digital transformation Egypt",
    "ERP Egypt",
    "Industechs",
  ],
  authors: [{ name: "Industechs", url: "https://industechs.com" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://industechs.com",
    siteName: "Industechs",
    title: "Industechs — Your operations, finally connected.",
    description:
      "Egypt's technology partner for industrial operations. Built by engineers. Driven by data.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Industechs — Your operations, finally connected.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industechs — Your operations, finally connected.",
    description:
      "Egypt's technology partner for industrial operations. Odoo ERP, AI agents, and industrial automation — built by engineers.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
