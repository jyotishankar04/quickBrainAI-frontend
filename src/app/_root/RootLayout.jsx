import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/_root/Sidebar";
import AppNavbar from "../../components/_root/AppNavbar";
import { useAuthContext } from "../../context/AuthContext";
import LoadingModal from "../../components/_root/LoadingModel";
import toast from "react-hot-toast";

const RootLayout = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, checkAuthUser } = useAuthContext();

  useEffect(() => {
    const verifyUser = async () => {
      const success = await checkAuthUser();
      if (!success) {
        toast.error("You are not logged in, Redirecting to Login Page");
        navigate("/auth/login");
      }
    };

    if (!isAuthenticated) {
      setTimeout(() => {
        verifyUser();
      }, 0); // ✅ Schedules authentication check **after** React finishes rendering
    }
  }, [checkAuthUser, isAuthenticated, navigate]); // ✅ Dependency array ensures this runs only when necessary

  if (isLoading) {
    return <LoadingModal isVisible={true} text="Authenticating..." />;
  }

  return (
    <div className="flex min-h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col gap-2 h-screen">
        <AppNavbar />
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
        <footer className="text-center text-sm p-1 bg-gray-200">
          Made with ❤️ by QuickBrainAI Team
        </footer>
      </div>
    </div>
  );
};

export default RootLayout;
