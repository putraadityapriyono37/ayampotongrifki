"use client";
import { waLink } from "@/lib/wa";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink("Halo Rifki, saya ingin pesan ayam potong.")}
      className="fixed bottom-4 right-4 rounded-full shadow-soft bg-brand-green text-white px-4 py-3"
      aria-label="Chat WhatsApp"
    >
      Chat WhatsApp
    </a>
  );
}
