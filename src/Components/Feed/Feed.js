import React from "react";
import FeedItem from "./FeedItem";

const Feed = () => {
  return (
    <div className="h-auto overflow-y-scroll scrollbar-hide border-r-1 border-darkGray ">
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
    </div>
  );
};

export default Feed;
