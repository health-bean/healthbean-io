import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { JsonLd } from "@/components/json-ld";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const SITE_URL = "https://healthbean.io";
const SITE_NAME = "Health Bean";
const TITLE = "Health Bean — Data-driven platforms for chronic illness";
const DESCRIPTION =
  "Chronic illness is complex. The tools haven't kept up. Health Bean builds data-driven platforms for chronic illness and home health — built for real life.";
const GA_ID = "G-QJNH61VK06";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Health Bean",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "chronic illness",
    "autoimmune",
    "healing protocols",
    "symptom tracking",
    "home health",
    "environmental exposure",
    "ChewIQ",
    "HoneyDoIQ",
    "functional medicine",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sourceSans.variable}`}>
      <body className="bg-cream antialiased">
        {children}
        <JsonLd />
      </body>
      <GoogleAnalytics gaId={GA_ID} />
    </html>
  );
}
