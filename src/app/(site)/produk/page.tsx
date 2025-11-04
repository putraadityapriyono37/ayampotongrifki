/* eslint-disable @next/next/no-img-element */
// src/app/produk/page.tsx
import Link from "next/link";
import Script from "next/script";
import { buildBreadcrumbJsonLd} from "@/lib/seo";
import { ogMeta, SITE_URL } from "@/lib/seo";
const WA_NUMBER = "6285702255674";
const wa = (text: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

type Product = {
  title: string;
  subtitle?: string;        // untuk “(Kampung)” gaya mockup
  desc: string;
  image: string;
  bulletsLeft: string[];    // poin kiri di “Tersedia:”
  bulletsRight?: string[];  // poin kanan (opsional)
  waMsg: string;
};

export const metadata = ogMeta({
  title: "Produk – Ayam Potong Rifki",
  description: "Pilihan ayam potong segar: broiler, kampung, custom potongan, dan kebutuhan hajatan.",
  path: "/produk",
  image: "/images/og/og-produk.jpg", // kalau ada; kalau belum, biarkan default
});

const PRODUCTS: Product[] = [
  {
    title: "Ayam Broiler",
    desc:
      "Ayam broiler segar, tersedia utuh atau eceran (paha, dada, sayap, fillet).",
    image: "/images/produk/broiler.jpg",
    bulletsLeft: ["Ayam utuh"],
    bulletsRight: ["Paha atas/bawah"],
    waMsg:
      "Halo Rifki, saya ingin pesan Ayam Broiler. Boleh info ketersediaan & harga ya?",
  },
  {
    title: "Ayam Jawa",
    subtitle: "(Kampung)",
    desc:
      "Ayam kampung berkualitas premium, tersedia utuh atau potong sesuai kebutuhan.",
    image: "/images/produk/kampung.jpg",
    bulletsLeft: ["Ayam kampung utuh"],
    bulletsRight: ["Potongan sesuai permintaan"],
    waMsg:
      "Halo Rifki, saya tertarik Ayam Kampung. Minta info stok & harga, terima kasih.",
  },
  {
    title: "Kebutuhan Hajatan",
    desc:
      "Melayani pesanan dalam jumlah besar untuk acara hajatan, arisan, atau kebutuhan usaha.",
    image: "/images/produk/hajatan.jpg",
    bulletsLeft: ["Jumlah besar", "Potongan seragam"],
    bulletsRight: ["Bersih & higienis", "Harga spesial"],
    waMsg:
      "Halo Rifki, saya butuh ayam untuk hajatan (jumlah besar). Mohon rekomendasi & penawaran.",
  },
  {
    title: "Custom Potongan",
    desc:
      "Ayam dipotong sesuai permintaan Anda, besar/kecil, bagian tertentu saja.",
    image: "/images/produk/custom.jpg",
    bulletsLeft: ["Potong custom", "Bagian pilihan"],
    bulletsRight: ["Sesuai kebutuhan masakan", "Konsultasi gratis"],
    waMsg:
      "Halo Rifki, saya ingin custom potongan ayam. Bisa bantu sesuai kebutuhan saya?",
  },
];

/* ---------------- components kecil ---------------- */

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-4 py-1 text-sm text-emerald-700 shadow-sm">
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" aria-hidden>
      <path fill="currentColor" d="M9 16.2 4.8 12 3.4 13.4 9 19l12-12-1.4-1.4z" />
    </svg>
    {children}
  </span>
);

const Dot = () => (
  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
);

