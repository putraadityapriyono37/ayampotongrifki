import Link from "next/link";

/** Ikon kecil berbasis SVG agar tanpa dependency */
const IcMap = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" className="text-emerald-300">
    <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/>
  </svg>
);
const IcPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" className="text-emerald-300">
    <path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3c1.2.4 2.6.6 4 .6c.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10 21 3 14 3 3c0-.6.4-1 1-1h2.5c.6 0 1 .4 1 1c0 1.4.2 2.8.6 4c.1.4 0 .8-.3 1.1L6.6 10.8Z"/>
  </svg>
);
const IcClock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" className="text-emerald-300">
    <path fill="currentColor" d="M12 1.99a10 10 0 1 0 0 20a10 10 0 0 0 0-20Zm1 10.41l3.3 1.9l-1 1.73L11 13V6h2v6.4Z"/>
  </svg>
);
const IcArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24">
    <path fill="currentColor" d="M10 17l5-5l-5-5v10Z"/>
  </svg>
);

export default function Footer() {
  const waHref =
    "https://wa.me/6285702255674?text=" +
    encodeURIComponent("Halo Rifki, saya mau tanya & pesan ayam potong.");

  return (
    <footer className="relative overflow-hidden">
      {/* latar gradasi gelap */}
      <div className="bg-linear-to-b from-emerald-900 to-emerald-950">
        {/* highlight halus */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,.06),transparent_60%)]" />

        <div className="mx-auto max-w-6xl px-4 py-10 text-emerald-50">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="flex gap-3">
              <img src="/logo-ayam-rifki.png" alt="Ayam Potong Rifki" className="h-10 w-10 rounded bg-emerald-800/40 p-1.5" />
              <div className="text-sm leading-relaxed">
                <p className="font-semibold text-emerald-200">Ayam Potong Rifki</p>
                <p className="text-emerald-300/80">Segar, Bersih, Siap Masak</p>
                <p className="mt-3 text-emerald-100/80">
                  Melayani ayam potong segar harian untuk kebutuhan rumah tangga, warung, dan hajatan.
                </p>
              </div>
            </div>

            {/* Kontak Kami */}
            <div>
              <p className="mb-3 font-semibold text-emerald-200">Kontak Kami</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-emerald-800 p-1.5"><IcMap /></span>
                  <span className="text-emerald-100/90">
                    Karangtengah (Sawangan) RT 02/01,<br />Kec. Baturraden, Banyumas
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="rounded-full bg-emerald-800 p-1.5"><IcPhone /></span>
                  <a href="tel:+6285702255674" className="text-emerald-100/90 hover:text-white">0857-0225-5674 (Rifki)</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="rounded-full bg-emerald-800 p-1.5"><IcClock /></span>
                  <span className="text-emerald-100/90">Senin–Minggu 05.00–17.00 WIB</span>
                </li>
              </ul>
            </div>

            {/* Link Cepat */}
            <div>
              <p className="mb-3 font-semibold text-emerald-200">Link Cepat</p>
              <ul className="space-y-1.5 text-sm">
                {[
                  { href: "/", label: "Beranda" },
                  { href: "/produk", label: "Produk" },
                  { href: "/harga", label: "Harga" },
                  { href: "/testimoni", label: "Testimoni" },
                  { href: "/faq", label: "FAQ" },
                  { href: "/kontak", label: "Kontak" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="inline-flex items-center gap-2 text-emerald-100/90 hover:text-white"
                    >
                      <span className="h-1 w-1 rounded-full bg-emerald-400/70" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pesan Sekarang */}
            <div>
              <p className="mb-3 font-semibold text-emerald-200">Pesan Sekarang</p>
              <p className="mb-3 text-sm text-emerald-100/90">
                Hubungi kami via WhatsApp untuk pemesanan dan info lebih lanjut.
              </p>
              <a
                href={waHref}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow
                           ring-1 ring-emerald-500/40 transition hover:bg-emerald-500"
              >
                {/* logo WA kecil */}
                <svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M20 3.5A10.5 10.5 0 0 0 3.08 17.6L2 22l4.53-1.19A10.46 10.46 0 0 0 12 21a10.5 10.5 0 0 0 8-17.5Z"/></svg>
                Chat WhatsApp
              </a>
            </div>
          </div>

          {/* garis halus */}
          <div className="my-6 h-px bg-emerald-800/60" />

          {/* copyright */}
          <p className="text-center text-xs text-emerald-200/80">
            © {new Date().getFullYear()} Ayam Potong Rifki. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>

      {/* (Opsional) tombol mengambang WA — kalau sudah punya komponen lain, hapus blok ini */}
      <a
        href={waHref}
        className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg ring-emerald-400/40 hover:bg-emerald-400"
        aria-label="Chat WhatsApp"
      >
        <svg width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M20 3.5A10.5 10.5 0 0 0 3.08 17.6L2 22l4.53-1.19A10.46 10.46 0 0 0 12 21a10.5 10.5 0 0 0 8-17.5Z"/></svg>
      </a> 
    </footer>
  );
}
