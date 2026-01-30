import React, { useState } from 'react';
import ProductForm from './ProductForm'; 
import {
  Search, Plus, Download, Edit2, Trash2, Tablets, Syringe, Pill,
  ShoppingBasket, Beaker, Bell, User, AlertCircle, CheckCircle2,
} from "lucide-react";

const StockManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { name: "Tablet", count: 124, icon: <Beaker size={18} /> },
    { name: "Syrup", count: 45, icon: <Beaker size={18} /> },
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
    <div className="relative">
   
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsModalOpen(false)} 
          />
          <div className="relative z-10 w-full max-w-2xl animate-in fade-in zoom-in duration-200">
            <ProductForm onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}

      
      <div className={`min-h-screen rounded-4xl bg-teal-100 p-6 font-sans text-slate-700 transition-all duration-300 ${isModalOpen ? 'blur-sm pointer-events-none' : ''}`}>
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-xl font-bold text-gray-800">Stock Management</h1>
            <p className="text-xs text-emerald-700">
              Dashboard / Product Management / <span className="font-semibold">Stock Management</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-green-500 font-medium leading-tight text-right">
              Eminem <div className="text-xs text-gray-500 font-normal">Admin</div>
            </div>
            <User className="text-gray-600" />
            <Bell className="text-gray-600" />
          </div>
        </header>

        <div className="flex gap-6">
          <aside className="w-64 bg-white/60 rounded-2xl p-4 shadow-sm backdrop-blur-sm h-fit">
            <div className="flex justify-between items-start mb-4">
              <h2 className="font-bold text-lg">Categories</h2>
              <button className="bg-emerald-600 text-white p-1 rounded-md hover:bg-emerald-700 transition-colors">
                <Plus size={14} />
              </button>
            </div>

            <div className="space-y-2">
              {categories.map((cat, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-white hover:bg-teal-100 cursor-pointer transition-all">
                  <div className="flex items-center gap-3">
                    <span className="p-2 bg-gray-100 rounded-lg">{cat.icon}</span>
                    <div>
                      <p className="text-sm font-semibold">{cat.name}</p>
                      <p className="text-[10px] text-gray-400">{cat.count} Types</p>
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
                <p className="text-sm text-emerald-600 font-medium">Manage medicine types and classifications</p>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
                  <Download size={16} /> Import
                </button>
                <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
                  <Edit2 size={16} /> Edit Type
                </button>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-all shadow-md"
                >
                  <Plus size={16} /> Add Type
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <StatCard label="Total Types" value="124" sub="23% from last month" />
              <StatCard label="Active Types" value="18" sub="99% Utilization" color="text-blue-600" />
              <StatCard label="Disabled Types" value="6" sub="-7% from last month" isWarning />
            </div>

            <div className="flex justify-between mb-4">
              <div className="relative w-1/3">
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg border-none focus:ring-2 focus:ring-emerald-500 outline-none shadow-sm" />
              </div>
            </div>
            
            <table className="w-full text-left">
              <thead>
                <tr className="text-emerald-800 uppercase text-xs font-bold border-b border-gray-100">
                  <th className="pb-4">Type Name</th>
                  <th className="pb-4 text-center">Status</th>
                  <th className="pb-4 text-center">Linked Products</th>
                  <th className="pb-4">Last Updated</th>
                  <th className="pb-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {tableData.map((item, idx) => (
                  <tr key={idx} className="text-sm hover:bg-gray-50 transition-colors">
                    <td className="py-4">
                      <p className="font-bold text-gray-800">{item.name}</p>
                      <p className="text-[10px] text-gray-400">{item.description}</p>
                    </td>
                    <td className="py-4 text-center">
                      <span className={`px-4 py-1 rounded-full text-xs font-bold ${idx % 3 === 2 ? "bg-red-100 text-red-600" : "bg-indigo-100 text-indigo-600"}`}>
                        {idx % 3 === 2 ? "Disabled" : "Active"}
                      </span>
                    </td>
                    <td className="py-4 text-center font-semibold text-gray-700">{item.linked}</td>
                    <td className="py-4">
                      <p className="font-semibold text-gray-700">{item.date}</p>
                      <p className="text-[10px] text-gray-400">by {item.admin}</p>
                    </td>
                    <td className="py-4">
                      <div className="flex justify-center gap-3">
                        <Edit2 size={16} className="text-gray-400 cursor-pointer hover:text-emerald-600" />
                        <Trash2 size={16} className="text-red-300 cursor-pointer hover:text-red-600" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, sub, isWarning, color = "text-emerald-600" }) => (
  <div className="border border-gray-100 rounded-xl p-4 flex justify-between items-center shadow-sm bg-white hover:shadow-md transition-shadow">
    <div>
      <p className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-tight">{label}</p>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
      <p className={`text-[10px] mt-1 font-medium ${isWarning ? "text-red-500" : color}`}>{sub}</p>
    </div>
    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isWarning ? "bg-red-50 text-red-500" : "bg-emerald-50 text-emerald-500"}`}>
      {isWarning ? <AlertCircle size={24} /> : <CheckCircle2 size={24} />}
    </div>
  </div>
);

export default StockManagement;