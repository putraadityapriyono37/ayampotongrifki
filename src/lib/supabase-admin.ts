import { createClient } from "@supabase/supabase-js";

/**
 * Supabase client khusus server (service role key).
 * JANGAN PERNAH import file ini dari komponen client / browser code.
 *
 * Digunakan di server actions & route handlers admin agar bisa
 * bypass Row Level Security (RLS) untuk operasi INSERT/UPDATE/UPSERT.
 *
 * Fallback: bila SUPABASE_SERVICE_ROLE_KEY belum di-set, akan pakai
 * anon key (dan operasi write akan gagal jika RLS aktif).
 */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "[Supabase Admin] Missing env vars. Pastikan NEXT_PUBLIC_SUPABASE_URL dan " +
      "SUPABASE_SERVICE_ROLE_KEY (atau NEXT_PUBLIC_SUPABASE_ANON_KEY) " +
      "sudah di-set di .env.local (lokal) atau Vercel Dashboard → Settings → " +
      "Environment Variables (production)."
  );
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

