import React from "react";
import { Search, User, Bell, Printer } from "lucide-react";

const StockReportDetail = ({ onBack }) => {
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

  return (
    <div className="min-h-screen bg-[#b2dfdb] p-8 rounded-[40px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Stock Report</h1>
            <p className="text-sm font-medium">
              <span
                className="text-teal-600 cursor-pointer hover:underline"
                onClick={onBack}
              >
                Reports
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
              <button className="px-3 py-1.5 rounded-lg border border-gray-300 bg-gray-50 hover:bg-gray-100">
                Previous
              </button>
              <button className="w-8 h-8 rounded bg-[#4db6ac] text-white">
                1
              </button>
              <button className="w-8 h-8 rounded border border-gray-300 hover:bg-gray-50">
                2
              </button>
              <button className="w-8 h-8 rounded border border-gray-300 hover:bg-gray-50">
                3
              </button>
              <button className="px-3 py-1.5 rounded-lg border border-gray-300 bg-gray-50 hover:bg-gray-100">
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
          <button className="flex items-center gap-2 bg-white px-8 py-3 rounded-xl shadow-sm border border-gray-100 font-bold text-gray-700">
            Print <Printer size={22} className="text-black ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StockReportDetail;
