"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full h-20 flex justify-between items-center bg-black px-6 shadow-lg relative">
      <div className="flex items-center space-x-3">
        <h1 className="text-3xl font-extrabold text-white">CLASSIC BAGS</h1>
      </div>
      <div
        className="lg:hidden absolute top-6 right-6 cursor-pointer"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <FaTimes className="text-white text-2xl" />
        ) : (
          <FaBars className="text-white text-2xl" />
        )}
      </div>
      <div className="flex items-center space-x-4 text-white font-semibold w-full lg:w-auto">
        <ul
          className={`flex items-center space-x-6 text-white font-semibold w-full lg:w-auto ${
            isMenuOpen
              ? "flex flex-col absolute top-20 right-0 w-full bg-blue-950 lg:bg-transparent z-10"
              : "hidden lg:flex"
          } lg:flex-row space-y-4 lg:space-y-0 px-6 lg:px-0 py-4 lg:py-0 transition-all duration-300`}
        >
          <li>
            <Link
              href="/"
              className="hover:text-blue-800 transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/About"
              className="hover:text-blue-800 transition-all duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/Shop"
              className="hover:text-blue-800 transition-all duration-300"
            > Shop
            </Link>
          </li>
          <li>
            <Link
              href="/Sale"
              className="hover:text-blue-800 transition-all duration-300"
            >
              Sale
            </Link>
          </li>
        </ul>
        {isMenuOpen && (
          <div className="flex justify-center items-center w-full mt-4">
            <button className="bg-white text-black py-1 px-4 rounded-lg font-extrabold flex items-center space-x-2 hover:bg-blue-800 transition duration-300 transform hover:scale-105">
              <span className="text-sm">Add to cart</span>
            </button>
          </div>
        )}
        <div className="hidden lg:flex items-center space-x-2 ml-auto">
          <button className="bg-white text-black py-2 px-6 rounded-lg font-extrabold flex items-center space-x-2 hover:bg-blue-800 transition-all duration-300 transform hover:scale-105">
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
