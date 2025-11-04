// src/components/Cards/ProductCard.tsx
import Image from "next/image";
import Link from "next/link";

const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
        <path fill="currentColor" d="m10 17 5-5-5-5v10Z" />
    </svg>
);

type Props = {
    img: string;     // /images/produk/xxx.jpg (di folder /public)
    title: string;
    desc: string;
    href?: string;   // opsional
    className?: string;
};

export default function ProductCard({ img, title, desc, href = "/produk", className }: Props) {
    return (
        <article className={`overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-[0_12px_40px_rgba(16,185,129,.08)] ${className ?? ""}`}>
            <div className="relative h-44 w-full sm:h-48 lg:h-48">
                <Image
                    src={img}
                    alt={title}
                    fill
                    priority={false}
                    className="object-cover"
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                />
            </div>
            <div className="p-4">
                <h3 className="text-emerald-900 text-[18px] font-extrabold">{title}</h3>
                <p className="mt-1 text-sm text-slate-500">{desc}</p>
                <Link href={href} className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-emerald-700 hover:text-emerald-600">
                    Lihat Detail <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </article>
    );
}
