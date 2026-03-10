import type { Metadata } from "next";
import { Asap, Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const asap = Asap({
  variable: "--font-asap",
  subsets: ["latin"],
});

const poppins = localFont({
  src: "../public/fonts/poppins-regular-webfont.woff2",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Katsbooks - Orangeville's Top Independent Bookkeeping Firm",
  description:
    "Bookeeping services based out of Orangeville, Ontario serving small to medium-sized businesses and individual clients",
  keywords: [
    "katsbooks",
    "bookkeeper",
    "orangeville",
    "bookkeeping",
    "accountant",
    "taxes",
    "accounting service",
    "company",
    "kathryn ryan",
  ],
  // Pro Tip: Add OpenGraph for better social media sharing (Facebook/LinkedIn)
  openGraph: {
    title: "Katsbooks - Orangeville Bookkeeping Services",
    description: "Reliable bookkeeping for Orangeville small businesses.",
    url: "https://www.katsbooks.ca",
    siteName: "Katsbooks",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="forest">
      <body className={`${poppins.variable}`}>
        <Header />
        <Suspense fallback={<div className="loading-spinner" />}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
