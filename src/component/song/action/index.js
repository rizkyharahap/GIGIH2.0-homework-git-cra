import React from "react";
import "./index.css";

/**
 * For Song Description component
 * @param {Function} onClick For onclick event
 */
const Action = ({ onClick, children, ...props }) => {
  return (
    <button
      className="btn btn-action"
      title="Button"
      rel="noreferrer"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Action;
