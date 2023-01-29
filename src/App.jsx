import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'

import Hero from './Components/Hero'
import Contact from './Components/Contact'


function App() {

  return (
    
      <Routes>
        <Route path='/' index element={<Hero />} />
        <Route path='/Contact' element={<Contact />} />
     
      </Routes>

  )
}

export default App
