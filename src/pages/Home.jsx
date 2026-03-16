import React from "react";
import { getProducts } from "../data/product";
import ProductCard from "../Components/ProductCard";


function Home() {
  const name = "ShopNow";
  const Products =getProducts();
  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">{`Welcome to ${name}`}</h1>
        <p className="home-subtitle ">Discover amazing Products @ great prices</p>
      </div>
      <div className="container">
      <h2 className="page-title">Our Products</h2>
      <div className="product-grid">
      {
        Products.map((product)=>(
         <ProductCard product={product} key={product.id} />
        ))
      }
      </div>
      </div>
    </div>
  );
}

export default Home;
