import React from "react";
import {
  Search,
  Plus,
  Download,
  Edit2,
  Trash2,
  Tablets,
  Syringe,
  Pill,
  ShoppingBasket,
  Beaker,
  Bell,
  User,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

const StockManagement = () => {
  const categories = [
    { name: "Tablet", count: 124, icon: <Beaker size={18} /> },
    { name: "Syrup", count: 45, icon: <Beaker size={18} /> },
    { name: "Syrup", count: 32, icon: <Beaker size={18} /> },
    { name: "Injection", count: 50, icon: <Syringe size={18} /> },
    { name: "Painkillers", count: 20, icon: <Pill size={18} /> },
    { name: "Vitamins", count: 50, icon: <Tablets size={18} /> },
    { name: "Groceries", count: 10, icon: <ShoppingBasket size={18} /> },
  ];

  const tableData = Array(7).fill({
    name: "Antibiotics",
    description: "(Bacterial infection treatment)",
    status: "Active",
    linked: 124,
    date: "Oct 24, 2023",
    admin: "Admin",
  });

  return (
    <div className="min-h-screen rounded-4xl bg-teal-100 p-6 font-sans text-slate-700">
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-bold">Stock Management</h1>
          <p className="text-xs text-emerald-700">
            Dashboard / Product Management /{" "}
            <span className="font-semibold">Stock Management</span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm text-green-500 font-medium leading-tight">
            Eminem
            <div className="text-xs text-gray-500">Admin</div>
          </div>

          <User className="text-gray-600" />
          <Bell className="text-gray-600" />
        </div>
      </header>

      <div className="flex gap-6">
        <aside className="w-64 bg-white/60 rounded-2xl p-4 shadow-sm backdrop-blur-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="font-bold text-lg leading-tight">Categories</h2>
              <p className="text-[10px] text-gray-500 italic">
                Drag to reorder hierarchy
              </p>
            </div>

            <button className="bg-emerald-600 text-white p-1 rounded-md flex items-center gap-1 text-xs px-2 mt-1 hover:bg-emerald-700 transition-colors">
              <Plus size={14} /> Add New
            </button>
          </div>

          <div className="space-y-2">
            {categories.map((cat, i) => (
              <div
                key={i}
                className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                  cat.active
                    ? "bg-[#98e2e9] border-cyan-400"
                    : "bg-white border-gray-100 hover:bg-teal-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-gray-100 rounded-lg">{cat.icon}</span>
                  <div>
                    <p className="text-sm font-semibold">{cat.name}</p>
                    <p className="text-[10px] text-gray-400">
                      {cat.count} Types
                    </p>
                  </div>
                </div>
                <span className="text-gray-400">❯</span>
              </div>
            ))}
          </div>
        </aside>

        <main className="flex-1 bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold">Tablets</h2>
              <p className="text-sm text-emerald-600">
                Manage medicine types and classifications for tablet-based
                products
              </p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg text-sm font-semibold">
                <Download size={16} /> Import
              </button>
              <button className="flex items-center gap-2 bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                <Edit2 size={16} /> Edit Type
              </button>
              <button className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                <Plus size={16} /> Add Type
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <StatCard
              label="Total Types"
              value="124"
              sub="23% from last month"
              color="text-green-600"
            />
            <StatCard
              label="Active Types"
              value="18"
              sub="99% Utilization"
              color="text-blue-600"
            />
            <StatCard
              label="Disabled Types"
              value="6"
              sub="-7% from last month"
              color="text-red-600"
              isWarning
            />
          </div>

          <div className="flex justify-between mb-4">
            <div className="relative w-1/3">
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search product type..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg border-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="flex gap-2">
              <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
                <option>All Status</option>
              </select>
              <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
                <option>Sort by Name</option>
              </select>
            </div>
          </div>

          <table className="w-full text-left">
            <thead>
              <tr className="text-emerald-800 uppercase text-xs font-bold border-b">
                <th className="pb-4">Type Name</th>
                <th className="pb-4 text-center">Status</th>
                <th className="pb-4 text-center">Linked Products</th>
                <th className="pb-4">Last Updated</th>
                <th className="pb-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {tableData.map((item, idx) => (
                <tr key={idx} className="text-sm">
                  <td className="py-4">
                    <p className="font-bold">{item.name}</p>
                    <p className="text-[10px] text-gray-400">
                      {item.description}
                    </p>
                  </td>
                  <td className="py-4 text-center">
                    <span
                      className={`px-4 py-1 rounded-full text-xs font-bold ${idx % 3 === 2 ? "bg-red-100 text-red-600" : "bg-indigo-100 text-indigo-600"}`}
                    >
                      {idx % 3 === 2 ? "Disabled" : "Active"}
                    </span>
                  </td>
                  <td className="py-4 text-center font-semibold">
                    {item.linked}
                  </td>
                  <td className="py-4">
                    <p className="font-semibold">{item.date}</p>
                    <p className="text-[10px] text-gray-400">by {item.admin}</p>
                  </td>
                  <td className="py-4">
                    <div className="flex justify-center gap-3">
                      <Edit2
                        size={16}
                        className="text-gray-400 cursor-pointer"
                      />
                      <Trash2
                        size={16}
                        className="text-red-400 cursor-pointer"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, sub, isWarning }) => (
  <div className="border border-gray-100 rounded-xl p-4 flex justify-between items-center shadow-sm bg-white">
    <div>
      <p className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wider">
        {label}
      </p>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
      <p
        className={`text-[10px] mt-1 font-medium ${
          isWarning ? "text-red-500" : "text-emerald-600"
        }`}
      >
        {sub}
      </p>
    </div>

    <div
      className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
        isWarning ? "bg-red-50 text-red-500" : "bg-emerald-50 text-emerald-500"
      }`}
    >
      {isWarning ? (
        <AlertCircle size={24} strokeWidth={2.5} />
      ) : (
        <CheckCircle2 size={24} strokeWidth={2.5} />
      )}
    </div>
  </div>
);

export default StockManagement;
