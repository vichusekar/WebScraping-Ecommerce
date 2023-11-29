import React, { useState } from 'react'
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
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import SignUp from './components/SignUp'

function App() {

  let [cartValue, setCartValue] = useState(0)
  return <>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/header' element={<Header cartValue={cartValue} />} />
        <Route path='/sidebar' element={<Sidebar />} />
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/mobiles' element={<Mobiles />} />
        <Route path='/games' element={<Games />} />
        <Route path='/laptops' element={<Laptop />} />
        <Route path='/baby' element={<Baby setCartValue={setCartValue} />} />
        <Route path='/cars' element={<Car />} />
        <Route path='/motorbike' element={<Motorbike />} />
        <Route path='/toys' element={<Toys />} />
        <Route path='/books' element={<Books />} />
        <Route path='/watches' element={<Watch />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App
