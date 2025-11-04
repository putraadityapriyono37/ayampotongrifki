/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

/* ---------- kecil: ikon ---------- */
const Percent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden {...props}>
    <path fill="currentColor" d="m19 5l-1-1L5 17l1 1L19 5ZM7 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm10 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"/>
  </svg>
);
const Check = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden {...props}>
    <path fill="currentColor" d="M9 16.2 4.8 12 3.4 13.4 9 19l12-12-1.4-1.4z"/>
  </svg>
);
const Day247 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden {...props}>
    <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8.009 8.009 0 0 1-8 8Zm.5-13h-1v6l5 3l.5-.87l-4.5-2.63V7Z"/>
  </svg>
);
const WaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden {...props}>
    <path fill="currentColor" d="M20 3.5A10.5 10.5 0 0 0 3.08 17.6L2 22l4.53-1.19A10.46 10.46 0 0 0 12 21a10.5 10.5 0 0 0 8-17.5Z"/>
  </svg>
);

/* ---------- data ---------- */
const WA = "6285702255674";
const waText = encodeURIComponent("Halo Rifki, saya ingin menanyakan daftar harga terbaru & ketersediaan stok.");
const waLink = `https://wa.me/${WA}?text=${waText}`;

type Row = { produk: string; satuan: string; harga: string; href?: string };

const HARGA: Row[] = [
  { produk: "Ayam Broiler Utuh", satuan: "per ekor", harga: "Rp 35.000 – 45.000" },
  { produk: "Paha Atas Broiler", satuan: "per kg",   harga: "Rp 40.000 – 45.000" },
  { produk: "Paha Bawah Broiler", satuan: "per kg", harga: "Rp 38.000 – 43.000" },
  { produk: "Dada Fillet Broiler", satuan: "per kg", harga: "Rp 45.000 – 50.000" },
  { produk: "Sayap Broiler",       satuan: "per kg", harga: "Rp 35.000 – 40.000" },
  { produk: "Ceker Ayam",          satuan: "per kg", harga: "Rp 25.000 – 30.000" },
  { produk: "Ayam Kampung Utuh",   satuan: "per ekor", harga: "Rp 70.000 – 90.000" },
  { produk: "Ayam Kampung Potong", satuan: "per kg",   harga: "Rp 50.000 – 60.000" },
  { produk: "Paket Hajatan (10 ekor+)", satuan: "paket", harga: "Harga spesial – hubungi", href: waLink },
];

/* ---------- kartu kecil ---------- */
function MiniFeature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-emerald-100 bg-white p-6 text-center shadow-sm">
      <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
        {icon}
      </div>
      <div className="text-lg font-extrabold text-emerald-900">{title}</div>
      <p className="mt-1 text-sm text-slate-500">{text}</p>
    </div>
  );
}

/* ---------- page ---------- */
export default function HargaPage() {
  return (
    <>
      {/* HERO heading */}
      <header className="bg-linear-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-7xl px-5 pt-14 pb-10 md:pt-16 md:pb-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-3 py-1 text-sm text-emerald-700 shadow-sm">
              Daftar Harga
            </span>
            <h1 className="mt-4 text-[clamp(2rem,4.8vw,3rem)] font-extrabold text-emerald-950">
              Harga Ayam Potong
            </h1>
            <p className="mt-2 text-slate-600">
              Harga kompetitif dengan kualitas terjamin
            </p>
          </div>
        </div>
      </header>

      {/* TABEL HARGA */}
      <section className="mx-auto max-w-7xl px-5 pb-8">
        <div className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-[0_20px_60px_rgba(16,185,129,.10)]">
          <table className="min-w-full divide-y divide-emerald-100">
            <thead className="bg-emerald-50/70">
              <tr className="text-left text-sm font-semibold text-emerald-900">
                <th className="px-5 py-3">Produk</th>
                <th className="px-5 py-3">Satuan</th>
                <th className="px-5 py-3">Harga</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-50">
              {HARGA.map((row, i) => (
                <tr key={i} className="text-slate-700">
                  <td className="px-5 py-4">{row.produk}</td>
                  <td className="px-5 py-4 text-slate-500">{row.satuan}</td>
                  <td className="px-5 py-4">
                    {row.href ? (
                      <Link
                        href={row.href}
                        className="font-semibold text-emerald-700 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-600"
                      >
                        {row.harga}
                      </Link>
                    ) : (
                      <span className="font-semibold text-emerald-800">{row.harga}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* catatan */}
        <div className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/50 p-4 text-[15px] text-slate-700">
          <span className="font-semibold text-emerald-900">Catatan:</span>{" "}
          Harga dapat berubah mengikuti kondisi pasar. Silakan konfirmasi via
          WhatsApp untuk update harga terbaru dan info stok hari ini.
        </div>
      </section>

      {/* CTA tanya harga */}
      <section className="bg-linear-to-b from-white to-emerald-50/40">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-16 text-center">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-extrabold text-emerald-950">
            Tanya Harga Terbaru
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-slate-600">
            Dapatkan informasi harga terkini dan cek ketersediaan stok
          </p>

          <div className="mt-6">
            <a
              href={waLink}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3.5 font-semibold text-white shadow-[0_12px_34px_rgba(16,185,129,.3)] ring-1 ring-emerald-600/40 transition hover:bg-emerald-600"
            >
              <WaIcon className="h-4 w-4" />
              Chat WhatsApp Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* 3 poin keunggulan */}
      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <MiniFeature
            icon={<Percent className="h-5 w-5" />}
            title="Harga Spesial"
            text="Untuk pembelian dalam jumlah besar"
          />
          <MiniFeature
            icon={<Check className="h-5 w-5" />}
            title="Kualitas Terjamin"
            text="Ayam segar dengan standar kebersihan tinggi"
          />
          <MiniFeature
            icon={<Day247 className="h-5 w-5" />}
            title="Konsultasi Gratis"
            text="Hubungi kami kapan saja untuk info lebih lanjut"
          />
        </div>
      </section>
    </>
  );
}
