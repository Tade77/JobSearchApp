import React from "react";
import "./Button.scss";
const Button = ({ label, outline, customClasses, ...props }) => {
  return (
    <button
      className={`Button ${outline ? "outline" : ""} ${customClasses}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
