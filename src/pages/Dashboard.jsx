
import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <p className="text-sm text-gray-600 mb-6">
        Welcome to your dashboard!
      </p>
      
    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded">
          <h2 className="font-medium">Total Revenue</h2>
          <p className="text-2xl font-bold text-green-600">$12,345</p>
        </div>
        
        <div className="p-4 border rounded">
          <h2 className="font-medium">Total Users</h2>
          <p className="text-2xl font-bold text-blue-600">1,234</p>
        </div>
        
        <div className="p-4 border rounded">
          <h2 className="font-medium">Active Orders</h2>
          <p className="text-2xl font-bold text-orange-600">56</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;