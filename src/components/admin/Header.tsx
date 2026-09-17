"use client";

import { Menu, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase-browser";
import { logoutAdmin } from "@/app/admin/actions";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const router = useRouter();

  async function handleLogout() {
    try {
      await supabaseBrowser.auth.signOut();
    } catch (e) {
      console.error("Sign out error:", e);
    }
    await logoutAdmin();
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-emerald-100 bg-white px-6">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="lg:hidden">
          <Menu size={22} />
        </button>

        <div>
          <h1 className="text-xl font-bold text-emerald-900">
            Dashboard Admin
          </h1>

          <p className="text-sm text-slate-500">
            Ayam Potong Rifki
          </p>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2 text-white hover:bg-red-600 transition"
      >
        <LogOut size={18} />
        Logout
      </button>
    </header>
  );
}
