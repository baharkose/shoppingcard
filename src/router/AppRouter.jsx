import React from "react";
import Main from "../pages/Main"
import Navbar from "../components/Navbar"
import About from "../pages/About"
import ProductList from "../pages/ProductList"
import NewProduct from "../pages/NewProduct"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="about" element={<About/>}/>
          <Route path="newproduct" element={<NewProduct/>} />
          <Route path="productlist" element={<ProductList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
