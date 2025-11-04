export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm
                     bg-white/60 border-emerald-200 text-emerald-700">
      {children}
    </span>
  );
}
