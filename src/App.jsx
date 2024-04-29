import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PublicRouteur from '@/Pages/Public/publicrouteur'


function App() {
  return (
 
      <BrowserRouter>
        <Routes>
            <Route path="/*" element={<PublicRouteur />} />
        </Routes>
      </BrowserRouter>
  
  )
}

export default App

