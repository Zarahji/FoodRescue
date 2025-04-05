// src/Components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
      <img src="/logo.png" alt="FoodRescue Logo" className="navbar-logo" />
      className="navbar-logo" /

      </div>
      <ul className="navbar-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;