import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ size = "xl", isCollapsed = false }) => {
  return (
    <Link
      to="/app"
      className={`text-${size} font-bold text-primary-600 flex gap-2 items-center`}
    >
      <img
        src="../../../public/quickBrainAi.svg"
        alt="logo"
        className="w-6 h-6"
      />

      <span
        className={`text-${size} ${
          isCollapsed && "hidden"
        } font-bold text-[#2563EB]`}
      >
        QuickBrain AI
      </span>
    </Link>
  );
};

export default Logo;
