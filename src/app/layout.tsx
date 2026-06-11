import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "NOMADIC — A personal archive today. A collective city tomorrow.",
  description:
    "NOMADIC is an archive of artificial worlds, cinematic experiments, and unfinished cities. Founded by Dongmin Ma.",
  keywords: [
    "NOMADIC",
    "architecture",
    "cinematic",
    "AI",
    "worldbuilding",
    "Dongmin Ma",
  ],
  openGraph: {
    title: "NOMADIC",
    description:
      "A personal archive today. A collective city tomorrow.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
