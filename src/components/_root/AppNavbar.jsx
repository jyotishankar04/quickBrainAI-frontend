import { Link, useLocation } from "react-router-dom";
import NavAvatar from "./NavAvatar";
import WorkSpaceLeftTopBar from "./workspace/WorkSpaceLeftTopBar";
import { useQueryClient } from "@tanstack/react-query";
import { isMobile } from "react-device-detect";
import Logo from "../_home/Logo";
import SearchDialog from "./dialogs/SearchDialog";
import { BiSearch } from "react-icons/bi";

const AppNavbar = () => {
  const location = useLocation();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(["session"]);

  if (isMobile) {
    return (
      <div className="bg-gray-200 flex items-center pt-2">
        <div className={`flex items-center  w-full px-3 justify-between`}>
          <Logo size="md" isCollapsed={false} />
          {data ? (
            <div className="flex items-center gap-1">
              <SearchDialog>
                <button
                  onClick={() =>
                    document.getElementById("searchModal").showModal()
                  }
                  className="px-2 py-2 w-full bg-slate-100 rounded mb-3 cursor-pointer flex  hover:bg-slate-200 items-center justify-start gap-4 "
                >
                  <BiSearch className=" right-4 top-3 text-xl text-gray-400 " />
                </button>
              </SearchDialog>
              <NavAvatar image={data && data?.data.avatarUrl} />
            </div>
          ) : (
            <div>
              <Link to="/auth/login" className="btn btn-sm btn-primary">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-200 flex items-center pt-2">
      <div
        className={`flex items-center  w-full pr-10 ${
          location.pathname.includes("workspace")
            ? "justify-between"
            : "justify-end"
        }`}
      >
        {location.pathname.includes("workspace") && <WorkSpaceLeftTopBar />}
        {data ? (
          <NavAvatar image={data && data?.data.avatarUrl} />
        ) : (
          <div>
            <button className="btn btn-sm btn-primary">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppNavbar;
