import React, { useState } from "react";
import { X, Trash2, AlertCircle } from "lucide-react";

const DeleteMedicineModal = ({ isOpen, onClose, onConfirm, product }) => {
  const [reason, setReason] = useState("");
  const [confirmCheck, setConfirmCheck] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmCheck && reason.trim()) {
      onConfirm();
    } else {
      alert("Please provide a reason and confirm the deletion.");
    }
  };

  const handleCancel = () => {
    setReason("");
    setConfirmCheck(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div 
        className="absolute inset-0" 
        onClick={handleCancel}
      />
      <div className="relative z-10 w-full max-w-2xl animate-in fade-in zoom-in duration-200">
        <div className="bg-white border-[3px] border-emerald-600 rounded-2xl overflow-hidden shadow-2xl font-sans">
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="bg-red-50 p-2 rounded-lg">
                <Trash2 className="text-red-500" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">Delete Medicine</h2>
                <p className="text-emerald-600 text-xs font-bold">Confirmation required</p>
              </div>
            </div>
            <button 
              className="text-gray-400 hover:text-gray-600 transition-colors"
              onClick={handleCancel}
            >
              <X size={24} strokeWidth={3} />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex gap-4">
                <div className="bg-red-500 text-white rounded-full p-2 mt-12">
                  <AlertCircle size={20} fill="white" className="text-red-500" />
                </div>
                <div className="flex-1">
                  <h4 className="text-gray-900 font-bold text-base">
                    This action cannot be undone.
                  </h4>
                  <p className="text-red-500 text-xs font-medium mt-1">
                    Deleting this medicine will permanently remove it from inventory
                    records and affect sales history reporting.
                  </p>
                  <p className="text-gray-700 text-xs font-bold mt-2">
                    Current Stock: {product?.currentStock || "500 units"} available
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-base font-bold text-gray-800">
                    Medicine Summary
                  </h3>
                  <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">
                    ID: #{product?.medicineId || "MED-8920"}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <ReadOnlyField label="Medicine Name" value={product?.name || "Antibiotics"} />
                  <ReadOnlyField label="Category" value={product?.category || "Analgesics"} />
                  <ReadOnlyField label="Batch No" value={product?.batchNo || "PC2024A"} />
                  <ReadOnlyField label="Expiry Date" value={product?.expiryDate || "12/2025"} />
                  <ReadOnlyField label="Current Stock" value={product?.currentStock || "500 units"} />
                  <ReadOnlyField label="Supplier" value={product?.supplier || "PharmaCo Inc"} />
                </div>

                <div className="mt-4 space-y-2">
                  <label className="text-emerald-600 text-xs font-bold uppercase">
                    Reason for Deletion *
                  </label>
                  <textarea
                    className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 h-24 focus:outline-none focus:ring-1 focus:ring-emerald-500 resize-none"
                    placeholder="Type the reason here..."
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    required
                  />
                  <p className="text-red-500 text-[10px] font-bold">
                    Please provide a reason for the audit log
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 flex items-start gap-3">
                <div className="pt-0.5">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border border-gray-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                    checked={confirmCheck}
                    onChange={(e) => setConfirmCheck(e.target.checked)}
                    required
                  />
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 text-xs font-bold">
                    I understand this action is permanent
                  </p>
                  <p className="text-gray-500 text-[10px] font-medium mt-0.5">
                    By checking this box, I confirm that I want to remove this
                    record from the database edit log
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-6 py-2 bg-red-600 text-white rounded-lg text-sm font-bold hover:bg-red-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!confirmCheck || !reason.trim()}
                >
                  Delete Permanently
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const ReadOnlyField = ({ label, value }) => (
  <div className="space-y-1">
    <label className="text-emerald-600 text-[11px] font-bold uppercase">
      {label}
    </label>
    <div className="bg-gray-100 text-gray-700 p-2 rounded-lg text-sm font-medium border border-gray-300">
      {value}
    </div>
  </div>
);

export default DeleteMedicineModal;