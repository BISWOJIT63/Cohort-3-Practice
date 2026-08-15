import {
  ShoppingCart,
  X,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  ShieldCheck,
  Tag,
} from "lucide-react";
import { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const Cart = () => {
  const {
    isOpen,
    setIsOpen,
    cartItems,
    decQuantity,
    incQuantity,
    onDeleteCartItem,
    handleOrder,
  } = useContext(MyStore);

  // Total quantity of all products
  const totalItems = cartItems.reduce((total, item) => total + item.quntity, 0);

  // Subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quntity,
    0,
  );

  // Original price
  const originalTotal = cartItems.reduce(
    (total, item) => total + (item.oldPrice || item.price) * item.quntity,
    0,
  );

  // Savings
  const savings = originalTotal - subtotal;

  if (!isOpen) return null;

  return (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute right-0 top-0 h-full w-full max-w-lg overflow-y-auto bg-gray-50 shadow-2xl"
      >
        <div className="sticky top-0 z-10 border-b border-gray-200 bg-white/95 px-6 py-5 backdrop-blur">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Cart Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-950 text-white shadow-lg">
                <ShoppingCart size={20} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>

                <p className="text-sm text-gray-500">
                  {totalItems === 0
                    ? "Your cart is empty"
                    : `${totalItems} ${totalItems === 1 ? "item" : "items"}`}
                </p>
              </div>
            </div>

            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200 hover:text-gray-900"
            >
              <X size={19} />
            </button>
          </div>
        </div>

        <div className="p-5">
          {cartItems.length === 0 ? (
            /* ================= EMPTY CART ================= */
            <div className="flex min-h-[650px] flex-col items-center justify-center px-6 text-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-indigo-100 blur-2xl" />

                <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-lg">
                  <ShoppingCart size={42} className="text-gray-300" />
                </div>
              </div>

              <h3 className="mt-7 text-2xl font-bold text-gray-900">
                Your cart is empty
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
                Looks like you haven't added anything yet. Explore our products
                and find something you love.
              </p>

              <button
                onClick={() => setIsOpen(false)}
                className="mt-7 flex items-center gap-2 rounded-xl bg-gray-950 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-indigo-600"
              >
                Start Shopping
                <ArrowRight size={17} />
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex gap-4">
                      <div className="relative shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-24 w-24 rounded-xl object-cover"
                        />

                        <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-gray-950 px-1.5 text-xs font-bold text-white shadow">
                          {item.quntity}
                        </span>
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <p className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                              {item.category}
                            </p>

                            <h3 className="mt-1 truncate text-base font-bold text-gray-900">
                              {item.name}
                            </h3>
                          </div>

                          <button
                            onClick={() => onDeleteCartItem(item.id)}
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>

                        <div className="mt-2 flex items-center gap-2">
                          <span className="font-bold text-gray-900">
                            ₹{item.price.toLocaleString()}
                          </span>

                          {item.oldPrice && (
                            <span className="text-xs text-gray-400 line-through">
                              ₹{item.oldPrice.toLocaleString()}
                            </span>
                          )}
                        </div>

                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                            <button
                              onClick={() => decQuantity(item.id)}
                              className="flex h-8 w-9 items-center justify-center text-gray-600 transition hover:bg-white hover:text-indigo-600"
                            >
                              <Minus size={14} />
                            </button>

                            <span className="flex h-8 min-w-9 items-center justify-center border-x border-gray-200 bg-white px-2 text-sm font-bold">
                              {item.quntity}
                            </span>

                            <button
                              onClick={() => incQuantity(item.id)}
                              className="flex h-8 w-9 items-center justify-center text-gray-600 transition hover:bg-white hover:text-indigo-600"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          <span className="text-sm font-bold text-gray-900">
                            ₹{(item.price * item.quntity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Order Summary
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      {totalItems} {totalItems === 1 ? "item" : "items"} in your
                      order
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Tag size={18} />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Subtotal</span>

                    <span className="font-semibold text-gray-900">
                      ₹{subtotal.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Delivery</span>

                    <span className="font-semibold text-green-600">FREE</span>
                  </div>

                  {savings > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">You save</span>

                      <span className="font-semibold text-green-600">
                        -₹{savings.toLocaleString()}
                      </span>
                    </div>
                  )}

                  <div className="mt-4 border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500">Total Amount</p>

                        <p className="mt-1 text-2xl font-black text-gray-950">
                          ₹{subtotal.toLocaleString()}
                        </p>
                      </div>

                      <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-600">
                        Best Price
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleOrder}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-950 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-indigo-600 hover:shadow-indigo-200"
                >
                  Proceed to Checkout
                  <ArrowRight size={18} />
                </button>

                {/* Security */}
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
                  <ShieldCheck size={14} />
                  Secure & encrypted checkout
                </div>
              </div>

              <div className="h-8" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
