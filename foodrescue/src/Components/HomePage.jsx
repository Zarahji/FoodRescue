import React from 'react';
// import heroImage from './assets/hero-image.jpg'; // Commented if you don't have it

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '5rem' }}>
      <h1>Welcome to FoodRescue</h1>
      <p>Connecting businesses with charities to reduce food waste</p>
      <p>Join us in making a difference</p>
      <a href="/dashboard">
        <button style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
          Go to Dashboard
        </button>
      </a>
      {/* <img src={heroImage} alt="Hero" style={{ marginTop: '2rem', width: '100%', maxWidth: '600px' }} /> */}
    </div>
  );
};

export default HomePage;
