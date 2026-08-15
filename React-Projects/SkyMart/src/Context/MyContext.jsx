import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const MyStore = createContext();
const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    category: "Electronics",
    price: 2499,
    oldPrice: 3999,
    rating: 4.8,
    reviews: 124,
    newArrival: true,
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
    newArrival: true,
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
    newArrival: false,
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
    newArrival: true,
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
    newArrival: false,
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
    newArrival: true,
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
    newArrival: false,
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
    newArrival: true,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    description: "Capture stunning photographs and videos.",
  },

  {
    id: 9,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 1599,
    oldPrice: 2499,
    rating: 4.6,
    reviews: 97,
    newArrival: true,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
    description:
      "Portable Bluetooth speaker with powerful bass and clear audio.",
  },
  {
    id: 10,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 699,
    oldPrice: 999,
    rating: 4.5,
    reviews: 145,
    newArrival: false,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
    description:
      "Ergonomic wireless mouse designed for comfortable everyday use.",
  },
  {
    id: 11,
    name: "Mechanical Mouse",
    category: "Gaming",
    price: 1299,
    oldPrice: 1799,
    rating: 4.7,
    reviews: 84,
    newArrival: true,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
    description: "High precision gaming mouse with adjustable sensitivity.",
  },
  {
    id: 12,
    name: "Gaming Headset",
    category: "Gaming",
    price: 1899,
    oldPrice: 2799,
    rating: 4.8,
    reviews: 126,
    newArrival: true,
    image:
      "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=800&q=80",
    description: "Immersive gaming headset with surround sound and microphone.",
  },
  {
    id: 13,
    name: "Gaming Monitor",
    category: "Gaming",
    price: 12999,
    oldPrice: 15999,
    rating: 4.8,
    reviews: 72,
    newArrival: false,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    description: "High refresh-rate gaming monitor for smooth gameplay.",
  },
  {
    id: 14,
    name: "Smartphone Pro",
    category: "Electronics",
    price: 28999,
    oldPrice: 32999,
    rating: 4.7,
    reviews: 218,
    newArrival: true,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    description:
      "Powerful smartphone with a stunning display and advanced camera.",
  },
  {
    id: 15,
    name: "Tablet 10 Inch",
    category: "Electronics",
    price: 15999,
    oldPrice: 18999,
    rating: 4.6,
    reviews: 94,
    newArrival: false,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    description: "Slim and powerful tablet for entertainment and productivity.",
  },
  {
    id: 16,
    name: "Running Shoes",
    category: "Fashion",
    price: 2299,
    oldPrice: 3499,
    rating: 4.6,
    reviews: 108,
    newArrival: true,
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=800&q=80",
    description: "Lightweight running shoes designed for everyday comfort.",
  },
  {
    id: 17,
    name: "Leather Wallet",
    category: "Fashion",
    price: 599,
    oldPrice: 999,
    rating: 4.4,
    reviews: 63,
    newArrival: false,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    description: "Premium leather wallet with multiple card slots.",
  },
  {
    id: 18,
    name: "Casual Denim Jacket",
    category: "Fashion",
    price: 1799,
    oldPrice: 2499,
    rating: 4.5,
    reviews: 57,
    newArrival: true,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    description: "Classic denim jacket perfect for casual everyday outfits.",
  },
  {
    id: 19,
    name: "Cotton T-Shirt",
    category: "Fashion",
    price: 499,
    oldPrice: 799,
    rating: 4.3,
    reviews: 156,
    newArrival: false,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    description: "Soft premium cotton t-shirt with a comfortable fit.",
  },
  {
    id: 20,
    name: "Travel Duffel Bag",
    category: "Fashion",
    price: 1499,
    oldPrice: 2199,
    rating: 4.6,
    reviews: 48,
    newArrival: true,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    description: "Spacious travel duffel bag suitable for weekend trips.",
  },
  {
    id: 21,
    name: "Coffee Maker",
    category: "Home",
    price: 2499,
    oldPrice: 3499,
    rating: 4.7,
    reviews: 81,
    newArrival: true,
    image:
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80",
    description: "Compact coffee maker for delicious coffee at home.",
  },
  {
    id: 22,
    name: "Modern Table Clock",
    category: "Home",
    price: 699,
    oldPrice: 999,
    rating: 4.2,
    reviews: 32,
    newArrival: false,
    image:
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=80",
    description: "Minimal modern table clock for your bedroom or workspace.",
  },
  {
    id: 23,
    name: "Decorative Plant",
    category: "Home",
    price: 599,
    oldPrice: 899,
    rating: 4.5,
    reviews: 45,
    newArrival: true,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
    description: "Beautiful decorative plant to give your room a fresh look.",
  },
  {
    id: 24,
    name: "Comfort Office Chair",
    category: "Home",
    price: 6499,
    oldPrice: 8999,
    rating: 4.7,
    reviews: 67,
    newArrival: false,
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=800&q=80",
    description: "Ergonomic office chair designed for long working hours.",
  },
  {
    id: 25,
    name: "Air Fryer",
    category: "Home",
    price: 3999,
    oldPrice: 5499,
    rating: 4.8,
    reviews: 132,
    newArrival: true,
    image:
      "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=800&q=80",
    description: "Healthy cooking made easy with this modern air fryer.",
  },
  {
    id: 26,
    name: "Smart LED Bulb",
    category: "Home",
    price: 499,
    oldPrice: 799,
    rating: 4.4,
    reviews: 91,
    newArrival: false,
    image:
      "https://images.unsplash.com/photo-1550985543-f47b3d6b7c2e?auto=format&fit=crop&w=800&q=80",
    description: "Smart LED bulb with adjustable brightness and colors.",
  },
  {
    id: 27,
    name: "Gaming Controller",
    category: "Gaming",
    price: 2499,
    oldPrice: 3299,
    rating: 4.7,
    reviews: 104,
    newArrival: true,
    image:
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80",
    description:
      "Comfortable wireless controller for an immersive gaming experience.",
  },
  {
    id: 28,
    name: "Gaming Desk",
    category: "Gaming",
    price: 6999,
    oldPrice: 8999,
    rating: 4.6,
    reviews: 43,
    newArrival: false,
    image:
      "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&q=80",
    description: "Spacious gaming desk with a modern and sturdy design.",
  },
  {
    id: 29,
    name: "Portable Power Bank",
    category: "Electronics",
    price: 1199,
    oldPrice: 1699,
    rating: 4.6,
    reviews: 176,
    newArrival: true,
    image:
      "https://images.unsplash.com/photo-1609592424270-5b5d8e7c6d7c?auto=format&fit=crop&w=800&q=80",
    description: "High-capacity portable power bank for charging your devices.",
  },
  {
    id: 30,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 1799,
    oldPrice: 2499,
    rating: 4.7,
    reviews: 201,
    newArrival: true,
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80",
    description:
      "Compact wireless earbuds with clear audio and long battery life.",
  },
  {
    id: 31,
    name: "Smart TV 43 Inch",
    category: "Electronics",
    price: 27999,
    oldPrice: 32999,
    rating: 4.8,
    reviews: 86,
    newArrival: false,
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80",
    description: "4K smart TV with vibrant colors and built-in streaming apps.",
  },
  {
    id: 32,
    name: "Digital Camera Lens",
    category: "Electronics",
    price: 18999,
    oldPrice: 22999,
    rating: 4.9,
    reviews: 37,
    newArrival: true,
    image:
      "https://images.unsplash.com/photo-1606986628253-0bc0a4c4f6b5?auto=format&fit=crop&w=800&q=80",
    description: "Professional camera lens for sharp and detailed photography.",
  },
];

