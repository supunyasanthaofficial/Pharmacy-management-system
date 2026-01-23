import React, { useState } from "react";
import {
  BarChart3,
  Package,
  AlertTriangle,
  ShoppingCart,
  TrendingUp,
  Activity,
  User,
  Bell,
  Printer,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function ReportsSummaryPage() {
  const [activeView, setActiveView] = useState("summary");

  const cards = [
    {
      id: "sales",
      title: "Sales Report",
      subtitle: "Total sales this month",
      value: "Rs12,450.75",
      note: "↑ 12% from last month",
      color: "font-bold text-green-600",
      bg: "bg-green-100",
      icon: BarChart3,
    },
    {
      id: "stock",
      title: "Stock Report",
      subtitle: "Items running low",
      value: "18 Items",
      note: "3 items out of stock",
      color: "font-bold text-blue-600",
      bg: "bg-blue-100",
      icon: Package,
    },
    {
      id: "expiry",
      title: "Expiry Report",
      subtitle: "Items expiring soon",
      value: "42 Items",
      note: "7 items expired this month",
      color: "font-bold text-red-600",
      bg: "bg-red-100",
      icon: AlertTriangle,
    },
    {
      id: "purchase",
      title: "Purchase Report",
      subtitle: "Total purchases this month",
      value: "Rs7,890.20",
      note: "Across 25 orders",
      color: "font-bold text-orange-600",
      bg: "bg-orange-100",
      icon: ShoppingCart,
    },
    {
      id: "profit",
      title: "Profit & Loss",
      subtitle: "Net profit this month",
      value: "Rs4,560.55",
      note: "↑ 8% from last month",
      color: "font-bold text-purple-600",
      bg: "bg-purple-100",
      icon: TrendingUp,
    },
    {
      id: "activity",
      title: "User Activity",
      subtitle: "Recent system actions",
      value: "",
      note: "john.doe added new stock for Paracetamol\njane.smith processed sale #20231027-051",
      color: "font-bold text-yellow-600",
      bg: "bg-yellow-100",
      icon: Activity,
      isActivity: true,
    },
  ];

  const stockData = [
    {
      name: "Paracetamol 500mg",
      brand: "Generic Labs",
      category: "Painkiller",
      current: 250,
      min: 50,
      status: "In Stock",
    },
    {
      name: "Amoxicillin 250mg",
      brand: "Pharma Inc",
      category: "Antibiotics",
      current: 45,
      min: 50,
      status: "Low Stock",
    },
    {
      name: "Ibuprofen 200mg",
      brand: "MedLife",
      category: "Painkiller",
      current: 120,
      min: 30,
      status: "In Stock",
    },
    {
      name: "Aspirin 81mg",
      brand: "HealthCare+",
      category: "Cardiovascular",
      current: 0,
      min: 20,
      status: "Out of Stock",
    },
    {
      name: "Loratadine 10mg",
      brand: "AllergyRelief",
      category: "Antihistamine",
      current: 88,
      min: 40,
      status: "In Stock",
    },
  ];

  if (activeView === "summary") {
    return (
      <div className="min-h-screen rounded-4xl bg-teal-100 p-8">
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-slate-900">
              Reports Summary
            </h1>
            <div className="flex items-center gap-4">
              <div className="text-right leading-tight">
                <div className="text-sm text-green-500 font-medium">Eminem</div>
                <div className="text-xs text-gray-500">Admin</div>
              </div>
              <User className="text-gray-600" />
              <Bell className="text-gray-600" />
            </div>
          </div>
          <select className="px-4 py-2 mb-8 rounded-md border border-teal-200 bg-white outline-none">
            <option>All</option>
            <option>Today</option>
            <option>This Month</option>
          </select>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border shadow-sm p-6 flex flex-col justify-between h-64 hover:shadow-md transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${card.bg}`}
                  >
                    <card.icon size={24} className={card.color} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">
                      {card.title}
                    </h3>
                    <p className={`text-sm ${card.color}`}>{card.subtitle}</p>
                  </div>
                </div>
                {!card.isActivity ? (
                  <>
                    <div className="text-3xl font-extrabold text-slate-900 mb-2">
                      {card.value}
                    </div>
                    <p className={`text-sm ${card.color}`}>{card.note}</p>
                  </>
                ) : (
                  <p className="text-sm text-slate-700 whitespace-pre-line leading-relaxed">
                    {card.note}
                  </p>
                )}
                <div className="mt-4">
                  <button
                    onClick={() =>
                      setActiveView(
                        card.id === "sales"
                          ? "sales_detail"
                          : card.id === "stock"
                            ? "stock_detail"
                            : "summary",
                      )
                    }
                    className="text-teal-700 font-bold text-sm hover:underline"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (activeView === "stock_detail") {
    return (
      <div className="min-h-screen bg-[#b2dfdb] p-8 rounded-[40px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Stock Report
              </h1>
              <p className="text-sm font-medium">
                <span
                  className="text-teal-600 cursor-pointer hover:underline"
                  onClick={() => setActiveView("summary")}
                >
                  Reports
                </span>
                <span className="text-gray-400 mx-1">/</span>
                <span
                  className="text-teal-600 cursor-pointer hover:underline"
                  onClick={() => setActiveView("sales_detail")}
                >
                  Sales Report
                </span>
                <span className="text-gray-400 mx-1">/</span>
                <span className="text-teal-900 font-bold">Stock Report</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right leading-none">
                <p className="text-teal-800 font-bold text-sm">Harry style</p>
                <p className="text-gray-500 text-[10px] font-bold">Admin</p>
              </div>
              <div className="p-1.5 bg-white rounded-full border border-gray-200">
                <User size={18} className="text-gray-700" />
              </div>
              <div className="p-1.5 bg-white rounded-full border border-gray-200 relative">
                <Bell size={18} className="text-gray-700" />
                <span className="absolute top-1.5 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
              </div>
            </div>
          </div>

          <div className="relative mb-6">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by medicine name or ID ..."
              className="w-full max-w-sm pl-10 pr-4 py-2 rounded-lg border border-teal-200 outline-none focus:ring-1 focus:ring-teal-500 text-sm"
            />
          </div>

          <div className="bg-white rounded-[25px] border-[3px] border-blue-400 overflow-hidden shadow-sm mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="px-6 py-6 text-[#00897b] font-black text-lg">
                    MEDICINE NAME
                  </th>
                  <th className="px-6 py-6 text-[#00897b] font-black text-lg">
                    BRAND
                  </th>
                  <th className="px-6 py-6 text-[#00897b] font-black text-lg">
                    CATEGORY
                  </th>
                  <th className="px-6 py-6 text-[#00897b] font-black text-lg">
                    CURRENT STOCK
                  </th>
                  <th className="px-6 py-6 text-[#00897b] font-black text-lg">
                    MIN. STOCK
                  </th>
                  <th className="px-6 py-6 text-[#00897b] font-black text-lg text-center">
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody className="font-bold text-gray-800">
                {stockData.map((item, idx) => (
                  <tr key={idx} className="border-b border-gray-50">
                    <td className="px-6 py-5 text-base">{item.name}</td>
                    <td className="px-6 py-5 text-base">{item.brand}</td>
                    <td className="px-6 py-5 text-base">{item.category}</td>
                    <td className="px-6 py-5 text-base text-center">
                      {item.current}
                    </td>
                    <td className="px-6 py-5 text-base text-center">
                      {item.min}
                    </td>
                    <td className="px-6 py-5">
                      <div
                        className={`mx-auto w-32 py-1.5 rounded-lg border text-center text-sm font-black 
                        ${
                          item.status === "In Stock"
                            ? "text-green-600 border-green-600 bg-green-50"
                            : item.status === "Low Stock"
                              ? "text-orange-500 border-orange-500 bg-orange-50"
                              : "text-red-500 border-red-500 bg-red-50"
                        }`}
                      >
                        {item.status}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="px-6 py-6 flex justify-between items-center text-sm text-gray-500 font-bold">
              <span>Showing 1 to 5 of 100 Entries</span>
              <div className="flex gap-1 items-center">
                <button className="px-3 py-1.5 rounded-lg border border-gray-300 bg-gray-50">
                  Previous
                </button>
                <button className="w-8 h-8 rounded bg-[#4db6ac] text-white">
                  1
                </button>
                <button className="w-8 h-8 rounded border border-gray-300">
                  2
                </button>
                <button className="w-8 h-8 rounded border border-gray-300">
                  3
                </button>
                <button className="px-3 py-1.5 rounded-lg border border-gray-300 bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <button className="flex items-center gap-2 bg-white px-8 py-3 rounded-xl shadow-sm border border-gray-100 font-bold text-gray-700">
              Download PDF{" "}
              <span className="bg-red-500 text-white text-[10px] px-1 rounded">
                PDF
              </span>
            </button>
            <button className="flex items-center gap-2 bg-white px-8 py-3 rounded-xl shadow-sm border border-gray-100 font-bold text-gray-700">
              Download excel{" "}
              <span className="bg-green-600 text-white text-[10px] px-1 rounded">
                X
              </span>
            </button>
            <button className="flex items-center gap-2 bg-white px-8 py-3 rounded-xl shadow-sm border border-gray-100 font-bold text-gray-700 text-sm">
              Print <Printer size={22} className="text-black ml-1" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#b2dfdb] p-8 rounded-[40px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Sales Reports</h1>
            <p className="text-sm font-medium">
              <span
                className="text-teal-600 cursor-pointer hover:underline"
                onClick={() => setActiveView("summary")}
              >
                Reports
              </span>
              <span className="text-gray-400 mx-1">/</span>
              <span className="text-teal-900 font-bold">Sales Reports</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right leading-none">
              <p className="text-teal-800 font-bold text-sm">Harry style</p>
              <p className="text-gray-500 text-[10px] font-bold">Admin</p>
            </div>
            <div className="p-1.5 bg-white rounded-full border border-gray-200">
              <User size={18} className="text-gray-700" />
            </div>
            <div className="p-1.5 bg-white rounded-full border border-gray-200 relative">
              <Bell size={18} className="text-gray-700" />
              <span className="absolute top-1.5 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[25px] p-6 shadow-sm flex items-center justify-between mb-8 border border-teal-50">
          <div className="flex items-center gap-8">
            <div>
              <p className="text-sm font-bold text-gray-700 mb-2">Date Range</p>
              <div className="flex border border-gray-200 rounded-lg overflow-hidden h-9">
                <button className="px-4 bg-[#b3d1ff] text-[#1e40af] text-xs font-bold">
                  Daily
                </button>
                <button className="px-4 bg-white text-gray-500 text-xs font-bold border-l hover:bg-gray-50">
                  Monthly
                </button>
                <button className="px-4 bg-white text-gray-500 text-xs font-bold border-l hover:bg-gray-50">
                  Custom
                </button>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-700 mb-2">Start Date</p>
              <input
                type="text"
                placeholder="mm / dd / yyyy"
                className="border border-gray-200 rounded-lg px-3 h-9 text-xs w-44 outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-700 mb-2">End Date</p>
              <input
                type="text"
                placeholder="mm / dd / yyyy"
                className="border border-gray-200 rounded-lg px-3 h-9 text-xs w-44 outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>
          </div>
          <button className="bg-[#00796b] text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-[#00695c] transition self-end">
            Generate Report
          </button>
        </div>

        <div className="bg-white rounded-[25px] min-h-112.5[450px] shadow-sm flex flex-col items-center justify-center p-10 mb-8 border border-teal-50 text-center">
          <div className="mb-6 opacity-30">
            <Search size={100} className="text-gray-600 stroke-[1.5]" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-3">
            Generate a report to get started
          </h2>
          <p className="text-gray-400 text-base max-w-lg font-medium leading-relaxed">
            Select a date range and click "Generate Report" to view your sales
            data, charts, and key metrics.
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100 font-bold text-gray-700 text-sm hover:shadow-md transition">
            Download PDF{" "}
            <span className="bg-red-500 text-white text-[9px] px-1 rounded font-black">
              PDF
            </span>
          </button>
          <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100 font-bold text-gray-700 text-sm hover:shadow-md transition">
            Download excel{" "}
            <span className="bg-green-600 text-white text-[9px] px-1 rounded font-black">
              X
            </span>
          </button>
          <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100 font-bold text-gray-700 text-sm hover:shadow-md transition">
            Print <Printer size={18} className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}
