import React from "react";

const Header = () => {
  return (
    <header className="flex items-center px-3 py-3 border-b-1 border-darkGray md:border-r-1 md:border-darkGray sticky top-0">
      <a className="base:hidden" href="/profile">
        <img className="w-9" src="/assets/avatar.png" alt="avatar" />
      </a>
      <a className="text-lg font-semibold ml-5 base:ml-2" href="/">
        Home
      </a>
      <button className="ml-auto">
        <img src="/assets/timeline-prop.svg" alt="timeline" />
      </button>
    </header>
  );
};

export default Header;
