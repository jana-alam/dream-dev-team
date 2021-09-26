import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { developers } = props;
  const total = developers.reduce(
    (prev, developer) => prev + developer.hourly_charge,
    0
  );
  return (
    <div className="cart">
      <h2>Your Team Member</h2>
      <h3>Selected: {developers.length} Developers</h3>
      {developers.map((dev) => {
        return (
          <div className="cart-dev">
            <img src={dev.avatar} alt="" />
            <p>{dev.name}</p>
          </div>
        );
      })}
      <h3>Total Charge / Hour: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