export const ContextProvider = ({ children }) => {
  const navigation = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [showConfirmation, setShowConfirmation] = useState(false);

  const [cartItems, setCartItems] = useState(() => {
    const items = localStorage.getItem("cartItems");
    return items ? JSON.parse(items) : [];
  });
  const onAddToCart = (data) => {
    setCartItems((prev) => [...prev, { ...data, quntity: 1 }]);
    setIsOpen(true);
    setShowConfirmation(true);

    setTimeout(() => {
      setShowConfirmation(false);
    }, 2000);
  };
  const [orderSuccess, setOrderSuccess] = useState(false);
  const handleOrder = () => {
    setOrderSuccess(true);
    navigation("/shop");
    setIsOpen(false);
    setCartItems([]);
    setTimeout(() => {
      setOrderSuccess(false);
    }, 2000);
  };
  const incQuantity = (id) => {
    setCartItems((prev) => {
      return prev.map((item) => {
        return item.id === id ? { ...item, quntity: item.quntity + 1 } : item;
      });
    });
  };
  const decQuantity = (id) => {
    setCartItems((prev) => {
      const isZero = prev.find((i) => i.id == id);
      if (isZero.quntity == 1) {
        return prev.filter((i) => i.id !== id);
      } else {
        return prev.map((item) => {
          return item.id === id ? { ...item, quntity: item.quntity - 1 } : item;
        });
      }
    });
  };
  const onDeleteCartItem = (id) => {
    setCartItems((prev) => prev.filter((item) => id !== item.id));
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const cartCount = cartItems.length;
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const cUser = localStorage.getItem("curUser");
    return cUser ? true : false;
  });

  const [curUser, setCurUser] = useState(() => {
    const cUser = localStorage.getItem("curUser");
    return cUser ? JSON.parse(cUser) : null;
  });
  const [users, setUsers] = useState(() => {
    //preveous data lo recover katna otherwise empty hi milega
    const allUser = localStorage.getItem("users");
    return allUser ? JSON.parse(allUser) : [];
  });
  //users add ya delete or anything change then ye run hoga in every changes
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (curUser) {
      localStorage.setItem("curUser", JSON.stringify(curUser));
    } else {
      localStorage.removeItem("curUser");
    }
  }, [curUser]);
  const onLogout = () => {
    setCurUser(null);
    setIsLoggedIn(false);
    navigation("/login");
  };
  const onSignup = (user) => {
    setUsers((prev) => [...prev, user]);
  };
  const [loginError, setLoginError] = useState("");
  const onLogin = (user) => {
    const storedData = localStorage.getItem("users");
    const usersData = storedData ? JSON.parse(storedData) : [];
    const currentUser = usersData.find(
      (u) => u.email === user.email && u.password === user.password,
    );
    if (currentUser) {
      setCurUser(currentUser);
      setIsLoggedIn(true);
      navigation("/");
      return true;
    } else {
      setLoginError("Inavlid Email or Password");
      return false;
    }
  };
  const [sort, setSort] = useState("");
  const handleChangeSort = (e) => {
    setSort(e.target.value);
  };
  const [category, setCategory] = useState("");
  const handleChangeCat = (e) => {
    setCategory(e.target.value);
  };
  const [filterProducts, setFilterProducts] = useState([]);
  useEffect(() => {
    let arr = [...products];

    if (category !== "" && category !== "All Categories") {
      arr = arr.filter((product) => product.category === category);
    }

    if (sort === "Price: Low to High") {
      arr.sort((a, b) => a.price - b.price);
    }

    if (sort === "Price: High to Low") {
      arr.sort((a, b) => b.price - a.price);
    }

    if (sort === "Top Rated") {
      arr.sort((a, b) => b.rating - a.rating);
    }

    if (sort === "Most Popular") {
      arr.sort((a, b) => b.reviews - a.reviews);
    }

    setFilterProducts(arr);
  }, [products, category, sort]);
  return (
    <MyStore.Provider
      value={{
        products,
        isOpen,
        setIsOpen,

        isLoggedIn,
        setIsLoggedIn,
        onSignup,
        onLogin,
        onLogout,
        curUser,
        loginError,

        cartItems,
        onAddToCart,
        cartCount,
        decQuantity,
        incQuantity,
        onDeleteCartItem,

        showConfirmation,
        setShowConfirmation,

        orderSuccess,
        handleOrder,
        sort,
        setSort,
        category,
        setCategory,
        handleChangeCat,
        handleChangeSort,
        filterProducts,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
