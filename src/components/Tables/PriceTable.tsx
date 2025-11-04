import { prices } from "@/data/prices";
export default function PriceTable() {
  return (
    <div className="overflow-x-auto rounded-2xl bg-white shadow">
      <table className="w-full text-left">
        <thead className="bg-emerald-50">
          <tr>
            <th className="p-4">Produk</th><th className="p-4">Satuan</th><th className="p-4">Harga</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((r, i) => (
            <tr key={i} className="border-t">
              <td className="p-4">{r.product}</td>
              <td className="p-4">{r.unit}</td>
              <td className="p-4 font-semibold text-emerald-700">{r.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
