import {
  ShoppingCart,
  Clock,
  Plus,
  PlusIcon,
  Minus,
  Heart,
} from "lucide-react";
import { useContext } from "react";
import { MyStore } from "../context/MyStore";

const RecipeCard = ({ recipe, isInCart, isInFavorite }) => {
  const { onAddToCart, increaseQuantity, decreaseQuantity, onAddToFavorite } =
    useContext(MyStore);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition">
      <div className="h-48 bg-gray-100 overflow-hidden relative">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />

        {/* Favorite Button */}
        {isInFavorite ? (
          <button
            onClick={() => onAddToFavorite(recipe)}
            className="absolute top-3 right-3 h-9 w-9 flex items-center justify-center rounded-full bg-white/90 text-gray-500 shadow-md hover:text-red-500 hover:bg-white transition active:scale-90"
          >
            <Heart size={20} color="#ff0000" fill="#FF6900" />
          </button>
        ) : (
          <button
            onClick={() => onAddToFavorite(recipe)}
            className="absolute top-3 right-3 h-9 w-9 flex items-center justify-center rounded-full bg-white/90 text-gray-500 shadow-md hover:text-red-500 hover:bg-white transition active:scale-90"
          >
            <Heart size={20} />
          </button>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-bold text-lg text-gray-900">{recipe.name}</h3>

            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
              {recipe.description}
            </p>
          </div>

          <span className="text-orange-500 font-bold whitespace-nowrap">
            ₹{recipe.price}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-500 text-sm mt-4">
          <Clock size={16} />
          <span>{recipe.time || "30"} min</span>
        </div>

        <div className="flex justify-end mt-4">
          {isInCart ? (
            <div className="flex items-center gap-1 rounded-xl bg-orange-500 p-1 shadow-lg shadow-orange-500/20">
              <button
                onClick={() => decreaseQuantity(recipe.id)}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-orange-500 transition hover:bg-orange-50 active:scale-90"
              >
                <Minus size={16} strokeWidth={3} />
              </button>

              <span className="w-8 text-center text-sm font-bold text-white">
                {isInCart.quantity}
              </span>

              <button
                onClick={() => increaseQuantity(recipe.id)}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-orange-500 transition hover:bg-orange-50 active:scale-90"
              >
                <PlusIcon size={16} strokeWidth={3} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => onAddToCart(recipe)}
              className="rounded-xl border-2 border-orange-500 bg-white px-6 py-2 text-sm font-bold tracking-wide text-orange-500 transition-all hover:bg-orange-500 hover:text-white active:scale-95"
            >
              ADD
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
