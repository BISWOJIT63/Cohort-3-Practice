import { Mail, MapPin, Percent, Phone } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white">
                <Percent />
              </div>

              <h2 className="text-xl font-bold text-white">
                Sky<span className="text-indigo-500">Mart</span>
              </h2>
            </div>

            <p className="mt-5 text-sm leading-6">
              Your trusted destination for quality products, great prices and a
              better shopping experience.
            </p>

            <div className="mt-5 flex gap-3">
              {/* Facebook */}
              <button
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-sm font-bold text-white transition hover:bg-indigo-600"
                title="Facebook"
              >
                f
              </button>

              {/* X / Twitter */}
              <button
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-sm font-bold text-white transition hover:bg-indigo-600"
                title="X"
              >
                𝕏
              </button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-white">Shop</h3>

            <div className="mt-5 space-y-3 text-sm">
              <p>All Products</p>
              <p>Electronics</p>
              <p>Fashion</p>
              <p>Gaming</p>
              <p>Home</p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white">Company</h3>

            <div className="mt-5 space-y-3 text-sm">
              <p>About Us</p>
              <p>Contact</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white">Contact</h3>

            <div className="mt-5 space-y-4 text-sm">
              <p className="flex gap-3">
                <MapPin size={18} />
                Bhubaneswar, Odisha, India
              </p>

              <p className="flex gap-3">
                <Phone size={18} />
                +91 98765 43210
              </p>

              <p className="flex gap-3">
                <Mail size={18} />
                hello@skymart.com
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-7 text-center text-sm">
          © 2026 SkyMart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
