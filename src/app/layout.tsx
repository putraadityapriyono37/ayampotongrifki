import type { Metadata } from "next";
import "@/styles/globals.css";
import { SITE_URL } from "@/lib/seo";

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
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-white text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
