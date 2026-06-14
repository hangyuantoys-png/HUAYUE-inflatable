import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Header } from "@/components/Header";
import { company } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "Huayue Toys | Commercial Inflatable Water Park Manufacturer",
    template: "%s | Huayue Toys"
  },
  description:
    "Guangzhou Huayue Inflatable Products Co., Ltd. supplies OEM/ODM inflatable water parks, slides, buoys and custom aqua park solutions for global B2B buyers.",
  openGraph: {
    title: "Huayue Toys | Commercial Inflatable Water Park Manufacturer",
    description: "OEM/ODM commercial inflatable water parks, water slides, buoys and custom aqua park products.",
    images: ["/assets/hero-water-park.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
