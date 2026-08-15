import { ShoppingCart, Menu, LogOut, Percent } from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router";
import { MyStore } from "../Context/MyContext";

const Navbar = () => {
  const { setIsOpen, onLogout, curUser,cartCount } = useContext(MyStore);

  return (
    <nav className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-xl font-bold text-white">
            <Percent />
          </div>

          <div>
            <h1 className="text-xl font-bold">
              Sky<span className="text-indigo-600">Mart</span>
            </h1>

            <p className="hidden text-[10px] text-gray-400 sm:block">
              SHOP SMART. LIVE BETTER.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink
            to="/"
            style={(e) => {
              return {
                color: e.isActive ? "blue" : "",
              };
            }}
            className="font-medium text-gray-600  hover:text-indigo-600"
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            style={(e) => {
              return {
                color: e.isActive ? "blue" : "",
              };
            }}
            className="font-medium text-gray-600  hover:text-indigo-600"
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            style={(e) => {
              return {
                color: e.isActive ? "blue" : "",
              };
            }}
            className="font-medium text-gray-600 hover:text-indigo-600"
          >
            About
          </NavLink>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* User */}
          {curUser && (
            <div className="flex h-10 max-w-48 items-center gap-2 rounded-xl border border-gray-200 bg-white px-2 shadow-sm">
              {/* First Letter */}
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-400 text-sm font-semibold text-black">
                {curUser.name?.charAt(0).toUpperCase()}
              </div>

              {/* Name */}
              <span className="truncate text-sm font-medium text-gray-700">
                {curUser.name}
              </span>
            </div>
          )}

          {/* Cart */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white hover:bg-gray-50"
          >
            <ShoppingCart size={21} />

            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1 text-xs text-white">
              {cartCount}
            </span>
          </button>

          {/* Logout */}
          <button
            onClick={onLogout}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white hover:bg-gray-50"
          >
            <LogOut size={20} />
          </button>

          {/* Mobile Menu */}
          <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white hover:bg-gray-50 md:hidden">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
