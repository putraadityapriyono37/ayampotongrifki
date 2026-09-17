import { getPrices } from "@/lib/prices";
import PriceTable from "@/components/admin/PriceTable";

export default async function PricesPage() {
  const prices = await getPrices();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-emerald-900">
          Kelola Harga
        </h1>

        <p className="mt-2 text-slate-600">
          Edit harga produk yang tampil di website.
        </p>
      </div>

      <PriceTable prices={prices} />
    </div>
  );
}