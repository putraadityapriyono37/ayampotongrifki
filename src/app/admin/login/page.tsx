"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { supabaseBrowser } from "@/lib/supabase-browser";
import { loginAdmin } from "../actions";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");

    // Standard Supabase login attempt
    const { error: sbError } = await supabaseBrowser.auth.signInWithPassword({
      email,
      password,
    });

    if (!sbError) {
      router.push("/admin");
      router.refresh();
      return;
    }

    // Fallback login attempt via server action
    const res = await loginAdmin({ email, password });
    if (res.success) {
      router.push("/admin");
      router.refresh();
      return;
    }

    setError("Email atau password salah.");
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white flex items-center justify-center px-5">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Image
            src="/logo-ayam-rifki.png"
            alt="Logo"
            width={80}
            height={80}
            className="mx-auto rounded-xl shadow-md"
          />

          <h1 className="mt-5 text-3xl font-bold text-emerald-900">
            Admin Dashboard
          </h1>

          <p className="mt-2 text-slate-500">
            Login untuk mengelola website
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="rounded-3xl bg-white p-8 shadow-xl border border-emerald-100"
        >
          {error && (
            <div className="mb-5 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email atau Username
            </label>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@ayampotongrifki.com"
              className="w-full rounded-xl border border-emerald-200 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-slate-900"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-xl border border-emerald-200 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-slate-900"
            />
          </div>

          <button
            disabled={loading}
            className="w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
          >
            {loading ? "Masuk..." : "Masuk"}
          </button>

          <div className="mt-6 rounded-xl bg-emerald-50/80 p-3 text-center text-xs text-slate-600 border border-emerald-100">
            Credential Admin:<br />
            Email/User: <code className="font-bold text-emerald-900">admin@ayampotongrifki.com</code> (atau <code className="font-bold text-emerald-900">admin</code>)<br />
            Password: <code className="font-bold text-emerald-900">admin123</code>
          </div>
        </form>
      </div>
    </div>
  );
}
