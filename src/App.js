import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import { Guest } from './middlewares'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Investments from './pages/Investments'
import About from './pages/About'
import Contact from './pages/Contact'
import SingleInvestment from './pages/SingleInvestment'
import Nav from './layouts/Nav'
import Footer from './pages/Footer'
import { AuthContext } from './context/AuthContext'
import Farms from './pages/Farms'
import SingleInvestmentLandOwner from './pages/SingleInvestmentLandOwner'
import "./main.css";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  // const [test, setTest] = useState(0)
  useEffect(() => {
    if (localStorage.getItem('ndembeleUserId')) {
      setIsSignedIn(true)
    }
  }, [])
  return (
    <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      {/* <Router> */}
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/login' element={<Login />} />

        <Route path='/register' element={<Register />} />

        <Route path='/farm' element={<Farms />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/investment-page' element={<SingleInvestment />} /> */}
        <Route>
          <Route path='/investment' element={<Investments />} />
          <Route path='/investments/:_id' element={<SingleInvestment />} />
          <Route path='/investment/:id' element={<SingleInvestmentLandOwner />} />
        </Route>
      </Routes>

      <Footer />
      {/* </Router> */}
    </AuthContext.Provider>
  )
}

export default App
