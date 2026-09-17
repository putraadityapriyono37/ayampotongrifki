"use client";

import Link from "next/link";
import { Home, DollarSign, Settings, X } from "lucide-react";

interface SidebarProps {
  mobileOpen?: boolean;
  onClose?: () => void;
}

const menus = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: Home,
  },
  {
    name: "Harga",
    href: "/admin/prices",
    icon: DollarSign,
  },
  {
    name: "Pengaturan",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function Sidebar({
  mobileOpen = false,
  onClose,
}: SidebarProps) {
  return (
    <>
      {/* Overlay Mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-72
          bg-white border-r border-emerald-100
          transition-transform duration-300
          lg:translate-x-0
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-emerald-100 px-6">
          <div>
            <h2 className="font-bold text-emerald-900">
              Ayam Potong Rifki
            </h2>

            <p className="text-xs text-slate-500">
              Admin Dashboard
            </p>
          </div>

          <button
            onClick={onClose}
            className="lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu */}
        <nav className="space-y-2 p-4">
          {menus.map((menu) => {
            const Icon = menu.icon;

            return (
              <Link
                key={menu.href}
                href={menu.href}
                className="
                  flex items-center gap-3
                  rounded-xl
                  px-4 py-3
                  text-slate-700
                  hover:bg-emerald-50
                  hover:text-emerald-700
                  transition
                "
              >
                <Icon size={20} />
                {menu.name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}