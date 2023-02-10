import React from "react";
import { Link } from "react-router-dom";
import { ACTIONS } from "../context/UserContext";
import useUserContext from "../hooks/useUserContext";

function Navbar() {
  const { dispatch } = useUserContext();
  const handleLogout = () => {
    dispatch({ type: ACTIONS.REMOVE_USER });
  };
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">E-commerce</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to={"/products"} className="mr-5 hover:text-gray-900">
            Products
          </Link>
          <Link to={"/product/add"} className="mr-5 hover:text-gray-900">
            Add Product
          </Link>
        </nav>
        <button
          onClick={handleLogout}
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Navbar;
