import {
  Heart,
  ShoppingCart,
  Star,
  SlidersHorizontal,
  Search,
  X,
  ChevronDown,
  Check,
} from "lucide-react";
import { useContext, useState } from "react";
import { MyStore } from "../Context/MyContext";
import ProductGrid from "./ProductGrid";

const Shop = ({ onProductClick, onAddToCart }) => {
  const { products, sort, category, handleChangeCat, handleChangeSort,setCategory,setSort } =
    useContext(MyStore);

  return (
    <section className="min-h-screen bg-gray-50">
      {/* ================= HEADER ================= */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            SKY MART SHOP
          </p>

          <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Shop All Products
              </h1>

              <p className="mt-2 text-gray-500">
                Discover products you'll love.
              </p>
            </div>

            <p className="text-sm text-gray-500">{products.length} Products</p>
          </div>
        </div>
      </div>

      {/* ================= SHOP CONTENT ================= */}
      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        {/* ================= FILTER BAR ================= */}
        <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-sm">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:bg-white"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              {/* Category */}
              <div className="relative">
                <select
                  onChange={handleChangeCat}
                  className="appearance-none rounded-xl border border-gray-200 bg-white py-3 pl-4 pr-10 text-sm font-medium text-gray-700 outline-none focus:border-indigo-500"
                >
                  <option>All Categories</option>
                  <option>Electronics</option>
                  <option>Fashion</option>
                  <option>Home</option>
                  <option>Gaming</option>
                </select>

                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  placeholder="Sort By"
                  onChange={handleChangeSort}
                  className="appearance-none rounded-xl border border-gray-200 bg-white py-3 pl-4 pr-10 text-sm font-medium text-gray-700 outline-none focus:border-indigo-500"
                >
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Top Rated</option>
                  <option>Most Popular</option>
                </select>

                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>
          </div>

          {(category !== "" || sort !== "") && (
            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-4">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                <SlidersHorizontal size={16} />
                Filters:
              </div>

              {category !== "" && (
                <button className="flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-600">
                  {category}
                  <div
                    onClick={() => {
                      setCategory("");
                    }}
                    className="cursor-pointer p-1 hover:bg-blue-300 rounded-full"
                  >
                    <X size={13} />
                  </div>
                </button>
              )}

              {sort !== "" && (
                <button className="flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-600">
                  {sort}
                  <div
                    onClick={() => {
                      setSort("");
                    }}
                    className="cursor-pointer p-1 hover:bg-blue-300 rounded-full"
                  >
                    <X size={13} />
                  </div>
                </button>
              )}

              <button
                onClick={() => {
                  setCategory("");
                  setSort("");
                }}
                className="ml-auto cursor-pointer  text-xs font-semibold text-red-500 hover:text-red-600"
              >
                Clear All
              </button>
            </div>
          )}
        </div>

        <div>
          <ProductGrid sort={sort} category={category} />
        </div>
      </div>
    </section>
  );
};

export default Shop;
