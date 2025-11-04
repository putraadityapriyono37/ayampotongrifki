"use client";

import * as React from "react";
import Link from "next/link";
import FAQItem from "@/components/Accordions/FAQItem";

const WA_NUMBER = "6285702255674";
const waText = encodeURIComponent("Halo, saya ingin bertanya tentang ayam potong Rifki.");
const waLink = `https://wa.me/${WA_NUMBER}?text=${waText}`;

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "Dari mana asal ayam yang dijual?",
    a: "Dari pemasok lokal pilihan yang diawasi kualitasnya setiap hari.",
  },
  {
    q: "Apakah proses pemotongan sudah higienis?",
    a: "Ya. Proses dilakukan secara bersih, menggunakan sarung tangan & peralatan steril, dan area kerja rutin dibersihkan.",
  },
  {
    q: "Bisa request potongan khusus?",
    a: "Bisa. Potongan besar/kecil, fillet, dada/paha/sayap, hingga custom sesuai kebutuhan Anda.",
  },
  {
    q: "Berapa minimal order?",
    a: "Tidak ada minimal untuk pembelian ecer. Untuk pesanan besar/hajatan, diskusikan terlebih dahulu via WhatsApp.",
  },
  {
    q: "Jam operasional buka kapan?",
    a: "Setiap hari, pukul 05.00 – 17.00 WIB (menyesuaikan ketersediaan stok).",
  },
  {
    q: "Apakah ada layanan pengantaran?",
    a: "Ya, untuk area Baturraden & sekitarnya (syarat & ketentuan berlaku).",
  },
  {
    q: "Bagaimana sistem pembayaran?",
    a: "Tunai atau transfer bank/QRIS. Untuk pesanan besar, bisa DP sesuai kesepakatan.",
  },
  {
    q: "Cara pesan yang tercepat bagaimana?",
    a: (
      <>
        Klik tombol <strong>Pesan/Hubungi via WhatsApp</strong> dan sebutkan
        jenis potongan, jumlah, dan lokasi Anda.
      </>
    ),
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i)); // ❗ single-open

  return (
    <>
      {/* HERO style FAQ */}
      <header className="bg-linear-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-7xl px-5 pt-14 pb-10 md:pt-16 md:pb-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-3 py-1 text-sm text-emerald-700 shadow-sm">
              Pertanyaan Umum
            </span>
            <h1 className="mt-4 text-[clamp(2rem,4.8vw,3rem)] font-extrabold text-emerald-950">
              Frequently Asked Questions
            </h1>
            <p className="mt-2 text-slate-600">
              Temukan jawaban untuk pertanyaan yang sering ditanyakan
            </p>
          </div>
        </div>
      </header>
      

      {/* Daftar FAQ */}
      <section className="mx-auto max-w-4xl px-5 pb-14">
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <FAQItem
              key={f.q}
              question={f.q}
              answer={f.a}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </section>

      {/* CTA bawah */}
      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="rounded-2xl border border-emerald-100 bg-linear-to-b from-emerald-50 to-white p-8 text-center shadow-[0_16px_50px_rgba(16,185,129,.12)] md:p-12">
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold text-emerald-900">
            Masih Ada Pertanyaan?
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-slate-600">
            Jangan ragu untuk menghubungi kami langsung via WhatsApp
          </p>
          <div className="mt-6">
            <a
              href={waLink}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 font-medium text-white shadow ring-1 ring-emerald-500/40 transition hover:bg-emerald-500"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
