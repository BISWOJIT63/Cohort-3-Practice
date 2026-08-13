import {
  ShoppingCart,
  X,
  Plus,
  Minus,
  Trash2,
} from "lucide-react";

const Cart = ({ cartItems = [], onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/50">

      <div className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white">

        {/* Header */}
        <div className="flex items-center justify-between border-b p-5">
          <div>
            <h2 className="text-xl font-bold">
              Your Cart
            </h2>

            <p className="text-sm text-gray-500">
              {cartItems.length} products
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            <X />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5">

          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <ShoppingCart
                  size={32}
                  className="text-gray-400"
                />
              </div>

              <h3 className="mt-5 text-lg font-bold">
                Your cart is empty
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Add some products to get started.
              </p>

            </div>
          ) : (
            <div className="space-y-5">

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-xl object-cover"
                  />

                  <div className="flex-1">

                    <div className="flex justify-between">
                      <h3 className="font-semibold">
                        {item.name}
                      </h3>

                      <button>
                        <Trash2
                          size={17}
                          className="text-red-500"
                        />
                      </button>
                    </div>

                    <p className="mt-1 font-bold">
                      ₹{item.price}
                    </p>

                    <div className="mt-2 flex w-fit items-center rounded-lg border">
                      <button className="p-1.5">
                        <Minus size={14} />
                      </button>

                      <span className="px-3 text-sm">
                        {item.quantity}
                      </span>

                      <button className="p-1.5">
                        <Plus size={14} />
                      </button>
                    </div>

                  </div>
                </div>
              ))}

            </div>
          )}

        </div>

        {/* Checkout */}
        {cartItems.length > 0 && (
          <div className="border-t p-5">

            <div className="mb-4 flex justify-between">
              <span className="text-gray-500">
                Subtotal
              </span>

              <span className="text-xl font-bold">
                ₹0
              </span>
            </div>

            <button className="w-full rounded-xl bg-gray-950 py-4 font-semibold text-white hover:bg-indigo-600">
              Proceed to Checkout
            </button>

          </div>
        )}

      </div>
    </div>
  );
};

export default Cart;