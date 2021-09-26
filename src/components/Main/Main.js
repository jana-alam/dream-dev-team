import React, { useEffect, useState } from "react";
import Developer from "../Developer/Developer";

const Main = () => {
  const [developers, setDevelopers] = useState([]);
  useEffect(() => {
    fetch("custom_data.json")
      .then((res) => res.json())
      .then((data) => setDevelopers(data));
  }, []);
  return (
    <div>
      {developers.map((developer) => (
        <Developer key={developer.id} developer={developer}></Developer>
      ))}
    </div>
  );
};

export default Main;
