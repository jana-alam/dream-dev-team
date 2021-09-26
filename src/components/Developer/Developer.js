import React from "react";
import "./Developer.css";

const Developer = (props) => {
  const { developer, handleHireNow } = props;
  const { avatar, name, email, hourly_charge, specialist, times_hired } =
    developer;
  return (
    <div className="developer">
      <img src={avatar} className="dev-img" alt="..." />
      <div className="dev-info">
        <h3 className="dev-name">{name}</h3>
        <p className="dev-email">{email}</p>
        <h2 className="dev-skill">{specialist} Expert </h2>
      </div>
      <div className="hire-info">
        <p className="hire-rate">${hourly_charge}/ Hour</p>
        <p className="hire-times">{times_hired} times hired</p>
      </div>
      <button onClick={() => handleHireNow(developer)} className="hire-btn">
        Hire Now <i className="fas fa-user-plus"></i>
      </button>
    </div>
  );
};

export default Developer;
