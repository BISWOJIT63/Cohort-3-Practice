import {
  ArrowRight,
  Search,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  ChevronRight,
} from "lucide-react";

const Hero = ({
  products = [],
  onSearch,
  onCategorySelect,
  onShopClick,
}) => {
  // New arrivals
  const newArrivals = products.slice(0, 4);

  // Top rated
  const topRated = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  const categories = [
    {
      name: "Electronics",
      icon: "💻",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Fashion",
      icon: "👕",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Gaming",
      icon: "🎮",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Home",
      icon: "🏠",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=700&q=80",
    },
  ];

  return (
    <main>

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="overflow-hidden bg-gray-950 text-white">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">

          {/* LEFT */}
          <div>

            <span className="inline-flex rounded-full bg-indigo-500/20 px-4 py-2 text-sm font-semibold text-indigo-300">
              ✨ New collection is here
            </span>

            <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Find things you'll
              <span className="text-indigo-400">
                {" "}love.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
              Discover quality products, exclusive deals and
              everything you need — all in one place.
            </p>

            {/* Search */}
            <div className="mt-8 flex max-w-xl items-center overflow-hidden rounded-xl bg-white p-1">

              <Search
                size={20}
                className="ml-3 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search products..."
                onChange={(e) =>
                  onSearch?.(e.target.value)
                }
                className="min-w-0 flex-1 px-3 py-3 text-gray-900 outline-none"
              />

              <button
                onClick={onShopClick}
                className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
              >
                Search
              </button>

            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap gap-4">

              <button
                onClick={onShopClick}
                className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold hover:bg-indigo-500"
              >
                Shop Now
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() =>
                  onCategorySelect?.("All")
                }
                className="rounded-xl border border-gray-700 px-6 py-3.5 font-semibold hover:bg-gray-900"
              >
                Explore Collection
              </button>

            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-8">

              <div>
                <p className="text-2xl font-bold">
                  10K+
                </p>
                <p className="text-sm text-gray-500">
                  Happy Customers
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">
                  500+
                </p>
                <p className="text-sm text-gray-500">
                  Products
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">
                  4.9/5
                </p>
                <p className="text-sm text-gray-500">
                  Rating
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <div className="absolute -inset-10 rounded-full bg-indigo-600/20 blur-3xl" />

            <img
              src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1000&q=80"
              alt="SkyMart shopping"
              className="relative h-[400px] w-full rounded-3xl object-cover shadow-2xl lg:h-[520px]"
            />

            {/* Floating Card */}
            <div className="absolute bottom-5 left-5 rounded-2xl bg-white p-4 text-gray-900 shadow-xl">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <Truck size={22} />
                </div>

                <div>
                  <p className="font-bold">
                    Free Delivery
                  </p>

                  <p className="text-xs text-gray-500">
                    Orders above ₹999
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FEATURES
      ===================================================== */}
      <section className="border-b border-gray-100 bg-gray-50">

        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-8 sm:grid-cols-3 lg:px-8">

          <Feature
            icon={<Truck />}
            title="Fast Delivery"
            text="Quick & reliable delivery"
          />

          <Feature
            icon={<ShieldCheck />}
            title="Secure Payment"
            text="100% secure checkout"
          />

          <Feature
            icon={<RotateCcw />}
            title="Easy Returns"
            text="7 day easy returns"
          />

        </div>

      </section>


      {/* =====================================================
          CATEGORIES
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">

        <div className="mb-8 flex items-end justify-between">

          <div>
            <p className="text-sm font-semibold text-indigo-600">
              EXPLORE
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Shop by Category
            </h2>

            <p className="mt-2 text-gray-500">
              Find exactly what you're looking for.
            </p>
          </div>

          <button
            onClick={onShopClick}
            className="hidden items-center gap-1 text-sm font-semibold text-indigo-600 sm:flex"
          >
            View all
            <ChevronRight size={17} />
          </button>

        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

          {categories.map((category) => (

            <button
              key={category.name}
              onClick={() =>
                onCategorySelect?.(category.name)
              }
              className="group relative h-52 overflow-hidden rounded-2xl text-left"
            >

              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-5 left-5 text-white">

                <p className="text-2xl">
                  {category.icon}
                </p>

                <h3 className="mt-2 text-lg font-bold">
                  {category.name}
                </h3>

                <p className="mt-1 text-xs text-gray-300">
                  Explore collection →
                </p>

              </div>

            </button>

          ))}

        </div>

      </section>


      {/* =====================================================
          NEW ARRIVALS
      ===================================================== */}
      <section className="bg-gray-50">

        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">

          <div className="mb-8 flex items-end justify-between">

            <div>
              <p className="text-sm font-semibold text-indigo-600">
                JUST DROPPED
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                New Arrivals
              </h2>

              <p className="mt-2 text-gray-500">
                Fresh products just added to SkyMart.
              </p>
            </div>

            <button
              onClick={onShopClick}
              className="hidden items-center gap-1 text-sm font-semibold text-indigo-600 sm:flex"
            >
              View all
              <ChevronRight size={17} />
            </button>

          </div>

          {/* LIST ONLY — NO PRODUCT CARDS */}
          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">

            {newArrivals.map((product) => (

              <div
                key={product.id}
                className="flex items-center gap-4 p-4 sm:p-5"
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-20 w-20 rounded-xl object-cover sm:h-24 sm:w-24"
                />

                <div className="min-w-0 flex-1">

                  <p className="text-xs font-semibold text-indigo-600">
                    {product.category}
                  </p>

                  <h3 className="mt-1 truncate font-semibold">
                    {product.name}
                  </h3>

                  <div className="mt-2 flex items-center gap-1">

                    <Star
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span className="text-sm">
                      {product.rating}
                    </span>

                  </div>

                </div>

                <div className="hidden text-right sm:block">

                  <p className="font-bold">
                    ₹{product.price.toLocaleString()}
                  </p>

                  <p className="text-sm text-gray-400 line-through">
                    ₹{product.oldPrice.toLocaleString()}
                  </p>

                </div>

                <button
                  onClick={onShopClick}
                  className="hidden rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold hover:border-indigo-600 hover:text-indigo-600 sm:block"
                >
                  View
                </button>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROMO BANNER
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl bg-indigo-600">

          <div className="relative z-10 px-7 py-14 sm:px-12">

            <p className="font-semibold text-indigo-200">
              LIMITED TIME OFFER
            </p>

            <h2 className="mt-3 max-w-xl text-3xl font-bold text-white sm:text-4xl">
              Upgrade your everyday.
              Save up to 40%.
            </h2>

            <p className="mt-4 max-w-lg text-indigo-100">
              Grab amazing deals across electronics,
              fashion, gaming and home essentials.
            </p>

            <button
              onClick={onShopClick}
              className="mt-7 flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-indigo-600 hover:bg-gray-100"
            >
              Shop Deals
              <ArrowRight size={18} />
            </button>

          </div>

          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10" />
          <div className="absolute -bottom-40 right-20 h-96 w-96 rounded-full bg-white/10" />

        </div>

      </section>


      {/* =====================================================
          TOP RATED
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">

        <div className="mb-8">

          <p className="text-sm font-semibold text-indigo-600">
            CUSTOMER FAVORITES
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Top Rated Products
          </h2>

          <p className="mt-2 text-gray-500">
            Loved and highly rated by our customers.
          </p>

        </div>

        {/* LIST ONLY */}
        <div className="grid gap-4 md:grid-cols-2">

          {topRated.map((product) => (

            <div
              key={product.id}
              className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-indigo-200 hover:shadow-md"
            >

              <img
                src={product.image}
                alt={product.name}
                className="h-20 w-20 rounded-xl object-cover"
              />

              <div className="min-w-0 flex-1">

                <p className="text-xs font-semibold text-indigo-600">
                  {product.category}
                </p>

                <h3 className="mt-1 truncate font-semibold">
                  {product.name}
                </h3>

                <div className="mt-2 flex items-center gap-1">

                  <Star
                    size={14}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="text-sm font-semibold">
                    {product.rating}
                  </span>

                  <span className="text-xs text-gray-400">
                    ({product.reviews})
                  </span>

                </div>

              </div>

              <div className="text-right">

                <p className="font-bold">
                  ₹{product.price.toLocaleString()}
                </p>

                <button
                  onClick={onShopClick}
                  className="mt-2 text-xs font-semibold text-indigo-600"
                >
                  View →
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          NEWSLETTER
      ===================================================== */}
      <section className="bg-gray-950">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 px-5 py-16 md:flex-row md:items-center lg:px-8">

          <div>

            <p className="text-sm font-semibold text-indigo-400">
              STAY UPDATED
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              Don't miss the next deal.
            </h2>

            <p className="mt-2 text-gray-500">
              Get new arrivals and exclusive offers in your inbox.
            </p>

          </div>

          <div className="flex w-full max-w-md overflow-hidden rounded-xl bg-white p-1">

            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 px-4 outline-none"
            />

            <button className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700">
              Subscribe
            </button>

          </div>

        </div>

      </section>

    </main>
  );
};


/* =========================================================
   FEATURE COMPONENT
========================================================= */

const Feature = ({ icon, title, text }) => {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white p-5">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
        {icon}
      </div>

      <div>

        <h3 className="font-semibold">
          {title}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {text}
        </p>

      </div>

    </div>
  );
};

export default Hero;