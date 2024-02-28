import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[18%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-base w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black px-4 py-1.5 text-lg rounded-md hover:bg-opacity-80 font-semibold">
          <i class="fa-solid fa-play text-lg pr-1"></i> Play Now
        </button>
        <button className="mx-2 bg-gray-500 text-white px-4 py-1.5 text-lg rounded-md hover:bg-opacity-80 font-semibold">
        <i class="fa-solid fa-circle-info text-lg pr-1 text-gray-50"></i>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
