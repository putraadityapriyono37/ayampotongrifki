"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { updatePrice } from "@/app/admin/actions";

interface Price {
  id: string;
  product_key: string;
  product_name: string;
  min_price: number;
  max_price: number;
  satuan: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  price: Price | null;
}

// Format angka jadi "60.000"
function formatRupiah(value: string) {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "";
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Ambil angka dari string ter-format
function parseRupiah(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits ? Number(digits) : 0;
}

export default function EditPriceModal({
  open,
  onClose,
  price,
}: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    min_price: "",
    max_price: "",
    satuan: "",
  });

  useEffect(() => {
    if (!price) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setForm({
      min_price: price.min_price ? formatRupiah(String(price.min_price)) : "",
      max_price: price.max_price ? formatRupiah(String(price.max_price)) : "",
      satuan: price.satuan,
    });
  }, [price]);

  async function handleSave() {
    if (!price) return;

    setLoading(true);

    const result = await updatePrice({
      id: price.id,
      min_price: parseRupiah(form.min_price),
      max_price: parseRupiah(form.max_price),
      satuan: form.satuan,
    });

    setLoading(false);

    if (!result.success) {
      alert(result.message);
      return;
    }

    router.refresh();
    onClose();
  }

  if (!open || !price) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-emerald-900">
          Edit Harga
        </h2>

        <p className="mt-1 text-slate-500">
          {price.product_name}
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Harga Minimum
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500">
                Rp
              </span>
              <input
                type="text"
                inputMode="numeric"
                autoComplete="off"
                placeholder="0"
                value={form.min_price}
                onChange={(e) =>
                  setForm({
                    ...form,
                    min_price: formatRupiah(e.target.value),
                  })
                }
                className="w-full rounded-xl border border-slate-300 pl-11 pr-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Harga Maksimum
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500">
                Rp
              </span>
              <input
                type="text"
                inputMode="numeric"
                autoComplete="off"
                placeholder="0"
                value={form.max_price}
                onChange={(e) =>
                  setForm({
                    ...form,
                    max_price: formatRupiah(e.target.value),
                  })
                }
                className="w-full rounded-xl border border-slate-300 pl-11 pr-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Satuan
            </label>
            <input
              value={form.satuan}
              onChange={(e) =>
                setForm({
                  ...form,
                  satuan: e.target.value,
                })
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-xl border border-slate-300 px-5 py-2 hover:bg-slate-50 disabled:opacity-50"
          >
            Batal
          </button>

          <button
            onClick={handleSave}
            disabled={loading}
            className="rounded-xl bg-emerald-600 px-5 py-2 font-medium text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </div>
    </div>
  );
}