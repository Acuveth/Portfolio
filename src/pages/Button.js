import React from "react";

const Button = ({ variant = "default", children }) => {
  let bgClass = "bg-button-bg hover:bg-button-bg-hover";
  let shadowClass =
    "shadow-button-shadow hover:shadow-button-shadow-hover active:shadow-button-shadow-active";

  if (variant === "reset") {
    bgClass = "bg-reset-button-bg hover:bg-reset-button-bg-hover";
    shadowClass =
      "shadow-reset-button-shadow hover:shadow-reset-button-shadow-hover active:shadow-reset-button-shadow-active";
  } else if (variant === "proceed") {
    bgClass = "bg-alt-button-bg hover:bg-alt-button-bg-hover";
    shadowClass =
      "shadow-alt-button-shadow hover:shadow-alt-button-shadow-hover active:shadow-alt-button-shadow-active";
  }

  return (
    <button
      className={`eightbit-btn inline-block px-8 py-5 font-press-start text-white text-xl ${bgClass} ${shadowClass} relative`}
    >
      {children}
    </button>
  );
};

export default Button;
