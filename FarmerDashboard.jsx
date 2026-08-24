import React, { useState } from 'react';

export default function FarmerDashboard() {
  const [farmData, setFarmData] = useState({ size: '', crop: '', sowingDate: '' });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Farm Profile & Crop Input */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Farm Profile & Crop Input</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Farm Size (Acres)</label>
            <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" placeholder="e.g. 5" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Crop Variety</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border">
              <option>Basmati</option>
              <option>Non-Basmati</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Sowing Date</label>
            <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" />
          </div>
          <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
            Predict Harvest Date (ML Model)
          </button>
        </form>
      </div>

      {/* Harvest Prediction & Status */}
      <div className="space-y-6">
        <div className="bg-blue-50 p-6 rounded-lg shadow border border-blue-100">
          <h2 className="text-xl font-bold text-blue-800 mb-2">Automated 10-Day Pre-Harvest Listing</h2>
          <p className="text-gray-700">Estimated Harvest Date: <span className="font-bold">Oct 15, 2026</span></p>
          <p className="text-sm text-gray-500 mt-2">Your listing will automatically go live to nearby buyers on Oct 5.</p>
          <button className="mt-4 text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Manual Date Override
          </button>
        </div>

        {/* Profitability Calculator */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Profitability Calculator</h2>
          <p className="text-sm text-gray-600 mb-4">Factor in baler rental, machine operation, and diesel costs.</p>
          {/* Add interactive calculation logic here later */}
          <div className="bg-gray-100 p-4 rounded text-center">
            <span className="text-gray-500 italic">Net earnings estimator will appear here upon buyer matching.</span>
          </div>
        </div>
      </div>
    </div>
  );
}