import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLogoutMutation } from "../../lib/query/react-query";
import toast from "react-hot-toast";

const NavAvatar = ({ image }) => {
  const {
    mutateAsync: logout,
    isPending,
    isSuccess,
    isError,
    error,
  } = useLogoutMutation();
  useEffect(() => {
    if (isSuccess) {
      window.location.href = "/auth/login";
    }
  }, [isSuccess]);
  useEffect(() => {
    if (isError) {
      toast.error(error.message);
    }
  }, [isError, error]);
  if (isPending) {
    return (
      <div className="dropdown dropdown-end cursor-pointer">
        <div tabIndex={0} role="button" className="avatar m-1">
          <div className="w-8 rounded-full animate-pulse">
            <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
        </div>
      </div>
    );
  }
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
        <button
          onClick={async () => {
            await logout();
          }}
          className="btn btn-sm btn-error text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavAvatar;
