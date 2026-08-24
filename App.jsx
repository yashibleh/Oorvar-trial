import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FarmerDashboard from './FarmerDashboard';
import BuyerDashboard from './BuyerDashboard';
import GovtDashboard from './GovtDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans">
        {/* Navigation Bar */}
        <nav className="bg-green-700 text-white p-4 shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">ResidueLink 🌱</h1>
            <div className="space-x-4">
              <Link to="/" className="hover:text-green-200">Farmer Portal</Link>
              <Link to="/buyer" className="hover:text-green-200">Buyer Portal</Link>
              <Link to="/govt" className="hover:text-green-200">Govt/CHC Portal</Link>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="max-w-6xl mx-auto p-4 mt-6">
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

export default App;