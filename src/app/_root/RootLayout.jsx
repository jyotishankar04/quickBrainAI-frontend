import { useEffect, useRef } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../../components/_root/Sidebar";
import AppNavbar from "../../components/_root/AppNavbar";
import { useAuthContext } from "../../context/AuthContext";
import LoadingModal from "../../components/_root/LoadingModel";
import toast from "react-hot-toast";
import { isMobile } from "react-device-detect";

const RootLayout = () => {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Detects route changes
  const { isAuthenticated, isLoading, checkAuthUser } = useAuthContext();
  const hasCheckedAuth = useRef(false); // ✅ Prevent multiple checks
  //   check if it is a mobile device if true then show unsupported device

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
  if (isMobile) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-red-500 mb-4">
            Unsupported Device
          </h1>
          <p className="mb-4">
            Our application is currently optimized for desktop use only. Please
            access it from a computer for the best experience.
          </p>
          <button
            onClick={() =>
              (window.location.href = "https://quickbrainai.netlify.app/")
            }
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    );
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
