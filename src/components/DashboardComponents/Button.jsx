import React from "react";

const Button = ({ color, bgColor, text, borderRadius, size, onClickFunc }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text${size} p-3 hover:drop-shadow-xl`}
      onClick={onClickFunc}
    >
      {text}
    </button>
  );
};

export default Button;
