import { Heart, ShoppingCart, Star } from "lucide-react";
import { useContext } from "react";
import { MyStore } from "../Context/MyContext";
import { Navigate, useNavigate } from 'react-router';

const ProductCard = ({ product, isInCart }) => {
  const {onAddToCart} = useContext(MyStore);
  const navigate = useNavigate() 
  return (
    <div  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div onClick={()=>navigate(`/details/${product.id}`)} className="relative overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-lg bg-red-500 px-2.5 py-1 text-xs font-bold text-white">
          SALE
        </span>

        <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md hover:text-red-500">
          <Heart size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs font-medium text-indigo-600">
          {product.category}
        </p>

        <h3 className="mt-1 truncate font-semibold">{product.name}</h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <Star size={15} className="fill-yellow-400 text-yellow-400" />

          <span className="text-sm font-medium">{product.rating}</span>

          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="mt-4">
          <span className="text-lg font-bold">₹{product.price}</span>

          <span className="ml-2 text-sm text-gray-400 line-through">
            ₹{product.oldPrice}
          </span>
        </div>

        {/* Add */}
        {isInCart ? (
          <div className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-green-50 py-3.5 text-sm font-semibold text-green-600">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs text-white">
              ✓
            </span>
            Added to Cart
          </div>
        ) : (
          <button onClick={()=>onAddToCart(product)} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-950 py-3 text-sm font-semibold text-white hover:bg-indigo-600">
            <ShoppingCart size={17} />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
