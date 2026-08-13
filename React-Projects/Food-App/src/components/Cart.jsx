import {
  ShoppingCart,
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
} from "lucide-react";
import { useContext } from "react";
import { MyStore } from "../context/MyStore";
import { useNavigate } from "react-router";

const Cart = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    total,
    onClose,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(MyStore);
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => navigate("/recipes")}
        className="fixed inset-0 bg-black/40 z-40"
      />

      {/* Cart */}
      <aside className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="h-16 px-5 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart size={21} />

            <h2 className="font-bold text-lg">Your Cart</h2>

            <span className="text-sm text-gray-500">({cartItems.length})</span>
          </div>

          <button
            onClick={() => navigate("/recipes")}
            className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
                <ShoppingBag size={28} />
              </div>

              <h3 className="font-bold text-lg mt-4">Your cart is empty</h3>

              <p className="text-gray-500 text-sm mt-1">
                Add some delicious recipes.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-xl p-3"
                >
                  <div className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-2">
                        <h3 className="font-semibold truncate">{item.name}</h3>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>

                      <p className="text-orange-500 font-semibold mt-1">
                        ₹{item.price}
                      </p>

                      {/* Quantity */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-gray-200 rounded-lg">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100"
                          >
                            <Minus size={14} />
                          </button>

                          <span className="w-8 text-center text-sm font-semibold">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <span className="font-bold">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-5">
            <div className="flex justify-between mb-4">
              <span className="text-gray-500">Total</span>

              <span className="text-xl font-bold">₹{total}</span>
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition">
              Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default Cart;
