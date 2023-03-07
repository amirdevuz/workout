import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './routes/Layout'
import Home from './routes/Home'
import Products from './routes/Products'
import SingleProduct from './routes/SingleProduct'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/:categoryName' element={<Products />}></Route>
          <Route path='/:productName' element={<SingleProduct />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App