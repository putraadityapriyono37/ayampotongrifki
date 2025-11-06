// src/app/(site)/layout.tsx
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL, localBusinessJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL), // bikin URL OG/Canonicals jadi absolut
  title: {
    default: "Ayam Potong Rifki",
    template: "%s · Ayam Potong Rifki",
  },
  description: "Segar, Bersih, Siap Masak",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },         // opsional
      { url: "/icon.png", type: "image/png" },       // /public/icon.png
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }], // opsional
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Ayam Potong Rifki",
    title: "Ayam Potong Rifki",
    description: "Segar, Bersih, Siap Masak",
    images: [
      {
        url: "/images/og/og-home.jpg",  // pastikan file ada & 1200x630
        width: 1200,
        height: 630,
        alt: "Ayam Potong Rifki – Segar, Bersih, Siap Masak",
      },
    ],
    locale: "id_ID",
  },
  // >>> Tambahkan verifikasi Google di sini <<<
  verification: {
    google: "Nyrhj7bWwN_p3cgj_AfIUGkGPZOFGnKS30EMYvllVdw",
  },
  // Jika `verification` belum tersedia di versi Next kamu,
  // pakai alternatif berikut:
  // other: {
  //   "google-site-verification": "Nyrhj7bWwN_p3cgj_AfIUGkGPZOFGnKS30EMYvllVdw",
  // },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {/* jaga tinggi minimum konten; var(--nav-h) di-set di Navbar */}
      <main className="min-h-[calc(100svh-var(--nav-h))]">{children}</main>

      {/* JSON-LD LocalBusiness */}
      <script
        type="application/ld+json"
        // aman karena value berasal dari konstanta kita sendiri
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <Footer />
    </>
  );
}
