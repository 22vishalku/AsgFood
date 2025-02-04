import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import "./index.css";

// pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import Success from "./pages/Success";
import  SignUp from "./pages/SignUp";
import ContactPage from "./pages/ContactPage";
import Location from "./pages/Location";
const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} /> 
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/location" element={<Location />} /> 
            <Route path="/*" element={<Error />} />
           
            <Route
               path="/success"
               element={
                  <ProtectedRoute>
                     <Success />
                  </ProtectedRoute>
               }
            />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
