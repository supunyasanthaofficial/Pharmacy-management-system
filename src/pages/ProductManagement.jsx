import {
  Boxes,
  Package,
  RotateCcw,
  Search,
  Bell,
  User,
  AlertTriangle,
  AlertCircle,
  TrendingUp,
  Pill,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductManagement() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen rounded-4xl bg-teal-100 p-6">
      <div className="mb-6 flex items-center justify-between rounded-2xl bg-white px-6 py-4 shadow">
        <div>
          <h1 className="text-xl font-bold">Product Management</h1>
          <p className="text-sm text-gray-500">
            Executive summary of stock levels, products, and adjustments.
          </p>
        </div>

        <div className="flex  items-center gap-4">
          <span className="text-sm font-medium text-teal-700">
            Eminem <br />
            <span className="text-xs text-gray-500">Admin</span>
          </span>

          <User />
          <Bell />
        </div>
      </div>
      <div className="mb-6 flex items-center gap-3">
        <div className="relative left-200 w-80">
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            placeholder="search ..."
            className="w-full rounded-lg border px-10 py-2 text-sm outline-none focus:border-teal-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow">
          <div className="mb-4 flex items-center gap-3">
            <Boxes className="text-blue-600" size={60} />
            <h2 className="text-2xl font-bold">Stock Management</h2>
          </div>

          <div className="mb-4 flex gap-4">
            <div className="rounded-lg bg-gray-100 px-4 py-2 text-center">
              <p className="text-xs text-gray-500">CATEGORIES</p>
              <p className="text-lg font-bold">12</p>
            </div>
            <div className="rounded-lg bg-gray-100 px-4 py-2 text-center">
              <p className="text-xs text-gray-500">PRODUCT TYPES</p>
              <p className="text-lg font-bold">48</p>
            </div>
          </div>

          <p className="mb-2 text-sm font-semibold">Overall Stock Status</p>

          <div className="space-y-2 text-sm">
            <div>
              <div className="flex justify-between">
                <span className="text-green-600">In Stock</span>
                <span>82%</span>
              </div>
              <div className="h-2 rounded bg-gray-200">
                <div className="h-2 w-[82%] rounded bg-green-500"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <span className="text-orange-500">Low Stock</span>
                <span>14%</span>
              </div>
              <div className="h-2 rounded bg-gray-200">
                <div className="h-2 w-[14%] rounded bg-orange-500"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <span className="text-red-500">Out of Stock</span>
                <span>4%</span>
              </div>
              <div className="h-2 rounded bg-gray-200">
                <div className="h-2 w-[4%] rounded bg-red-500"></div>
              </div>
            </div>
          </div>

          <p className="mt-12 text-xl font-bold text-gray-600">
            View, edit, and manage the complete pharmacy inventory database.
          </p>

          <button
            onClick={() => true}
            className="mt-12 text-sm font-medium text-blue-600 hover:underline"
          >
            Manage Categories →
          </button>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <div className="mb-4 flex items-center gap-3">
            <Package className="text-purple-600" size={60} />
            <h2 className="text-2xl font-bold">Products Overview</h2>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-4xl font-bold">1,240</p>
              <p className="text-sm text-gray-500">Total Unique Products</p>
            </div>

            <span className="rounded bg-green-100 px-3 py-1 text-sm text-green-700 flex items-center gap-1">
              <TrendingUp size={16} />
              +32 New
            </span>
          </div>

          <p className="mb-2 text-sm font-semibold">TOP SELLING PRODUCTS</p>

          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between rounded bg-gray-100 p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100">
                  <Pill size={18} className="text-blue-600" />
                </div>

                <div>
                  <p className="font-semibold">Amoxicillin 500mg</p>
                  <p className="text-xs text-gray-500">Antibiotic</p>
                </div>
              </div>

              <div className="flex items-center gap-1 ">
                <span className="font-medium">320 sold</span>
              </div>
            </div>

            <div className="flex items-center justify-between rounded bg-gray-100 p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100">
                  <Pill size={18} className="text-purple-600" />
                </div>

                <div>
                  <p className="font-semibold">Paracetamol Syrup</p>
                  <p className="text-xs text-gray-500">Pain Relief</p>
                </div>
              </div>

              <div className="flex items-center gap-1 ">
                <span className="font-medium">215 sold</span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xl font-bold text-gray-600">
            Perform manual stock reconciliation and manage damaged goods.
          </p>

          <button
          onClick={() => navigate("/inventory")}
          className="mt-12 text-sm font-medium text-blue-600 hover:underline">
            Manage Product List →
          </button>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <div className="mb-4 flex items-center gap-3">
            <TrendingUp className="text-red-500" size={60} />
            <h2 className="text-2xl font-bold">Return Management</h2>
          </div>

          <div className="mb-4 flex gap-4">
            <div className="rounded bg-gray-100 px-4 py-2 text-center">
              <p className="text-xs text-gray-500">Recent Adjustments</p>
              <p className="text-lg font-bold">12</p>
              <p className="text-xs text-gray-400">Last 7 days</p>
            </div>

            <div className="rounded bg-gray-100 px-4 py-2 text-center">
              <p className="text-xs text-gray-500">Net Quantity</p>
              <p className="text-lg font-bold text-red-600">-145</p>
              <p className="text-xs text-gray-400">Items removed</p>
            </div>
          </div>

          <div className="mb-4 flex items-center gap-3 rounded-xl bg-orange-50 p-3">
            <AlertTriangle className="text-orange-500" size={90} />
            <div>
              <p className="font-semibold">Expired Stock</p>
              <p className="text-xs text-gray-500">
                Accounted for 65% of adjustments
              </p>
            </div>
          </div>

          <p className=" mt-12 text-xl font-bold text-gray-600">
            Organize products into therapeutic classes and manage tax brackets.
          </p>

          <button className="mt-12 text-sm font-medium text-blue-600">
            Manage Stock Adjustments →
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="mb-4 font-semibold">Quick Actions</h3>
          <div className="flex gap-6 text-sm text-gray-600">
            <button className=" items-center">
              <Package size={18} />
              Add Product
            </button>
            <button>
              <Boxes size={18} />
              New Category
            </button>
            <button>
              <RotateCcw size={18} />
              Adjust Stock
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 rounded-2xl bg-white p-5 shadow">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">
              {" "}
              Urgent Alerts
            </h3>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 flex items-start gap-4 rounded-xl bg-red-100 p-4 text-sm text-red-700">
              <AlertCircle
                size={35}
                className="mt-0.5 rounded-full bg-red-200 p-1 text-red-700"
              />

              <div>
                <b className="block">Ciprofloxacin 500mg Out of Stock</b>
                <p className="text-xs text-red-600">
                  Stock hit 0 at 10:45 AM today
                </p>
              </div>
            </div>

            <div className="flex-1 flex items-start gap-4 rounded-xl bg-yellow-100 p-4 text-sm text-yellow-700">
              <AlertTriangle
                size={35}
                className="mt-0.5 rounded-full bg-yellow-200 p-1 text-yellow-700"
              />

              <div>
                <b className="block">12 Products Expiring Soon</b>
                <p className="text-xs text-yellow-600">
                  Expiring within 30 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
