import { supabase } from "./supabase";

export async function getPrices() {
  const { data, error } = await supabase
    .from("prices")
    .select("*")
    .order("product_name");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}