import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Erro from "./pages/Erro";


function RoutesApp(){


    return(
        <CartProvider>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="*" element={<Erro/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
        </CartProvider>
    )
}

export default RoutesApp;