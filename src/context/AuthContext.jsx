/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  useRefreshSessionMutation,
  useSessionQuery,
} from "../lib/query/react-query";
import toast from "react-hot-toast";

const initialUserState = { id: null, email: null };

const AuthContext = createContext({
  user: initialUserState,
  isAuthenticated: false,
  isLoading: false,
  checkAuthUser: async () => false,
  refreshSession: async () => false,
});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const hasTriedRefresh = useRef(false);

  // ✅ Fetch session (handles automatic refetching)
  const {
    data: user,
    isLoading: isLoadingSession,
    refetch,
    isError: isSessionError,
  } = useSessionQuery();

  // ✅ Mutation for refreshing session
  const refreshSessionMutation = useRefreshSessionMutation();

  // 🔄 Refresh session logic (only tries once)
  const refreshSession = async () => {
    if (hasTriedRefresh.current) return false;
    hasTriedRefresh.current = true;

    try {
      const data = await refreshSessionMutation.mutateAsync();
      if (data.success) {
        toast.success("Session refreshed");
        refetch(); // Re-fetch session data
        return true;
      }
    } catch (error) {
      console.error("Session refresh failed:", error);
    }
    navigate("/auth/login");
    return false;
  };

  // 🔍 Check authentication (only refreshes once if needed)
  const checkAuthUser = async (shouldRedirect = false) => {
    if (isSessionError) {
      toast.error("Access token expired");
      const refreshed = await refreshSession();
      if (refreshed && shouldRedirect) {
        navigate("/app");
      }
      return refreshed;
    }
    return true;
  };

  const value = {
    user: user || initialUserState,
    isAuthenticated: !!user?.id,
    isLoading: isLoadingSession,
    checkAuthUser,
    refreshSession,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
