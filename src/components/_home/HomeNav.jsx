import React, { useState } from "react";
import { homeNavBarLinks } from "../../constants/home.constants.js";
import Logo from "./Logo.jsx";
const HomeNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header id="header" className="bg-white shadow-sm fixed w-full z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="hidden md:flex space-x-6">
            {homeNavBarLinks.map((obj) => {
              return (
                <a
                  href={obj.path}
                  className="text-gray-700 hover:text-[#2563EB] transition-colors duration-300"
                >
                  {obj.name}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#login"
              className="px-4 py-2 text-[#2563EB] rounded-md hover:bg-gray-100 transition-colors duration-300"
            >
              Login
            </a>
            <a
              href="#signup"
              className="px-4 py-2 bg-[#2563EB] text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Sign Up
            </a>
          </div>

          <button
            className="md:hidden flex items-center"
            id="mobile-menu-button"
            aria-label="Open mobile menu"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu, hidden by default */}
        <div
          className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="flex flex-col space-y-4 mt-4 pb-4">
            {
              homeNavBarLinks.map((obj) => {
                return (
                  <a
                    href={obj.path}
                    className="text-gray-700 hover:text-[#2563EB] transition-colors duration-300"
                  >
                    {obj.name}
                  </a>
                );
              })
            }
            <div className="pt-2 border-t border-gray-200">
              <a
                href="#login"
                className="block px-4 py-2 text-[#2563EB] rounded-md hover:bg-gray-100 transition-colors duration-300"
              >
                Login
              </a>
              <a
                href="#signup"
                className="block mt-2 px-4 py-2 bg-[#2563EB] text-white rounded-md text-center hover:bg-blue-700 transition-colors duration-300"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HomeNav;
