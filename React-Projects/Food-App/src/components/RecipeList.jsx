import { Search } from "lucide-react";
import RecipeCard from "./RecipeCard";
import { useContext } from "react";
import { MyStore } from "../context/MyStore";
import { Outlet } from "react-router";

const RecipeList = () => {
  const {
    items,
    onAddToCart,
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    favorites,
  } = useContext(MyStore);
  return (
    <>
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">All Recipes</h2>

            <p className="text-sm text-gray-500">Explore delicious recipes</p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />

            <input
              type="text"
              placeholder="Search recipes..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl outline-none focus:border-orange-500"
            />
          </div>
        </div>

        {items.length === 0 ? (
          <div className="bg-white border border-dashed border-gray-300 rounded-2xl p-10 text-center">
            <p className="text-gray-500">No recipes available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {items.map((recipe) => {
              const isInCart = cartItems.find((el) => el.id === recipe.id);
              const isInFavorite = favorites.find((el) => el.id === recipe.id);

              return (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onAddToCart={onAddToCart}
                  isInCart={isInCart}
                  isInFavorite={isInFavorite}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                />
              );
            })}
          </div>
        )}
      </section>
      <Outlet />
    </>
  );
};

export default RecipeList;
