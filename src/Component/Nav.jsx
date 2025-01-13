import React, { useState } from "react";
import { navLinks } from "../Constants";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu toggle
import apollo247 from "../assets/icons/apollo247.svg";
import Button from "./Button";
import user from "../assets/icons/user.svg";

const Nav = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

  return (
    <nav className="bg-white border-b shadow-md flex flex-col mb-5">
      {/* Top Section */}
      <div className="px-5 md:px-20 flex items-center justify-between py-2">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="/" className="flex-shrink-0">
            <img
              src={apollo247}
              alt="Apollo247"
              width={70}
              height={60}
              className="mt-1"
            />
          </a>
        </div>
        {/* Login Button */}
        <div className="hidden md:block">
          <Button label="Login" iconURL={user} />
        </div>
        {/* Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Separator Line */}
      <div className="border-t border-gray-200"></div>

      {/* Navigation Links */}
      <ul
        className={`flex flex-col md:flex-row md:space-x-6 items-center justify-center gap-6 py-2 transition-all duration-300 ${
          isMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden md:max-h-full"
        }`}
      >
        {navLinks.map((item, index) => (
          <li
            key={index}
            className="relative flex items-center text-gray-700 hover:text-blue-600 group"
          >
            <a
              href={item.link}
              className="transition duration-200 text-md font-semibold"
            >
              {item.label}
            </a>
            {/* Custom Underline */}
            <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-blue-600 group-hover:w-full transition-all duration-300"></span>

            {item.badge && (
              <span className="ml-1 text-xs items-center px-2 bg-green-100 font-semibold">
                {item.badge}
              </span>
            )}
          </li>
        ))}
        {/* Login Button for Mobile */}
        <li className="md:hidden">
          <Button label="Login" iconURL={user} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
