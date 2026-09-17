import Link from "next/link";
import Image from "next/image";
import { getSettings } from "@/lib/settings";

const IcMap = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" className="text-emerald-300">
    <path
      fill="currentColor"
      d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
    />
  </svg>
);

const IcPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" className="text-emerald-300">
    <path
      fill="currentColor"
      d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3c1.2.4 2.6.6 4 .6c.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10 21 3 14 3 3c0-.6.4-1 1-1h2.5c.6 0 1 .4 1 1c0 1.4.2 2.8.6 4c.1.4 0 .8-.3 1.1L6.6 10.8Z"
    />
  </svg>
);

const IcClock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" className="text-emerald-300">
    <path
      fill="currentColor"
      d="M12 1.99a10 10 0 1 0 0 20a10 10 0 0 0 0-20Zm1 10.41l3.3 1.9l-1 1.73L11 13V6h2v6.4Z"
    />
  </svg>
);

export default async function Footer() {
  const settings = await getSettings();

  const businessName =
    settings.business_name ?? "Ayam Potong Rifki";

  const tagline =
    settings.tagline ?? "Segar • Bersih • Terpercaya • Halal";

  const businessDescription =
    settings.business_description ??
    "Melayani ayam potong segar harian untuk kebutuhan rumah tangga, warung, dan hajatan.";

  const whatsapp =
    settings.whatsapp ?? "6285702255674";

  const address =
    settings.address ?? "-";

  const openingHours =
    settings.opening_hours ?? "-";

  const mapsUrl =
    settings.maps_url ?? "#";

  const copyright =
    settings.copyright ?? `© ${new Date().getFullYear()} ${businessName}. Semua hak cipta dilindungi.`;

  const waHref =
    `https://wa.me/${whatsapp}?text=` +
    encodeURIComponent(
      `Halo ${businessName}, saya ingin memesan ayam potong.`
    );

  return (
    <footer className="relative overflow-hidden">
      <div className="bg-gradient-to-b from-emerald-900 to-emerald-950">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,.06),transparent_60%)]" />

        <div className="mx-auto max-w-6xl px-4 py-10 text-emerald-50">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}
            <div className="flex gap-3">
              <Image
                src="/logo-ayam-rifki.png"
                alt={businessName}
                width={40}
                height={40}
                className="h-10 w-10 rounded bg-emerald-800/40 p-1.5"
              />

              <div className="text-sm leading-relaxed">
                <p className="font-semibold text-emerald-200">
                  {businessName}
                </p>

                <p className="text-emerald-300/80">
                  {tagline}
                </p>

                <p className="mt-3 text-emerald-100/80">
                  {businessDescription}
                </p>
              </div>
            </div>

            {/* Kontak */}
            <div>
              <p className="mb-3 font-semibold text-emerald-200">
                Kontak Kami
              </p>

              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-emerald-800 p-1.5">
                    <IcMap />
                  </span>

                  <a
                    href={mapsUrl}
                    target="_blank"
                    className="text-emerald-100/90 hover:text-white"
                  >
                    {address}
                  </a>
                </li>

                <li className="flex items-center gap-2">
                  <span className="rounded-full bg-emerald-800 p-1.5">
                    <IcPhone />
                  </span>

                  <a
                    href={`tel:+${whatsapp}`}
                    className="text-emerald-100/90 hover:text-white"
                  >
                    {whatsapp}
                  </a>
                </li>

                <li className="flex items-center gap-2">
                  <span className="rounded-full bg-emerald-800 p-1.5">
                    <IcClock />
                  </span>

                  <span className="text-emerald-100/90">
                    {openingHours}
                  </span>
                </li>
              </ul>
            </div>

            {/* Link */}
            <div>
              <p className="mb-3 font-semibold text-emerald-200">
                Link Cepat
              </p>

              <ul className="space-y-2 text-sm">
                {[
                  ["Beranda", "/"],
                  ["Produk", "/produk"],
                  ["Harga", "/harga"],
                  ["Testimoni", "/testimoni"],
                  ["FAQ", "/faq"],
                  ["Kontak", "/kontak"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-emerald-100/90 hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div>
              <p className="mb-3 font-semibold text-emerald-200">
                Pesan Sekarang
              </p>

              <p className="mb-3 text-sm text-emerald-100/90">
                Hubungi kami melalui WhatsApp untuk melakukan pemesanan.
              </p>

              <a
                href={waHref}
                target="_blank"
                className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-500"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>

          <div className="my-6 h-px bg-emerald-800/60" />

          <p className="text-center text-xs text-emerald-200/80">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}