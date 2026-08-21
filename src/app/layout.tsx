import type { Metadata, Viewport } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import FloatingJoinBtn from "@/components/layout/FloatingJoinBtn";
import Preloader from "@/components/layout/Preloader";
import { constructMetadata } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = constructMetadata();

export const viewport: Viewport = {
  themeColor: "#070707",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${inter.variable} ${bebasNeue.variable}`}
      suppressHydrationWarning
    >
      <body
        className="antialiased bg-[#0A0A0A] text-white selection:bg-[#C89B3C] selection:text-black min-h-screen flex flex-col justify-between"
        suppressHydrationWarning
      >
        <Preloader />
        <ScrollProgress />
        <Navbar />
        <div className="flex-1">{children}</div>
        <FloatingJoinBtn />
        <Footer />
      </body>
    </html>
  );
}
