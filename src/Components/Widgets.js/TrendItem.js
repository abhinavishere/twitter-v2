import React from "react";

const TrendItem = () => {
  return (
    <a href="/">
      <div className="py-2 px-3 hover:bg-gray-900 hover:bg-opacity-50 cursor-pointer">
        <div className="flex items-center justify-between text-gray-500">
          <span className="text-sm">Trending in India</span>
          <button className="w-5">
            <img src="/assets/arrow-bottom.svg" alt="" />
          </button>
        </div>
        <h3 className="text-md font-semibold">#meteor</h3>
        <p className="text-gray-500 text-sm">42k Tweets</p>
      </div>
    </a>
  );
};

export default TrendItem;
