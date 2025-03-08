import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./app/_home/Home.jsx";
import AuthLayout from "./app/_auth/AuthLayout.jsx";
import SignUp from "./app/_auth/pages/SignUp.jsx";
import Login from "./app/_auth/pages/Login.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";
import OtpVerification from "./app/_auth/pages/OtpVerification.jsx";
import OnBoard from "./app/_auth/pages/OnBoard.jsx";
import RootLayout from "./app/_root/RootLayout.jsx";
import Dashboard from "./app/_root/pages/Dashboard.jsx";
import Favotires from "./app/_root/pages/Favorites.jsx";
import MyNotes from "./app/_root/pages/MyNotes.jsx";
import CreateNotePage from "./app/_root/pages/CreateNotePage.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<SignUp />} />
        <Route path="otp-verification" element={<OtpVerification />} />
        <Route path="onboard" element={<OnBoard />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/app" element={<RootLayout />}>
        <Route path="" element={<Dashboard />} />
        <Route path="notes" element={<MyNotes />} />
        <Route path="notes/create" element={<CreateNotePage />} />
        <Route path="favorites" element={<Favotires />} />
        <Route path="shared" element={<div>Shared</div>} />
        <Route path="profile" element={<div>Profile</div>} />
        <Route
          path="settings"
          element={
            <>
              <Outlet />
            </>
          }
        >
          <Route path="general" element={<div>General</div>} />
          <Route path="security" element={<div>Security</div>} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
