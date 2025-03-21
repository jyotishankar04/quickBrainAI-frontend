import React, { useState } from "react";
import Logo from "../_home/Logo";
import { sidebarLinks } from "../../constants/app.constants";
import { NavLink, useLocation } from "react-router-dom";
import useCollapseState from "../../context/CollapseStateContext";
import { useCategoriesQuery } from "../../lib/query/react-query";
import { randomColorGenerator } from "../../util/colorGenerators";
import { Resizable } from "re-resizable";

const Sidebar = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  const [isTagsOpen, setIsTagsOpen] = useState(true);
  const { isCollapsed, setIsCollapsed } = useCollapseState();
  const [sidebarWidth, setSidebarWidth] = useState(250); // setting the width in default 

  const { data: categories, isPending: isCategoryLoading, isSuccess: isCategorySuccess } = useCategoriesQuery();
  const location = useLocation();

  const toggleCategories = () => setIsCategoriesOpen(!isCategoriesOpen);
  const toggleTags = () => setIsTagsOpen(!isTagsOpen);
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <Resizable
    size = {{width: isCollapsed ? 60 : sidebarWidth, height: "100%"}}
    minWidth={isCollapsed ? 60 : 200}
    maxWidth={isCollapsed ? 60 : 350}
    enable={{ right: true }}
    onResizeStop={(e,direction,ref,d) => {
      setSidebarWidth((prevWidth) => ((prevWidth + d.width) / window.innerWidth) * 100);
      
    }}
     
      
      className="h-screen bg-slate-200 overflow-y-auto transition-all duration-300"
    >
      <nav className="h-full flex flex-col">
        {/* Collapse Button */}
        <div className="flex items-center justify-between px-4 py-4">
          <Logo isCollapsed={isCollapsed} />
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-transform duration-300 ${isCollapsed ? "" : "rotate-180"}`}
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

        {/* Navigation Links */}
        <div className="space-y-1 px-3">
          {sidebarLinks.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className={({ isActive }) =>
                `flex items-center px-3 py-2.5 text-sm font-medium rounded-lg ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <div
                dangerouslySetInnerHTML={{ __html: item.icon }}
                className="w-5 h-5"
              />
              {!isCollapsed && <span className="ml-3">{item.name}</span>}
            </NavLink>
          ))}
        </div>

        {/* Categories Section */}
        {!isCollapsed && (
          <div className="mt-6 px-3">
            <div className="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600">
              <span>CATEGORIES</span>
              <button className="text-gray-500 hover:text-gray-700" onClick={toggleCategories}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            {isCategoriesOpen && (
              <div className="mt-1 space-y-1">
                {!isCategoryLoading && isCategorySuccess ? (
                  categories.data.map((category, index) => {
                    const color = randomColorGenerator();
                    return (
                      <a key={index} href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100">
                        <span style={{ backgroundColor: color }} className="w-2 h-2 rounded-full mr-3"></span>
                        {category.name}
                      </a>
                    );
                  })
                ) : (
                  <div className="flex justify-center my-4">
                    <span className="loading loading-spinner loading-lg"></span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Tags Section */}
        {!isCollapsed && (
          <div className="mt-6 px-3">
            <div className="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600">
              <span>TAGS</span>
              <button className="text-gray-500 hover:text-gray-700" onClick={toggleTags}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            {isTagsOpen && (
              <div className="mt-1 space-y-1">
                {["Important", "PDF Files", "Documentation"].map((tag, index) => (
                  <a key={index} href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    {tag}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </nav>
    </Resizable>
  );
};

export default Sidebar;
