import React from 'react'
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


const App = () => {
  return (
    <>
      {/* <Router> */}
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/login' element={<Login />} />

        <Route path='/register' element={<Register />} />

        {/* <Route path='/project' element={<Investment />} /> */}
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/investment-page' element={<SingleInvestment />} /> */}
        <Route>
          <Route path='/investment' element={<Investments />} />
          <Route path='/investment/:_id'  element={<SingleInvestment />} />
        </Route>
      </Routes>

      <Footer />
      {/* </Router> */}
    </>
  )
}

export default App
