import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Health Bean — Intelligent Health Platforms",
  description:
    "We build intelligent platforms that help people take control of their health — from the food they eat to the home they live in.",
  openGraph: {
    title: "Health Bean — Intelligent Health Platforms",
    description:
      "We build intelligent platforms that help people take control of their health — from the food they eat to the home they live in.",
    url: "https://healthbean.io",
    siteName: "Health Bean",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sourceSans.variable}`}>
      <body className="bg-cream antialiased">{children}</body>
    </html>
  );
}
