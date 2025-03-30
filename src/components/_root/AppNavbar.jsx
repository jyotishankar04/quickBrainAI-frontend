import { useLocation } from "react-router-dom";
import NavAvatar from "./NavAvatar";
import WorkSpaceLeftTopBar from "./workspace/WorkSpaceLeftTopBar";
import { useQueryClient } from "@tanstack/react-query";

const AppNavbar = () => {
  const location = useLocation();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(["session"]);
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
