import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router";
import Hero from "./../components/Hero";
import About from "./../components/About";
import Shop from "./../components/Shop";
import { MyStore } from "../Context/MyContext";
import Login from "../components/Login";
import Signup from "../components/Signup";
import ProtectedRoute from "./ProtectedRoute";
import ProductDetails from './../components/ProductDetails';

const Router = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(MyStore);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Hero />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default Router;
