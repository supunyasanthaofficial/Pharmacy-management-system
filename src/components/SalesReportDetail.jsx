import React from "react";
import { User, Bell, Download, Printer } from "lucide-react";

export default function SalesReportDetail() {
  return (
    <div className="min-h-screen rounded-4xl bg-[#b2dfdb] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Sales Reports</h1>
            <nav className="text-sm text-teal-700 font-medium">
              Reports / <span className="text-teal-900">Sales Reports</span>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-sm text-teal-800 font-bold leading-tight">
                Harry style
              </div>
              <div className="text-xs text-gray-600 font-semibold text-right">
                Admin
              </div>
            </div>
            <div className="p-1 bg-white rounded-full border border-gray-300">
              <User size={20} className="text-slate-800" />
            </div>
            <div className="relative">
              <Bell size={20} className="text-slate-800" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-teal-100 flex items-center justify-between mb-6">
          <div className="flex gap-8">
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-2">
                Date Range
              </label>
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button className="px-4 py-1.5 bg-blue-200 text-blue-800 text-sm font-bold">
                  Daily
                </button>
                <button className="px-4 py-1.5 bg-white text-slate-600 text-sm font-bold border-l">
                  Monthly
                </button>
                <button className="px-4 py-1.5 bg-white text-slate-600 text-sm font-bold border-l">
                  Custom
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-800 mb-2">
                Start Date
              </label>
              <input
                type="text"
                placeholder="mm / dd / yyyy"
                className="border border-gray-300 rounded-lg px-4 py-1.5 text-sm w-48 bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-800 mb-2">
                End Date
              </label>
              <input
                type="text"
                placeholder="mm / dd / yyyy"
                className="border border-gray-300 rounded-lg px-4 py-1.5 text-sm w-48 bg-white focus:outline-none"
              />
            </div>
          </div>

          <button className="bg-[#00796b] text-white px-8 py-2 rounded-lg font-bold text-sm hover:bg-[#00695c] transition">
            Generate Report
          </button>
        </div>

        <div className="bg-white rounded-2xl p-12 min-h-112.5 shadow-sm flex flex-col items-center justify-center text-center mb-6">
          <div className="mb-6">
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#64748b"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 3v18h18" />
              <path d="M18.5 10.5l-4-4L7 14" />
              <circle cx="18" cy="19" r="3" />
              <path d="M20 21l2 2" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Generate a report to get started
          </h2>
          <p className="text-slate-500 text-lg max-w-lg leading-relaxed font-medium">
            Select a date range and click "Generate Report" to view your sales
            data, charts, and key metrics.
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <button className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100 font-bold text-slate-800 hover:bg-gray-50">
            Download PDF
            <div className="bg-red-500 text-white text-[10px] px-1 py-0.5 rounded leading-none font-black">
              PDF
            </div>
          </button>

          <button className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100 font-bold text-slate-800 hover:bg-gray-50">
            Download excel
            <div className="bg-green-600 text-white text-[10px] px-1 py-0.5 rounded leading-none font-black">
              X
            </div>
          </button>

          <button className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100 font-bold text-slate-800 hover:bg-gray-50">
            Print
            <Printer size={20} className="text-slate-900" />
          </button>
        </div>
      </div>
    </div>
  );
}
