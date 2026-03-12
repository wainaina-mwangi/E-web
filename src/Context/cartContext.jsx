import { createContext } from "react";
import { useState } from "react";

const cartContext = createContext(null);

export default function cartProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);

  function addToCart(productId) {
    const existing = cartItem.find((item) => item.id === productId);
    if (existing) {
     const currentQuantity = existing.quantity
     const updatedCartItems= map((item)=>item.id===productId ? {id:productId,quantity:currentQuantity+ 1}: item)
        setCartItem(updatedCartItems);
    } else {
      cartItem.push({ id: productId, quantity: 1 });
      setCartItem([...cartItem, { id: productId, quantity: 1 }]);
    }
  }

  return <cartContext.Provider value={{cartItem,addToCart}}>{children}</cartContext.Provider>;
}

export function useCart() {
  const context = useContext(cartContext);

  return context;
}
