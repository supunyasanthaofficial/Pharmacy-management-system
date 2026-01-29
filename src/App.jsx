import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import UserLogin from "./pages/UserLogin";
import ResetPage from "./pages/ResetPage";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import BillingSystem from "./pages/BillingSystem";
import ProductManagement from "./pages/ProductManagement";
import Inventory from "./pages/Inventory";
import UserManagement from "./pages/UserManagement";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import StockManagement from "./components/StockManagement";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/reset-password" element={<ResetPage />} />

          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/billing" element={<BillingSystem />} />
            <Route path="/products" element={<ProductManagement />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/stock-management" element={<StockManagement />} />
          </Route>

          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
