import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaFileInvoiceDollar,
  FaBoxes,
  FaWarehouse,
  FaUsers,
  FaChartBar,
  FaCog,
} from "react-icons/fa";
import Logo2 from "../assets/images/Logo2.png";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");

  const menu = [
    { label: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
    {
      label: "Billing System",
      icon: <FaFileInvoiceDollar />,
      path: "/billing",
    },
    { label: "Product Management", icon: <FaBoxes />, path: "/products" },
    { label: "Inventory", icon: <FaWarehouse />, path: "/inventory" },
    { label: "User Management", icon: <FaUsers />, path: "/users" },
    { label: "Reports", icon: <FaChartBar />, path: "/reports" },
    { label: "Settings", icon: <FaCog />, path: "/settings" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-[#1a8f83]/90 text-white shadow-lg z-20">
      <div className="flex items-center gap-3 px-6 py-4 border-b border-white/20">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
          <img
            src={Logo2}
            alt="TrustMed Logo"
            className="w-full h-full object-contain p-1"
          />
        </div>
      </div>

      <nav className="mt-4">
        <ul className="space-y-1">
          {menu.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                onClick={() => setActive(item.label)}
                className={`flex items-center gap-3 w-full text-left px-5 py-3 rounded-md transition 
                  ${
                    active === item.label
                      ? "bg-orange-600 font-semibold"
                      : "hover:bg-white/10"
                  }
                `}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
