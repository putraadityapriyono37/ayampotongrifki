// src/app/(site)/page.tsx
import Image from "next/image";
import Link from "next/link";

import Hero from "@/components/Hero";
import FeatureCard from "@/components/Cards/FeatureCard";
import ProductCard from "@/components/Cards/ProductCard";

/* ------------------ data ------------------ */
const WA_NUMBER = "6285702255674";
const waText = encodeURIComponent("Halo Rifki, saya ingin pesan/ konsultasi ayam potong.");
const waLink = `https://wa.me/${WA_NUMBER}?text=${waText}`;

const FEATURES = [
  { title: "Segar Setiap Hari", desc: "Ayam dipotong fresh setiap hari, langsung dari supplier terpercaya" },
  { title: "Potongan Sesuai Request", desc: "Mau potong besar/kecil, fillet, atau custom? Kami layani semua kebutuhan" },
  { title: "Harga Bersahabat", desc: "Harga kompetitif dengan kualitas terjamin, cocok untuk usaha maupun rumah tangga" },
  { title: "Antar Area Baturraden", desc: "Layanan antar untuk area Baturraden dan sekitarnya dengan pesanan tertentu" },
];

const PRODUCTS = [
  { title: "Ayam Broiler Segar", desc: "Tersedia utuh atau eceran sesuai kebutuhan", img: "/images/produk/broiler.jpg" },
  { title: "Potongan Custom", desc: "Dipotong sesuai permintaan Anda", img: "/images/produk/custom.jpg" },
  { title: "Ayam Kampung", desc: "Ayam jawa berkualitas premium", img: "/images/produk/kampung.jpg" },
  { title: "Untuk Hajatan", desc: "Melayani pesanan dalam jumlah besar", img: "/images/produk/hajatan.jpg" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <Hero
        badge="Segar · Higienis · Terpercaya"
        title={<><span>Jual Ayam Potong</span><br className="hidden sm:block" /> <span>Segar & Berkualitas</span></>}
        description="Ayam Potong “Rifki” – siap pesan harian, hajatan, dan kebutuhan usaha. Potongan bisa disesuaikan, harga bersahabat, dan prioritas kami selalu kebersihan."
        waLink={waLink}
        lihatHargaHref="/harga"
        imageSrc="/images/hero-owner.png"
      />

      {/* KENAPA PILIH KAMI */}
      <section className="mx-auto max-w-7xl px-5 pt-12 pb-14 md:pt-16 md:pb-16">
        <h2 className="text-center text-[clamp(1.8rem,3.2vw,2.5rem)] font-extrabold text-emerald-900">Kenapa Pilih Kami?</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-500">
          Komitmen kami adalah memberikan ayam potong terbaik untuk Anda
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} title={f.title} desc={f.desc} />
          ))}
        </div>
      </section>

      {/* TENTANG KAMI */}
      <section className="mx-auto max-w-7xl px-5 py-2 md:py-2">
        <div className="grid grid-cols-1 items-stretch gap-8 rounded-3xl border bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
          <div className="flex flex-col">
            <h3 className="text-2xl md:text-3xl font-extrabold text-emerald-900">Tentang Ayam Potong Rifki</h3>
            <p className="mt-3 text-slate-700">
              Kami melayani ayam potong segar harian—siap untuk kebutuhan rumah tangga, warung, dan hajatan. Potongan
              bisa disesuaikan, harga bersahabat, dan prioritas kami selalu kebersihan.
            </p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li> <strong>Alamat:</strong> Karangtengah (Sawangan) RT 02/01, Kec. Baturraden, Banyumas </li>
              <li> <strong>Kontak:</strong> 0857-0225-5674 (Rifki) </li>
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md overflow-hidden rounded-2xl border shadow-sm">
              <div className="relative aspect-square w-full bg-emerald-600 p-8">
                <Image src="/logo-ayam-rifki.png" alt="Logo Ayam Potong Rifki" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUK KAMI */}
      <section className="mx-auto max-w-7xl px-5 py-12 md:py-16">
        <div className="text-center md:text-left">
          <h2 className="text-[clamp(1.8rem,3.2vw,2.5rem)] font-extrabold text-emerald-900">Produk Kami</h2>
          <p className="mt-1 mb-6 text-slate-600">Berbagai pilihan ayam potong segar untuk kebutuhan Anda</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.title} {...p} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/produk" className="group inline-flex items-center gap-2 rounded-full border px-5 py-3 font-medium text-emerald-800 hover:bg-emerald-50">
            Lihat Semua Produk
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden><path fill="currentColor" d="m10 17 5-5-5-5v10Z" /></svg>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-16 md:pb-20">
        <div className="rounded-[28px] border border-emerald-100 bg-linear-to-b from-emerald-50 to-white p-6 sm:p-8 md:p-12 text-center shadow-[0_30px_70px_rgba(16,185,129,.15)]">
          <h3 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-emerald-950">Siap Pesan Ayam Potong Segar?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-slate-500">Hubungi kami sekarang untuk pemesanan atau konsultasi kebutuhan Anda</p>
          <div className="mt-6 md:mt-8">
            <a href={waLink} className="inline-flex items-center gap-3 rounded-full bg-emerald-600 px-6 py-3.5 text-white shadow ring-1 ring-emerald-500/40 transition hover:bg-emerald-500 md:px-8 md:py-4">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden><path fill="currentColor" d="M20 3.5A10.5 10.5 0 0 0 3.08 17.6L2 22l4.53-1.19A10.46 10.46 0 0 0 12 21a10.5 10.5 0 0 0 8-17.5Z" /></svg>
              </span>
              Chat WhatsApp Sekarang
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
