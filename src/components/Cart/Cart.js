import React from "react";
import "./Cart.css";

const Cart = ({cart}) => {
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <h1 className="summary-text">Order Summary</h1>
      <div>
        <p>Selected Items: {cart.length}</p>
        <p>Total price: ${total}</p>
        <p>Total Shipping: {shipping}</p>
        <p>Tax: {tax}</p>
        <h5>Grand Total: {grandTotal}</h5>
      </div>
    </div>
  );
};

export default Cart;
