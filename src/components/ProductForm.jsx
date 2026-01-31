import { X, Calendar, Image as ImageIcon, ChevronDown } from "lucide-react";

const ProductForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted");
    if (onClose) onClose();
  };

  const handleCancel = () => {
    if (onClose) onClose();
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white border-[3px] border-emerald-600 rounded-2xl overflow-hidden shadow-2xl font-sans">
      <div className="flex justify-between items-center p-6 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-800">Add Product Type</h2>
        <button
          className="text-gray-400 hover:text-gray-600 transition-colors"
          onClick={onClose}
        >
          <X size={24} strokeWidth={3} />
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="p-6 space-y-8 max-h-[80vh] overflow-y-auto">
          <section>
            <h3 className="text-emerald-600 font-bold mb-4">
              Medicine Details
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <InputGroup
                label="Medicine Name"
                placeholder="Enter medicine name"
              />
              <InputGroup label="Dosage / Strength" placeholder="e.g., 500mg" />
              <InputGroup
                label="Generic Name"
                placeholder="Enter generic name"
              />
              <SelectGroup
                label="Category"
                options={[
                  "Select Category",
                  "Tablet",
                  "Syrup",
                  "Injection",
                  "Capsule",
                  "Ointment",
                ]}
              />
              <InputGroup
                label="Medicine Type"
                placeholder="e.g., Antibiotic"
              />
              <InputGroup label="Brand" placeholder="Enter brand name" />
            </div>
            <div className="mt-4">
              <SelectGroup
                label="Supplier"
                options={[
                  "Select Supplier",
                  "Supplier A",
                  "Supplier B",
                  "Supplier C",
                ]}
              />
            </div>
          </section>

          <hr className="border-gray-100" />

          <section>
            <h3 className="text-emerald-600 font-bold mb-4">Batch Details</h3>
            <div className="grid grid-cols-3 gap-4">
              <InputGroup label="Batch No" placeholder="e.g., BTCH001" />
              <InputGroup label="Total Quantity" placeholder="Enter quantity" />
              <InputGroup
                label="Minimum Required Qty"
                placeholder="Enter min qty"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <DateGroup label="Manufacturing Date" />
              <DateGroup label="Expiry Date" />
            </div>
          </section>

          <hr className="border-gray-100" />

          <section>
            <h3 className="text-emerald-600 font-bold mb-4">Pricing</h3>
            <div className="grid grid-cols-2 gap-4">
              <PriceGroup label="Purchase Price" placeholder="0.00" />
              <PriceGroup label="Selling Price" placeholder="0.00" />
            </div>
          </section>

          <section>
            <h3 className="text-emerald-600 font-bold mb-4">Upload image</h3>
            <div className="border-2 border-dashed border-emerald-200 rounded-xl p-10 flex flex-col items-center justify-center bg-emerald-50/30 group cursor-pointer hover:bg-emerald-50 transition-all">
              <div className="relative">
                <ImageIcon size={40} className="text-gray-600 mb-2" />
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm"></div>
              </div>
              <p className="text-xs text-gray-500 font-medium">
                Scan or enter barcode/QR code
              </p>
            </div>
          </section>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-emerald-700 text-white rounded-lg text-sm font-bold hover:bg-emerald-800 transition-colors shadow-sm"
            >
              Save Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const InputGroup = ({ label, placeholder = "" }) => (
  <div className="flex flex-col gap-1">
    <label className="text-[11px] font-bold text-gray-800">{label}</label>
    <input
      type="text"
      className="w-full border border-emerald-400/50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
      placeholder={placeholder}
    />
  </div>
);

const SelectGroup = ({ label, options }) => (
  <div className="flex flex-col gap-1">
    <label className="text-[11px] font-bold text-gray-800">{label}</label>
    <div className="relative">
      <select className="w-full border border-emerald-400/50 rounded-lg px-3 py-2 text-sm appearance-none focus:outline-none bg-white text-gray-800">
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        className="absolute right-3 top-2.5 text-gray-400 pointer-events-none"
      />
    </div>
  </div>
);

const DateGroup = ({ label }) => (
  <div className="flex flex-col gap-1">
    <label className="text-[11px] font-bold text-gray-800">{label}</label>
    <div className="relative">
      <input
        type="date"
        className="w-full border border-emerald-400/50 rounded-lg px-3 py-2 text-sm focus:outline-none bg-emerald-50/20 text-gray-800"
      />
      <Calendar
        size={18}
        className="absolute right-3 top-2 text-gray-700 pointer-events-none"
      />
    </div>
  </div>
);

const PriceGroup = ({ label, placeholder }) => (
  <div className="flex flex-col gap-1">
    <label className="text-[11px] font-bold text-gray-800">{label}</label>
    <div className="relative">
      <span className="absolute left-3 top-2 text-[10px] text-gray-400 font-bold">
        Rs
      </span>
      <input
        type="number"
        step="0.01"
        className="w-full border border-emerald-400/50 rounded-lg pl-8 pr-3 py-2 text-sm focus:outline-none text-gray-800"
        placeholder={placeholder}
      />
    </div>
  </div>
);

export default ProductForm;
