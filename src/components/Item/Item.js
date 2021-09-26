import React from "react";
import "./Item.css";

const Item = (props) => {
  const { dev } = props;
  return (
    <div className="cart-dev">
      <img src={dev.avatar} alt="" />
      <p>{dev.name}</p>
    </div>
  );
};

export default Item;
