const About = () => {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-5 py-20 lg:px-8"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2">

        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80"
          alt="Sky Mart"
          className="h-[400px] w-full rounded-3xl object-cover"
        />

        <div>
          <p className="font-semibold text-indigo-600">
            ABOUT SKY MART
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Shopping made simple,
            fast and enjoyable.
          </h2>

          <p className="mt-5 leading-7 text-gray-500">
            Sky Mart is designed to make online shopping
            easier. From electronics and fashion to home
            essentials, discover products selected for
            quality, value and style.
          </p>

          <div className="mt-8 space-y-5">
            <p>✓ Quality products at competitive prices</p>
            <p>✓ Secure and convenient shopping</p>
            <p>✓ Fast delivery across India</p>
          </div>

          <button className="mt-8 rounded-xl bg-gray-950 px-6 py-3 font-semibold text-white hover:bg-gray-800">
            Discover Sky Mart
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;