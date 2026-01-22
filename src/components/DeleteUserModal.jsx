import React from "react";
import { X, Trash2, AlertCircle, EyeOff } from "lucide-react";

const DeleteUserModal = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-110 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-4xl shadow-2xl overflow-hidden border border-teal-300 flex flex-col ">
        <div className="px-10 py-6 flex justify-between items-center border-b border-gray-100 shrink-0">
          <h2 className="text-3xl font-bold text-gray-900">
            Delete User Account
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X size={32} className="text-black" />
          </button>
        </div>

        <div className="p-10 space-y-8 overflow-y-auto custom-scrollbar">
          <div className="flex items-center gap-6 p-4 border border-gray-200 rounded-4xl bg-white shadow-sm">
            <div className="w-20 h-20 rounded-full bg-teal-700 flex items-center justify-center text-white text-3xl font-bold shrink-0"></div>
            <div>
              <h3 className="text-4xl font-bold text-teal-700">{user.name}</h3>
              <div className="flex gap-2 mt-1">
                <span className="px-4 py-0.5 bg-violet-100 text-violet-700 border border-violet-300 rounded-full text-sm font-semibold">
                  {user.role}
                </span>
                <span className="text-gray-500 font-medium">
                  ID:#{user.id || "8821"}
                </span>
              </div>
            </div>
          </div>

          <section>
            <div className="mb-4">
              <h4 className="text-xl font-bold text-gray-900">
                Personal Information
              </h4>
              <p className="text-gray-500 text-sm italic">
                Update the user's basic details and system role
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="font-bold text-gray-800">Full Name</label>
                <input
                  disabled
                  value={user.name}
                  className="w-full p-3 bg-gray-100 rounded-xl border border-gray-300 text-gray-600"
                />
              </div>
              <div className="space-y-2">
                <label className="font-bold text-gray-800">Emails</label>
                <input
                  disabled
                  value={user.email}
                  className="w-full p-3 bg-gray-100 rounded-xl border border-gray-300 text-gray-600"
                />
              </div>
              <div className="space-y-2">
                <label className="font-bold text-gray-800">Employee ID</label>
                <input
                  disabled
                  value={`#${user.id || "8821"}`}
                  className="w-full p-3 bg-gray-100 rounded-xl border border-gray-300 text-gray-600"
                />
              </div>
            </div>
          </section>

          <div className="space-y-2">
            <label className="font-bold text-gray-800">System Role</label>
            <input
              disabled
              value={user.role}
              className="w-full p-3 bg-gray-100 rounded-xl border border-gray-300 text-gray-600"
            />
          </div>

          <hr className="border-gray-200" />

          <section>
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Contact Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-bold text-gray-800">Phone Number</label>
                <input
                  disabled
                  value="+1 (555) 012-3456"
                  className="w-full p-3 bg-gray-100 rounded-xl border border-gray-300 text-gray-600"
                />
              </div>
              <div className="space-y-2">
                <label className="font-bold text-gray-800">
                  Physical Address
                </label>
                <input
                  disabled
                  value="123 Health Avenue, Suite 400, New York"
                  className="w-full p-3 bg-gray-100 rounded-xl border border-gray-300 text-gray-600"
                />
              </div>
            </div>
          </section>

          <section>
            <div className="mb-4">
              <h4 className="text-xl font-bold text-gray-900">Security</h4>
              <p className="text-gray-500 text-sm italic">
                Manage password and account recovery settings
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-bold text-gray-800">New Password</label>
                <div className="relative">
                  <input
                    disabled
                    type="password"
                    value="********"
                    className="w-full p-3 bg-gray-100 rounded-xl border border-gray-300"
                  />
                  <EyeOff
                    className="absolute right-3 top-3.5 text-gray-500"
                    size={20}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-bold text-gray-800">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    disabled
                    type="password"
                    value="********"
                    className="w-full p-3 bg-gray-100 rounded-xl border border-gray-300"
                  />
                  <EyeOff
                    className="absolute right-3 top-3.5 text-gray-500"
                    size={20}
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="flex items-start md:items-center gap-4 p-5 bg-red-50 border border-red-400 rounded-3xl text-red-700">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shrink-0">
              <AlertCircle className="text-white" size={30} />
            </div>
            <p className="font-bold text-lg leading-tight">
              Are you sure you want to delete this user? This action cannot be
              undone and will permanently remove the user and their associated
              records from the system.
            </p>
          </div>
        </div>

        <div className="px-10 py-8 border-t border-gray-100 flex justify-end gap-4 bg-white shrink-0">
          <button
            onClick={onClose}
            className="px-10 py-3 border-2 border-gray-900 rounded-xl font-bold text-gray-900 hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button className="px-8 py-3 bg-white border-2 border-red-500 text-red-500 font-bold rounded-xl flex items-center gap-2 hover:bg-red-50 transition shadow-sm">
            <Trash2 size={20} />
            Delete User Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
