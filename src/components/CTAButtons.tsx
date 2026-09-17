import Link from "next/link";
import { getSettings } from "@/lib/settings";

interface PrimaryCTAProps {
  text: string;
  msg: string;
}

interface GhostCTAProps {
  text: string;
  href: string;
}

export async function PrimaryCTA({
  text,
  msg,
}: PrimaryCTAProps) {
  const settings = await getSettings();

  const waLink =
    `https://wa.me/${settings.whatsapp}?text=` +
    encodeURIComponent(msg);

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex
        items-center
        justify-center
        rounded-lg
        bg-emerald-600
        px-5
        py-3
        font-medium
        text-white
        transition
        hover:bg-emerald-700
      "
    >
      {text}
    </a>
  );
}

export function GhostCTA({
  text,
  href,
}: GhostCTAProps) {
  return (
    <Link
      href={href}
      className="
        inline-flex
        items-center
        justify-center
        rounded-lg
        border
        border-emerald-200
        px-5
        py-3
        font-medium
        text-emerald-700
        transition
        hover:bg-emerald-50
      "
    >
      {text}
    </Link>
  );
}