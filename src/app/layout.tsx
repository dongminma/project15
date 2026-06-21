import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "NOMADIC — A World Under Construction",
  description: "NOMADIC is a world-building project for those who refuse to stand still.",
  keywords: ["NOMADIC", "worldbuilding", "architecture", "cinema", "future society"],
  openGraph: {
    title: "NOMADIC",
    description: "A World Under Construction.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
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
