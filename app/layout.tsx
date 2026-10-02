import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Preloader } from "@/components/Preloader";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clevertechmedia | Influencer Marketplace",
  description:
    "Luxury influencer collaboration marketplace connecting brands with premium creators and talent.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] antialiased">
        <Preloader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
