// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react';
// import ReactDom from "react-dom"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Login from './login'
import AdminDashboard from "./LandingPages/Admin/AdminDashboard"
import Centers from './LandingPages/Admin/Center';


function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/admin-dashboard' element={<AdminDashboard/>}></Route>
    <Route path='/centers' element={<Centers/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
