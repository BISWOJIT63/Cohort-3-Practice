import { useContext } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

import Router from "./Routes/Router";
import { MyStore } from "./Context/MyContext";
import { Check } from "lucide-react";

const App = () => {
  const { isOpen, showConfirmation, orderSuccess } = useContext(MyStore);
  return (
    <>
      <Navbar />

      <main className="relative">
        <Router />

        {isOpen && <Cart />}
      </main>
      {showConfirmation && (
        <div className="fixed left-1/2 top-5 z-[9999] flex -translate-x-1/2 animate-[notification_3s_ease-in-out] items-center gap-3 rounded-xl bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-xl">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-green-500">
            <Check size={18} />
          </span>
          Added to Cart
        </div>
      )}

      {orderSuccess && (
        <div className="fixed  left-1/2 top-5 z-[9999] flex -translate-x-1/2 animate-[notification_3s_ease-in-out] items-center gap-3 rounded-xl bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-xl">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-green-500">
            <Check size={18} />
          </span>
          Order placed successfully!
        </div>
      )}
      <Footer />
    </>
  );
};

export default App;
