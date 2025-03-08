import { Outlet } from "react-router-dom";
import Sidebar from "../../components/_root/Sidebar";
import AppNavbar from "../../components/_root/AppNavbar";

const RootLayout = () => {
  return (
    <div className="flex min-h-screen">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col gap-2 h-screen ">
        <AppNavbar />
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
        <footer className="text-center text-sm p-1 bg-gray-200">
          Made with ❤️ by Team 1
        </footer>
      </div>
    </div>
  );
};

export default RootLayout;
