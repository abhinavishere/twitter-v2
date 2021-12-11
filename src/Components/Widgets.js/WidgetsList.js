import React from "react";
import SearchWidget from "./SearchWidget";
import TrendsWidget from "./TrendsWidget";
import FollowWidget from "./FollowWidget";

const WidgetsList = () => {
  return (
    <div className="hidden w-80 h-full laptop-sm:flex laptop-sm:flex-col py-3 gap-y-5 bg-black overflow-y-scroll scrollbar-hide min-w-[320px]">
      <SearchWidget />
      <TrendsWidget />
      <FollowWidget />
    </div>
  );
};

export default WidgetsList;
