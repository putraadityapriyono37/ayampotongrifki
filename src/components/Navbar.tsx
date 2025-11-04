"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { href: "/", label: "Beranda" },
  { href: "/produk", label: "Produk" },
  { href: "/harga", label: "Harga" },
  { href: "/testimoni", label: "Testimoni" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className="
        sticky top-0 z-50
        bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60
        shadow-sm
        [--nav-h:76px] md:[--nav-h:88px]
        overflow-x-clip
      "
    >
      <nav
        className="
          mx-auto max-w-7xl h-[var(--nav-h)]
          px-5 md:px-6
          flex items-center justify-between
        "
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-4">
          <img
            src="/logo-ayam-rifki.png"
            alt="Ayam Potong Rifki"
            className="h-11 w-11 rounded"
          />
          <div className="leading-tight">
            <p className="text-[18px] md:text-[20px] font-semibold text-emerald-700 tracking-[0.2px]">
              Ayam Potong Rifki
            </p>
            <p className="text-[13.5px] md:text-[14px] text-slate-400 -mt-0.5 tracking-[0.2px]">
              Segar, Bersih, Siap Masak
            </p>
          </div>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-7 md:gap-9 lg:gap-11">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                aria-current={isActive(n.href) ? "page" : undefined}
                className={[
                  "inline-flex items-center rounded-full px-4 py-2",
                  "text-[15.5px] md:text-[16px] leading-none",
                  isActive(n.href)
                    ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
                    : "text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/60",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40",
                ].join(" ")}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger (mobile) */}
        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="
            md:hidden relative inline-flex h-11 w-11 items-center justify-center
            rounded-md bg-white text-slate-700
            ring-1 ring-slate-200 shadow-sm
            focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40
          "
        >
          <span
            aria-hidden
            className={`absolute block h-0.5 w-6 rounded bg-slate-700 transition-transform duration-200 ${
              open ? "translate-y-0 rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            aria-hidden
            className={`absolute block h-0.5 w-6 rounded bg-slate-700 transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            aria-hidden
            className={`absolute block h-0.5 w-6 rounded bg-slate-700 transition-transform duration-200 ${
              open ? "translate-y-0 -rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          className="
            md:hidden bg-white
            border-t border-slate-200
            shadow-[0_8px_24px_rgba(2,6,23,.06)]
          "
        >
          <ul className="mx-auto max-w-7xl px-5 py-3 space-y-1 pb-[max(12px,env(safe-area-inset-bottom))]">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className={[
                    "block rounded-lg px-3 py-2 text-[16px]",
                    isActive(n.href)
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-700",
                  ].join(" ")}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
