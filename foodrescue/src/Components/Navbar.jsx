import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${require('../assets/hero-image.jpg')})` }}>
        <div className="hero-content">
          <h1>HELP END FOOD WASTE</h1>
          <Link to="/get-started">
            <button className="get-started-btn">Get Started</button>
          </Link>
        </div>
      </section>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="FoodRescue Logo" className="navbar-logo" />
        </div>
        <ul className="navbar-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/donate">Donate</Link></li>
          <li><Link to="/inventory">Inventory</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
