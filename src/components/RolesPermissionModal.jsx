import React, { useState } from "react";
import { X } from "lucide-react";

const PermissionRow = ({
  label,
  pKey,
  activeTab,
  permissions,
  togglePermission,
}) => (
  <div className="flex items-center justify-between py-3">
    <span className="text-gray-700 text-lg font-medium">{label}</span>
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={permissions[activeTab][pKey] || false}
        onChange={() => togglePermission(activeTab, pKey)}
      />

      <div
        className="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer 
        peer-checked:after:translate-x-full peer-checked:after:border-white 
        after:content-[''] after:absolute after:top-0.5 after:left-0.5 
        after:bg-white after:border-gray-300 after:border after:rounded-full 
        after:h-5 after:w-5 after:transition-all peer-checked:bg-[#42FF42]"
      ></div>
    </label>
  </div>
);

const RolesPermissionsModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("Administrator");

  const [permissions, setPermissions] = useState({
    Administrator: {
      viewStock: true,
      addMedicine: true,
      updateStock: true,
      manageSuppliers: true,
      createBill: true,
      processReturns: true,
      applyDiscounts: true,
      viewSales: true,
      editUsers: true,
      assignRoles: true,
    },
    Pharmacist: {
      viewStock: true,
      addMedicine: true,
      updateStock: true,
      manageSuppliers: false,
      createBill: true,
      processReturns: true,
      applyDiscounts: false,
      viewSales: true,
      editUsers: false,
      assignRoles: false,
    },
    Cashier: {
      viewStock: false,
      addMedicine: false,
      updateStock: false,
      manageSuppliers: false,
      createBill: true,
      processReturns: true,
      applyDiscounts: true,
      viewSales: true,
      editUsers: false,
      assignRoles: false,
    },
  });

  if (!isOpen) return null;

  const togglePermission = (role, key) => {
    setPermissions((prev) => ({
      ...prev,
      [role]: {
        ...prev[role],
        [key]: !prev[role][key],
      },
    }));
  };

  const handleEnableAll = (role, keys, isChecked) => {
    setPermissions((prev) => {
      const updatedRolePermissions = { ...prev[role] };
      keys.forEach((key) => {
        updatedRolePermissions[key] = isChecked;
      });
      return {
        ...prev,
        [role]: updatedRolePermissions,
      };
    });
  };

  const tabs = ["Administrator", "Pharmacist", "Cashier"];

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-teal-200 flex flex-col max-h-[90vh]">
        <div className="px-10 pt-10 pb-2 border-b relative">
          <div className="flex gap-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-2xl font-bold pb-4 transition-all relative ${
                  activeTab === tab ? "text-teal-800" : "text-gray-400"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-pink-500 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
          <button
            onClick={onClose}
            className="absolute right-8 top-8 p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X size={32} className="text-black" />
          </button>
        </div>

        <div className="p-10 overflow-y-auto space-y-10 custom-scrollbar">
          <section className="border border-gray-200 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-xl font-extrabold text-black">
                  Inventory Management
                </h3>
                <p className="text-gray-500 text-sm italic">
                  Control access to stock, medicines, and suppliers
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 font-bold text-sm">
                  Enable All
                </span>
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-[#42FF42] cursor-pointer"
                  onChange={(e) =>
                    handleEnableAll(
                      activeTab,
                      [
                        "viewStock",
                        "addMedicine",
                        "updateStock",
                        "manageSuppliers",
                      ],
                      e.target.checked,
                    )
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
              <PermissionRow
                label="View stock"
                pKey="viewStock"
                activeTab={activeTab}
                permissions={permissions}
                togglePermission={togglePermission}
              />
              <PermissionRow
                label="Add new medicine"
                pKey="addMedicine"
                activeTab={activeTab}
                permissions={permissions}
                togglePermission={togglePermission}
              />
              <PermissionRow
                label="Update stock"
                pKey="updateStock"
                activeTab={activeTab}
                permissions={permissions}
                togglePermission={togglePermission}
              />
              <PermissionRow
                label="Manage suppliers"
                pKey="manageSuppliers"
                activeTab={activeTab}
                permissions={permissions}
                togglePermission={togglePermission}
              />
            </div>
          </section>

          <section className="border border-gray-200 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-xl font-extrabold text-black">
                  Billing & Sales
                </h3>
                <p className="text-gray-500 text-sm italic">
                  Permissions for creating bills and viewing sales
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 font-bold text-sm">
                  Enable All
                </span>
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-[#42FF42] cursor-pointer"
                  onChange={(e) =>
                    handleEnableAll(
                      activeTab,
                      [
                        "createBill",
                        "processReturns",
                        "applyDiscounts",
                        "viewSales",
                      ],
                      e.target.checked,
                    )
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
              <PermissionRow
                label="Create new bill"
                pKey="createBill"
                activeTab={activeTab}
                permissions={permissions}
                togglePermission={togglePermission}
              />
              <PermissionRow
                label="Process returns"
                pKey="processReturns"
                activeTab={activeTab}
                permissions={permissions}
                togglePermission={togglePermission}
              />
              <PermissionRow
                label="Apply discounts"
                pKey="applyDiscounts"
                activeTab={activeTab}
                permissions={permissions}
                togglePermission={togglePermission}
              />
              <PermissionRow
                label="View sales history"
                pKey="viewSales"
                activeTab={activeTab}
                permissions={permissions}
                togglePermission={togglePermission}
              />
            </div>
          </section>

          <section className="border border-gray-200 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-xl font-extrabold text-black">
                  User Management
                </h3>
                <p className="text-gray-500 text-sm italic">
                  Manage users and assign roles
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 font-bold text-sm">
                  Enable All
                </span>
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-[#42FF42] cursor-pointer"
                  onChange={(e) =>
                    handleEnableAll(
                      activeTab,
                      ["editUsers", "assignRoles"],
                      e.target.checked,
                    )
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
              <PermissionRow
                label="Create/edit users"
                pKey="editUsers"
                activeTab={activeTab}
                permissions={permissions}
                togglePermission={togglePermission}
              />
              <PermissionRow
                label="Assign roles"
                pKey="assignRoles"
                activeTab={activeTab}
                permissions={permissions}
                togglePermission={togglePermission}
              />
            </div>
          </section>
        </div>

        <div className="p-8 border-t border-gray-100 flex justify-end gap-4 bg-white">
          <button
            onClick={onClose}
            className="px-8 py-2.5 border border-gray-300 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              console.log(
                "Saving Permissions for",
                activeTab,
                permissions[activeTab],
              );
              onClose();
            }}
            className="px-8 py-2.5 bg-[#42FF42] text-black font-extrabold rounded-xl hover:brightness-95 shadow-md active:scale-95 transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default RolesPermissionsModal;
