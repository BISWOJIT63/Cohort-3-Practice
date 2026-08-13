import { Search, ShoppingCart, User, Menu, X, LogOut } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-xl font-bold text-white">
            S
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
          <a href="#home" className="font-medium text-indigo-600">
            Home
          </a>

          <a
            href="#shop"
            className="font-medium text-gray-600 hover:text-indigo-600"
          >
            Shop
          </a>

          <a
            href="#about"
            className="font-medium text-gray-600 hover:text-indigo-600"
          >
            About
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="hidden h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 sm:flex">
            <Search size={20} />
          </button>

          <button className="hidden h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 sm:flex">
            <User size={20} />
          </button>

          <button className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100">
            <ShoppingCart size={21} />

            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1 text-xs text-white">
              0
            </span>
          </button>
          <button className="hidden h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 sm:flex">
            <LogOut size={20} />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 md:hidden">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
