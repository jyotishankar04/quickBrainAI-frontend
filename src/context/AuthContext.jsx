/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  useRefreshSessionMutation,
  useSessionQuery,
} from "../lib/query/react-query";

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // ✅ Fetch session using useSessionQuery (handles automatic refetching)
  const {
    data: user,
    isLoading: isLoadingSession,
    refetch,
    isError: isSessionError,
  } = useSessionQuery();

  // ✅ Mutation for refreshing session
  const refreshSessionMutation = useRefreshSessionMutation();

  // 🔄 Refresh session logic
  const refreshSession = useCallback(async () => {
    try {
      const data = await refreshSessionMutation.mutateAsync();
      if (data.success) {
        setIsAuthenticated(true);
        refetch(); // Re-fetch user session
        return true;
      }
    } catch (error) {
      console.error("Session refresh failed:", error);
    }
    setIsAuthenticated(false);
    navigate("/auth/login");
    return false;
  }, [refreshSessionMutation, navigate, refetch]);

  // 🔍 Check if user is authenticated
  const checkAuthUser = useCallback(
    async (shouldRedirect = false) => {
      if (isSessionError) {
        const refreshed = await refreshSession();
        console.log(refreshed);
        if (refreshed && shouldRedirect) navigate("/app");
        return refreshed;
      }
      return true;
    },
    [isSessionError, refreshSession, navigate]
  );

  const value = {
    user: user || initialUserState,
    isAuthenticated,
    isLoading: isLoadingSession,
    checkAuthUser,
    refreshSession,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
