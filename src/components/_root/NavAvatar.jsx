import React from "react";
import { Link } from "react-router-dom";

const NavAvatar = ({ image }) => {
  return (
    <div className="dropdown dropdown-end cursor-pointer">
      <div tabIndex={0} role="button" className="avatar m-1">
        <div className="w-8 rounded-full ">
          <img src={image} />
        </div>
      </div>
      <div
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52  p-2 shadow-sm flex flex-col gap-1"
      >
        <Link to={"/app/profile"} className="btn btn-sm btn-ghost text-sm">
          My Profile
        </Link>
        <Link to={"/app/settings"} className="btn btn-sm btn-ghost text-sm">
          Settings
        </Link>
        <Link to={"/auth/login"} className="btn btn-sm btn-error text-sm">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default NavAvatar;
