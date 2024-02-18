import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductCard from '../Component/ProductCard'
import CartPage from '../Component/CartPage'
import Navbar from '../Component/Navbar'

const Routing = () => {
  return (
   <BrowserRouter>
        <Navbar/>
   <Routes>
    <Route path="/product" element={<ProductCard/>}/>
    <Route path="/cart" element={<CartPage/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default Routing