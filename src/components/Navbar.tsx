import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 fixed w-full top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800">
          MyPortfolio
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-500">
            About
          </Link>
          <Link to="/workstation" className="text-gray-600 hover:text-blue-500">
            Workstation
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-500">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
