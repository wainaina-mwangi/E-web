import React from "react";
import { useCart } from "../Context/cartContext";
import "../pages/card.css";

function Checkout() {
  const {
    getCartItemsWithProducts,
    updateQuantity,
    removeFromCart,
    cartTotal,
    clearCart
  } = useCart();
  const cartItem = getCartItemsWithProducts();

  function placeOrder() {
    alert('order placed successfully');
    clearCart();
  }
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title text-xl">checkout</h1>
        <div className="checkout-container">
          <div className="checkout-items">
            <h1 className="text-xl">order summary</h1>
            {cartItem.map((item) => (
              <div className="checkout-item">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="checkout-item-image"
                />
                <div className="checkout-item-details">
                  <h3 className="checkout-item-name">{item.product.name}</h3>
                  <p className="checkout-item-price">{item.product.price}</p>
                </div>
                <div className="checkout-item-controls">
                  <div className="quality-controls">
                    <button
                      className="quality-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="quality-value">{item.quantity}</span>
                    <button
                      className="quality-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <p className="checkout-item-total">
                    $ {(item.product.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary-card">
            <div className="price-info">
              <span className="label">Total Amount</span>
              <h3 className="amount">${cartTotal.toFixed(2)}</h3>
            </div>
            <button className="modern-checkout-btn">
              <span onClick={placeOrder}>Place Order</span>
              {/* <i className="arrow-icon">→</i> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
