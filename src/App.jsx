import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './app/_home/Home.jsx'
import AuthLayout from './app/_auth/AuthLayout.jsx'
import SignUp from './app/_auth/pages/SignUp.jsx'
import Login from './app/_auth/pages/Login.jsx'
import NotFoundPage from './components/NotFoundPage.jsx'
import OtpVerification from './app/_auth/pages/OtpVerification.jsx'
import OnBoard from './app/_auth/pages/OnBoard.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth/*'  element={<AuthLayout/>} >
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<SignUp/>} />
        <Route path='otp-verification' element={<OtpVerification/>} />
        <Route path='onboard' element={<OnBoard />} />
      </Route>



      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
