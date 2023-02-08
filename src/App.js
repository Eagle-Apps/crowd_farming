import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import { Guest } from './middlewares'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Project from './pages/Project'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/login' element={<Login />} />

        <Route path='/register' element={<Register />} />

        <Route path='/project' element={<Project />} />
      </Routes>
    </Router>
  )
}

export default App
