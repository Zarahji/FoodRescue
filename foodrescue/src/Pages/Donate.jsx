// src/Pages/Donate.jsx
import React, { useState } from 'react';
import './Donate.css';  // Import styles

const Donate = () => {
  const [foodItem, setFoodItem] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation logic here (e.g., store data in Firebase, etc.)
    alert(`Donated: ${foodItem}, Quantity: ${quantity}`);
  };

  return (
    <div className="donate-container">
      <h1>Donate Food</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Food Item:
          <input
            type="text"
            value={foodItem}
            onChange={(e) => setFoodItem(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit Donation</button>
      </form>
    </div>
  );
};

export default Donate;
