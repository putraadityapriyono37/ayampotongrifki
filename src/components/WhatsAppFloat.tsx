import { getSettings } from "@/lib/settings";

export default async function WhatsAppFloat() {
  const settings = await getSettings();

  const link =
    "https://wa.me/" +
    settings.whatsapp +
    "?text=" +
    encodeURIComponent(
      "Halo Rifki, saya ingin pesan ayam potong."
    );

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-4
      right-4
      rounded-full
      bg-emerald-600
      px-5
      py-3
      text-white
      shadow-lg
      hover:bg-emerald-700
      transition
      z-50
      "
      aria-label="Chat WhatsApp"
    >
      Chat WhatsApp
    </a>
  );
}