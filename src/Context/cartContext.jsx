import { createContext, useState, useContext } from "react";

const CartContext = createContext(null);


export function CartProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);

  function addToCart(productId) {
    const existing = cartItem.find((item) => item.id === productId);

    if (existing) {
      
      const updatedCartItems = cartItem.map((item) =>
        item.id === productId 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      );
      setCartItem(updatedCartItems);
    } else {
      
      setCartItem([...cartItem, { id: productId, quantity: 1 }]);
    }
  }

  return (
    <CartContext.Provider value={{ cartItem, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}