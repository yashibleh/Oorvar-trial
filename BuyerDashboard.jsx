import React from 'react';

export default function BuyerDashboard() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Post Tonnage Requirement</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <input type="number" placeholder="Required Volume (Tons)" className="flex-1 p-2 border rounded" />
          <input type="number" placeholder="Proposed Rate (₹/Ton)" className="flex-1 p-2 border rounded" />
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Post Request</button>
        </div>
      </div>

      <h3 className="text-lg font-bold text-gray-700">Proximity-Based Farm Alerts</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Mock Match Card */}
        <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
          <h4 className="font-bold text-lg">Farm #1042</h4>
          <p className="text-sm text-gray-600">Distance: <strong>4.2 km</strong></p>
          <p className="text-sm text-gray-600">Available: <strong>12 Tons</strong> (Est. Oct 14)</p>
          <button className="mt-3 w-full bg-blue-100 text-blue-700 p-2 rounded hover:bg-blue-200">
            Negotiate Deal
          </button>
        </div>
      </div>
    </div>
  );
}