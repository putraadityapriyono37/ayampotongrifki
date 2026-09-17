"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { supabaseAdmin } from "@/lib/supabase-admin";

interface UpdatePriceData {
  id: string;
  min_price: number;
  max_price: number;
  satuan: string;
}

export async function updatePrice(data: UpdatePriceData) {
  try {
    const { error } = await supabaseAdmin
      .from("prices")
      .update({
        min_price: data.min_price,
        max_price: data.max_price,
        satuan: data.satuan,
        updated_at: new Date().toISOString(),
      })
      .eq("id", data.id);

    if (error) {
      console.error("Supabase Update Error:", error);
      return {
        success: false,
        message: error.message,
      };
    }

    revalidatePath("/harga");
    revalidatePath("/admin/prices");

    return {
      success: true,
      message: "Harga berhasil diperbarui.",
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      message: "Terjadi kesalahan pada server.",
    };
  }
}

interface UpdateSettingsData {
  business_name: string;
  tagline: string;
  business_description: string;
  about: string;
  whatsapp: string;
  address: string;
  opening_hours: string;
  maps_url: string;
  hero_badge: string;
  hero_title: string;
  hero_description: string;
  copyright: string;
}

export async function updateSettings(data: UpdateSettingsData) {
  try {
    const updates = [
      { key: "business_name", value: data.business_name },
      { key: "tagline", value: data.tagline },
      { key: "business_description", value: data.business_description },
      { key: "about", value: data.about },
      { key: "whatsapp", value: data.whatsapp },
      { key: "address", value: data.address },
      { key: "opening_hours", value: data.opening_hours },
      { key: "maps_url", value: data.maps_url },
      { key: "hero_badge", value: data.hero_badge },
      { key: "hero_title", value: data.hero_title },
      { key: "hero_description", value: data.hero_description },
      { key: "copyright", value: data.copyright },
    ];

    // Gunakan upsert supaya key yang belum ada di DB tetap dibuat baru
    const now = new Date().toISOString();
    const payload = updates.map((item) => ({
      key: item.key,
      value: item.value,
      updated_at: now,
    }));

    const { error } = await supabaseAdmin
      .from("settings")
      .upsert(payload, { onConflict: "key" });

    if (error) {
      console.error("Supabase Upsert Error:", error);
      return {
        success: false,
        message: error.message,
      };
    }

    // Revalidate layout supaya Navbar & Footer ikut ter-refresh
    revalidatePath("/", "layout");
    revalidatePath("/produk");
    revalidatePath("/harga");
    revalidatePath("/testimoni");
    revalidatePath("/faq");
    revalidatePath("/kontak");
    revalidatePath("/admin/settings");

    return {
      success: true,
      message: "Pengaturan berhasil diperbarui.",
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      message: "Terjadi kesalahan server.",
    };
  }
}

export async function loginAdmin(formData: { email: string; password: string }) {
  const cookieStore = await cookies();

  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@ayampotongrifki.com";
  const ADMIN_PASS = process.env.ADMIN_PASSWORD || "admin123";

  const emailInput = formData.email.trim().toLowerCase();
  const isMatchEmail =
    emailInput === ADMIN_EMAIL.toLowerCase() ||
    emailInput === "admin" ||
    emailInput === "admin@gmail.com";

  if (isMatchEmail && formData.password === ADMIN_PASS) {
    cookieStore.set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return { success: true };
  }

  return { success: false, message: "Email atau password salah." };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  return { success: true };
}
