import { ArrowRight, Utensils } from "lucide-react";
import { NavLink } from "react-router";

const Home = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-12 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Utensils size={18} />
                Delicious food, made simple
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                Your Favorite
                <span className="text-orange-500 block">
                  Food, One Click Away
                </span>
              </h1>

              <p className="mt-6 text-lg text-gray-600 max-w-lg leading-relaxed">
                Discover delicious recipes, explore your favorite meals, and add
                everything you love to your cart.
              </p>

              <NavLink
                to={"/recipes"}
                className="mt-8 inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-xl font-bold shadow-lg shadow-orange-500/30 transition-all active:scale-95"
              >
                Get Started
                <ArrowRight size={20} />
              </NavLink>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-orange-300 rounded-full blur-3xl opacity-30"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80"
                  alt="Delicious food"
                  className="w-full h-[450px] object-cover"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-4">
                <p className="text-sm text-gray-500">Today's Special</p>
                <p className="font-bold text-gray-900 mt-1">
                  🍛 Delicious Meals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
