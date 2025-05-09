import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emmett Swejda",
  description: "Emmett Swejda's Porfolio",
};


// Components Import
import Footer from "@/components/footer"
import AboutMe from "@/components/aboutme"
import AboutMeCard from "@/components/aboutme";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head><title>Portfolio</title><link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400..700&display=swap" rel="stylesheet"/></head>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <AboutMeCard/>
      <Footer />
      </body>
    </html>
  );
}
