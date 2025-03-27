import { useLocation } from "react-router-dom";
import NavAvatar from "./NavAvatar";
import WorkSpaceLeftTopBar from "./workspace/WorkSpaceLeftTopBar";

const AppNavbar = () => {
  const location = useLocation();
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
        <NavAvatar />
      </div>
    </div>
  );
};

export default AppNavbar;
