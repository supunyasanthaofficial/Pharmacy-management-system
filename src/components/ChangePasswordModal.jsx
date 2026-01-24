import React from "react";
import { X, EyeOff } from "lucide-react";

export default function ChangePasswordModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center bg-black/40 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white w-full max-w-md rounded-xl shadow-2xl overflow-hidden border-2 border-teal-700">
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-50">
          <h2 className="text-xl font-bold text-black">Change Password</h2>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="hover:bg-gray-100 p-1 rounded-full"
          >
            <X size={24} strokeWidth={2.5} className="text-black" />
          </button>
        </div>

        <div className="p-4">
          <div className="bg-[#f0f9f9] rounded-xl p-5 space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-bold text-black block">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter user's full name"
                  className="w-full bg-white border border-gray-200 rounded-lg p-2.5 text-sm text-teal-800 focus:outline-none"
                />
                <EyeOff
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-bold text-black block">
                New Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="w-full bg-white border border-gray-200 rounded-lg p-2.5 text-sm text-teal-800 focus:outline-none"
                />
                <EyeOff
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-bold text-black block">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Confirm your new password"
                  className="w-full bg-white border border-gray-200 rounded-lg p-2.5 text-sm text-teal-800 focus:outline-none"
                />
                <EyeOff
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                />
              </div>
            </div>

            <div className="space-y-1.5 pt-1">
              <p className="font-bold text-black text-xs">
                The password must contain
              </p>
              <ul className="space-y-1 text-[11px]">
                <li className="flex items-center gap-2 text-black font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> At
                  least 8 characters
                </li>
                <li className="flex items-center gap-2 text-black font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> At
                  least one special character
                </li>
                <li className="flex items-center gap-2 text-black font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> At
                  least one number
                </li>
              </ul>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={onClose}
                className="px-5 py-2 bg-white border border-gray-200 rounded-lg text-xs font-bold text-black hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="px-5 py-2 bg-[#4ade80] text-black rounded-lg text-xs font-bold hover:bg-[#3ce675]">
                Save New Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
