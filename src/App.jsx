import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState,createContext, useContext } from 'react'
import './App.css'
import HomePage from "./Components/HomePage/HomePage";
import ShopPage from "./Components/ShopPage/ShopPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import CartPage from "./Components/CartPage/CartPage";
import Layout from "./Components/Layout/Layout";
import SingleCategory from "./Components/SingleCategory/SingleCategory";
import SingleProduct from "./Components/SingleProduct/SingleProduct";


function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="HomePage" element={<HomePage/>}></Route>
          <Route path="ShopPage" element={<ShopPage/>}></Route>
          <Route path="ContactPage" element={<ContactPage/>}></Route>
          <Route path="CartPage" element={<CartPage/>}></Route>
          <Route path="/SingleCategory/:id" element={<SingleCategory/>}></Route>
          <Route path="/SingleProduct/:id"  element={<SingleProduct/>}></Route>
          <Route path="/SingleProduct/:id"  element={<SingleProduct/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