function ProductWideCard({
  p,
}: {
  p: Product;
}) {
  return (
    <article className="overflow-hidden rounded-3xl border bg-white shadow-sm">
      {/* gambar */}
      <div className="relative h-56 w-full overflow-hidden sm:h-64 md:h-72">
        <img
          src={p.image}
          alt={p.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* konten */}
      <div className="p-6 md:p-7">
        <h3 className="text-[clamp(1.6rem,2.6vw,2rem)] font-extrabold text-emerald-900 leading-tight">
          {p.title}{" "}
          {p.subtitle && (
            <span className="text-emerald-900/80">{p.subtitle}</span>
          )}
        </h3>
        <p className="mt-1.5 text-slate-600">{p.desc}</p>

        {/* tersedia */}
        <div className="mt-4 text-sm">
          <div className="font-semibold text-slate-800 mb-2">Tersedia:</div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <ul className="space-y-2">
              {p.bulletsLeft.map((b) => (
                <li key={b} className="flex items-center gap-2 text-slate-700">
                  <Dot /> {b}
                </li>
              ))}
            </ul>
            {p.bulletsRight && (
              <ul className="space-y-2">
                {p.bulletsRight.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-slate-700">
                    <Dot /> {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6">
          <a
            href={wa(p.waMsg)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-medium text-white shadow ring-1 ring-emerald-500/40 transition hover:bg-emerald-500 md:w-auto"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden>
              <path
                fill="currentColor"
                d="M20 3.5A10.5 10.5 0 0 0 3.08 17.6L2 22l4.53-1.19A10.46 10.46 0 0 0 12 21a10.5 10.5 0 0 0 8-17.5Z"
              />
            </svg>
            Pesan Jenis Ini
          </a>
        </div>
      </div>
    </article>
  );
}

/* ---------------- page ---------------- */

export default function ProdukPage() {
  const crumbs = buildBreadcrumbJsonLd([
    { name: "Beranda", url: SITE_URL },
    { name: "Produk", url: `${SITE_URL}/produk` }
  ]);
  return (
    <>
      <Script id="ld-breadcrumb-produk" type="application/ld+json">
        {JSON.stringify(crumbs)}
      </Script>
      {/* HERO PRODUK */}
      <div className="bg-linear-to-b from-emerald-50 to-white">
        <section className="mx-auto max-w-7xl px-5 pt-12 pb-6 md:pt-16 md:pb-10 text-center">
          <Badge>Produk Kami</Badge>
          <h1 className="mt-4 text-[clamp(2rem,5vw,3rem)] font-extrabold leading-tight text-emerald-950">
            <span className="bg-linear-to-r from-emerald-900 via-emerald-800 to-emerald-600 bg-clip-text text-transparent">
              Pilihan Ayam Potong Segar
            </span>
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-slate-600">
            Berbagai jenis ayam potong berkualitas untuk memenuhi kebutuhan Anda
          </p>
        </section>
      </div>

      {/* GRID 2×2 – 4 produk */}
      <section className="mx-auto max-w-7xl px-5 pb-10 md:pb-14">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PRODUCTS.map((p) => (
            <ProductWideCard key={p.title} p={p} />
          ))}
        </div>
      </section>

      {/* MENERIMA PESANAN */}
      <section className="mx-auto max-w-7xl px-5 py-12 md:py-14">
        <h2 className="text-center text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-emerald-900">
          Menerima Pesanan
        </h2>

        {/* chips */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          {[
            "Ayam Broiler / Ayam Jawa",
            "Potongan Besar/Kecil",
            "Kebutuhan Hajatan",
            "Semua Jenis Potongan",
          ].map((t) => (
            <span
              key={t}
              className="
          inline-flex items-center justify-center
          rounded-2xl border border-emerald-100 bg-white/95
          px-6 py-4 text-[15px] font-medium text-emerald-900
          shadow-[0_6px_24px_rgba(16,185,129,.08)]
          hover:shadow-[0_10px_30px_rgba(16,185,129,.12)]
          transition
          min-w-[220px] text-center
        "
            >
              {t}
            </span>
          ))}
        </div>

        {/* tombol konsultasi */}
        <div className="mt-7 flex justify-center">
          <a
            href={`https://wa.me/6285702255674?text=${encodeURIComponent(
              "Halo Rifki, saya ingin konsultasi produk ayam potong."
            )}`}
            className="
        inline-flex items-center gap-2
        rounded-full bg-emerald-700 px-7 py-3.5
        font-semibold text-white
        shadow-[0_10px_30px_rgba(16,185,129,.25)]
        ring-1 ring-emerald-600/50
        hover:bg-emerald-600
        transition
      "
          >
            {/* ikon WA kecil */}
            <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden>
              <path
                fill="currentColor"
                d="M20 3.5A10.5 10.5 0 0 0 3.08 17.6L2 22l4.53-1.19A10.46 10.46 0 0 0 12 21a10.5 10.5 0 0 0 8-17.5Z"
              />
            </svg>
            Konsultasi Produk
          </a>
        </div>
      </section>

    </>
  );
}
