import { ChefHat, ShoppingCart, Search, Heart, Plus, Home } from "lucide-react";
import { useContext } from "react";
import { MyStore } from "../context/MyStore";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const { cartCount, onCartClick } = useContext(MyStore);
  const navigate = useNavigate();
  return (
    <nav className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-40">
      <NavLink to={"/"} className="flex items-center gap-2">
        <div className="w-10 h-10 bg-orange-500 text-white rounded-xl flex items-center justify-center">
          <ChefHat size={22} />
        </div>

        <h1 className="text-xl font-bold text-gray-900">
          Garam<span className="text-orange-500">खाना</span>
        </h1>
      </NavLink>

      <div className="hidden lg:flex items-center gap-2">
        <div className="flex items-center w-72 bg-gray-100 rounded-xl px-4 py-2.5">
          <Search size={19} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search recipes..."
            className="w-full bg-transparent outline-none px-3 text-sm text-gray-700"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <NavLink
          to={"/create-item"}
          className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
        >
          <Plus size={18} />
          <span>Create Item</span>
        </NavLink>
        <NavLink
          to={"/recipes"}
          className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
        >
          <span>All Recipes</span>
        </NavLink>
        <NavLink
          to={"/favorites"}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:text-red-500 hover:border-red-200 transition"
        >
          <Heart size={19} />
          <span className="hidden sm:block">Favorites</span>
        </NavLink>

        <button
          onClick={() => navigate("/recipes/cart")}
          className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition"
        >
          <ShoppingCart size={19} />
          <span className="hidden sm:block">Cart</span>

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
