import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import { Guest } from './middlewares'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Investment from './pages/Investments'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/login' element={<Login />} />

        <Route path='/register' element={<Register />} />

        <Route path='/project' element={<Investment />} />
      </Routes>
    </Router>
  )
}

export default App
