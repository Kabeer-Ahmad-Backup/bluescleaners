import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blues Cleaners — Commercial & Residential Cleaning | Quad Cities",
  description:
    "Insured commercial and residential cleaning serving Davenport, Bettendorf, Rock Island, Moline and the Quad Cities. Window cleaning, pressure washing and deep cleaning with military-grade precision.",
  keywords: [
    "Quad Cities cleaning",
    "Davenport commercial cleaning",
    "pressure washing",
    "window cleaning",
    "deep cleaning",
    "residential cleaning Iowa",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-ink">
        {children}
      </body>
    </html>
  );
}
