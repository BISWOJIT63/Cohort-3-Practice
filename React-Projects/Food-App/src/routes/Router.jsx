import React from "react";
import { Routes, Route } from "react-router";
import Home from "../components/Home";
import RecipeForm from "../components/RecipeForm";
import Favorites from "../components/Favorites";
import Cart from "../components/Cart";
import RecipeList from "../components/RecipeList";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-item" element={<RecipeForm />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/recipes" element={<RecipeList />}>
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default Router;
