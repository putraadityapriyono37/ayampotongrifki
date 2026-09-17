import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "[Supabase Browser] Missing env vars. Pastikan NEXT_PUBLIC_SUPABASE_URL dan " +
      "NEXT_PUBLIC_SUPABASE_ANON_KEY sudah di-set di .env.local (lokal) " +
      "atau Vercel Dashboard → Settings → Environment Variables (production)."
  );
}

export const supabaseBrowser = createBrowserClient(supabaseUrl, supabaseAnonKey);
