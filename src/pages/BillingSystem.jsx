import React, { useState } from "react";
import Logo2 from "../assets/images/Logo2.png";
import {
  Bell,
  User,
  RotateCcw,
  Percent,
  FileDown,
  Trash2,
  X,
  Clock,
  Download,
  Printer,
} from "lucide-react";

export default function BillingSystem() {
  const [showDiscount, setShowDiscount] = useState(false);
  const [showReturn, setShowReturn] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);

  const cartItems = [
    {
      name: "Amoxicillin 250mg",
      batch: "A-1256",
      qty: 2,
      price: 15,
    },
    {
      name: "Paracetamol 500mg",
      batch: "P-7854",
      qty: 3,
      price: 20,
    },
    {
      name: "Amoxicillin 250mg",
      batch: "A-1256",
      qty: 2,
      price: 15,
    },
  ];

  const subTotal = cartItems.reduce(
    (sum, item) => sum + item.qty * item.price,
    0,
  );

  return (
    <div className="min-h-screen rounded-4xl bg-teal-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-bold text-gray-800">
            Billing / POS System
          </h1>
          <p className="text-sm text-green-600">
            Process sales and manage transactions
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-sm text-green-500 font-medium leading-tight">
            Jane Doe
            <div className="text-xs text-gray-500">Cashier</div>
          </div>
          <User className="text-gray-600" />
          <Bell className="text-gray-600" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search medicine by name or scan barcode..."
              className="w-full rounded-lg border border-black px-4 py-2 focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
            />
            <button className="rounded-lg bg-teal-600 px-4 py-2 text-white">
              Scan
            </button>
            <button className="rounded-lg border border-black px-3 py-2">
              ⛶
            </button>
          </div>

          <div className="rounded-xl bg-white p-4 shadow">
            <div className="mb-3 flex items-center justify-between text-sm font-medium">
              <span className="text-base">Cart</span>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowReturn(true)}
                  className="flex items-center gap-1 hover:text-teal-600"
                >
                  <RotateCcw size={16} />
                  Return Items
                </button>

                <button
                  onClick={() => setShowDiscount(true)}
                  className="flex items-center gap-1 hover:text-teal-600"
                >
                  <Percent size={16} />
                  Discount
                </button>

                <button
                  onClick={() => setShowReceipt(true)}
                  className="flex items-center gap-1 hover:text-teal-600"
                >
                  <FileDown size={16} />
                  Download PDF
                </button>

                <button className="flex items-center gap-1 text-red-500 hover:text-red-700">
                  <Trash2 size={16} />
                  Clear Cart
                </button>
              </div>
            </div>

            <table className="w-full text-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 text-left">Medicine</th>
                  <th className="text-center">Batch</th>
                  <th className="text-center">Qty</th>
                  <th className="text-center">Discount</th>
                  <th className="text-center">Price (Rs)</th>
                  <th className="text-center">Total (Rs)</th>
                  <th />
                </tr>
              </thead>

              <tbody>
                {cartItems.map((item, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="p-2">{item.name}</td>
                    <td className="text-center">{item.batch}</td>
                    <td className="text-center">{item.qty}</td>
                    <td className="text-center">0</td>
                    <td className="text-center">{item.price}</td>
                    <td className="text-center">
                      {(item.qty * item.price).toFixed(2)}
                    </td>
                    <td className="text-center">
                      <button className="text-red-500 hover:text-red-700">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="w-full rounded-lg border border-gray-300 p-4 text-sm md:w-1/2">
                <div className="flex justify-between">
                  <span>Sub Total</span>
                  <span>Rs. {subTotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Payment Discount</span>
                  <span>Rs. 0.00</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax Total</span>
                  <span>Rs. 0.00</span>
                </div>

                <div className="mt-3 flex justify-between text-lg font-semibold text-green-600">
                  <span>Total Amount</span>
                  <span>Rs. {subTotal.toFixed(2)}</span>
                </div>

                <div className="mt-4 flex gap-3">
                  <button className="rounded-lg border border-gray-300 px-6 py-2 hover:bg-gray-50">
                    Cash
                  </button>
                  <button className="rounded-lg border border-gray-300 px-6 py-2 hover:bg-gray-50">
                    Card
                  </button>
                </div>
              </div>

              <button className="flex h-12 items-center gap-2 rounded-lg bg-teal-600 px-6 text-white hover:bg-teal-700">
                <Printer size={20} />
                Print Bill
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-4 shadow">
          <input
            type="text"
            defaultValue="Panadol 500mg"
            className="mb-3 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-black"
          />

          <div className="mb-3 flex gap-2 text-sm">
            <select className="rounded border border-gray-300 px-2 py-1 focus:outline-none focus:border-black">
              <option>All Categories</option>
            </select>
            <select className="rounded border border-gray-300 px-2 py-1 focus:outline-none focus:border-black">
              <option>Sort : Best Match</option>
            </select>
          </div>

          <div className="max-h-[500px] space-y-3 overflow-y-auto">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border border-gray-200 p-3 hover:bg-gray-50"
              >
                <div>
                  <p className="font-medium">Panadol 500mg</p>
                  <p className="text-xs text-gray-500">Tablet</p>
                  <p className="text-xs text-green-600">In Stock 123</p>
                </div>
                <button className="rounded-lg bg-teal-700 px-4 py-2 text-white hover:bg-teal-800">
                  Rs. 30.00
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative w-full max-w-4xl rounded-2xl bg-[#bfe3dc] p-8 shadow-2xl">
            <button
              onClick={() => setShowReceipt(false)}
              className="absolute right-5 top-5 text-gray-700 hover:text-black"
            >
              <X size={22} />
            </button>

            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold text-black">Bill Receipt</h2>

              <div className="flex gap-4">
                <button className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 font-medium shadow-sm hover:bg-gray-50">
                  <Printer size={18} />
                  Print Invoice
                </button>

                <button className="flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3 font-medium text-white shadow-sm hover:bg-green-600">
                  <Download size={18} />
                  Download PDF
                </button>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="mb-6 flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-teal-600 bg-white">
                    <img
                      src={Logo2}
                      alt="TrustMed Logo"
                      className="h-10 w-10 object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-teal-700">
                      TrustMed Bill Inc.
                    </h3>
                    <p className="text-sm font-medium text-teal-700">
                      123 Health St, Wellness City, 45678
                    </p>
                  </div>
                </div>

                <div className="text-right text-sm">
                  <p className="text-lg font-bold">Invoice</p>
                  <p className="font-semibold text-teal-700">
                    #INV-20240721-001
                  </p>
                  <p className="text-gray-600">Date : 21 Jul 2024, 02:45 PM</p>
                </div>
              </div>

              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 text-teal-700">
                    <th className="py-3 text-center">#</th>
                    <th className="py-3 text-left">Item Description</th>
                    <th className="py-3 text-center">Qty</th>
                    <th className="py-3 text-center">Unit Price</th>
                    <th className="py-3 text-center">Total</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b">
                    <td className="py-3 text-center font-medium">1</td>
                    <td className="py-3 font-semibold">Amoxicillin 500mg</td>
                    <td className="py-3 text-center">2</td>
                    <td className="py-3 text-center">Rs12.50</td>
                    <td className="py-3 text-center">Rs25.00</td>
                  </tr>

                  <tr>
                    <td className="py-3 text-center font-medium">2</td>
                    <td className="py-3 font-semibold">Paracetamol 650mg</td>
                    <td className="py-3 text-center">1</td>
                    <td className="py-3 text-center">Rs5.75</td>
                    <td className="py-3 text-center">Rs5.75</td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-8 flex justify-end">
                <div className="w-80 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>Rs30.75</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Discount (10%)</span>
                    <span>-Rs3.08</span>
                  </div>

                  <div className="mt-3 flex justify-between text-xl font-bold text-green-600">
                    <span>Net Total</span>
                    <span>Rs27.67</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t pt-4 text-sm">
                <b>Payment Method :</b>{" "}
                <span className="text-gray-700">Card</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {showReturn && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-2xl rounded-3xl bg-teal-100 p-5 shadow-xl">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-base font-semibold">
                Process Medicine Return
              </h2>
              <button
                onClick={() => setShowReturn(false)}
                className="text-gray-600 hover:text-black"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mb-3 grid grid-cols-2 gap-2 rounded-lg bg-orange-200 px-3 py-2 text-xs sm:grid-cols-4">
              <div>
                <span className="font-medium">Invoice:</span> <b>INV.000524</b>
              </div>
              <div>
                <span className="font-medium">Date:</span> Dec.25.2025
              </div>
              <div>
                <span className="font-medium">Total:</span> Rs.280.00
              </div>
              <div>
                <span className="font-medium">Paid:</span> Cash
              </div>
            </div>

            <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center">
              <span className="text-sm font-medium text-gray-700">
                Return Invoice No:
              </span>
              <div className="flex flex-1 gap-2">
                <input
                  type="text"
                  defaultValue="INV.000524"
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:border-black"
                />
                <button className="rounded-lg bg-gray-200 px-4 py-1.5 text-sm font-medium hover:bg-gray-300">
                  Search
                </button>
              </div>
            </div>

            <div className="rounded-xl bg-white p-3">
              <div className="overflow-x-auto">
                <table className="w-full min-w-150[600px] text-xs">
                  <thead className="border-b text-teal-700">
                    <tr>
                      <th className="px-2 py-2 text-center">Select</th>
                      <th className="px-2 py-2 text-left">Medicine</th>
                      <th className="px-2 py-2 text-center">Qty Purchased</th>
                      <th className="px-2 py-2 text-center">Qty to Return</th>
                      <th className="px-2 py-2 text-center">Return Reason</th>
                      <th className="px-2 py-2 text-center">Price</th>
                    </tr>
                  </thead>

                  <tbody>
                    {[1, 2, 3].map((_, i) => (
                      <tr key={i} className="border-b hover:bg-gray-50">
                        <td className="px-2 py-2 text-center">
                          <input type="checkbox" className="h-3.5 w-3.5" />
                        </td>
                        <td className="px-2 py-2 font-medium">Panadol 500mg</td>
                        <td className="px-2 py-2 text-center">
                          <input
                            type="number"
                            defaultValue={2}
                            className="w-12 rounded border border-gray-300 px-1 py-0.5 text-center text-xs focus:outline-none focus:border-black"
                          />
                        </td>
                        <td className="px-2 py-2 text-center">
                          <input
                            type="number"
                            defaultValue={2}
                            className="w-12 rounded border border-gray-300 px-1 py-0.5 text-center text-xs focus:outline-none focus:border-black"
                          />
                        </td>
                        <td className="px-2 py-2 text-center">
                          <select className="w-28 rounded border border-gray-300 px-1 py-0.5 text-xs focus:outline-none focus:border-black">
                            <option>Damaged</option>
                            <option>Expired</option>
                            <option>Wrong Item</option>
                          </select>
                        </td>
                        <td className="px-2 py-2 text-center font-semibold">
                          Rs.20.00
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 flex flex-col items-end gap-3">
                <div className="text-base font-bold text-green-600">
                  Total Refund: Rs.700.00
                </div>
                <div className="flex gap-2">
                  <button className="rounded-lg bg-teal-700 px-4 py-1.5 text-sm text-white hover:bg-teal-800">
                    Cash
                  </button>
                  <button className="rounded-lg border border-gray-300 px-4 py-1.5 text-sm hover:bg-gray-50">
                    Card
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-3 rounded-xl bg-white p-3">
              <h4 className="mb-1.5 text-sm font-medium">Refund Note</h4>
              <textarea
                rows="2"
                className="w-full rounded-lg border border-gray-300 p-2 text-sm focus:outline-none focus:border-black"
                placeholder="Enter refund note..."
              />
              <div className="mt-3 text-right">
                <button className="rounded-lg bg-teal-700 px-6 py-1.5 text-sm text-white hover:bg-teal-800">
                  Complete Refund
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showDiscount && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-4xl rounded-3xl border-4 border-teal-600 bg-white p-8">
            <button
              onClick={() => setShowDiscount(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-black"
            >
              <X size={24} />
            </button>

            <div className="mb-6 flex items-center gap-4">
              <span className="rounded-full bg-orange-500 px-6 py-2 font-bold text-white">
                TODAY'S OFFER
              </span>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock size={18} />
                <span>Valid until 10 PM</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h1 className="text-7xl font-extrabold">
                  10% <span className="font-black">OFF</span>
                </h1>
                <div className="my-2 h-1 w-32 bg-blue-500" />
                <p className="mt-6 text-4xl font-bold">on All Medicines</p>

                <p className="mt-4 text-green-600">
                  ● Applied automatically at checkout
                </p>
              </div>

              <div className="rounded-xl border border-gray-300 p-5">
                <h3 className="mb-3 text-lg font-bold text-blue-600">
                  UPCOMING OFFERS
                </h3>

                <ul className="space-y-3 text-sm">
                  <li>
                    <strong>Tomorrow:</strong> 5% OFF on Tablets
                    <p className="text-xs text-gray-500">
                      Includes multivitamin supplements
                    </p>
                  </li>

                  <li>
                    <strong>Weekend:</strong> Buy 2 Get 1 Free
                    <p className="text-xs text-gray-500">
                      On skincare & hygiene products
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
