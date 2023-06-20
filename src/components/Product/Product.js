import React from "react";
import "./Product.css";

const Product = (props) => {
  const { id, img, name, seller, ratings, price } = props.product;
  return (
    <div className="product">
      <div className="product-detail">
        <img src={img} alt="" />
        <div className="product-info">
          <p className="product-name">{name}</p>
          <p>Price: ${price}</p>
          <p>Manufacturer: {seller}</p>
          <p>Rating: {ratings}</p>
        </div>
      </div>
      <button onClick={() => props.handleAddToCart(props.product)} className="btn-cart">
        <p>Add To Cart</p>
      </button>
    </div>
  );
};

export default Product;
