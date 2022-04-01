import React from "react";
import "./index.css";

const Message = ({ title, description, ...props }) => (
  <div className="message" {...props}>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Message;
