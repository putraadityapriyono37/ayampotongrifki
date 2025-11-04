"use client";

import * as React from "react";
import Link from "next/link";

/* --- ikon kecil --- */
const Phone = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}><path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.25c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C12.3 21 3 11.7 3 1a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z"/></svg>
);
const MapPin = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/></svg>
);
const Clock = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}><path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12 10.26 10.26 0 0 0 12 1.75Zm.75 10.25V6.5a.75.75 0 1 0-1.5 0V12a.75.75 0 0 0 .22.53l3.5 3.5a.75.75 0 1 0 1.06-1.06l-3.28-3Z"/></svg>
);
const Send = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}><path fill="currentColor" d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2 0 7z"/></svg>
);

/* --- constants --- */
const WA_NUMBER = "6285702255674";
const WA_LINK = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

// Google Maps — tombol menuju tautan yang kamu kirim
const GMAPS_LINK = "https://maps.app.goo.gl/V56uarBQhCjzGPZR8";

// ⬇️ ganti konstanta ini
const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1808.5106456592016!2d109.224277!3d-7.3445627!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ff5e0162caa37%3A0x985f023b7f7321c6!2sRifki%20Chicken!5e1!3m2!1sid!2sid!4v1762260120149!5m2!1sid!2sid";

export default function KontakPage() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [need, setNeed] = React.useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      "Halo Ayam Potong Rifki 👋",
      name && `Nama: ${name}`,
      phone && `Nomor: ${phone}`,
      need && `Kebutuhan: ${need}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(WA_LINK(msg), "_blank");
  };

  return (
    <>
      {/* HERO */}
      <header className="bg-linear-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-7xl px-5 pt-14 pb-10 md:pt-16 md:pb-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-3 py-1 text-sm text-emerald-700 shadow-sm">
              Hubungi Kami
            </span>
            <h1 className="mt-4 text-[clamp(2rem,4.8vw,3rem)] font-extrabold text-emerald-950">
              Kontak & Lokasi
            </h1>
            <p className="mt-2 text-slate-600">
              Kami siap melayani kebutuhan ayam potong Anda
            </p>
          </div>
        </div>
      </header>
      {/* GRID: Info & Form */}
      <section className="mx-auto max-w-7xl gap-6 px-5 pb-14 md:grid md:grid-cols-2">
        {/* Info Kontak */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-emerald-800">
              <MapPin className="h-5 w-5" />
              <span className="font-semibold">Alamat</span>
            </div>
            <p className="text-slate-700">
              Karangtengah (Sawangan) RT 02/01<br />
              Kec. Baturraden, Kab. Banyumas<br />Jawa Tengah
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-emerald-800">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">Telepon / WhatsApp</span>
            </div>
            <Link
              href={WA_LINK("Halo, saya ingin bertanya pesanan ayam.")}
              target="_blank"
              className="font-semibold text-emerald-700 hover:text-emerald-600"
            >
              0857-0225-5674 (Rifki)
            </Link>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-emerald-800">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">Jam Operasional</span>
            </div>
            <p className="text-slate-700">
              Senin – Minggu<br />
              05.00 – 17.00 WIB
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
            <p className="mb-3 font-semibold text-emerald-900">
              Cara Tercepat Hubungi Kami
            </p>
            <a
              href={WA_LINK("Halo, saya ingin konsultasi/ pesan ayam.")}
              target="_blank"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-medium text-white shadow ring-1 ring-emerald-500/40 transition hover:bg-emerald-500"
            >
              <Phone className="h-5 w-5" />
              Chat WhatsApp Sekarang
            </a>
          </div>
        </div>

        {/* Form Kirim Pesan */}
        <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
          <h3 className="mb-4 text-xl font-extrabold text-emerald-900">
            Kirim Pesan
          </h3>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Nama Lengkap
              </label>
              <input
                className="w-full rounded-lg border px-4 py-2 outline-none ring-emerald-600/20 focus:ring"
                placeholder="Masukkan nama Anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Nomor Telepon
              </label>
              <input
                className="w-full rounded-lg border px-4 py-2 outline-none ring-emerald-600/20 focus:ring"
                placeholder="08xx-xxxx-xxxx"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Kebutuhan Anda
              </label>
              <textarea
                className="min-h-[120px] w-full rounded-lg border px-4 py-2 outline-none ring-emerald-600/20 focus:ring"
                placeholder="Ceritakan kebutuhan ayam potong Anda..."
                value={need}
                onChange={(e) => setNeed(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-emerald-600 to-emerald-700 px-5 py-3 font-semibold text-white shadow transition hover:from-emerald-500 hover:to-emerald-600"
            >
              <Send className="h-5 w-5" />
              Kirim via WhatsApp
            </button>
            <p className="text-center text-xs text-slate-500">
              Pesan akan dikirim langsung ke WhatsApp kami
            </p>
          </form>
        </div>
      </section>

      {/* Lokasi Kami + Map */}
      <section className="mx-auto max-w-7xl px-5 pb-16">
        <h2 className="mb-4 text-center text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold text-emerald-900">
          Lokasi Kami
        </h2>

        <div className="rounded-2xl border border-emerald-100 bg-white p-3 shadow-sm">
          <div className="relative h-[380px] w-full overflow-hidden rounded-xl">
            {/* Embed Google Maps (query alamat) */}
            <iframe
              src={MAP_EMBED}
              loading="lazy"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Ayam Potong Rifki"
            />
          </div>

          <div className="mt-4 flex justify-center">
            <a
              href={GMAPS_LINK}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 font-medium text-emerald-800 hover:bg-emerald-50"
            >
              <MapPin className="h-4 w-4" />
              Buka di Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
