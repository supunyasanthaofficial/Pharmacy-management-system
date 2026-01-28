import { Bell, User, Search, TrendingUp, Pill } from "lucide-react";
import Salechart from "../assets/images/Salechart.png";
import Mchart from "../assets/images/Mchart.png";

const Dashboard = () => {
  return (
    <div className="min-h-screen rounded-4xl bg-teal-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-sm text-green-600">
            Welcome back! Here's a summary of your pharmacy's activity
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-2.5 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search..."
              className="pl-9 pr-4 py-2 rounded-full text-sm focus:outline-none border border-black focus:border-black focus:ring-1 focus:ring-black bg-white"
            />
          </div>

          <div className="text-sm text-green-500 font-medium leading-tight">
            Eminem
            <div className="text-xs text-gray-500">Admin</div>
          </div>

          <User className="text-gray-600" />
          <Bell className="text-gray-600" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        {[
          {
            title: "Daily Sales",
            value: "Rs1,250.75",
            note: "+2.5% vs yesterday",
          },
          {
            title: "Monthly Sales",
            value: "Rs 34,250",
            note: "+8.1% vs last month",
          },
          {
            title: "Total Stock Items",
            value: "8,432",
            note: "Unique products",
          },
          {
            title: "Low Stock Items",
            value: "56",
            note: "Action required",
            danger: true,
          },
          {
            title: "Expiring Medicines",
            value: "12",
            note: "Expiring soon",
            danger: true,
          },
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-xl p-4 shadow">
            <p
              className={`text-sm ${
                item.danger ? "text-red-600" : "text-gray-500"
              }`}
            >
              {item.title}
            </p>
            <h2
              className={`text-2xl font-bold ${
                item.danger ? "text-red-600" : "text-gray-800"
              }`}
            >
              {item.value}
            </h2>
            <p
              className={`text-xs ${
                item.danger ? "text-red-600" : "text-gray-400"
              }`}
            >
              {item.note}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-xl p-6 lg:col-span-2 shadow">
          <div className="flex justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp size={20} className="text-green-500" />
              <h3 className="font-semibold">Sales Chart</h3>
            </div>
            <span className="text-sm text-gray-400">Last 30 Days</span>
          </div>

          <div className="h-105 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
            <img
              src={Salechart}
              alt="Sales Chart Visualization"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow">
          <div className="flex justify-between mb-4">
            <div className="flex items-center gap-2">
              <Pill size={20} className="text-blue-500" />
              <h3 className="font-semibold">Best Selling Medicines</h3>
            </div>
          </div>

          <div className="h-97 relative flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-50 rounded-lg overflow-hidden">
            <img
              src={Mchart}
              alt="Medicine Sales Chart"
              className="w-full h-full object-cover opacity-90"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center p-4"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-4xl p-6 shadow">
          <h3 className="font-semibold mb-4">Recent Bill</h3>

          <table className="w-full text-sm text-center">
            <thead className="text-gray-500 border-b">
              <tr>
                <th className="pb-2">BILL ID</th>
                <th className="pb-2">CUSTOMER</th>
                <th className="pb-2">DATE</th>
                <th className="pb-2">AMOUNT</th>
                <th className="pb-2">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: "#B54321",
                  customer: "Eminem",
                  date: "2023-10-27",
                  amount: "Rs125.50",
                  status: "Paid",
                },
                {
                  id: "#B54322",
                  customer: "John Cena",
                  date: "2023-10-26",
                  amount: "Rs78.00",
                  status: "Paid",
                },
                {
                  id: "#B54323",
                  customer: "Bat Man",
                  date: "2023-10-25",
                  amount: "Rs210.00",
                  status: "Pending",
                },
              ].map((bill, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3">{bill.id}</td>
                  <td className="py-3">{bill.customer}</td>
                  <td className="py-3">{bill.date}</td>
                  <td className="py-3 font-medium">{bill.amount}</td>
                  <td className="py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        bill.status === "Paid"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {bill.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-4xl p-6 shadow">
          <h3 className="font-semibold mb-4">Recent Purchase Orders</h3>

          <table className="w-full text-sm text-center">
            <thead className="text-gray-500 border-b">
              <tr>
                <th className="pb-2">PO ID</th>
                <th className="pb-2">SUPPLIER</th>
                <th className="pb-2">DATE</th>
                <th className="pb-2">AMOUNT</th>
                <th className="pb-2">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: "#PO1234",
                  supplier: "Eminem",
                  date: "2023-10-27",
                  amount: "Rs125.00",
                  status: "Received",
                },
                {
                  id: "#PO1235",
                  supplier: "John Cena",
                  date: "2023-10-26",
                  amount: "Rs2,78.00",
                  status: "Pending",
                },
                {
                  id: "#PO1236",
                  supplier: "Bat Man",
                  date: "2023-10-25",
                  amount: "Rs210.00",
                  status: "Shipped",
                },
              ].map((order, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3">{order.id}</td>
                  <td className="py-3">{order.supplier}</td>
                  <td className="py-3">{order.date}</td>
                  <td className="py-3 font-medium">{order.amount}</td>
                  <td className="py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === "Received"
                          ? "bg-blue-100 text-blue-600"
                          : order.status === "Pending"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-purple-100 text-purple-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
