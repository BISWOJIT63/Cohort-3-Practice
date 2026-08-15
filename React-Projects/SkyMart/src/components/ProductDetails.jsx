import {
  ArrowLeft,
  Heart,
  ShoppingCart,
  Star,
  Plus,
  Minus,
  Truck,
  ShieldCheck,
  RotateCcw,
  BadgeCheck,
} from "lucide-react";
import { useState, useContext } from "react";
import { MyStore } from "../Context/MyContext";
import { useNavigate, useParams } from "react-router";

const ProductDetails = ({ sort, category }) => {
  const { products, onAddToCart, cartItems, decQuantity, incQuantity } =
    useContext(MyStore);
  const navigate = useNavigate();
  const curItem = useParams();
  const curItemId = JSON.parse(curItem.id);
  const cartItem = cartItems.find((i) => i.id === curItemId);
  const product = products.find((p) => p.id === curItemId);

  const relatedProducts = products
    ?.filter(
      (item) => item.category === product.category && item.id !== product.id,
    )
    .slice(0, 4);

  return (
    <div className="overflow-y-auto bg-gray-50">
      <div className="mx-auto max-w-7xl px-5 py-4 lg:px-8">
        <button
          onClick={() => {}}
          className="group flex max-w-full items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-indigo-600"
        >
          <ArrowLeft
            size={18}
            className="shrink-0 transition group-hover:-translate-x-1"
          />

          <span className="shrink-0">Products</span>

          <span className="text-gray-300">/</span>

          <span className="shrink-0 text-gray-500">{product.category}</span>

          <span className="text-gray-300">/</span>

          <span className="truncate text-gray-900">{product.name}</span>
        </button>
      </div>

      <main className="mx-auto max-w-7xl px-5 py-4 lg:px-8 lg:py-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="h-[450px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[550px] lg:h-[650px]"
              />

              {/* Sale Badge */}
              <div className="absolute left-5 top-5 rounded-xl bg-red-500 px-4 py-2 text-xs font-black text-white shadow-lg">
                SALE
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            {/* Category */}
            <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              {product.category}
            </p>

            {/* Product Name */}
            <h1 className="mt-3 text-3xl font-black leading-tight text-gray-950 sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 rounded-lg bg-yellow-50 px-3 py-2">
                <Star size={17} className="fill-yellow-400 text-yellow-400" />

                <span className="font-bold text-gray-900">
                  {product.rating}
                </span>
              </div>

              <span className="text-gray-300">•</span>

              <span className="text-sm text-gray-500">
                {product.reviews} customer reviews
              </span>

              <span className="flex items-center gap-1 rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-600">
                <BadgeCheck size={14} />
                In Stock
              </span>
            </div>

            {/* Price */}
            <div className="mt-8 rounded-2xl bg-gray-50 p-5">
              <div className="flex flex-wrap items-end gap-3">
                <span className="text-4xl font-black text-gray-950">
                  ₹{product.price.toLocaleString()}
                </span>

                <span className="mb-1 text-lg text-gray-400 line-through">
                  ₹{product.oldPrice.toLocaleString()}
                </span>

                <span className="mb-1 rounded-lg bg-red-100 px-2.5 py-1 text-xs font-black text-red-600">
                  SALE
                </span>
              </div>

              <p className="mt-2 text-xs text-green-600">
                Limited-time offer available
              </p>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-900">
                About this product
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                {product.description}
              </p>
            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-gray-100" />
            {cartItem ? (
              <div className="mt-7">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-gray-900">Quantity</p>

                  <p className="text-xs text-green-600">
                    {cartItem.quntity} item
                    {cartItem.quntity > 1 ? "s" : ""} in cart
                  </p>
                </div>

                <div className="mt-3 flex items-center gap-3">
                  {/* Quantity */}
                  <div className="flex w-fit items-center overflow-hidden rounded-xl border border-gray-200 bg-white">
                    <button
                      onClick={() => decQuantity(curItemId)}
                      className="flex h-12 w-12 items-center justify-center transition hover:bg-gray-100"
                    >
                      <Minus size={17} />
                    </button>

                    <span className="flex h-12 w-14 items-center justify-center border-x border-gray-200 font-bold">
                      {cartItem.quntity}
                    </span>

                    <button
                      onClick={() => incQuantity(curItemId)}
                      className="flex h-12 w-12 items-center justify-center transition hover:bg-gray-100"
                    >
                      <Plus size={17} />
                    </button>
                  </div>

                  {/* Added to Cart */}
                  <div className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-50 py-3.5 text-sm font-semibold text-green-600">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs text-white">
                      ✓
                    </span>
                    Added to Cart
                  </div>

                  {/* Wishlist */}
                  <button className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gray-200 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500">
                    <Heart size={21} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-7 flex gap-3">
                {/* Add to Cart */}
                <button
                  onClick={() => onAddToCart(product)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gray-950 py-4 font-bold text-white shadow-lg transition hover:bg-indigo-600"
                >
                  <ShoppingCart size={19} />
                  Add to Cart
                </button>

                {/* Wishlist */}
                <button className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gray-200 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500">
                  <Heart size={21} />
                </button>
              </div>
            )}
            {/* Benefits */}
            <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <Truck size={21} className="text-indigo-600" />

                <p className="mt-3 text-sm font-bold">Free Delivery</p>

                <p className="mt-1 text-xs text-gray-500">
                  On orders above ₹999
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <ShieldCheck size={21} className="text-indigo-600" />

                <p className="mt-3 text-sm font-bold">Secure Payment</p>

                <p className="mt-1 text-xs text-gray-500">100% protected</p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <RotateCcw size={21} className="text-indigo-600" />

                <p className="mt-3 text-sm font-bold">Easy Returns</p>

                <p className="mt-1 text-xs text-gray-500">
                  Hassle-free returns
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RELATED PRODUCTS ================= */}
        {relatedProducts?.length > 0 && (
          <section className="mt-14 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            {/* Heading */}
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                YOU MAY ALSO LIKE
              </p>

              <h2 className="mt-2 text-2xl font-black text-gray-950 sm:text-3xl">
                Related Products
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                More products from the {product.category} category.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((item) => (
                <div
                  key={item.id}
                  onClick={() => navigate(`/details/${item.id}`)}
                  className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-3 top-3 rounded-lg bg-red-500 px-2.5 py-1 text-xs font-bold text-white">
                      SALE
                    </span>

                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition hover:text-red-500"
                    >
                      <Heart size={17} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                      {item.category}
                    </p>

                    <h3 className="mt-1 truncate font-bold text-gray-900">
                      {item.name}
                    </h3>

                    {/* Rating */}
                    <div className="mt-2 flex items-center gap-1">
                      <Star
                        size={14}
                        className="fill-yellow-400 text-yellow-400"
                      />

                      <span className="text-sm font-semibold">
                        {item.rating}
                      </span>

                      <span className="text-xs text-gray-400">
                        ({item.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900">
                        ₹{item.price.toLocaleString()}
                      </span>

                      <span className="text-sm text-gray-400 line-through">
                        ₹{item.oldPrice.toLocaleString()}
                      </span>
                    </div>

                    {/* View */}
                    <button
                      onClick={() => navigate(`/details/${item.id}`)}
                      className="mt-4 flex w-full items-center justify-center rounded-xl border border-gray-200 py-3 text-sm font-bold transition hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                    >
                      View Product
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="h-10" />
      </main>
    </div>
  );
};

export default ProductDetails;
