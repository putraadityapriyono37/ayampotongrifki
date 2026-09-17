"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save } from "lucide-react";
import { updateSettings } from "@/app/admin/actions";

interface Props {
  settings: Record<string, string>;
}

export default function SettingsForm({ settings }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    business_name: settings.business_name ?? "",
    tagline: settings.tagline ?? "",
    business_description: settings.business_description ?? "",
    about: settings.about ?? "",
    whatsapp: settings.whatsapp ?? "",
    opening_hours: settings.opening_hours ?? "",
    address: settings.address ?? "",
    maps_url: settings.maps_url ?? "",
    hero_badge: settings.hero_badge ?? "",
    hero_title: settings.hero_title ?? "",
    hero_description: settings.hero_description ?? "",
    copyright: settings.copyright ?? "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    setLoading(true);
    const result = await updateSettings(form);
    setLoading(false);

    if (!result.success) {
      alert(result.message);
      return;
    }

    alert("Pengaturan berhasil disimpan.");
    router.refresh();
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-emerald-900">
            Pengaturan Website
          </h2>
          <p className="mt-1 text-slate-500">
            Kelola informasi yang ditampilkan pada website.
          </p>
        </div>

        <div className="space-y-5">
          {/* Nama Usaha */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Nama Usaha
            </label>
            <input
              name="business_name"
              value={form.business_name}
              onChange={handleChange}
              placeholder="Masukkan nama usaha"
              className="w-full rounded-xl border border-emerald-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            />
          </div>

          {/* Tagline */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Tagline
            </label>
            <input
              name="tagline"
              value={form.tagline}
              onChange={handleChange}
              placeholder="Segar • Bersih • Terpercaya • Halal"
              className="w-full rounded-xl border border-emerald-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            />
          </div>

          {/* Deskripsi Bisnis */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Deskripsi Bisnis
            </label>
            <textarea
              name="business_description"
              rows={4}
              value={form.business_description}
              onChange={handleChange}
              placeholder="Deskripsi bisnis untuk keperluan SEO dan footer"
              className="w-full rounded-xl border border-emerald-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            />
          </div>

          {/* Tentang Kami */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Tentang Kami
            </label>
            <textarea
              name="about"
              rows={4}
              value={form.about}
              onChange={handleChange}
              placeholder="Kami melayani ayam potong segar harian untuk kebutuhan rumah tangga, warung, dan hajatan."
              className="w-full rounded-xl border border-emerald-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Nomor WhatsApp
            </label>
            <input
              name="whatsapp"
              value={form.whatsapp}
              onChange={handleChange}
              placeholder="628xxxxxxxxxx"
              className="w-full rounded-xl border border-emerald-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            />
          </div>

          {/* Jam Operasional */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Jam Operasional
            </label>
            <input
              name="opening_hours"
              value={form.opening_hours}
              onChange={handleChange}
              placeholder="08.00 - 20.00"
              className="w-full rounded-xl border border-emerald-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            />
          </div>

          {/* Alamat */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Alamat
            </label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              rows={3}
              placeholder="Jl. Raya Baturraden, Banyumas"
              className="w-full rounded-xl border border-emerald-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            />
          </div>

          {/* Google Maps */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Link Google Maps
            </label>
            <input
              name="maps_url"
              value={form.maps_url}
              onChange={handleChange}
              placeholder="https://maps.google.com/..."
              className="w-full rounded-xl border border-emerald-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            />
          </div>

          {/* Hero Section */}
          <div className="border-t border-emerald-100 pt-6">
            <h3 className="mb-5 text-lg font-semibold text-emerald-900">
              Hero Section
            </h3>
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Hero Badge
                </label>
                <input
                  name="hero_badge"
                  value={form.hero_badge}
                  onChange={handleChange}
                  placeholder="Segar • Bersih • Terpercaya • Halal"
                  className="w-full rounded-xl border border-emerald-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Hero Judul
                </label>
                <input
                  name="hero_title"
                  value={form.hero_title}
                  onChange={handleChange}
                  placeholder="Jual Ayam Potong Segar & Berkualitas"
                  className="w-full rounded-xl border border-emerald-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Hero Deskripsi
                </label>
                <textarea
                  rows={4}
                  name="hero_description"
                  value={form.hero_description}
                  onChange={handleChange}
                  placeholder="Ayam Potong Rifki melayani kebutuhan rumah tangga maupun usaha."
                  className="w-full rounded-xl border border-emerald-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                />
              </div>
            </div>
          </div>

          {/* Footer / Copyright */}
          <div className="border-t border-emerald-100 pt-6">
            <h3 className="mb-5 text-lg font-semibold text-emerald-900">
              Footer
            </h3>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Copyright
              </label>
              <input
                name="copyright"
                value={form.copyright}
                onChange={handleChange}
                placeholder="© 2026 Ayam Potong Rifki. All rights reserved."
                className="w-full rounded-xl border border-emerald-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={handleSave}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Save size={18} />
            {loading ? "Menyimpan..." : "Simpan Perubahan"}
          </button>
        </div>
      </div>
    </div>
  );
}