import { useEffect, useRef } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../../components/_root/Sidebar";
import AppNavbar from "../../components/_root/AppNavbar";
import { useAuthContext } from "../../context/AuthContext";
import LoadingModal from "../../components/_root/LoadingModel";
import toast from "react-hot-toast";

const RootLayout = () => {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Detects route changes
  const { isAuthenticated, isLoading, checkAuthUser } = useAuthContext();
  const hasCheckedAuth = useRef(false); // ✅ Prevent multiple checks
  useEffect(() => {
    const verifyUser = async () => {
      const success = await checkAuthUser();
      if (!success) {
        toast.dismiss(); // ✅ Remove any previous toasts
        return;
      }
    };

    // ✅ Check session when the app mounts OR when redirected from login
    if (!isAuthenticated || location.pathname === "/app") {
      hasCheckedAuth.current = true;
      setTimeout(() => verifyUser(), 0);
    }
  }, [checkAuthUser, isAuthenticated, navigate, location.pathname]); // ✅ Re-checks session on route change

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
