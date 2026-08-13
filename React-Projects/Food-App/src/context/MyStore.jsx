import { nanoid } from "nanoid";
import { createContext, useState } from "react";

export const MyStore = createContext();

export const MyContext = ({ children }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Chicken Biryani",
      description: "Aromatic basmati rice cooked with spicy chicken.",
      price: 199,
      time: 40,
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      name: "Pizza",
      description: "Cheesy pizza topped with fresh vegetables.",
      price: 249,
      time: 30,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    },
    {
      id: 3,
      name: "Pasta",
      description: "Creamy Italian pasta with herbs and cheese.",
      price: 179,
      time: 25,
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
    },
    {
      id: 4,
      name: "Burger",
      description: "Juicy burger with crispy vegetables and cheese.",
      price: 149,
      time: 20,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },
  ]);

  const onAddRecipe = (data) => {
    setItems((prev) => [
      ...prev,
      {
        ...data,
        id: nanoid(),
      },
    ]);
  };
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const onCartClick = () => {
    setCartOpen(true);
  };

  const onClose = () => {
    setCartOpen(false);
  };

  const increaseQuantity = (id) => {
    setCartItems((prev) => {
      return prev.map((elem) => {
        return elem.id === id ? { ...elem, quantity: elem.quantity + 1 } : elem;
      });
    });
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) => {
      return prev
        .map((elem) =>
          elem.id === id ? { ...elem, quantity: elem.quantity - 1 } : elem,
        )
        .filter((elem) => elem.quantity > 0);
    });
  };

  const onAddToCart = (recipe) => {
    setCartItems((prev) => {
      const isExist = prev.find((el) => el.id === recipe.id);
      if (isExist) {
        return prev.map((elem) => {
          return elem.id === recipe.id
            ? { ...elem, quantity: elem.quantity + 1 }
            : elem;
        });
      }

      return [...prev, { ...recipe, quantity: 1 }];
    });
  };
  const [favorites, setFavorites] = useState([]);
  const onAddToFavorite = (recipe) => {
    setFavorites((prev) => {
      //check is exist
      const isExist = prev.some((el) => el.id === recipe.id);
      //if exist remove
      if (isExist) {
        return prev.filter((elm) => elm.id !== recipe.id);
      }
      //otherwise add
      return [...prev, { ...recipe, isFav: "true" }];
    });
  };
  const onRemoveFavorite = (id) => {
    setFavorites((prev) => prev.filter((el) => el.id !== id));
  };
  const removeFromCart = (id) => {
    setCartItems((prev) => {
      return prev.filter((elem) => elem.id !== id);
    });
  };

  const cartCount = cartItems.length;

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <MyStore.Provider
      value={{
        onClose,
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        total,
        removeFromCart,
        cartOpen,
        onAddToCart,
        cartCount,
        onCartClick,
        onAddRecipe,
        setItems,
        items,
        onAddToFavorite,
        favorites,
        onRemoveFavorite,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
