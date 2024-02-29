import { useState } from "react"
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import Doc_view from "./components/docter_view/Doc_view"
import React from 'react'
import About from "./components/about_us/About"
import Home from "./components/home/Home"
import { Route, Routes } from 'react-router-dom'
import Login from "./components/auth/patient/Patientlogin"

const Booking = ()=>{
  return <>booking</>
}

const Account = ()=>{
  return <>account page</>
}

const App = () => {
  const [auth, setauth] = useState(false);
  return (
    <div style={{overflow: "hidden"}}>
        <Navbar auth={auth} />
        <div style={{marginTop: "7rem", height: "200vh"}}>
        <Routes>
          {auth?(
          <>
            <>
            <Route path="/bookappointment" element={<Booking/>} />
            <Route path="/doctors" element={<Doc_view/>} />
            <Route path="/account" element={<Account/>} />
            </>
          </>
          ):(
            <>
            <Route path="/about" element={<About/>} />
            <Route path="/login" element={<Login  setauth={setauth}/>}/>
            <Route path="/home" element={<Home/>} />
            //about, login, home
            </>
          )
          }
        </Routes>
        </div>
        <Footer />
    </div>
  )
}

export default App