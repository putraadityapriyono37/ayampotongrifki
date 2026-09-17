interface DashboardCardProps {
  title: string;
  value: string | number;
  description: string;
}

export default function DashboardCard({
  title,
  value,
  description,
}: DashboardCardProps) {
  return (
    <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-emerald-900">
        {value}
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        {description}
      </p>
    </div>
  );
}