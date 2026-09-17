"use client";

import { Pencil } from "lucide-react";
import { useState } from "react";
import EditPriceModal from "./EditPriceModal";

interface Price {
  id: string;
  product_key: string;
  product_name: string;
  min_price: number;
  max_price: number;
  satuan: string;
}

interface Props {
  prices: Price[];
}

export default function PriceTable({ prices }: Props) {
  const [selectedPrice, setSelectedPrice] = useState<Price | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-emerald-50">
              <tr>
                <th className="px-5 py-4 text-left">Produk</th>
                <th className="px-5 py-4 text-left">Harga</th>
                <th className="px-5 py-4 text-left">Satuan</th>
                <th className="px-5 py-4 text-center">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {prices.map((price) => (
                <tr
                  key={price.id}
                  className="border-t border-emerald-100 hover:bg-emerald-50/30 transition"
                >
                  <td className="px-5 py-4 font-medium">
                    {price.product_name}
                  </td>

                  <td className="px-5 py-4">
                    {price.product_key === "hajatan" ? (
                      <span className="font-semibold text-emerald-700">
                        Harga Khusus
                      </span>
                    ) : (
                      <span className="font-semibold text-emerald-800">
                        Rp {price.min_price.toLocaleString("id-ID")} – Rp{" "}
                        {price.max_price.toLocaleString("id-ID")}
                      </span>
                    )}
                  </td>

                  <td className="px-5 py-4 text-slate-600">
                    {price.satuan}
                  </td>

                  <td className="px-5 py-4 text-center">
                    <button
                      onClick={() => {
                        setSelectedPrice(price);
                        setOpen(true);
                      }}
                      className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-700"
                    >
                      <Pencil size={16} />
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <EditPriceModal
        open={open}
        onClose={() => setOpen(false)}
        price={selectedPrice}
      />
    </>
  );
}