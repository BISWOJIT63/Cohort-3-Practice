import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <section id="shop" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">

        <div className="mb-10">
          <p className="font-semibold text-indigo-600">
            OUR PRODUCTS
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Trending Products
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductGrid;