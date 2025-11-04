/* eslint-disable @next/next/no-img-element */
'use client'
import Link from "next/link";
import { useEffect, useRef, useState } from "react";


/* ----------------- small atoms ----------------- */
const Star = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden {...props}>
    <path
      fill="currentColor"
      d="m12 17.27l6.18 3.73l-1.64-7.03L21 9.24l-7.19-.62L12 2L10.19 8.62L3 9.24l4.46 4.73L5.82 21z"
    />
  </svg>
);

const WaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden {...props}>
    <path
      fill="currentColor"
      d="M20 3.5A10.5 10.5 0 0 0 3.08 17.6L2 22l4.53-1.19A10.46 10.46 0 0 0 12 21a10.5 10.5 0 0 0 8-17.5Z"
    />
  </svg>
);

/* ----------------- helpers ----------------- */
function Stars({ value = 5 }: { value?: 1 | 2 | 3 | 4 | 5 }) {
  return (
    <div className="flex gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < value ? "opacity-100" : "opacity-25"}`}
        />
      ))}
    </div>
  );
}

function InitialAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((s) => s[0])
    .join("")
    .toUpperCase();
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-semibold text-emerald-800">
      {initials}
    </div>
  );
}

function TestimonialCard({
  name,
  role,
  rating = 5,
  children,
}: {
  name: string;
  role: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition hover:shadow-[0_16px_48px_rgba(16,185,129,.12)]">
      <div className="mb-3 flex items-center gap-3">
        <InitialAvatar name={name} />
        <div>
          <div className="font-semibold text-emerald-900">{name}</div>
          <div className="text-xs text-slate-500">{role}</div>
        </div>
      </div>
      <Stars value={rating} />
      <p className="mt-2 text-[15px] leading-relaxed text-slate-700">{children}</p>
    </article>
  );
}

/* simple, dependency-free count up */
function useCountUp(target: number, duration = 1200, startOnVisible = true) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let started = !startOnVisible;
    let frame: number;
    let startTime = 0;

    const start = () => {
      if (started) return;
      started = true;
      startTime = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - startTime) / duration);
        setValue(Math.round(target * (0.2 + 0.8 * p))); // easing kecil
        if (p < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    };

    if (!startOnVisible) start();

    const io =
      startOnVisible &&
      new IntersectionObserver(
        (e) => e[0].isIntersecting && start(),
        { threshold: 0.25 }
      );

    if (io && ref.current) io.observe(ref.current);
    return () => {
      if (io && ref.current) io.unobserve(ref.current);
      cancelAnimationFrame(frame);
    };
  }, [target, duration, startOnVisible]);

  return { ref, value };
}

function Stat({
  label,
  value,
  suffix = "",
}: {
  label: string;
  value: number;
  suffix?: string;
}) {
  const { ref, value: n } = useCountUp(value);
  return (
    <div
      ref={ref as any}
      className="rounded-2xl border border-emerald-100 bg-white p-6 text-center shadow-sm"
    >
      <div className="text-3xl font-extrabold text-emerald-900">
        {n}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-slate-500">{label}</div>
    </div>
  );
}

/* ----------------- data ----------------- */
const WA = "6285702255674";
const waText = encodeURIComponent(
  "Halo Rifki, saya tertarik jadi pelanggan. Boleh info lebih lanjut?"
);
const waLink = `https://wa.me/${WA}?text=${waText}`;

const TESTIMONIALS = [
  {
    name: "Bu Siti Nurhaliza",
    role: "Ibu Rumah Tangga",
    rating: 5,
    text:
      "Ayam selalu segar dan bersih. Saya langganan di sini karena kualitasnya konsisten. Potongannya juga rapi sesuai permintaan.",
  },
  {
    name: "Pak Budi Santoso",
    role: "Pemilik Warung Makan",
    rating: 5,
    text:
      "Sudah 2 tahun jadi pelanggan tetap. Harga bersahabat dan kualitas tidak pernah mengecewakan. Cocok untuk usaha kuliner.",
  },
  {
    name: "Bu Wati",
    role: "Panitia Hajatan",
    rating: 5,
    text:
      "Pesan 30 ekor untuk hajatan pernikahan. Ayamnya bersih, potongan rapi, dan tepat waktu. Sangat memuaskan!",
  },
  {
    name: "Pak Ahmad",
    role: "Pedagang Ayam Goreng",
    rating: 5,
    text:
      "Kualitas ayam bagus, harga kompetitif. Pelayanannya ramah dan cepat tanggap. Rekomendasi banget!",
  },
  {
    name: "Bu Rina",
    role: "Ibu Rumah Tangga",
    rating: 5,
    text:
      "Puas banget belanja di sini. Ayam kampungnya enak, daging padat. Anak-anak suka masakan dari ayam ini.",
  },
  {
    name: "Pak Hendra",
    role: "Pengusaha Catering",
    rating: 5,
    text:
      "Partner terpercaya untuk kebutuhan catering saya. Stok selalu ready dan bisa custom potongan sesuai menu. Top!",
  },
];

/* ----------------- page ----------------- */
export default function TestimoniPage() {
  return (
    <>
      {/* HERO title */}
      <header className="bg-linear-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-7xl px-5 pt-14 pb-10 md:pt-16 md:pb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-3 py-1 text-sm text-emerald-700 shadow-sm">
            Testimoni Pelanggan
          </span>
          <h1 className="mt-4 text-[clamp(2rem,4.8vw,3rem)] font-extrabold text-emerald-950">
            Kata Mereka Tentang Kami
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-slate-600">
            Kepercayaan pelanggan adalah prioritas kami
          </p>
        </div>
      </header>

      {/* GRID testimonials */}
      <section className="mx-auto max-w-7xl px-5 pb-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard
              key={t.name}
              name={t.name}
              role={t.role}
              rating={5}
            >
              “{t.text}”
            </TestimonialCard>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-5 pb-12">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Stat label="Pelanggan Puas" value={500} suffix="+" />
          <Stat label="Pengalaman Melayani" value={4} suffix=" Tahun" />
          <Stat label="Segar & Berkualitas" value={100} suffix="%" />
        </div>
      </section>

      {/* CTA big card */}
      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="rounded-[28px] border border-emerald-100 bg-linear-to-b from-emerald-50 to-white p-6 sm:p-8 md:p-12 text-center shadow-[0_30px_70px_rgba(16,185,129,.15)]">
          <h3 className="text-[clamp(1.8rem,3.4vw,2.4rem)] font-extrabold text-emerald-950">
            Ingin Jadi Pelanggan Kami?
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-slate-600">
            Bergabunglah dengan ratusan pelanggan puas yang mempercayai kualitas kami
          </p>
          <div className="mt-6 md:mt-8">
            <a
              href={waLink}
              className="inline-flex items-center gap-3 rounded-full bg-emerald-600 px-6 py-3.5 font-semibold text-white shadow ring-1 ring-emerald-500/40 transition hover:bg-emerald-500 md:px-8 md:py-4"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                <WaIcon className="h-4 w-4" />
              </span>
              Pesan Sekarang
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
