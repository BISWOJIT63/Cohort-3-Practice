import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Categories from "./components/Categories";
import ProductGrid from "./components/ProductGrid";
import About from "./components/About";
import Footer from "./components/Footer";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Shop from "./components/Shop";

const App = () => {
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      category: "Electronics",
      price: 2499,
      oldPrice: 3999,
      rating: 4.8,
      reviews: 124,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      description:
        "Experience crystal-clear sound with premium wireless headphones.",
    },

    {
      id: 2,
      name: "Smart Watch Series 5",
      category: "Electronics",
      price: 3499,
      oldPrice: 4999,
      rating: 4.7,
      reviews: 89,
      image:
        "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=800&q=80",
      description: "Track your fitness, notifications and daily activities.",
    },

    {
      id: 3,
      name: "Minimal Sneakers",
      category: "Fashion",
      price: 1899,
      oldPrice: 2999,
      rating: 4.6,
      reviews: 76,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      description: "Comfortable everyday sneakers with a clean minimal style.",
    },

    {
      id: 4,
      name: "Classic Backpack",
      category: "Fashion",
      price: 1299,
      oldPrice: 1999,
      rating: 4.5,
      reviews: 65,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      description: "A stylish and durable backpack for everyday travel.",
    },

    {
      id: 5,
      name: "Gaming Keyboard",
      category: "Gaming",
      price: 2199,
      oldPrice: 2999,
      rating: 4.8,
      reviews: 113,
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      description: "Mechanical gaming keyboard with RGB lighting.",
    },

    {
      id: 6,
      name: "Modern Sunglasses",
      category: "Fashion",
      price: 899,
      oldPrice: 1499,
      rating: 4.4,
      reviews: 41,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
      description: "Modern sunglasses with UV protection.",
    },

    {
      id: 7,
      name: "Desk Lamp",
      category: "Home",
      price: 799,
      oldPrice: 1199,
      rating: 4.3,
      reviews: 38,
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      description: "Elegant modern desk lamp for your workspace.",
    },

    {
      id: 8,
      name: "Premium Camera",
      category: "Electronics",
      price: 42999,
      oldPrice: 49999,
      rating: 4.9,
      reviews: 52,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
      description: "Capture stunning photographs and videos.",
    },
  ];

  const [authPage, setAuthPage] = useState("login");

  return (
    <>
      <Navbar onLogin={() => setAuthPage("login")} />

      <main>
        <Hero />
        <Features />
        <About />
      </main>

      <Footer />

      
      {authPage === "login" && (
        <Login
          onClose={() => setAuthPage(null)}
          onSignup={() => setAuthPage("signup")}
        />
      )}

      {authPage === "signup" && (
        <Signup
          onClose={() => setAuthPage(null)}
          onLogin={() => setAuthPage("login")}
        />
      )}
    </>
  );
};

export default App;
