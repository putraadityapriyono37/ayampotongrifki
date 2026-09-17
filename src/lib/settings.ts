import { supabase } from "./supabase";

export async function getSettings() {
  const { data, error } = await supabase
    .from("settings")
    .select("key, value");

  if (error) {
    console.error("Get settings error:", error);
    return {};
  }

  return (data ?? []).reduce((obj, item) => {
    obj[item.key] = item.value;
    return obj;
  }, {} as Record<string, string>);
}