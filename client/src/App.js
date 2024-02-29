import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import React from 'react'
import About from "./components/about_us/About"
import Home from "./components/home/Home"
import { Route, Routes } from 'react-router-dom'
import Login from "./components/auth/patient/Patientlogin"

const App = () => {
  return (
    <div style={{overflow: "hidden"}}>
        <Navbar />
        <div style={{marginTop: "7rem", height: "200vh"}}>
        <Routes>
          <Route path="/login" element={<Login/>} />
          
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        </div>
        <Footer />
    </div>
  )
}

export default App