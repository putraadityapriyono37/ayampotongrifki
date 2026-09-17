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
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
);
