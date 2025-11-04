// src/components/Hero.tsx
import Link from "next/link";

const IconCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden {...props}>
    <path fill="currentColor" d="M9 16.2 4.8 12 3.4 13.4 9 19l12-12-1.4-1.4z" />
  </svg>
);
const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden {...props}>
    <path fill="currentColor" d="m10 17 5-5-5-5v10Z" />
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

type Props = {
  badge: string;
  title: React.ReactNode;
  description: string;
  waLink: string;
  lihatHargaHref?: string;
  imageSrc: string; // gunakan path dari /public, mis. "/images/hero-owner.png"
};

export default function Hero({
  badge,
  title,
  description,
  waLink,
  lihatHargaHref = "/harga",
  imageSrc,
}: Props) {
  return (
    <div className="bg-linear-to-b from-emerald-50 to-white overflow-x-clip"> {/* <--- INI SOLUSINYA */}
      <section
        className="
          mx-auto max-w-7xl px-5
          grid grid-cols-1 md:grid-cols-[1fr_minmax(520px,640px)]
          items-center gap-8
          min-h-[calc(100svh-var(--nav-h))]
          py-12 md:py-12 lg:py-10 xl:py-8
        "
      >
        {/* kiri (teks) */}
        <div className="md:pr-6 lg:-mt-2 xl:-mt-4 2xl:-mt-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-3 py-1 text-sm text-emerald-700 shadow-sm">
            <IconCheck className="h-3.5 w-3.5" />
            {badge}
          </span>

          <h1 className="mt-4 text-[clamp(2rem,5.8vw,3.5rem)] font-extrabold tracking-tight">
            {title}
          </h1>

          <p className="mt-3 text-lg text-slate-600">{description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={waLink}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-white shadow-lg ring-1 ring-emerald-600/20 transition-colors hover:bg-emerald-700"
            >
              <WaIcon className="h-5 w-5" /> Pesan via WhatsApp
            </a>
            <Link
              href={lihatHargaHref}
              className="group inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-slate-800 hover:bg-emerald-50"
            >
              Lihat Harga
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* kanan (foto) */}
        <div
          className="
            relative justify-self-end overflow-visible
            w-full md:w-[520px] lg:w-[600px] xl:w-[640px]
            md:mr-[-150px] lg:mr-[-150px] xl:mr-[-150px] 2xl:mr-[-150px]
            lg:-mt-6 xl:-mt-10 2xl:-mt-12
          "
        >
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-[40px] bg-linear-to-b from-emerald-200/35 via-emerald-100/0 to-transparent blur-2xl" />
          <img
            src={imageSrc}
            alt="Rifki – Pemilik Ayam Potong Rifki"
            className="
              mx-auto md:mx-0
              h-[420px] sm:h-[460px] md:h-[520px] lg:h-[560px] xl:h-[600px]
              object-contain drop-shadow-xl
              mask-image:linear-gradient(to_bottom,black_88%,transparent)]
            "
            loading="eager"
          />
        </div>
      </section>
    </div>
  );
}