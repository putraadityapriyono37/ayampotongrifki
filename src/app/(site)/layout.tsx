// src/app/(site)/layout.tsx
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { localBusinessJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: "Ayam Potong Rifki",
    template: "%s · Ayam Potong Rifki",
  },
  description: "Segar, Bersih, Siap Masak",
  icons: {
    // Next akan pakai salah satu dari ini. Pastikan file ada.
    icon: [
      { url: "/favicon.ico", sizes: "any" },       // opsional (ICO)
      { url: "/icon.png", type: "image/png" },     // /public/icon.png atau /app/(site)/icon.png
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }], // opsional
  },
  // opsional: tambahkan open graph/og:image bila perlu
  openGraph: {
    title: "Ayam Potong Rifki",
    description: "Segar, Bersih, Siap Masak",
    images: ["images/og/og-home.jpg"],
  },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {/* jaga tinggi minimum konten; var(--nav-h) sudah di-set di Navbar */}
      <main className="min-h-[calc(100svh-var(--nav-h))]">{children}</main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Footer />
    </>
  );
}
