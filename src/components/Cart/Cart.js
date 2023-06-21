import React from "react";
import "./Cart.css";

const Cart = ({cart}) => {
    console.log(cart);
  return (
    <div>
      <h1 className="summary-text">Order Summary</h1>
      <div className="cart">
        <p>Selected Items: {cart.length}</p>
      </div>
    </div>
  );
};

export default Cart;
