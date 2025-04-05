import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Donate from './Pages/Donate';
import Inventory from './Pages/Inventory';
import Navbar from './Components/Navbar';  // Import Navbar

function App() {
  return (
    <Router>
      <Navbar /> {/* Make sure Navbar is used here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </Router>
  );
}

export default App;
