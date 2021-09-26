import React, { useEffect, useState } from "react";
import "./Main.css";
import Developer from "../Developer/Developer";
import Cart from "../Cart/Cart";

const Main = () => {
  const [developers, setDevelopers] = useState([]);
  const [selectedDevs, setSelectedDevs] = useState([]);
  const handleHireNow = (developer) => {
    const exists = selectedDevs.find((dev) => dev.id === developer.id);
    if (!exists) {
      const newDevelopers = [...selectedDevs, developer];
      setSelectedDevs(newDevelopers);
    }
  };
  useEffect(() => {
    fetch("custom_data.json")
      .then((res) => res.json())
      .then((data) => setDevelopers(data));
  }, []);
  return (
    <div className="main-container">
      {/* developers area */}
      <div className="available-developers">
        {developers.map((developer) => (
          <Developer
            key={developer.id}
            developer={developer}
            handleHireNow={handleHireNow}
          ></Developer>
        ))}
      </div>
      {/* selected developers area */}
      <div className="selected-developers">
        <Cart developers={selectedDevs}></Cart>
      </div>
    </div>
  );
};

export default Main;
