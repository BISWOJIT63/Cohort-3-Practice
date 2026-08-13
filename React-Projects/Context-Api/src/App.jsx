import React, { useContext } from "react";
import Products from "./components/Products ";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { CartContext } from "./context/CartContext";

const App = () => {
  const { cartOpen, onClose, onOpen } = useContext(CartContext);
  return (
    <>
      <Navbar />
      {cartOpen ? <Cart /> : <Products />}
    </>
  );
};

export default App;
