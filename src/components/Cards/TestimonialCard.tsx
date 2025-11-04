export default function TestimonialCard({ name, role, text }:{
  name: string; role: string; text: string;
}) {
  const initials = name.split(" ").map(s=>s[0]).slice(0,2).join("").toUpperCase();
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <div className="h-10 w-10 grid place-content-center rounded-full bg-emerald-100 text-emerald-700">
          {initials}
        </div>
        <div><p className="font-semibold">{name}</p><p className="text-sm text-slate-500">{role}</p></div>
      </div>
      <p className="text-slate-700">“{text}”</p>
    </div>
  );
}
