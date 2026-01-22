import React, { useState } from "react";
import { X, Eye, EyeOff, ChevronDown } from "lucide-react";

const AddUserModal = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  if (!isOpen) return null;

  const isPasswordMatch = formData.password === formData.confirmPassword;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden border-4 border-teal-600">
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-slate-800">
            Create a New User Account
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition"
          >
            <X size={32} className="text-black" />
          </button>
        </div>

        <div className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="space-y-2">
              <label className="block text-xl font-semibold invisible">
                Name
              </label>{" "}
              <input
                type="text"
                placeholder="Enter user's full name"
                className="w-full text-teal-700 placeholder:text-teal-600/70 border-none focus:ring-0 text-lg"
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label className="block text-2xl font-bold text-black">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter user's email address"
                className="w-full bg-gray-200 p-4 rounded-xl border border-gray-300 focus:outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label className="block text-2xl font-bold text-black">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter a secure password"
                  className="w-full bg-gray-200 p-4 rounded-xl border border-gray-300 focus:outline-none pr-12"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-2xl font-bold text-black">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Re-enter password"
                className={`w-full bg-gray-200 p-4 rounded-xl border-2 focus:outline-none ${
                  formData.confirmPassword && !isPasswordMatch
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
              {formData.confirmPassword && !isPasswordMatch && (
                <p className="text-red-600 text-sm font-bold">
                  Passwords do not match
                </p>
              )}
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="block text-2xl font-bold text-black">
                User Role
              </label>
              <div className="relative">
                <select
                  className="w-full bg-gray-200 p-4 rounded-xl border border-gray-300 focus:outline-none appearance-none text-teal-700"
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                >
                  <option value="">Select role</option>
                  <option value="Admin">Admin</option>
                  <option value="Pharmacist">Pharmacist</option>
                  <option value="Cashier">Cashier</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-gray-300 text-black font-bold rounded-xl hover:bg-gray-400 transition text-lg"
            >
              Cancel
            </button>
            <button className="px-8 py-3 bg-[#42FF42] text-black font-bold rounded-xl hover:opacity-90 transition shadow-lg text-lg">
              Save User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
