import React from "react";

const Card = (props) => {
  return (
    <div className={`${props.classes} bg-darkGray  w-full  rounded-2xl`}>
      {props.children}
    </div>
  );
};

export default Card;
