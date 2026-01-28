import React, { useState } from "react";
import { 
  Settings, 
  Store, 
  Printer, 
  ShieldCheck, 
  Bell, 
  User, 
  Save, 
  Globe, 
  Database 
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="min-h-screen rounded-4xl bg-teal-100 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <Settings size={24} className="text-teal-600" /> System Settings
        </h1>
        <p className="text-sm text-green-600">Configure your pharmacy details and system preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar Menu */}
        <div className="bg-white rounded-3xl p-4 shadow-sm h-fit">
          <nav className="space-y-1">
            <TabButton 
              active={activeTab === "general"} 
              onClick={() => setActiveTab("general")} 
              icon={<Store size={18} />} 
              label="Pharmacy Info" 
            />
            <TabButton 
              active={activeTab === "printer"} 
              onClick={() => setActiveTab("printer")} 
              icon={<Printer size={18} />} 
              label="Printer & Receipt" 
            />
            <TabButton 
              active={activeTab === "security"} 
              onClick={() => setActiveTab("security")} 
              icon={<ShieldCheck size={18} />} 
              label="User Roles" 
            />
            <TabButton 
              active={activeTab === "backup"} 
              onClick={() => setActiveTab("backup")} 
              icon={<Database size={18} />} 
              label="Database & Backup" 
            />
          </nav>
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-3xl p-8 shadow-sm min-h-[500px] flex flex-col">
            
            {activeTab === "general" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <h3 className="text-lg font-bold border-b pb-2">Pharmacy Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputGroup label="Pharmacy Name" placeholder="TrustMed Pharmacy" />
                  <InputGroup label="Registration No" placeholder="PH-12345" />
                  <InputGroup label="Contact Number" placeholder="+94 77 123 4567" />
                  <InputGroup label="Email Address" placeholder="info@trustmed.lk" />
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Address</label>
                    <textarea className="w-full p-3 bg-gray-50 border-none rounded-xl text-sm outline-none focus:ring-1 focus:ring-teal-500" rows="3" placeholder="No 123, Main Street, Colombo"></textarea>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "printer" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <h3 className="text-lg font-bold border-b pb-2">Printer & Receipt Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                    <div>
                      <p className="font-bold text-sm">Thermal Printer (80mm)</p>
                      <p className="text-xs text-gray-400">Status: Connected</p>
                    </div>
                    <button className="text-xs font-bold text-teal-600 bg-teal-100 px-3 py-1 rounded-lg">TEST PRINT</button>
                  </div>
                  <InputGroup label="Receipt Header Text" placeholder="Thank you for shopping with us!" />
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="showLogo" className="accent-teal-600" />
                    <label htmlFor="showLogo" className="text-sm font-medium">Show Pharmacy Logo on Receipt</label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h3 className="text-lg font-bold border-b pb-2">User Access Control</h3>
                <p className="text-sm text-gray-500">Manage who can access the billing and inventory sections.</p>
                <div className="border rounded-2xl overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-3 text-left">Role</th>
                        <th className="p-3">Billing</th>
                        <th className="p-3">Inventory</th>
                        <th className="p-3">Reports</th>
                      </tr>
                    </thead>
                    <tbody className="text-center divide-y">
                      <tr><td className="p-3 text-left font-bold">Admin</td><td>✅</td><td>✅</td><td>✅</td></tr>
                      <tr><td className="p-3 text-left font-bold">Cashier</td><td>✅</td><td>❌</td><td>❌</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Save Button Container */}
            <div className="mt-auto pt-6 flex justify-end">
              <button className="flex items-center gap-2 bg-gray-800 text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-all shadow-lg">
                <Save size={18} /> SAVE CHANGES
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-components for cleaner code
const TabButton = ({ active, onClick, icon, label }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
      active ? "bg-teal-600 text-white shadow-md" : "text-gray-500 hover:bg-teal-50"
    }`}
  >
    {icon} {label}
  </button>
);

const InputGroup = ({ label, placeholder }) => (
  <div>
    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">{label}</label>
    <input 
      type="text" 
      placeholder={placeholder}
      className="w-full p-3 bg-gray-50 border-none rounded-xl text-sm outline-none focus:ring-1 focus:ring-teal-500"
    />
  </div>
);