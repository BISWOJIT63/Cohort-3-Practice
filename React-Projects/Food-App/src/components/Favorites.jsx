import React, { useContext } from "react";
import { Heart, Clock, ShoppingCart, Plus, Minus } from "lucide-react";
import { MyStore } from "../context/MyStore";

const Favorites = () => {
  const {
    favorites,
    onRemoveFavorite,
    onAddToCart,
    cartItems,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(MyStore);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Heart size={25} className="text-red-500" fill="currentColor" />
              <h2 className="text-2xl font-bold text-gray-900">
                Favorite Items
              </h2>
            </div>

            <p className="mt-1 text-sm text-gray-500">
              Your favorite recipes in one place
            </p>
          </div>

          <div className="flex h-10 min-w-10 items-center justify-center rounded-full bg-red-50 px-3 text-red-500">
            <span className="font-bold">{favorites.length}</span>
          </div>
        </div>

        {/* Empty State */}
        {favorites.length === 0 ? (
          <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-gray-200 bg-white px-6 text-center shadow-sm">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
              <Heart size={38} className="text-red-400" fill="currentColor" />
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              No Favorite Items
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
              You haven't added any recipes to your favorites yet. Start
              exploring and save your favorite meals.
            </p>
          </div>
        ) : (
          /* Cards */
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {favorites.map((recipe) => {
              const cartItem = cartItems.find((item) => item.id === recipe.id);

              return (
                <div
                  key={recipe.id}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-gray-100">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Favorite */}
                    <button
                      onClick={() => onRemoveFavorite(recipe.id)}
                      className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-red-500 shadow-md transition hover:scale-105 hover:bg-red-50 active:scale-90"
                    >
                      <Heart size={19} fill="currentColor" />
                    </button>

                    {/* Price */}
                    <div className="absolute bottom-3 left-3 rounded-lg bg-white px-3 py-1.5 shadow-md">
                      <span className="font-bold text-orange-500">
                        ₹{recipe.price}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Name */}
                    <h3 className="truncate text-lg font-bold text-gray-900">
                      {recipe.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-1 line-clamp-2 min-h-[40px] text-sm leading-5 text-gray-500">
                      {recipe.description}
                    </p>

                    {/* Time */}
                    <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                      <Clock size={16} className="text-orange-500" />
                      <span>{recipe.time || 30} min</span>
                    </div>

                    {/* Cart Action */}
                    <div className="mt-4">
                      {cartItem ? (
                        <div className="flex h-11 items-center justify-between rounded-xl bg-orange-500 px-2 shadow-md shadow-orange-500/20">
                          <button
                            onClick={() => decreaseQuantity(recipe.id)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-orange-500 transition hover:bg-orange-50 active:scale-90"
                          >
                            <Minus size={17} strokeWidth={3} />
                          </button>

                          <span className="font-bold text-white">
                            {cartItem.quantity}
                          </span>

                          <button
                            onClick={() => increaseQuantity(recipe.id)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-orange-500 transition hover:bg-orange-50 active:scale-90"
                          >
                            <Plus size={17} strokeWidth={3} />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => onAddToCart(recipe)}
                          className="flex h-11 w-full items-center justify-center gap-2 rounded-xl border-2 border-orange-500 bg-white font-bold text-orange-500 transition-all hover:bg-orange-500 hover:text-white active:scale-95"
                        >
                          <ShoppingCart size={18} />
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
