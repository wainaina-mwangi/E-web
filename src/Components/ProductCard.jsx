import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/cartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-card-image"
      />
      <div className="product-card-content">
        <p className="product-card-name">{product.name}</p>
        <p className="product-card-price">${product.price}</p>
        <div className="product-card-actions">
          <Link className="btn btn-primary" to={`/products/${product.id}`}>
            view Details
          </Link>
          <button
            className="btn btn-secondary"
            onClick={() => addToCart(product.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
