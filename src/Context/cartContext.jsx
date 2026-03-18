import { createContext, useState, useContext } from "react";
import { getProductById } from "../data/product";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);

  function addToCart(productId) {
    const existing = cartItem.find((item) => item.id === productId);

    if (existing) {
      const updatedCartItems = cartItem.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      );
      setCartItem(updatedCartItems);
    } else {
      setCartItem([...cartItem, { id: productId, quantity: 1 }]);
    }
  }
  // function removing from the cart

  function removeFromCart(productId) {
    setCartItem(cartItem.filter((item) => item.id !== productId));
  }

  // getting the cart total
  // Inside your CartProvider component
  const cartTotal = cartItem.reduce((total, item) => {
  const product = getProductById(item.id);
  // If the product exists, add (price * quantity) to the total
  return product ? total + (product.price * item.quantity) : total;
}, 0); // 0 is the starting total

  // updating the cart functiom

 function updateQuantity(productId, quantity) {
  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  setCartItem(
    cartItem.map((item) =>
      item.id === productId ? { ...item, quantity: quantity } : item
    )
  );
}

// clearing the cart
 function clearCart(){
  setCartItem([]);
 }

  // getting products by id
  function getCartItemsWithProducts() {
    return cartItem
      .map((item) => {
        return {
          ...item,
          product: getProductById(item.id),
        };
      })
      .filter((item) => item.product);
  }

  return (
    <CartContext.Provider
      value={{ cartItem, addToCart, getCartItemsWithProducts,removeFromCart,updateQuantity,cartTotal,clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  console.log("Current Context Value:", context); // If this is undefined, the Provider is the problem

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
