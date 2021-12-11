import React from "react";

const NavItem = (props) => {
  const navClass = props.isShownOnMobile ? "" : "hidden base:flex";

  return (
    <a
      href={`/${props.link}`}
      className={`${navClass} flex-grow flex items-center justify-center  base:flex-grow-0 base:max-w-max  base:rounded-full hover:bg-gray-500 hover:bg-opacity-40 base:mt-2`}
    >
      <span className="py-3 base:p-2">
        <img
          className="w-7 base:w-6"
          src={`/assets/${props.iconSrc}.svg`}
          alt=""
        />
      </span>
      <span className="hidden">{props.title}</span>
    </a>
  );
};

export default NavItem;
