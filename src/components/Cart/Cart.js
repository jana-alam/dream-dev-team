import React from "react";
import Item from "../Item/Item";
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
      <h3>{developers.length} Developers</h3>
      {developers.map((dev) => (
        <Item key={dev.id} dev={dev}></Item>
      ))}
      <h3>Total Charge / Hour: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
