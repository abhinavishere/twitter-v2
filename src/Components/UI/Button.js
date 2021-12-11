import React from "react";

const Button = (props) => {
  const btnClass = props.primary ? "bg-accent" : "";
  return (
    <button
      className={`${btnClass} ${
        props.classes || ""
      } flex items-center justify-center  base:flex-grow-0 base:max-w-max rounded-2xl `}
    >
      {props.children}
    </button>
  );
};

export default Button;
