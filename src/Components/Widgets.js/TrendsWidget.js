import React from "react";
import Card from "../UI/Card";
import TrendItem from "./TrendItem";

const TrendsWidget = () => {
  return (
    <Card>
      <div className="flex items-center justify-between  py-2 px-3">
        <span className="font-bold text-xl">What's Happening</span>
        {/* <button className="w-5 hover:text-accent">
          <img src="/assets/options.svg" alt="" />
        </button> */}
      </div>
      <TrendItem />
      <TrendItem />
      <TrendItem />
      <TrendItem />
      <button className="py-2 px-3 text-accent">Show More</button>
    </Card>
  );
};

export default TrendsWidget;
