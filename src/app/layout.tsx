import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/react';


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LawChanakyas — Law. Order. Intelligence.",
    template: "%s — LawChanakyas",
  },
  description:
    "LawChanakyas: authoritative, elegant, and high‑tech legal platform for advocates, students, and the public.",
  keywords: [
    "LawChanakyas",
    "law",
    "advocates",
    "legal tech",
    "courtroom simulation",
    "AI legal chatbot",
  ],
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  metadataBase: new URL("https://lawchanakyas.example"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans text-white bg-black min-h-screen`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1LL9CRHT91"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1LL9CRHT91');
          `}
        </Script>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 bg-white text-black relative z-10 min-h-[60vh]" >
            <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
              {children}
            </div>
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
