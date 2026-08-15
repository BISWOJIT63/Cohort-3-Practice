import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { MyStore } from "../Context/MyContext";

const ProductGrid = () => {
  const {
    products,
    cartItems,
    sort,
    category,
    handleChangeCat,
    handleChangeSort,
    filterProducts,
  } = useContext(MyStore);

  return (
    <section id="shop" className="bg-gray-50">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filterProducts.map((product) => {
          const isInCart = cartItems.find((i) => i.id === product.id);
          return (
            <ProductCard
              isInCart={isInCart}
              key={product.id}
              product={product}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductGrid;
