import React from "react";

const Developer = (props) => {
  const { name, email } = props.developer;
  return (
    <div>
      {name}
      <p>{email}</p>
    </div>
  );
};

export default Developer;
