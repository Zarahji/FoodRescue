import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
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
