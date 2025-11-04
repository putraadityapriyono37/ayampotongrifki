// src/seo.ts
import type { ReactNode } from "react";

/* =======================
 * Konstanta dasar situs
 * ======================= */
export const SITE_URL = "https://ayampotongrifki.vercel.app";
export const BUSINESS_NAME = "Ayam Potong Rifki";
export const PHONE_E164 = "+6285702255674"; // format E.164
export const OG_DEFAULT = `${SITE_URL}/images/og/og-home.jpg`; // 1200x630
export const ICON_URL = `${SITE_URL}/icon.png`;

/* =======================
 * Util / helper kecil
 * ======================= */

// Pastikan URL absolut (mis. path -> https://domain/path)
export function absUrl(pathOrUrl: string): string {
  if (!pathOrUrl) return SITE_URL;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

// Konversi ReactNode → string polos untuk JSON-LD (tanpa markup)
function nodeToText(n: ReactNode): string {
  if (n == null) return "";
  if (typeof n === "string" || typeof n === "number") return String(n);
  if (Array.isArray(n)) return n.map(nodeToText).join("");
  // Untuk elemen React / object lain, kosongkan (hindari HTML di JSON-LD)
  return "";
}

/* =======================
 * Local Business JSON-LD
 * ======================= */

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Butcher", // bisa juga "FoodEstablishment" / "GroceryStore"
  "@id": `${SITE_URL}#business`,
  name: BUSINESS_NAME,
  url: SITE_URL,
  telephone: PHONE_E164,
  image: OG_DEFAULT,
  logo: ICON_URL,
  priceRange: "Rp",
  servesCuisine: "Poultry",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Karangtengah (Sawangan) RT 02/01",
    addressLocality: "Baturraden",
    addressRegion: "Jawa Tengah",
    addressCountry: "ID",
  },
  openingHours: "Mo-Su 05:00-17:00",
  areaServed: ["Baturraden", "Banyumas"],
  sameAs: [
    // Tambahkan jika ada: tautan FB/IG/Maps resmi
  ],
  hasMap:
    "https://www.google.com/maps/place/Rifki+Chicken/@-7.3445627,109.224277,18z/",
  geo: {
    "@type": "GeoCoordinates",
    latitude: -7.3445627,
    longitude: 109.224277,
  },
} as const;

/* =======================
 * JSON-LD builders
 * ======================= */

// FAQPage: menerima 'a' sebagai string atau ReactNode
export function buildFaqJsonLd(
  items: Array<{ q: string; a: string | ReactNode }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: typeof a === "string" ? a : nodeToText(a),
      },
    })),
  };
}

// BreadcrumbList
export function buildBreadcrumbJsonLd(
  crumbs: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absUrl(c.url),
    })),
  };
}

// Product/Offer (opsional)
export function buildProductJsonLd({
  name,
  description,
  image,
  price,
  url = SITE_URL,
}: {
  name: string;
  description: string;
  image: string;
  price: number | string;
  url?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: absUrl(image),
    offers: {
      "@type": "Offer",
      url: absUrl(url),
      priceCurrency: "IDR",
      price: String(price),
      availability: "https://schema.org/InStock",
    },
  };
}

/* =======================
 * Helper metadata (Next)
 * ======================= */

/**
 * Helper untuk membuat metadata Open Graph & Twitter secara singkat.
 * Pakai di tiap page:
 * export const metadata = ogMeta({
 *   title: 'Judul Halaman',
 *   description: 'Deskripsi',
 *   path: '/produk',  // untuk canonical
 *   image: '/images/og/og-produk.jpg', // opsional
 * });
 */
export function ogMeta({
  title,
  description,
  path = "/",
  image = OG_DEFAULT,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}) {
  const url = absUrl(path);
  const ogImage = absUrl(image);

  return {
    title,
    description,
    alternates: { canonical: url },
    icons: { icon: ICON_URL, shortcut: ICON_URL, apple: ICON_URL },
    openGraph: {
      type: "website",
      url,
      siteName: BUSINESS_NAME,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: BUSINESS_NAME }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [ogImage],
    },
  };
}
