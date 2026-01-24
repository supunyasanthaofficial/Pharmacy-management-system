import { X } from "lucide-react";
import ChangePasswordModal from "./ChangePasswordModal";
import { useState } from "react";

export default function EditUserModal({ isOpen, onClose, user }) {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg overflow-hidden border-2 border-teal-700">
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-black">Edit User Details</h2>
          <button
            onClick={onClose}
            className="hover:bg-gray-100 p-1 rounded-full"
          >
            <X size={24} className="text-black" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-black block">
                Full Name
              </label>
              <input
                type="text"
                defaultValue={user?.name}
                placeholder="Enter user's full name"
                className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 text-sm text-teal-800 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-black block">
                Email Address
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                placeholder="Enter user's email address"
                className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 text-sm text-teal-800 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>
          </div>

          <hr className="border-gray-100" />

          <div className="space-y-2">
            <label className="text-sm font-bold text-black block">
              User Role
            </label>
            <div className="relative">
              <select
                defaultValue={user?.role}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 text-sm text-teal-800 appearance-none focus:outline-none"
              >
                <option value="">Select role</option>
                <option value="Admin">Admin</option>
                <option value="Pharmacist">Pharmacist</option>
                <option value="Cashier">Cashier</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          <div className="space-y-3">
            <label className="text-sm font-bold text-black block">
              Security
            </label>
            <button
              onClick={() => setIsPasswordModalOpen(true)}
              className="bg-teal-700 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-teal-800 transition"
            >
              Change Password
            </button>
          </div>
        </div>

        <div className="p-6 flex justify-end gap-3 border-t border-gray-100 bg-gray-50/50">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-bold text-gray-700 hover:bg-white transition"
          >
            Cancel
          </button>
          <button className="px-6 py-2 bg-[#4ade80] text-black rounded-lg text-sm font-bold hover:bg-[#3ce675] transition">
            Update user
          </button>
        </div>
      </div>
      <ChangePasswordModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen}
      />
    </div>
  );
}
