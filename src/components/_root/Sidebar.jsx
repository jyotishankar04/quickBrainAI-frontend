import React, { useState } from "react";
import Logo from "../_home/Logo";
import { sidebarLinks } from "../../constants/app.constants";
import { NavLink, useLocation } from "react-router-dom";
import useCollapseState from "../../context/CollapseStateContext";

const Sidebar = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  const [isTagsOpen, setIsTagsOpen] = useState(true);
  const { isCollapsed, setIsCollapsed } = useCollapseState();

  const location = useLocation();

  const toggleCategories = () => setIsCategoriesOpen(!isCategoriesOpen);
  const toggleTags = () => setIsTagsOpen(!isTagsOpen);
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <nav
      className={`flex-1 bg-slate-200 h-screen py-4 overflow-y-auto ${
        isCollapsed ? "w-fit" : "w-64"
      } transition-all duration-300`}
    >
      {/* Collapse Button */}
      <div
        className={`flex justify-between items-center px-4 ${
          isCollapsed ? "flex-col items-center" : ""
        }`}
      >
        <div className={`flex items-center`}>
          <Logo isCollapsed={isCollapsed} />
        </div>
        <button
          onClick={toggleSidebar}
          className={`p-2 text-gray-500 hover:text-gray-700 focus:outline-none ${
            isCollapsed ? "" : "rotate-180"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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

      {/* Search Bar (Hidden when collapsed) */}
      {!isCollapsed && (
        <div className="px-4 mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search notes..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full transition"
            />
            <div className="absolute left-3 top-2.5 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <div className="space-y-1 px-3">
        {sidebarLinks.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className={() => {
              if (location.pathname === item.link) {
                return "flex items-center px-3 py-2.5 text-sm font-medium rounded-lg bg-blue-50 text-blue-700";
              }
              return "flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100";
            }}
          >
            {/* Render SVG icon using dangerouslySetInnerHTML */}
            <div
              dangerouslySetInnerHTML={{ __html: item.icon }}
              className="w-5 h-5"
            />
            {!isCollapsed && <span className="ml-3">{item.name}</span>}
          </NavLink>
        ))}
      </div>

      {/* Collapsible Categories Section */}
      {!isCollapsed && (
        <div className="mt-6 px-3">
          <div className="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600">
            <span>CATEGORIES</span>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={toggleCategories}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          {isCategoriesOpen && (
            <div className="mt-1 space-y-1">
              {[
                { name: "Research", color: "blue-500" },
                { name: "Meetings", color: "green-500" },
                { name: "Design", color: "purple-500" },
                { name: "Project", color: "yellow-500" },
                { name: "HR", color: "red-500" },
                { name: "Product", color: "indigo-500" },
                { name: "Personal", color: "gray-500" },
              ].map((category, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100"
                >
                  <span
                    className={`w-2 h-2 bg-${category.color} rounded-full mr-3`}
                  ></span>
                  {category.name}
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Collapsible Tags Section */}
      {!isCollapsed && (
        <div className="mt-6 px-3">
          <div className="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600">
            <span>TAGS</span>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={toggleTags}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          {isTagsOpen && (
            <div className="mt-1 space-y-1">
              {["Important", "PDF Files", "Documentation"].map((tag, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-3 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                  {tag}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Sidebar;
