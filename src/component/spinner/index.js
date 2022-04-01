import React from "react";
import "./index.css";

const Spinner = ({ children }) => {
  return (
    <div className="spinner">
      <div className="spinner-icon"></div>
      {children}
    </div>
  );
};

export default Spinner;
