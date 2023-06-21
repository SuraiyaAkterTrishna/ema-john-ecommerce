import React from "react";
import "./Cart.css";

const Cart = ({cart}) => {
  return (
    <div className="cart">
      <h1 className="summary-text">Order Summary</h1>
      <div>
        <p>Selected Items: {cart.length}</p>
      </div>
    </div>
  );
};

export default Cart;
