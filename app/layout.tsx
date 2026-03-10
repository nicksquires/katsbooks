import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Suspense } from "react";

const poppins = localFont({
  src: "../public/fonts/poppins-regular-webfont.woff2",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sample Vercel App",
  description: "Description of Vercel App should go here probably!",
  // keywords: [
  //   "katsbooks",
  //   "bookkeeper",
  //   "orangeville",
  //   "bookkeeping",
  //   "accountant",
  //   "taxes",
  //   "accounting service",
  //   "company",
  //   "kathryn ryan",
  // ],
  // // Added OpenGraph for better social media sharing (Facebook/LinkedIn)
  // openGraph: {
  //   title: "Katsbooks - Orangeville Bookkeeping Services",
  //   description: "Reliable bookkeeping for Orangeville small businesses.",
  //   url: "https://www.katsbooks.ca",
  //   siteName: "Katsbooks",
  //   locale: "en_CA",
  //   type: "website",
  // },
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
