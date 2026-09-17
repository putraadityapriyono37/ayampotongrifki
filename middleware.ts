import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next({
    request,
  });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "[Middleware] Missing Supabase env vars. Pastikan NEXT_PUBLIC_SUPABASE_URL dan " +
        "NEXT_PUBLIC_SUPABASE_ANON_KEY sudah di-set di .env.local (lokal) " +
        "atau Vercel Dashboard → Settings → Environment Variables (production)."
    );
  }

  const supabase = createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const adminCookie = request.cookies.get("admin_session")?.value;
  const isAuthenticated = !!session || adminCookie === "authenticated";

  const pathname = request.nextUrl.pathname;

  if (pathname === "/admin/login" && isAuthenticated) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (pathname.startsWith("/admin") && pathname !== "/admin/login" && !isAuthenticated) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/admin/:path*"],
};
