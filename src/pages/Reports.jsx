import {
  BarChart3,
  Package,
  AlertTriangle,
  ShoppingCart,
  TrendingUp,
  Activity,
  User,
  Bell,
} from "lucide-react";

export default function ReportsSummaryPage() {
  const cards = [
    {
      title: "Sales Report",
      subtitle: "Total sales this month",
      value: "Rs12,450.75",
      note: "↑ 12% from last month",
      color: "font-bold text-green-600",
      bg: "bg-green-100",
      icon: BarChart3,
    },
    {
      title: "Stock Report",
      subtitle: "Items running low",
      value: "18 Items",
      note: "3 items out of stock",
      color: "font-bold text-blue-600",
      bg: "bg-blue-100",
      icon: Package,
    },
    {
      title: "Expiry Report",
      subtitle: "Items expiring soon",
      value: "42 Items",
      note: "7 items expired this month",
      color: "font-bold text-red-600",
      bg: "bg-red-100",
      icon: AlertTriangle,
    },
    {
      title: "Purchase Report",
      subtitle: "Total purchases this month",
      value: "Rs7,890.20",
      note: "Across 25 orders",
      color: "font-bold text-orange-600",
      bg: "bg-orange-100",
      icon: ShoppingCart,
    },
    {
      title: "Profit & Loss",
      subtitle: "Net profit this month",
      value: "Rs4,560.55",
      note: "↑ 8% from last month",
      color: "font-bold text-purple-600",
      bg: "bg-purple-100",
      icon: TrendingUp,
    },
    {
      title: "User Activity",
      subtitle: "Recent system actions",
      value: "",
      note: "john.doe added new stock for Paracetamol\njane.smith processed sale #20231027-051",
      color: "font-bold text-yellow-600",
      bg: "bg-yellow-100",
      icon: Activity,
      isActivity: true,
    },
  ];

  return (
    <div className="min-h-screen rounded-4xl bg-teal-100 p-8">
      <div className="max-w-7xl mx-auto bg-teal-100 rounded-2xl p-6 ">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Reports Summary</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="text-sm text-green-500 font-medium leading-tight">
                Eminem
                <div className="text-xs text-gray-500">Admin</div>
              </div>

              <User className="text-gray-600" />
              <Bell className="text-gray-600" />
            </div>
          </div>
        </div>
        <select className="px-4 py-2  rounded-md border border-teal-200 bg-white">
          <option>All</option>
          <option>Today</option>
          <option>This Week</option>
          <option>Last 7 Days</option>
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Year</option>
          <option>Last Year</option>
        </select>

 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border shadow-sm p-6 flex flex-col justify-between"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${card.bg}`}
                >
                  <card.icon size={24} className={card.color} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    {card.title}
                  </h3>
                  <p className={`text-sm ${card.color}`}>{card.subtitle}</p>
                </div>
              </div>

              {!card.isActivity && (
                <>
                  <div className="text-3xl font-extrabold text-slate-900 mb-2">
                    {card.value}
                  </div>
                  <p className={`text-sm ${card.color}`}>{card.note}</p>
                </>
              )}

              {card.isActivity && (
                <p className="text-sm text-slate-700 whitespace-pre-line">
                  {card.note}
                </p>
              )}

              <div className="mt-4">
                <button className="text-teal-700 font-medium text-sm hover:underline">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
