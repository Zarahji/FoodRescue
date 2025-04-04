import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">FoodRescue</h1>
      <div>
        <Link className="mx-2" to="/">Home</Link>
        <Link className="mx-2" to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;