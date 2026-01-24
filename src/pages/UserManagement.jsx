import React, { useState } from "react";
import { User, Bell, Search, Edit2, Trash2 } from "lucide-react";
import AddUserModal from "../components/AddUserModal";
import RolesPermissionsModal from "../components/RolesPermissionModal";
import DeleteUserModal from "../components/DeleteUserModal";
import EditUserModal from "../components/EditUserModal";

export default function UserManagementPage() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isRolesModalOpen, setIsRolesModalOpen] = useState(false);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  const users = [
    {
      id: 1,
      name: "Dr.Eminem",
      email: "Grand.eminem@example.com",
      role: "Admin",
      roleColor: "text-red-600",
      status: "Active",
    },
    {
      id: 2,
      name: "Dr.Alvin",
      email: "yo.alvin@example.com",
      role: "Pharmacist",
      roleColor: "text-violet-600",
      status: "Active",
    },
    {
      id: 3,
      name: "Spider man",
      email: "clara.villain@example.com",
      role: "Pharmacist",
      roleColor: "text-violet-600",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Jeffry Dhammer",
      email: "david.killer@example.com",
      role: "Cashier",
      roleColor: "text-orange-500",
      status: "Active",
    },
  ];

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase()),
  );

  const perPage = 5;
  const totalItems = 1482;
  const start = (page - 1) * perPage + 1;
  const end = Math.min(start + perPage - 1, totalItems);

  function StatusDot({ status }) {
    const color = status === "Active" ? "bg-green-400" : "bg-red-500";
    return (
      <div className="flex items-center gap-2">
        <span className={`w-3 h-3 rounded-full ${color}`} />
        <span className="font-semibold text-slate-800">{status}</span>
      </div>
    );
  }

  function Avatar() {
    return (
      <div className="w-10 h-10 rounded-full bg-black/90 flex items-center justify-center text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="min-h-screen rounded-4xl bg-teal-100 p-8">
      <div className="max-w-7xl mx-auto bg-teal-100 rounded-2xl p-6 ">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-slate-900">
            User Management System
          </h1>
          <div className="flex items-center gap-4">
            <div className="text-sm text-green-500 font-medium leading-tight">
              Eminem
              <div className="text-xs text-gray-500">Admin</div>
            </div>
            <User className="text-gray-600" />
            <Bell className="text-gray-600" />
          </div>
        </div>

        <div className="flex items-center justify-between mb-6 gap-4">
          <div className="relative w-72">
            <Search
              className="absolute left-3 top-3.5 text-gray-400"
              size={18}
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or email"
              className="w-full pl-10 pr-4 p-3 rounded-lg border shadow-sm focus:outline-none focus:ring-2"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAddUserModalOpen(true)}
              className="px-4 py-2 bg-teal-700 text-white rounded-md flex items-center gap-2 hover:bg-teal-800 transition"
            >
              <span className="w-5 h-5 bg-white rounded-full text-teal-700 flex items-center justify-center font-bold">
                +
              </span>
              Add New User
            </button>
            <button
              onClick={() => setIsRolesModalOpen(true)}
              className="px-4 py-2 bg-teal-700 text-white rounded-md flex items-center gap-2 hover:bg-teal-800 transition"
            >
              <span className="w-5 h-5 bg-white rounded-full text-teal-700 flex items-center justify-center font-bold">
                +
              </span>
              Roles & Permissions Manage
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-inner border border-teal-200">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="text-teal-800 text-lg">
                  <th className="px-8 py-4">User</th>
                  <th className="px-8 py-4">Email</th>
                  <th className="px-8 py-4">Role</th>
                  <th className="px-8 py-4">Status</th>
                  <th className="px-8 py-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-teal-100">
                {filtered.map((u) => (
                  <tr key={u.id} className="h-24">
                    <td className="px-8 py-4 flex items-center gap-4">
                      <Avatar />
                      <div className="font-medium text-slate-800">{u.name}</div>
                    </td>
                    <td className="px-8 py-4 text-slate-600">{u.email}</td>
                    <td className={`px-8 py-4 font-semibold ${u.roleColor}`}>
                      {u.role}
                    </td>
                    <td className="px-8 py-4">
                      <StatusDot status={u.status} />
                    </td>
                    <td className="px-8 py-4 flex items-center gap-4">
                      <button
                        onClick={() => handleEditClick(u)}
                        className="p-2 hover:bg-slate-50 rounded-full transition"
                      >
                        <Edit2 size={18} className="text-slate-700" />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(u)}
                        className="p-2 hover:bg-slate-50 rounded-full transition"
                      >
                        <Trash2 size={18} className="text-red-600" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-slate-700">
              Showing {start}-{end} of {totalItems} items
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="px-4 py-2 rounded-md border bg-white text-slate-700 disabled:opacity-50"
                disabled={page === 1}
              >
                Previous
              </button>
              <button
                onClick={() => setPage((p) => p + 1)}
                className="px-4 py-2 rounded-md border bg-white text-slate-700"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <AddUserModal
        isOpen={isAddUserModalOpen}
        onClose={() => setIsAddUserModalOpen(false)}
      />

      <RolesPermissionsModal
        isOpen={isRolesModalOpen}
        onClose={() => setIsRolesModalOpen(false)}
      />
      <DeleteUserModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        user={selectedUser}
      />
      <EditUserModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        user={selectedUser}
      />
    </div>
  );
}
