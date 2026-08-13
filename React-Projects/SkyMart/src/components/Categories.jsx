import { ChevronRight } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      name: "Electronics",
      icon: "💻",
    },
    {
      name: "Fashion",
      icon: "👕",
    },
    {
      name: "Gaming",
      icon: "🎮",
    },
    {
      name: "Home",
      icon: "🏠",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="mb-8">
        <p className="font-semibold text-indigo-600">
          EXPLORE
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {categories.map((category) => (
          <button
            key={category.name}
            className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 text-left transition hover:border-indigo-400 hover:shadow-md"
          >
            <div>
              <p className="text-3xl">
                {category.icon}
              </p>

              <p className="mt-3 font-semibold">
                {category.name}
              </p>
            </div>

            <ChevronRight size={20} />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;