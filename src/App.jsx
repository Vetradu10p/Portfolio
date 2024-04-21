import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import InProgress from './pages/InProgress'
import Error404 from './pages/Error404'

import About from './components/About'
import './app.scss'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />


          <Route path="/home" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/inprogress" element={<InProgress />} />

          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
