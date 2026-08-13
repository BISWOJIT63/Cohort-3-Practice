import { ShoppingCart, Star, Heart, Search, ChevronDown } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const Products = () => {
    const { products, addToCart } = useContext(CartContext);

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Header */}
      <div className="mx-auto mb-8 max-w-7xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-500">
              Our Store
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Explore Products
            </h1>

            <p className="mt-2 text-gray-500">Find something you'll love.</p>
          </div>

          {/* Search + Filter */}
          <div className="flex gap-3">
            <div className="flex items-center rounded-xl border border-gray-200 bg-white px-4">
              <Search size={18} className="text-gray-400" />

              <input
                type="text"
                placeholder="Search products..."
                className="w-40 bg-transparent px-3 py-3 text-sm outline-none md:w-56"
              />
            </div>

            <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium">
              All Products
              <ChevronDown size={17} />
            </button>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Product Image */}
            <div className="relative flex h-64 items-center justify-center bg-gray-50 p-6">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
              />

              {/* Wishlist */}
              <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition hover:bg-black hover:text-white">
                <Heart size={18} />
              </button>

              {/* Category */}
              <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-medium capitalize text-white">
                {product.category}
              </span>
            </div>

            {/* Product Content */}
            <div className="p-5">
              {/* Rating */}
              <div className="mb-2 flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star
                    size={16}
                    fill="currentColor"
                    className="text-yellow-400"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {product.rating.rate}
                  </span>
                </div>

                <span className="text-sm text-gray-400">
                  ({product.rating.count})
                </span>
              </div>

              {/* Title */}
              <h2 className="line-clamp-2 min-h-[48px] text-lg font-semibold leading-6 text-gray-900">
                {product.title}
              </h2>

              {/* Description */}
              <p className="mt-2 line-clamp-2 text-sm leading-5 text-gray-500">
                {product.description}
              </p>

              {/* Bottom */}
              <div className="mt-5 flex items-center justify-between gap-3">
                <p className="text-2xl font-bold text-gray-900">
                  ${product.price}
                </p>

                <button
                  onClick={() => {
                    addToCart(product);
                  }}
                  className="flex items-center gap-2 rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-95"
                >
                  <ShoppingCart size={17} />
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
