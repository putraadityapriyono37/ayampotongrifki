export default function AdminHome() {
  return (
    <div className="space-y-6">

      <div>
        <h2 className="text-3xl font-bold text-emerald-900">
          Dashboard
        </h2>

        <p className="mt-2 text-slate-600">
          Selamat datang di Dashboard Admin Ayam Potong Rifki.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl bg-white p-6 shadow-sm border border-emerald-100">
          <h3 className="text-lg font-semibold">
            Harga Produk
          </h3>

          <p className="mt-2 text-slate-500">
            Kelola daftar harga ayam.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm border border-emerald-100">
          <h3 className="text-lg font-semibold">
            Pengaturan Website
          </h3>

          <p className="mt-2 text-slate-500">
            Edit WhatsApp, alamat, jam buka dan informasi usaha.
          </p>
        </div>

      </div>

    </div>
  );
}