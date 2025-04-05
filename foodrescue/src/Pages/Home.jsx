import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to FoodRescue</h1>
      <p className="home-description">
        Connecting businesses with charities to reduce food waste.
      </p>
      <p>Join us in making a difference!</p>
      <Link to="/dashboard" className="link">
        Go to Dashboard
      </Link>
    </div>
  );
};

export default Home;
