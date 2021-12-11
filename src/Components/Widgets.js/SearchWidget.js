import React from "react";
import Card from "../UI/Card";

const SearchWidget = () => {
  return (
    <div className="w-full sticky top-0 bg-black">
      <Card classes="rounded-3xl">
        <label className="flex items-center gap-x-2 focus:border-1 focus:border-accent focus:bg-transparent w-full h-full py-2 px-3">
          <span className="">
            <img className="w-4" src="/assets/search.svg" alt="search" />
          </span>
          <input
            className="flex-grow bg-transparent text-gray-400 placeholder-gray-400 outline-none "
            type="text"
            placeholder="Search Twitter"
          />
        </label>
      </Card>
    </div>
  );
};

export default SearchWidget;
