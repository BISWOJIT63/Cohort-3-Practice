import { Heart, ShoppingCart, Star, SlidersHorizontal } from "lucide-react";

const Shop = ({
  products = [],
  selectedCategory = "All",
  onProductClick,
  onAddToCart,
}) => {
  return (
    <section className="min-h-screen bg-gray-50">
      {/* ================= SHOP HEADER ================= */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            SKY MART SHOP
          </p>

          <div className="mt-3 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {selectedCategory === "All" ? "All Products" : selectedCategory}
              </h1>

              <p className="mt-2 text-gray-500">
                Discover products you'll love.
              </p>
            </div>

            {/* Product Count */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <SlidersHorizontal size={17} />
              <span>{products.length} Products</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PRODUCTS ================= */}
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        {products.length === 0 ? (
          /* Empty State */
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl bg-white text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <ShoppingCart size={30} className="text-gray-400" />
            </div>

            <h2 className="mt-5 text-xl font-bold text-gray-900">
              No products found
            </h2>

            <p className="mt-2 max-w-sm text-sm text-gray-500">
              There are no products available in this category right now.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* ================= IMAGE ================= */}
                <div
                  onClick={() => onProductClick?.(product)}
                  className="relative cursor-pointer overflow-hidden bg-gray-100"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Sale */}
                  <span className="absolute left-3 top-3 rounded-lg bg-red-500 px-2.5 py-1 text-xs font-bold text-white">
                    SALE
                  </span>

                  {/* Wishlist */}
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition hover:text-red-500"
                  >
                    <Heart size={18} />
                  </button>
                </div>

                {/* ================= CONTENT ================= */}
                <div className="p-5">
                  {/* Category */}
                  <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                    {product.category}
                  </p>

                  {/* Name */}
                  <h2
                    onClick={() => onProductClick?.(product)}
                    className="mt-1 cursor-pointer truncate text-lg font-semibold text-gray-900 hover:text-indigo-600"
                  >
                    {product.name}
                  </h2>

                  {/* Rating */}
                  <div className="mt-2 flex items-center gap-1">
                    <Star
                      size={15}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span className="text-sm font-semibold">
                      {product.rating}
                    </span>

                    <span className="text-xs text-gray-400">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-900">
                      ₹{product.price.toLocaleString()}
                    </span>

                    <span className="text-sm text-gray-400 line-through">
                      ₹{product.oldPrice.toLocaleString()}
                    </span>
                  </div>

                  {/* Add Cart */}
                  <button
                    onClick={() => onAddToCart?.(product)}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-950 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-600"
                  >
                    <ShoppingCart size={17} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Shop;
 