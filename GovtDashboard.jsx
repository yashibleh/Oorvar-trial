import React from 'react';

export default function GovtDashboard() {
  return (
    <div className="space-y-6">
      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-100 p-6 rounded-lg shadow text-center">
          <h3 className="text-green-800 font-bold">Crop Fires Prevented</h3>
          <p className="text-3xl font-black mt-2">1,240</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg shadow text-center">
          <h3 className="text-yellow-800 font-bold">Stubble Diverted</h3>
          <p className="text-3xl font-black mt-2">8,500 Tons</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow text-center">
          <h3 className="text-blue-800 font-bold">Active Balers</h3>
          <p className="text-3xl font-black mt-2">42 / 50</p>
        </div>
      </div>

      {/* Heatmap & Logistics Placeholder */}
      <div className="bg-white p-6 rounded-lg shadow h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
        <p className="text-gray-500">Map Integration: Regional Stubble Supply & Demand Heatmap goes here.</p>
      </div>
    </div>
  );
}