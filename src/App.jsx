import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './app/_home/Home.jsx'
import AuthLayout from './app/_auth/AuthLayout.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth/*'  element={<AuthLayout/>} >
        <Route path='login' element={<div>login</div>} />
        <Route path='register' element={<div>register</div>} />
      </Route>
    </Routes>
  )
}

export default App