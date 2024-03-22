import React from "react";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview, id }) => {
  return (
    <div className="absolute top-0 w-full">
    <div className="z-[5] aspect-video lg:pt-[13%] sm:pt-[25%]  md:pt-[13%] pt-[25%] px-6 md:px-24  text-white bg-gradient-to-r from-black">
      <h1 className="md:text-6xl text-2xl font-bold max-w-3xl	">{title}</h1>
      <p className="py-6 text-base lg:max-h-36 lg:w-2/6 lg:line-clamp-5 hidden md:max-h-24 md:w-1/2 md:overflow-hidden md:line-clamp-3 mb-1">{overview}</p>
      <div className="my-2 md:m-0">
        {/* <button className="bg-white text-black md:px-4 px-2 py-1 md:py-1.5 text-lg rounded-md hover:bg-opacity-80 font-semibold">
          <i className="fa-solid fa-play text-lg pr-1"></i> Play Now
        </button> */}
        <Link to={"/movieinfo/" + id}>
        <button className="bg-white text-black md:px-4 px-2 py-1 md:py-1.5 text-lg rounded-md hover:bg-opacity-80 font-semibold">
        <i className="fa-solid fa-circle-info text-lg pr-1 text-black"></i>
          More Info
        </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default VideoTitle;
