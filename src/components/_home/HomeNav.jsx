import React, { useEffect, useState } from "react";
import { homeNavBarLinks } from "../../constants/home.constants.js";
import Logo from "./Logo.jsx";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../lib/axios/axiosApis.js";
const HomeNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const [isAuth, setIsAuth] = React.useState(false);
  const [user, setUser] = React.useState();
  const checkAuthUser = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get("/auth/session");
      if (res.status === 200 && res.data.success) {
        setIsAuth(true);
        setLoading(false);
        setUser(res.data.data);
        return;
      }

      setIsAuth(false);
      setLoading(false);
      return;
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setIsAuth(false);
      setLoading(false);
      return;
    }
  };
  useEffect(() => {
    checkAuthUser();
  }, []);
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

          <div className="hidden md:flex scroll-smooth space-x-6">
            {homeNavBarLinks.map((obj) => {
              return (
                <a
                  key={obj.path}
                  href={obj.path}
                  className="text-gray-700 hover:text-[#2563EB] transition-colors duration-300"
                >
                  {obj.name}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            {!loading && !isAuth && (
              <>
                <Link
                  to="/auth/login"
                  className="px-4 py-2 text-[#2563EB] rounded-md hover:bg-gray-100 transition-colors duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="px-4 py-2 bg-[#2563EB] text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Sign Up
                </Link>
              </>
            )}
            {loading && (
              <span className="px-4 py-2 text-[#2563EB] rounded-md">
                Loading...
              </span>
            )}
            {isAuth && (
              <div className="text-[#2563EB] rounded-md flex items-center space-x-2">
                <div className="text-md">
                  Welcome <span className="font-bold">{user?.name}</span>
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden avatar ">
                  <img src={user?.avatarUrl} alt="avatar" />
                </div>
                <Link
                  to="/app"
                  className="px-4 py-2 bg-[#2563EB] text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Dashboard
                </Link>
              </div>
            )}
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
          <div className="flex flex-col scroll-smooth space-y-4 mt-4 pb-4">
            {homeNavBarLinks.map((obj) => {
              return (
                <a
                  key={obj.path}
                  href={obj.path}
                  className="text-gray-700 hover:text-[#2563EB] transition-colors duration-300"
                >
                  {obj.name}
                </a>
              );
            })}
            <div className="pt-2 border-t border-gray-200">
              {!loading && !isAuth && (
                <>
                  <Link
                    to="/auth/login"
                    className="px-4 py-2 text-[#2563EB] rounded-md hover:bg-gray-100 transition-colors duration-300"
                  >
                    Login
                  </Link>
                  <Link
                    to="/auth/register"
                    className="px-4 py-2 bg-[#2563EB] text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                  >
                    Sign Up
                  </Link>
                </>
              )}
              {loading && (
                <span className="px-4 py-2 text-[#2563EB] rounded-md">
                  Loading...
                </span>
              )}
              {isAuth && (
                <div className="text-[#2563EB] rounded-md flex items-center space-x-2">
                  <div className="text-md">
                    Welcome <span className="font-bold">{user?.name}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full overflow-hidden avatar ">
                    <img src={user?.avatarUrl} alt="avatar" />
                  </div>
                  <Link
                    to="/app"
                    className="px-4 py-2 bg-[#2563EB] text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                  >
                    Dashboard
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HomeNav;
