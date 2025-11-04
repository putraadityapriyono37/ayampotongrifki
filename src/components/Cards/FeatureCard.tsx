// src/components/Cards/FeatureCard.tsx
import { FC } from "react";

const IconCheck = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
        <path fill="currentColor" d="M9 16.2 4.8 12 3.4 13.4 9 19l12-12-1.4-1.4z" />
    </svg>
);

type Props = {
    title: string;
    desc: string;
    className?: string;
};

const FeatureCard: FC<Props> = ({ title, desc, className }) => {
    return (
        <div className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${className ?? ""}`}>
            <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <IconCheck className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-extrabold text-emerald-900">{title}</h3>
            <p className="mt-1 text-sm text-slate-600">{desc}</p>
        </div>
    );
};

export default FeatureCard;
