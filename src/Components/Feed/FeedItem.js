import React from "react";

const FeedItem = () => {
  return (
    <div className="flex items-start gap-x-3 px-3 py-3 border-b-1 border-darkGray">
      {/* Tweet Profile Image */}
      <div className="w-10 flex-shrink-0">
        <img className="w-10" src="/assets/avatar.png" alt="" />
      </div>
      {/* Tweet Content */}
      <div className="flex flex-col gap-y-4">
        {/* Tweet Header */}
        <p className="flex items-center justify-start gap-x-1">
          <span className="font-bold text-sm">Abhinav Sawarkar</span>
          <span className="w-4">
            <img src="/assets/verified.svg" alt="" />
          </span>
          <span className="text-xs text-gray-600 font-semibold truncate">
            @probablyabhinav
          </span>
          <span className="text-xs text-gray-600">.</span>
          <span className="text-xs text-gray-600 font-semibold">2h</span>
          <button className="ml-auto">
            <img src="/assets/more.svg" alt="" />
          </button>
        </p>
        {/* Tweet Text Content */}
        <p className="text-md leading-5">
          Don't settle on what you have and who you are today.
        </p>
        {/* Tweet Embeded Image */}
        <div className="rounded-2xl overflow-hidden">
          <img className=" w-full" src="/assets/tweet-post-img.jpg" alt="" />
        </div>
        {/* Tweet Actions */}
        <div className="flex">
          <div className="flex items-center flex-grow gap-x-2">
            <span className="">
              <img className="w-4" src="/assets/reply.svg" alt="" />
            </span>
            <span className="text-sm font-medium">11</span>
          </div>
          <div className="flex items-center flex-grow gap-x-2">
            <span className="">
              <img className="w-4" src="/assets/retweet.svg" alt="" />
            </span>
            <span className="text-sm font-medium">62</span>
          </div>
          <div className="flex items-center flex-grow gap-x-2">
            <span className="">
              <img className="w-4" src="/assets/like.svg" alt="" />
            </span>
            <span className="text-sm font-medium">303</span>
          </div>
          <div className="flex items-center flex-grow gap-x-2">
            <span className="">
              <img className="w-4" src="/assets/share.svg" alt="" />
            </span>
            <span className="text-sm font-medium"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedItem;
