import React from "react";
import { BANNER_IMG_CDN_URL, IMG_CDN_URL } from "../utils/constants";

const MovieInfoContainer = ({ info }) => {
    if(!info) return null;
  const labelCSS =
    "font-semibold text-white xl:pr-1 lg:pr-1 md:pr-1.5 sm:pr-1 pr-0.5 text-[8px] lg:text-base md:text-sm sm:text-sm xl:text-xl";

  const valueCSS =
    "bg-[#292929] border-2 border-[#3e3e3e] rounded-full text-white px-4 py-1 text-base hover:border-[#fff] transition";

  const formatRuntime = (minutes) => {
    let hours = Math.floor(minutes / 60);
    let remainingMinutes = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${remainingMinutes}m`;
    } else {
      return `${remainingMinutes}m`;
    }
  };
  return (
    <div className="flex flex-row justify-between items-center h-screen px-20">
      <div className="w-4/12 ">
        <img
          className="w-72 rounded-2xl"
          src={BANNER_IMG_CDN_URL + info?.poster_path}
          alt="movie poster"
        />
      </div>
      <div className="flex flex-col justify-start items-start w-8/12">
        <div>
          <span className="font-extrabold text-gray-50 text-6xl ">
            {info?.title || info?.name}
          </span>
          <span className="text-xl pl-2 font-normal text-gray-300">
            ({info?.release_date?.slice(0, 4)})
          </span>
        </div>

        <div className="flex flex-row pt-6 flex-wrap gap-6">
          <div>
            <span className={labelCSS}>Date: </span>
            <span className={valueCSS}>{info?.release_date}</span>
          </div>
          <div>
            <span className={labelCSS}>Genres: </span>
            {info?.genres?.map((gen) => (
              <span key={gen?.name} className={valueCSS}>
                {gen.name}
              </span>
            ))}
          </div>
          <div>
            <span className={labelCSS}>Duration: </span>
            <span className={valueCSS}>{formatRuntime(info?.runtime)}</span>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center py-0.5 lg:py-4 md:py-3 sm:py-2 xl:py-5">
          <span className="text-2xl font-semibold text-white pr-1">
            Tagline:{" "}
          </span>
          <span className="text-gray-300 xl:text-2xl lg:text-2xl md:text-xl sm:text-base text-[9px] italic">
            "{info?.tagline}"
          </span>
        </div>

        <div className="flex flex-col justify-start items-start w-11/12">
          <span className="text-2xl font-semibold text-white pr-1">
            Overview:{" "}
          </span>
          <span className="text-white text-[7px] sm:block lg:text-lg md:text-base text-sm xl:text-lg tracking-wider xl:tracking-wide">
            {info?.overview}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieInfoContainer;
