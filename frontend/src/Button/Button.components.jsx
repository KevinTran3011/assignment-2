import React from "react";
import "./Button.style.css";

export const BUTTON_TYPE_CLASSES = {
  delete: "delete",
  add: "add",
  stats: "stats",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
