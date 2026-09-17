import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export async function createClient() {
  const cookieStore = await cookies();

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "[Supabase Server] Missing env vars. Pastikan NEXT_PUBLIC_SUPABASE_URL dan " +
        "NEXT_PUBLIC_SUPABASE_ANON_KEY sudah di-set di .env.local (lokal) " +
        "atau Vercel Dashboard → Settings → Environment Variables (production)."
    );
  }

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },

      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // Dipanggil dari Server Component, abaikan.
        }
      },
    },
  });
}
