import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

const FollowItem = () => {
  return (
    <div className="flex items-center px-3 py-2 hover:bg-gray-900 hover:bg-opacity-50 cursor-pointer">
      <div className="w-10">
        <img src="/assets/avatar.png" alt="" />
      </div>
      <div className="flex flex-grow flex-col ml-3 font-semibold">
        <p className="text-xs">Abhinav Sawarkar</p>
        <p className="flex gap-x-2">
          <span className="text-xs text-gray-500">@probablyabhinav</span>
          {/* <span className="text-xs p-1 bg-gray-700 text-gray-400 rounded-md">
            Follows you
          </span> */}
        </p>
      </div>
      <Button classes="bg-white text-black px-3 text-xs py-1 font-semibold text-gray-800  ">
        Follow
      </Button>
    </div>
  );
};

const FollowWidget = () => {
  return (
    <Card>
      <div className="px-3 py-3 text-xl font-bold">
        <span>Who to follow</span>
      </div>
      <FollowItem />
      <FollowItem />
      <button className="px-3 py-2 text-accent">Show More</button>
    </Card>
  );
};

export default FollowWidget;
