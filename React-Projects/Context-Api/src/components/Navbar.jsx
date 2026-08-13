import { ShoppingCart, Search, User } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartCount, onOpen } = useContext(CartContext);

  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
      {" "}
      {/* Logo */}
      <div className="text-2xl font-bold text-black">Shoply</div>
      {/* Navigation */}
      <div className="hidden items-center gap-8 md:flex">
        <a href="#" className="text-sm font-medium text-gray-900">
          Home
        </a>

        <a
          href="#"
          className="text-sm font-medium text-gray-500 transition hover:text-black"
        >
          Products
        </a>

        <a
          href="#"
          className="text-sm font-medium text-gray-500 transition hover:text-black"
        >
          Categories
        </a>
      </div>
      {/* Actions */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 transition hover:bg-gray-100">
          <Search size={19} />
        </button>

        {/* User */}
        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 transition hover:bg-gray-100">
          <User size={19} />
        </button>

        {/* Cart */}
        <button
          onClick={onOpen}
          className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white transition hover:bg-gray-800"
        >
          <ShoppingCart size={19} />

          {cartCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
