import React from 'react'
import './App.css'
import { motion } from 'framer-motion'
import { NavLink, Routes, Route } from 'react-router-dom'
import { About, Contact, Header, Home, Product } from './Components'
const App = () => {
  return (
    <>
      <Header />
      <div className='main-data'>
        <div className='data'>
          <motion.h3 animate={{ fontSize: '35px', color: '#00ff00', y: -10, x: 10 }}>Routing in React:</motion.h3>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='About' element={<About />} />
            <Route path='ProductPage' element={<Product />} />
            <Route path='ContactPage' element={<Contact />} />
          </Routes>
          <button className='nav'><NavLink to='/'>Home Page</NavLink></button>
          <button className='nav'><NavLink to='/About'>About Page</NavLink></button>
          <button className='nav'><NavLink to='/ProductPage'>Product Page</NavLink></button>
          <button className='nav'><NavLink to='/ContactPage'>Contact Page</NavLink></button>
        </div>
      </div>
    </>
  )
}

export default App
