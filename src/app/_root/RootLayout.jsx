import { useEffect, useRef } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../../components/_root/Sidebar";
import AppNavbar from "../../components/_root/AppNavbar";
import { useAuthContext } from "../../context/AuthContext";
import LoadingModal from "../../components/_root/LoadingModel";
import toast from "react-hot-toast";

const RootLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, isLoading, checkAuthUser } = useAuthContext();
  const hasCheckedAuth = useRef(false);

  useEffect(() => {
    const verifyUser = async () => {
      const success = await checkAuthUser();
      if (!success) {
        toast.dismiss();
        return;
      }
    };

    if (!isAuthenticated || location.pathname === "/app") {
      hasCheckedAuth.current = true;
      setTimeout(() => verifyUser(), 0);
    }
  }, [checkAuthUser, isAuthenticated, navigate, location.pathname]);

  if (isLoading) {
    return <LoadingModal isVisible={true} text="Authenticating..." />;
  }

  // if (isMobile) {
  //   return (
  //     <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-gray-100">
  //       <div className="text-center p-8 max-w-md mx-auto bg-white rounded-xl shadow-lg border border-gray-200">
  //         <div className="mb-6">
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             className="h-16 w-16 mx-auto text-red-500"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               strokeWidth={2}
  //               d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  //             />
  //           </svg>
  //         </div>
  //         <h1 className="text-3xl font-bold text-gray-800 mb-3">
  //           QuickBrainAI is currently not supported on mobile devices.
  //           <br />
  //         </h1>
  //         <p className="text-gray-600 mb-6">
  //           For the best experience, we recommend using QuickBrainAI on a
  //           desktop computer. We apologize for any inconvenience this may cause.
  //           We are working to provide a better experience for mobile users.
  //         </p>

  //         <div className="flex flex-col space-y-3">
  //           <button
  //             onClick={() =>
  //               (window.location.href = "https://quickbrainai.netlify.app/")
  //             }
  //             className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md"
  //           >
  //             Return to Homepage
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="flex min-h-screen  bg-gray-50">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col gap-2 h-screen overflow-hidden">
        <AppNavbar />
        <div className="flex-1 overflow-y-auto md:p-4 p-0">
          <Outlet />
        </div>
        <footer className="text-center text-sm p-3 bg-gray-100 border-t border-gray-200">
          Made with ❤️ by QuickBrainAI Team
        </footer>
      </div>
    </div>
  );
};

export default RootLayout;
