import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";
import { cookies } from "next/headers";
import AdminLayoutClient from "../layout-client";

export const dynamic = "force-dynamic";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const cookieStore = await cookies();
  const adminCookie = cookieStore.get("admin_session")?.value;

  if (!session && adminCookie !== "authenticated") {
    redirect("/admin/login");
  }

  return <AdminLayoutClient>{children}</AdminLayoutClient>;
}
