import React, { useState } from 'react';
import './Dashboard.css';  // Import styles

const Dashboard = () => {
  const [donations] = useState([
    { id: 1, item: 'Apples', status: 'Pending' },
    { id: 2, item: 'Bananas', status: 'Completed' },
  ]);

  return (
    <div className="dashboard-container">
      <h1>Donation Dashboard</h1>
      <ul>
        {donations.map((donation) => (
          <li key={donation.id}>
            {donation.item} - Status: {donation.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
