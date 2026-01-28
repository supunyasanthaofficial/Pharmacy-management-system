import { useState } from "react";
import {
  User,
  Bell,
  Search,
  Filter,
  Download,
  X,
  FileText,
  Sheet,
} from "lucide-react";
export default function InventoryPage() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [openExport, setOpenExport] = useState(false);
  const [range, setRange] = useState("all");
  const [format, setFormat] = useState("pdf");
  const [openFilter, setOpenFilter] = useState(false);
  const [stockFilter, setStockFilter] = useState("");
  const [expiryFilter, setExpiryFilter] = useState("");

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
              className="w-full pl-10 pr-4 p-3 rounded-lg border border-black shadow-sm focus:outline-none focus:ring-2 bg-white"
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
            <div></div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <button
                onClick={() => setOpenFilter(true)}
                className="flex items-center gap-2 px-6 py-2 rounded hover:bg-slate-50 transition"
              >
                <Filter size={18} className="text-slate-600" />
                Filters
              </button>
              <button
                onClick={() => setOpenExport(true)}
                className="flex items-center gap-2 px-3 py-2 rounded hover:bg-slate-50 transition"
              >
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
      {openFilter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="w-90[360px] rounded-2xl border-4 border-teal-300 bg-white p-6 shadow-xl animate-scalIn">
            <div className="mb-4 flex items-center justify-between border-b pb-3">
              <h2 className="text-xl font-bold underline">Filter</h2>
              <button
                onClick={() => setOpenFilter(false)}
                className="rounded p-2 hover:bg-gray-100"
              >
                <X />
              </button>
            </div>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold mb-1">Category</p>
                <select className="w-full rounded bg-gray-200 px-3 py-2">
                  <option>Select Category</option>
                  <option>Syrup</option>
                  <option>Painkillers</option>
                  <option>Tablet</option>
                  <option>Injection</option>
                  <option>Antibiotics</option>
                </select>
              </div>
              <div>
                <p className="font-semibold mb-1">Medicine Type</p>
                <input className="w-full rounded bg-gray-200 px-3 py-2" />
              </div>
              <div>
                <p className="font-semibold mb-1">Brand</p>
                <input className="w-full rounded bg-gray-200 px-3 py-2" />
              </div>
              <div>
                <p className="font-semibold mb-1">Supplier </p>
                <select className="w-full rounded bg-gray-200 px-3 py-2">
                  <option>Select Supplier</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </select>
              </div>
              <div>
                <p className="font-semibold mb-1">Batch No</p>
                <input className="w-full rounded bg-gray-200 px-3 py-2" />
              </div>

              <div>
                <p className="font-semibold mb-1">Stock Status</p>
                <div className="flex gap-3">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="stock"
                      value="in-stock"
                      checked={stockFilter === "in-stock"}
                      onChange={(e) => setStockFilter(e.target.value)}
                      className="accent-teal-600"
                    />
                    <span>In Stock</span>
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="stock"
                      value="low-stock"
                      checked={stockFilter === "low-stock"}
                      onChange={(e) => setStockFilter(e.target.value)}
                      className="accent-teal-600"
                    />
                    <span>Low Stock</span>
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="stock"
                      value="out-of-stock"
                      checked={stockFilter === "out-of-stock"}
                      onChange={(e) => setStockFilter(e.target.value)}
                      className="accent-teal-600"
                    />
                    <span>Out of Stock</span>
                  </label>
                </div>
              </div>
              <div>
                <p className="font-semibold mb-1">Expiry Status</p>
                <div className="flex gap-3">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="expiry"
                      value="valid"
                      checked={expiryFilter === "valid"}
                      onChange={(e) => setExpiryFilter(e.target.value)}
                      className="accent-teal-600"
                    />
                    <span>Valid</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="expiry"
                      value="near-expiry"
                      checked={expiryFilter === "near-expiry"}
                      onChange={(e) => setExpiryFilter(e.target.value)}
                      className="accent-teal-600"
                    />
                    <span>Near Expiry</span>
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="expiry"
                      value="expired"
                      checked={expiryFilter === "expired"}
                      onChange={(e) => setExpiryFilter(e.target.value)}
                      className="accent-teal-600"
                    />
                    <span>Expiry</span>
                  </label>
                </div>
              </div>
              <div>
                <p className="font-semibold mb-1">Price Range</p>
                <div className="flex gap-2">
                  <input
                    placeholder="From"
                    className="w-1/2 rounded bg-gray-200 px-2 py-1"
                  />
                  <input
                    placeholder="To"
                    className="w-1/2 rounded bg-gray-200 px-2 py-1"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 flex justify-between">
              <button className="rounded border px-4 py-2 ">
                Clear Filter
              </button>
              <button className="rounded bg-teal-600 px-4 py-2 text-white">
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      )}
      {openExport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="w-160[640px] rounded-2xl border-4 border-teal-300 bg-white p-6 shadow-xl animate-scaleIn">
            <div className="mb-4 flex items-center justify-between border-b pb-3">
              <h2 className="text-xl font-bold">Export Inventory Data</h2>
              <button
                onClick={() => setOpenExport(false)}
                className="rounded p-2 hover:bg-gray-100"
              >
                <X />
              </button>
            </div>

            <div className="mb-5">
              <p className="mb-2 font-semibold">Select Data Range</p>
              <div className="flex gap-3">
                {[
                  { id: "all", label: "All Inventory" },
                  { id: "filtered", label: "Filtered Result" },
                  { id: "custom", label: "Customer Range" },
                ].map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setRange(r.id)}
                    className={`rounded-lg border px-4 py-2 text-sm ${
                      range === r.id
                        ? "bg-green-200 border-green-400"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-5 grid grid-cols-2 gap-4">
              <div>
                <p className="mb-1 text-sm">Start Date</p>
                <input
                  type="date"
                  className="w-full rounded border px-3 py-2 text-sm"
                />
              </div>

              <div>
                <p className="mb-1 text-sm">End Date</p>
                <input
                  type="date"
                  className="w-full rounded border px-3 py-2 text-sm"
                />
              </div>
            </div>

            <div className="mb-6">
              <p className="mb-2 font-semibold">Download Format</p>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setFormat("pdf")}
                  className={`flex items-center gap-3 rounded-lg border p-3 ${
                    format === "pdf" && "border-red-500 bg-red-50"
                  }`}
                >
                  <FileText size={20} className="text-red-600" />
                  <span className="font-semibold">PDF</span>
                </button>

                <button
                  onClick={() => setFormat("excel")}
                  className={`flex items-center gap-3 rounded-lg border p-3 ${
                    format === "excel" && "border-green-600 bg-green-50"
                  }`}
                >
                  <Sheet size={20} className="text-green-600" />
                  <span className="font-semibold">Excel</span>
                </button>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setOpenExport(false)}
                className="rounded border px-6 py-2"
              >
                Cancel
              </button>

              <div className="flex gap-3">
                <button className="rounded border px-6 py-2">Print</button>
                <button className="rounded bg-gray-300 px-6 py-2 font-medium">
                  Export Data
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
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
