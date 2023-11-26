import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Electronics from './components/Electronics'
import Mobiles from './components/Mobiles'
import Games from './components/Games'
import Car from './components/Car'
import Laptop from './components/Laptop'
import Toys from './components/Toys'
import Watch from './components/Watch'
import Motorbike from './components/Motorbike'
import Baby from './components/Baby'
import Books from './components/Books'


function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/mobiles' element={<Mobiles />} />
        <Route path='/games' element={<Games />} />
        <Route path='/laptops' element={<Laptop />} />
        <Route path='/baby' element={<Baby />} />
        <Route path='/cars' element={<Car />} />
        <Route path='/motorbike' element={<Motorbike />} />
        <Route path='/toys' element={<Toys />} />
        <Route path='/books' element={<Books />} />
        <Route path='/watches' element={<Watch />} />
        <Route path='*' element={<Header />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App
