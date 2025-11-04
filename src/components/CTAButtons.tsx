import { wa } from "@/lib/wa";

export function PrimaryCTA({ text, msg }: { text: string; msg: string }) {
  return <a className="rounded-lg bg-emerald-600 text-white px-5 py-3" href={wa(msg)}>{text}</a>;
}
export function GhostCTA({ text, href }: { text: string; href: string }) {
  return <a className="rounded-lg border px-5 py-3" href={href}>{text}</a>;
}
