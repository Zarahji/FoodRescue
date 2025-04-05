import React, { useState } from 'react';

const Inventory = () => {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Apples', quantity: 20 },
    { id: 2, name: 'Bananas', quantity: 15 },
    { id: 3, name: 'Oranges', quantity: 10 },
  ]);

  // Function to add a new item to inventory
  const addItem = (newItem) => {
    setInventory((prevInventory) => [...prevInventory, newItem]);
  };

  return (
    <div>
      <h1>Food Inventory</h1>
      <ul>
        {inventory.map(item => (
          <li key={item.id}>
            {item.name}: {item.quantity} items
          </li>
        ))}
      </ul>

      {/* Add a button to add an item */}
      <button onClick={() => addItem({ id: 4, name: 'Pineapples', quantity: 5 })}>
        Add Pineapples
      </button>
    </div>
  );
};

export default Inventory;
