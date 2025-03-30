import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-full h-screen grid grid-cols-2">
      <div className="w-full flex justify-center items-center">
        <img
          src="/authpage.jpg"
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="w-full flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
