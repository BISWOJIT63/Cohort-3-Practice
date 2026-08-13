import {
  X,
  Heart,
  ShoppingCart,
  Star,
  Plus,
  Minus,
  Truck,
  ShieldCheck,
} from "lucide-react";

const ProductDetails = ({
  product,
  products,
  onClose,
  onAddToCart,
  onProductChange,
}) => {
  // Related products
  const relatedProducts = products
    ?.filter(
      (item) => item.category === product.category && item.id !== product.id,
    )
    .slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm">
      {/* Main Modal */}
      <div className="min-h-screen p-4 sm:p-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl">
          {/* ================= PRODUCT DETAILS ================= */}
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-gray-100"
            >
              <X size={20} />
            </button>

            <div className="grid lg:grid-cols-2">
              {/* ================= IMAGE ================= */}
              <div className="bg-gray-100">
                <div className="sticky top-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[600px]"
                  />
                </div>
              </div>

              {/* ================= PRODUCT INFO ================= */}
              <div className="p-6 sm:p-10">
                {/* Category */}
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  {product.category}
                </p>

                {/* Product Name */}
                <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Star
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span className="font-semibold">{product.rating}</span>
                  </div>

                  <span className="text-gray-300">|</span>

                  <span className="text-sm text-gray-500">
                    {product.reviews} Reviews
                  </span>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    In Stock
                  </span>
                </div>

                {/* Price */}
                <div className="mt-7 flex items-center gap-3">
                  <span className="text-3xl font-bold text-gray-900">
                    ₹{product.price.toLocaleString()}
                  </span>

                  <span className="text-lg text-gray-400 line-through">
                    ₹{product.oldPrice.toLocaleString()}
                  </span>

                  <span className="rounded-lg bg-red-100 px-2 py-1 text-xs font-bold text-red-600">
                    SALE
                  </span>
                </div>

                {/* Description */}
                <div className="mt-7">
                  <h3 className="font-semibold text-gray-900">Description</h3>

                  <p className="mt-3 leading-7 text-gray-500">
                    {product.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="my-7 h-px bg-gray-100" />

                {/* Quantity */}
                <div>
                  <p className="mb-3 text-sm font-semibold">Quantity</p>

                  <div className="flex w-fit items-center overflow-hidden rounded-xl border border-gray-200">
                    <button className="p-3 transition hover:bg-gray-100">
                      <Minus size={17} />
                    </button>

                    <span className="w-12 text-center font-semibold">1</span>

                    <button className="p-3 transition hover:bg-gray-100">
                      <Plus size={17} />
                    </button>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-7 flex gap-3">
                  <button
                    onClick={() => onAddToCart?.(product)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 py-4 font-semibold text-white transition hover:bg-indigo-700"
                  >
                    <ShoppingCart size={19} />
                    Add to Cart
                  </button>

                  <button className="flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500">
                    <Heart size={21} />
                  </button>
                </div>

                {/* Benefits */}
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4">
                    <Truck size={21} className="text-indigo-600" />

                    <div>
                      <p className="text-sm font-semibold">Free Delivery</p>

                      <p className="text-xs text-gray-500">
                        On orders above ₹999
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4">
                    <ShieldCheck size={21} className="text-indigo-600" />

                    <div>
                      <p className="text-sm font-semibold">Secure Payment</p>

                      <p className="text-xs text-gray-500">
                        100% secure checkout
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RELATED PRODUCTS ================= */}
          {relatedProducts?.length > 0 && (
            <div className="border-t border-gray-100 bg-gray-50 px-6 py-12 sm:px-10">
              {/* Heading */}
              <div className="mb-7">
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  YOU MAY ALSO LIKE
                </p>

                <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                  Related Products
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  More products from the {product.category} category.
                </p>
              </div>

              {/* Related Product Grid */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onProductChange?.(item)}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      <span className="absolute left-3 top-3 rounded-lg bg-red-500 px-2 py-1 text-xs font-bold text-white">
                        SALE
                      </span>

                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md hover:text-red-500"
                      >
                        <Heart size={17} />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <p className="text-xs font-medium text-indigo-600">
                        {item.category}
                      </p>

                      <h3 className="mt-1 truncate font-semibold text-gray-900">
                        {item.name}
                      </h3>

                      {/* Rating */}
                      <div className="mt-2 flex items-center gap-1">
                        <Star
                          size={14}
                          className="fill-yellow-400 text-yellow-400"
                        />

                        <span className="text-sm font-medium">
                          {item.rating}
                        </span>

                        <span className="text-xs text-gray-400">
                          ({item.reviews})
                        </span>
                      </div>

                      {/* Price */}
                      <div className="mt-3 flex items-center gap-2">
                        <span className="font-bold">
                          ₹{item.price.toLocaleString()}
                        </span>

                        <span className="text-sm text-gray-400 line-through">
                          ₹{item.oldPrice.toLocaleString()}
                        </span>
                      </div>

                      {/* View Product */}
                      <button
                        onClick={() => onProductChange?.(item)}
                        className="mt-4 w-full rounded-xl border border-gray-200 py-2.5 text-sm font-semibold transition hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                      >
                        View Product
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
