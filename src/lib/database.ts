import { supabase } from "./supabase";

export async function getPrices() {
  const { data, error } = await supabase
    .from("prices")
    .select("*")
    .order("product_name");

  if (error) throw error;

  return data;
}

export async function getSettings() {
  const { data, error } = await supabase
    .from("settings")
    .select("*");

  if (error) throw error;

  return data;
}