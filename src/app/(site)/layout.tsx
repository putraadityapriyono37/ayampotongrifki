import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL, localBusinessJsonLd } from "@/lib/seo";
import { getSettings } from "@/lib/settings"; // ✅ import

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ayam Potong Rifki",
    template: "%s · Ayam Potong Rifki",
  },
  description: "Segar • Bersih • Terpercaya • Halal",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Ayam Potong Rifki",
    title: "Ayam Potong Rifki",
    description: "Segar • Bersih • Terpercaya • Halal",
    images: [
      {
        url: "/images/og/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Ayam Potong Rifki",
      },
    ],
    locale: "id_ID",
  },
  verification: {
    google: "Nyrhj7bWwN_p3cgj_AfIUGkGPZOFGnKS30EMYvllVdw",
  },
};

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSettings(); // ✅ ambil settings

  return (
    <>
      <Navbar settings={settings} /> {/* ✅ kirim ke Navbar */}

      <main className="min-h-[calc(100svh-var(--nav-h))]">
        {children}
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />

      <Footer /> {/* Footer sudah mandiri */}
    </>
  );
}