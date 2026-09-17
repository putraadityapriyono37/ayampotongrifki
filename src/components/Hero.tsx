import Link from "next/link";
import Image from "next/image";
import { getSettings } from "@/lib/settings";

const IconCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M9 16.2 4.8 12 3.4 13.4 9 19l12-12-1.4-1.4z"
    />
  </svg>
);

const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="m10 17 5-5-5-5v10Z"
    />
  </svg>
);

const WaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
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
  lihatHargaHref?: string;
  imageSrc: string;
};

export default async function Hero({
  badge,
  title,
  description,
  lihatHargaHref = "/harga",
  imageSrc,
}: Props) {
  const settings = await getSettings();

  const businessName =
    settings.business_name ?? "Ayam Potong Rifki";

  const whatsapp =
    settings.whatsapp ?? "6285702255674";

  const waLink =
    `https://wa.me/${whatsapp}?text=` +
    encodeURIComponent(
      `Halo ${businessName}, saya ingin memesan ayam potong.`
    );

  return (
    <div className="bg-gradient-to-b from-emerald-50 to-white overflow-x-clip">
      <section
        className="
          mx-auto max-w-7xl px-5
          grid grid-cols-1 md:grid-cols-[1fr_minmax(520px,640px)]
          items-center gap-8
          min-h-[calc(100svh-var(--nav-h))]
          py-12 md:py-12 lg:py-10 xl:py-8
        "
      >
        {/* kiri */}
        <div className="md:pr-6 lg:-mt-2 xl:-mt-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-sm text-emerald-700 shadow-sm">
            <IconCheck className="h-3.5 w-3.5" />
            {badge}
          </span>

          <h1 className="mt-4 text-[clamp(2rem,5.8vw,3.5rem)] font-extrabold tracking-tight">
            {title}
          </h1>

          <p className="mt-3 text-lg text-slate-600">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={waLink}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-white shadow-lg hover:bg-emerald-700"
            >
              <WaIcon className="h-5 w-5" />
              Pesan via WhatsApp
            </a>

            <Link
              href={lihatHargaHref}
              className="group inline-flex items-center gap-2 rounded-xl border px-5 py-3 hover:bg-emerald-50"
            >
              Lihat Harga

              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* kanan */}
        <div
          className="
            relative justify-self-end
            w-full md:w-[520px]
            lg:w-[600px]
            xl:w-[640px]
            md:mr-[-150px]
            lg:mr-[-150px]
          "
        >
          <Image
            src={imageSrc}
            alt={businessName}
            width={640}
            height={600}
            className="
              mx-auto
              md:mx-0
              h-[420px]
              sm:h-[460px]
              md:h-[520px]
              lg:h-[560px]
              xl:h-[600px]
              object-contain
              drop-shadow-xl
            "
          />
        </div>
      </section>
    </div>
  );
}