"use client";

import { useState } from "react";

import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

export default function AdminLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      <div className="lg:ml-72">
        <Header
          onMenuClick={() => setMobileOpen(true)}
        />

        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}