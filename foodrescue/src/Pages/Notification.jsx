import React, { useState } from 'react';
import './Notification.css';

const Notification = () => {
  const [notifications] = useState([
    { id: 1, message: 'New donation received: 20 Apples' },
    { id: 2, message: 'Pickup scheduled for tomorrow at 10 AM' },
  ]);

  return (
    <div className="notification-container">
      <h1>Notifications</h1>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
