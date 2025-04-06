import React, { useState } from 'react';
import './PickupScheduler.css';

const PickupScheduler = () => {
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pickup scheduled for: ${pickupDate} at ${pickupTime}`);
    // Add logic for saving this information (e.g., database or state management)
  };

  return (
    <div className="pickup-scheduler-container">
      <h1>Schedule Pickup</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Pickup Date:
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Pickup Time:
          <input
            type="time"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Schedule Pickup</button>
      </form>
    </div>
  );
};

export default PickupScheduler;
