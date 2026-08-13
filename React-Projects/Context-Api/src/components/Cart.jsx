import { ShoppingBag, Trash2, Plus, Minus, X } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "./../context/CartContext";

const Cart = () => {
  const {
    total,
    cartItems,
    addToCart,
    onClose,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);
  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      {/* Cart */}
      <div className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
              <ShoppingBag size={19} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900">Your Cart</h2>

              <p className="text-sm text-gray-500">{cartItems.length} items</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-black"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <ShoppingBag size={32} className="text-gray-400" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                Your cart is empty
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Add some products to get started.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-b border-gray-100 pb-5"
                >
                  {/* Image */}
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-gray-100 p-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between gap-2">
                      <h3 className="line-clamp-2 text-sm font-semibold text-gray-900">
                        {item.title}
                      </h3>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="shrink-0 text-gray-400 transition hover:text-red-500"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>

                    <p className="mt-2 text-base font-bold text-gray-900">
                      ${item.price}
                    </p>

                    {/* Quantity */}
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center overflow-hidden rounded-lg border border-gray-200">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="flex h-8 w-8 items-center justify-center transition hover:bg-gray-100"
                        >
                          <Minus size={14} />
                        </button>

                        <span className="flex h-8 w-9 items-center justify-center border-x border-gray-200 text-sm font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="flex h-8 w-8 items-center justify-center transition hover:bg-gray-100"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <p className="text-sm font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 bg-white px-6 py-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-gray-500">Subtotal</span>

              <span className="text-2xl font-bold text-gray-900">
                ${total.toFixed(2)}
              </span>
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-4 font-semibold text-white transition hover:bg-gray-800 active:scale-[0.99]">
              <ShoppingBag size={18} />
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
