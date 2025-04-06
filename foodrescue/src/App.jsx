import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import Donate from './Pages/Donate';
import Inventory from './Pages/Inventory';
import PickupScheduler from './Pages/PickupScheduler';
import Notification from './Pages/Notification';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Other routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/pickup-scheduler" element={<PickupScheduler />} />
          <Route path="/notifications" element={<Notification />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
