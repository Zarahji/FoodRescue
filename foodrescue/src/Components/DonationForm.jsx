import { useState } from "react";

const DonationForm = () => {
  const [form, setForm] = useState({
    item: "",
    quantity: "",
    expiration: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donation submitted:", form);
    // Add API call here later
    setForm({ item: "", quantity: "", expiration: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-semibold mb-4">Donate Surplus Food</h2>
      
      <input
        type="text"
        name="item"
        placeholder="Food item name"
        value={form.item}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded"
        required
      />
      
      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={form.quantity}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded"
        required
      />

      <input
        type="date"
        name="expiration"
        value={form.expiration}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded"
        required
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Submit Donation
      </button>
    </form>
  );
};

export default DonationForm;
