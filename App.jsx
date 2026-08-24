import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

// 1. PROFITABILITY CALCULATOR COMPONENT
function ProfitabilityCalculator() {
  const [buyerOffer, setBuyerOffer] = useState(1800);
  const [tonnage, setTonnage] = useState(10);
  const [balerRent, setBalerRent] = useState(2500);
  const [dieselCost, setDieselCost] = useState(1500);

  const grossRevenue = (Number(buyerOffer) || 0) * (Number(tonnage) || 0);
  const totalExpenses = (Number(balerRent) || 0) + (Number(dieselCost) || 0);
  const netProfit = grossRevenue - totalExpenses;

  return (
    <div className="bg-white p-6 rounded-lg shadow space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Mutual Profitability Calculator</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-gray-600 font-medium">Buyer Offer (₹/Ton)</label>
          <input 
            type="number" 
            value={buyerOffer} 
            onChange={(e) => setBuyerOffer(e.target.value)} 
            className="w-full p-2 border rounded border-gray-300" 
          />
        </div>
        <div>
          <label className="block text-xs text-gray-600 font-medium font-medium">Yield (Tons)</label>
          <input 
            type="number" 
            value={tonnage} 
            onChange={(e) => setTonnage(e.target.value)} 
            className="w-full p-2 border rounded border-gray-300" 
          />
        </div>
        <div>
          <label className="block text-xs text-gray-600 font-medium">Baler Rent (₹)</label>
          <input 
            type="number" 
            value={balerRent} 
            onChange={(e) => setBalerRent(e.target.value)} 
            className="w-full p-2 border rounded border-gray-300" 
          />
        </div>
        <div>
          <label className="block text-xs text-gray-600 font-medium">Diesel Cost (₹)</label>
          <input 
            type="number" 
            value={dieselCost} 
            onChange={(e) => setDieselCost(e.target.value)} 
            className="w-full p-2 border rounded border-gray-300" 
          />
        </div>
      </div>

      <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-600">Estimated Net Earnings</p>
          <p className="text-2xl font-bold text-green-700">₹{netProfit.toLocaleString()}</p>
        </div>
        <div className="text-right text-xs text-gray-500">
          <p>Gross: ₹{grossRevenue.toLocaleString()}</p>
          <p>Costs: ₹{totalExpenses.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

// 2. FARMER DASHBOARD COMPONENT
function FarmerDashboard() {
  const [harvestDate, setHarvestDate] = useState('2026-10-15');
  const [isOverridden, setIsOverridden] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Farm Profile & Crop Input</h2>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Farm Size (Acres)</label>
            <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" placeholder="e.g. 5" defaultValue="5" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Crop Variety</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border">
              <option>Pusa 44 (Basmati)</option>
              <option>PR 126 (Non-Basmati)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Sowing Date</label>
            <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" defaultValue="2026-06-15" />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white p-2 rounded font-semibold hover:bg-green-700 transition">
            Predict Harvest Date
          </button>
        </form>
      </div>

      <div className="space-y-6">
        <div className="bg-blue-50 p-6 rounded-lg shadow border border-blue-100">
          <h2 className="text-xl font-bold text-blue-800 mb-2">Automated 10-Day Pre-Harvest Listing</h2>
          <p className="text-gray-700">Estimated Harvest Date: <span className="font-bold">{harvestDate}</span></p>
          <p className="text-sm text-gray-500 mt-2">
            {isOverridden ? 'Manual override active. Listing updated.' : 'Automatic listing generates 10 days prior to harvest.'}
          </p>
          <div className="mt-4 flex gap-2">
            <input 
              type="date" 
              value={harvestDate} 
              onChange={(e) => { setHarvestDate(e.target.value); setIsOverridden(true); }}
              className="p-1 border rounded text-sm"
            />
            <span className="text-xs text-blue-600 self-center">Override Date</span>
          </div>
        </div>

        <ProfitabilityCalculator />
      </div>
    </div>
  );
}

// 3. BUYER DASHBOARD COMPONENT
function BuyerDashboard() {
  const [requests, setRequests] = useState([
    { id: 1042, distance: '4.2 km', tons: 12, date: 'Oct 14, 2026' },
    { id: 1089, distance: '8.7 km', tons: 25, date: 'Oct 18, 2026' }
  ]);
  const [volume, setVolume] = useState('');
  const [rate, setRate] = useState('');

  const handlePost = (e) => {
    e.preventDefault();
    if (!volume || !rate) return;
    alert(`Buy Request posted: ${volume} Tons at ₹${rate}/Ton`);
    setVolume('');
    setRate('');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Post Tonnage Requirement</h2>
        <form onSubmit={handlePost} className="flex flex-col md:flex-row gap-4">
          <input 
            type="number" 
            placeholder="Required Volume (Tons)" 
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="flex-1 p-2 border rounded" 
          />
          <input 
            type="number" 
            placeholder="Proposed Rate (₹/Ton)" 
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="flex-1 p-2 border rounded" 
          />
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700">
            Post Request
          </button>
        </form>
      </div>

      <h3 className="text-lg font-bold text-gray-700">Proximity-Based Farm Alerts (Least-Distance Priority)</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {requests.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
            <h4 className="font-bold text-lg">Farm #{item.id}</h4>
            <p className="text-sm text-gray-600">Distance: <strong>{item.distance}</strong></p>
            <p className="text-sm text-gray-600">Available: <strong>{item.tons} Tons</strong> ({item.date})</p>
            <button 
              onClick={() => alert(`Initiating contact with Farm #${item.id}`)} 
              className="mt-3 w-full bg-blue-100 text-blue-700 p-2 rounded font-medium hover:bg-blue-200"
            >
              Negotiate Deal
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// 4. GOVT / CHC DASHBOARD COMPONENT
function GovtDashboard() {
  return (
    <div className="space-y-6">
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

      <div className="bg-white p-6 rounded-lg shadow h-64 flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
        <p className="text-gray-500 font-medium">Regional Stubble Supply & Demand Heatmap</p>
        <span className="text-xs text-gray-400 mt-1">(Integrate Google Maps / Leaflet API here)</span>
      </div>
    </div>
  );
}

// MAIN ENTRY APP ROUTER
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans">
        <nav className="bg-green-700 text-white p-4 shadow-md">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <h1 className="text-2xl font-bold">ResidueLink 🌱</h1>
            <div className="space-x-4 text-sm font-medium">
              <Link to="/" className="hover:text-green-200">Farmer Portal</Link>
              <Link to="/buyer" className="hover:text-green-200">Buyer Portal</Link>
              <Link to="/govt" className="hover:text-green-200">Govt/CHC Portal</Link>
            </div>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto p-4 mt-2">
          <Routes>
            <Route path="/" element={<FarmerDashboard />} />
            <Route path="/buyer" element={<BuyerDashboard />} />
            <Route path="/govt" element={<GovtDashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}