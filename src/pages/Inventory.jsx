import { useState } from "react";
import { User, Bell, Search, Filter, Download } from "lucide-react";
export default function InventoryPage() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const totals = {
    totalMedicines: 1482,
    inStock: 1205,
    lowOrOut: 1205,
    nearExpiry: 45,
    totalCategories: 75,
    totalBrands: 120,
  };

  const data = [
    {
      name: "Paracetamol 500mg",
      category: "Analgesics",
      supplier: "PharmaCo",
      batch: "PC2024A",
      expiry: "12/2025",
      qty: 500,
      unit: "Rs2.50",
      status: "In Stock",
    },
    {
      name: "Amoxicillin 250mg",
      category: "Antibiotics",
      supplier: "MediSupply",
      batch: "AMX23B",
      expiry: "08/2024",
      qty: 35,
      unit: "Rs1.50",
      status: "Near Expiry",
    },
    {
      name: "Loratadine 10mg",
      category: "Antihistamine",
      supplier: "HealthWell",
      batch: "LOR24C",
      expiry: "01/2026",
      qty: 15,
      unit: "Rs5.50",
      status: "Low Stock",
    },
    {
      name: "Ibuprofen 200mg",
      category: "Analgesics",
      supplier: "PharmaCo",
      batch: "IBU22D",
      expiry: "01/2026",
      qty: 250,
      unit: "Rs3.50",
      status: "Expired",
    },
    {
      name: "Metformin 500mg",
      category: "Antidiabetics",
      supplier: "MediSupply",
      batch: "MET23E",
      expiry: "11/2026",
      qty: 0,
      unit: "Rs5.50",
      status: "Out of Stock",
    },
  ];

  const filtered = data.filter((d) =>
    (d.name + d.category + d.supplier + d.batch + d.status)
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  const perPage = 5;
  const totalItems = totals.totalMedicines;
  const start = (page - 1) * perPage + 1;
  const end = Math.min(start + perPage - 1, totalItems);

  function statusClass(status) {
    switch (status) {
      case "In Stock":
        return "text-green-600 font-semibold";
      case "Near Expiry":
        return "text-orange-500 font-semibold";
      case "Low Stock":
        return "text-red-500 font-semibold";
      case "Expired":
        return "text-red-600 font-semibold";
      case "Out of Stock":
        return "text-rose-500 font-semibold";
      default:
        return "text-gray-700";
    }
  }

  return (
    <div className="min-h-screen rounded-4xl bg-teal-100 p-8">
      <div className="max-w-7xl mx-auto  rounded-2xl p-6   ">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-slate-900  decoration-slate-700 underline-offset-4">
            Inventory & Stocke Management
          </h1>

          <div className="flex items-center gap-4">
            <div className="text-sm text-green-500 font-medium leading-tight">
              Eminem
              <div className="text-xs text-gray-500">Admin</div>
            </div>

            <User className="text-gray-600" />
            <Bell className="text-gray-600" />
          </div>
        </div>

        <div className="mb-6">
          <div className="relative max-w-3xl">
            <Search className="absolute left-3 top-4 text-gray-400" size={18} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search medicine by name, brand, barcode"
              className="w-full pl-10 pr-4 p-3 rounded-lg border border-black shadow-sm focus:outline-none focus:ring-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <MetricCard label="Total Medicines" value={totals.totalMedicines} />
          <MetricCard
            label="In Stock"
            value={totals.inStock}
            valueClass="text-emerald-500"
          />
          <MetricCard
            label="Low / Out of Stock"
            value={totals.lowOrOut}
            valueClass="text-rose-600"
          />
          <MetricCard
            label="Near Expiry"
            value={totals.nearExpiry}
            valueClass="text-orange-500"
          />
          <MetricCard label="Total Categories" value={totals.totalCategories} />
          <MetricCard label="Total Brands" value={totals.totalBrands} />
        </div>
        <h3 className="text-xl font-bold text-slate-800">
          Full Inventory List
        </h3>
        <div className="bg-white rounded-lg p-6 shadow-inner border border-teal-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <button className="flex items-center gap-2 px-6 py-2 rounded hover:bg-slate-50 transition">
                <Filter size={18} className="text-slate-600" />
                Filters
              </button>
              <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-slate-50 transition">
                <Download size={18} className="text-slate-600" />
                Export
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left divide-y divide-teal-100">
              <thead>
                <tr className="text-sm text-teal-800 bg-teal-50">
                  <th className="px-6 py-3 font-medium">Medicine Name</th>
                  <th className="px-6 py-3 font-medium">Category</th>
                  <th className="px-6 py-3 font-medium">Supplier</th>
                  <th className="px-6 py-3 font-medium">Batch No</th>
                  <th className="px-6 py-3 font-medium">Expiry Date</th>
                  <th className="px-6 py-3 font-medium">Stock Qty</th>
                  <th className="px-6 py-3 font-medium">Unit Price</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-teal-100">
                {filtered.map((row, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 align-top">
                      <div className="font-medium text-slate-700">
                        {row.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 align-top text-sm text-slate-600">
                      {row.category}
                    </td>
                    <td className="px-6 py-4 align-top text-sm text-slate-600">
                      {row.supplier}
                    </td>
                    <td className="px-6 py-4 align-top text-sm text-slate-600">
                      {row.batch}
                    </td>
                    <td className="px-6 py-4 align-top text-sm text-slate-600">
                      {row.expiry}
                    </td>
                    <td className="px-6 py-4 align-top text-sm text-slate-600">
                      {row.qty}
                    </td>
                    <td className="px-6 py-4 align-top text-sm text-slate-600">
                      {row.unit}
                    </td>
                    <td className="px-6 py-4 align-top text-sm">
                      <span className={statusClass(row.status)}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-slate-700">
              Showing {start}-{end} of {totalItems} items
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="px-4 py-2 rounded-md border bg-white text-slate-700 disabled:opacity-50"
                disabled={page === 1}
              >
                Previous
              </button>
              <button
                onClick={() => setPage((p) => p + 1)}
                className="px-4 py-2 rounded-md border bg-white text-slate-700"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value, valueClass = "text-slate-900" }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-teal-100 flex flex-col justify-between">
      <div className="text-sm text-slate-600">{label}</div>
      <div className={`text-2xl md:text-3xl font-extrabold ${valueClass}`}>
        {value}
      </div>
    </div>
  );
}
