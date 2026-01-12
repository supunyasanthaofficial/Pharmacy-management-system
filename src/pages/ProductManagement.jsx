import React from "react";

const ProductMangement = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">Billing System</h1>
        <p className="text-sm text-gray-600 mb-6">
          Simple billing dashboard placeholder.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded">
            <h2 className="font-medium">Create Invoice</h2>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
              New Invoice
            </button>
          </div>

          <div className="p-4 border rounded">
            <h2 className="font-medium">Recent Transactions</h2>
            <ul className="mt-2 text-sm text-gray-700">
              <li>- Transaction 1</li>
              <li>- Transaction 2</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMangement;