import {
  Truck,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Truck />,
      title: "Fast Delivery",
      text: "Quick and reliable delivery",
    },
    {
      icon: <ShieldCheck />,
      title: "Secure Payment",
      text: "100% secure checkout",
    },
    {
      icon: <RotateCcw />,
      title: "Easy Returns",
      text: "7 day easy return policy",
    },
  ];

  return (
    <section className="border-b border-gray-100 bg-gray-50">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 py-8 sm:grid-cols-3 lg:px-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex items-center gap-4 rounded-2xl bg-white p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
              {feature.icon}
            </div>

            <div>
              <h3 className="font-semibold">
                {feature.title}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {feature.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;