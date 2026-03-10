import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProductById } from "../data/product";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const [product, setProduct] = React.useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const foundProduct = getProductById(id);

    if (!foundProduct) {
      navigate("/");
    }
    setProduct(foundProduct);
  }, [id]);

  return (
    <div className="page">
      <div className="container">
        {product && (
          <div className="product-detail">
            <div className="product-detail-image">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>
            <div>
              <p className="product-detail-name">{product.name}</p>
              <p className="product-detail-price">${product.price}</p>
              <p className="product-detail-description">
                {product.description || "High-quality product"}
              </p>
              <div className="product-card-actions">
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
