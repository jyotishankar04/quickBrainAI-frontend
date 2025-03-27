import React, { useState, useMemo, useCallback } from "react";
import Logo from "../_home/Logo";
import { sidebarLinks } from "../../constants/app.constants";
import { NavLink, useLocation } from "react-router-dom";
import useCollapseState from "../../context/CollapseStateContext";
import SideBarCategories from "./SideBarCategories";
import { Resizable } from "re-resizable";
import { BiArrowFromTop, BiSearch } from "react-icons/bi";
import SearchDialog from "./dialogs/SearchDialog";

const Sidebar = () => {
  const { isCollapsed, setIsCollapsed } = useCollapseState();
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const location = useLocation();

  const toggleSidebar = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, [setIsCollapsed]);

  const handleResizeStop = useCallback((e, direction, ref, d) => {
    setSidebarWidth((prevWidth) => {
      const newWidth = prevWidth + d.width;
      return newWidth !== prevWidth ? newWidth : prevWidth;
    });
  }, []);

  // Memoized Navigation Links to prevent unnecessary re-renders
  const navLinks = useMemo(
    () =>
      sidebarLinks.map((item, index) => {
        const isActive = location.pathname === item.link;
        return (
          <NavLink
            key={index}
            to={item.link}
            className={`flex items-center ${
              isCollapsed ? "justify-center" : ""
            } py-2.5 px-2 text-sm font-medium rounded-lg ${
              isActive
                ? "bg-blue-50 text-blue-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <div
              dangerouslySetInnerHTML={{ __html: item.icon }}
              className="w-6 h-6"
            />
            {!isCollapsed && <span className="ml-3">{item.name}</span>}
          </NavLink>
        );
      }),
    [isCollapsed, location.pathname]
  );

  return (
    <Resizable
      size={{ width: isCollapsed ? 60 : sidebarWidth, height: "100%" }}
      minWidth={isCollapsed ? 60 : 250}
      maxWidth={isCollapsed ? 60 : 350}
      enable={{ right: true }}
      onResizeStop={handleResizeStop}
      className="h-screen bg-slate-200 overflow-y-auto transition-all duration-300"
    >
      <nav className="h-full flex flex-col">
        {/* Collapse Button */}
        <div
          className={`flex items-center ${
            isCollapsed ? "flex-col" : ""
          } justify-between px-4 py-4`}
        >
          <Logo isCollapsed={isCollapsed} />
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-transform duration-300 ${
                isCollapsed ? "" : "rotate-180"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        {!isCollapsed && !location.pathname.includes("workspace") && (
          <div className="w-full">
            <SearchDialog>
              <button
                onClick={() =>
                  document.getElementById("searchModal").showModal()
                }
                className="px-3 py-2 w-full bg-slate-100 rounded mb-3 cursor-pointer flex  hover:bg-slate-200 items-center justify-start gap-4 mx-2"
              >
                {" "}
                <BiSearch className=" right-4 top-3 text-gray-400 " />
                <p className="text-gray-400">{isCollapsed ? "" : "Search"}</p>
              </button>
            </SearchDialog>
          </div>
        )}
        {/* Navigation Links */}

        <div className="space-y-1 px-3">{navLinks}</div>

        {/* Collapsible Categories Section */}
        <div className="flex-1 overflow-y-auto">
          <SideBarCategories />
        </div>
      </nav>
    </Resizable>
  );
};

export default Sidebar;
