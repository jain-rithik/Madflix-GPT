import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full z-[5] aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="md:text-6xl text-2xl font-bold max-w-3xl	">{title}</h1>
      <p className="py-6 text-base w-2/6 hidden md:max-h-36 md:overflow-hidden md:line-clamp-5 mb-1">{overview}</p>
      <div className="my-2 md:m-0">
        <button className="bg-white text-black md:px-4 px-2 py-1 md:py-1.5 text-lg rounded-md hover:bg-opacity-80 font-semibold">
          <i className="fa-solid fa-play text-lg pr-1"></i> Play Now
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white px-4 py-1.5 text-lg rounded-md hover:bg-opacity-80 font-semibold">
        <i className="fa-solid fa-circle-info text-lg pr-1 text-gray-50"></i>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
