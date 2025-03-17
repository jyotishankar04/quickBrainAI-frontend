import React, { lazy } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import LazyLoader from "./components/LazyLoader.jsx";

// Lazy load components
const Home = lazy(() => import("./app/_home/Home.jsx"));
const AuthLayout = lazy(() => import("./app/_auth/AuthLayout.jsx"));
const SignUp = lazy(() => import("./app/_auth/pages/SignUp.jsx"));
const Login = lazy(() => import("./app/_auth/pages/Login.jsx"));
const OtpVerification = lazy(() =>
  import("./app/_auth/pages/OtpVerification.jsx")
);
const OnBoard = lazy(() => import("./app/_auth/pages/OnBoard.jsx"));
const RootLayout = lazy(() => import("./app/_root/RootLayout.jsx"));
const Dashboard = lazy(() => import("./app/_root/pages/Dashboard.jsx"));
const Favorites = lazy(() => import("./app/_root/pages/Favorites.jsx"));
const MyNotes = lazy(() => import("./app/_root/pages/MyNotes.jsx"));
const CreateNotePage = lazy(() =>
  import("./app/_root/pages/CreateNotePage.jsx")
);
const Shared = lazy(() => import("./app/_root/pages/Shared.jsx"));
const UserProfilePage = lazy(() => import("./app/_root/pages/UserProfile.jsx"));
const WorkSpacePage = lazy(() => import("./app/_root/pages/WorkSpacePage.jsx"));
const NotFoundPage = lazy(() => import("./components/NotFoundPage.jsx"));

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/"
        element={
          <LazyLoader>
            <Home />
          </LazyLoader>
        }
      />

      <Route
        path="/auth"
        element={
          <LazyLoader>
            <AuthLayout />
          </LazyLoader>
        }
      >
        <Route
          path="login"
          element={
            <LazyLoader>
              <Login />
            </LazyLoader>
          }
        />
        <Route
          path="register"
          element={
            <LazyLoader>
              <SignUp />
            </LazyLoader>
          }
        />
        <Route
          path="otp-verification"
          element={
            <LazyLoader>
              <OtpVerification />
            </LazyLoader>
          }
        />
        <Route
          path="onboard"
          element={
            <LazyLoader>
              <OnBoard />
            </LazyLoader>
          }
        />
      </Route>

      {/* Protected Routes */}
      <Route
        path="/app"
        element={
          <LazyLoader>
            <RootLayout />
          </LazyLoader>
        }
      >
        <Route
          index
          element={
            <LazyLoader>
              <Dashboard />
            </LazyLoader>
          }
        />
        <Route
          path="notes"
          element={
            <LazyLoader>
              <MyNotes />
            </LazyLoader>
          }
        />
        <Route
          path="notes/new"
          element={
            <LazyLoader>
              <CreateNotePage />
            </LazyLoader>
          }
        />
        <Route
          path="workspace/:noteId"
          element={
            <LazyLoader>
              <WorkSpacePage />
            </LazyLoader>
          }
        />
        <Route
          path="favorites"
          element={
            <LazyLoader>
              <Favorites />
            </LazyLoader>
          }
        />
        <Route
          path="shared"
          element={
            <LazyLoader>
              <Shared />
            </LazyLoader>
          }
        />
        <Route
          path="profile"
          element={
            <LazyLoader>
              <UserProfilePage />
            </LazyLoader>
          }
        />

        {/* Settings Nested Routes */}
        <Route path="settings" element={<Outlet />}>
          <Route
            path="general"
            element={
              <LazyLoader>
                <div>General</div>
              </LazyLoader>
            }
          />
          <Route
            path="security"
            element={
              <LazyLoader>
                <div>Security</div>
              </LazyLoader>
            }
          />
        </Route>
      </Route>

      {/* Catch-All Route */}
      <Route
        path="*"
        element={
          <LazyLoader>
            <NotFoundPage />
          </LazyLoader>
        }
      />
    </Routes>
  );
};

export default App;
