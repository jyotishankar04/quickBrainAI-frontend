import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const MobileBottomBar = ({ navLinks }) => {
  const location = useLocation();
  return (
    <div className="dock dock-lg  bg-primary text-neutral-content">
      {navLinks.map((item, index) => (
        <NavLink
          key={index}
          to={item.link}
          className={`flex flex-col items-center ${
            location.pathname === item.link
              ? "text-white dock-active bg-blue-600"
              : "text-neutral-content"
          }`}
        >
          <div
            dangerouslySetInnerHTML={{ __html: item.icon }}
            className="w-6 h-6"
          />
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

export default MobileBottomBar;
