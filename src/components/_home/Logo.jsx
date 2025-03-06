import React from "react";

const Logo = () => {
  return (
    <a
      href="#hero"
      className="text-2xl font-bold text-primary-600 flex items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 mr-2 text-primary-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
      <span className="text-2xl font-bold text-[#2563EB]">QuickBrain AI</span>
    </a>
  );
};

export default Logo;
