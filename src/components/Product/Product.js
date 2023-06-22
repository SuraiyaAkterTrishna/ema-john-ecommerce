import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({handleAddToCart, product}) => {
  const { id, img, name, seller, ratings, price } = product;
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
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></p>
      </button>
    </div>
  );
};

export default Product;
