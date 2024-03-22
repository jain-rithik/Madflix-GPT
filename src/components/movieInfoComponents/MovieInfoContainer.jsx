import React from "react";
import { BANNER_IMG_CDN_URL } from "../../utils/constants/constants";

const MovieInfoContainer = ({ info }) => {
  if (!info) return null;
  const labelCSS =
    "font-semibold text-white xl:pr-1 lg:pr-1 md:pr-1.5 sm:pr-1 pr-0.5 text-[8px] lg:text-base md:text-sm text-xs xl:text-xl";

  const valueCSS =
    "bg-[#292929] border-2 border-[#3e3e3e] rounded-full text-white sm:px-4 sm:py-1 px-2 py-1 lg:text-base md:text-sm text-xs hover:border-[#fff] transition sm:m-0 m-px";

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
    <div className="flex md:flex-row md:justify-between md:items-center min-h-screen lg:px-20 md:px-10 px-5 flex-col items-center justify-center">
      <div className="lg:w-4/12 lg:pr-7 py-3 mt-14">
        <img
          className="lg:w-72 md:w-56 rounded-2xl w-[31vw]"
          src={BANNER_IMG_CDN_URL + info?.poster_path}
          alt="movie poster"
        />
      </div>
      <div className="flex flex-col justify-start items-start md:w-8/12 w-11/12">
        <div className="w-full text-center md:text-start">
          <span className="font-extrabold text-gray-50 lg:text-6xl md:text-4xl text-2xl">
            {info?.title || info?.name}
          </span>
          <span className="text-xl pl-2 font-normal text-gray-300">
            ({info?.release_date?.slice(0, 4)})
          </span>
        </div>

        <div className="flex lg:flex-row pt-6 flex-wrap lg:gap-6 flex-col gap-3 md:gap-6 lg:items-baseline">
          <div>
            <span className={labelCSS}>Date: </span>
            <span className={valueCSS}>
              {info?.release_date &&
                info.release_date.split("-").reverse().join("-")}
            </span>
          </div>
          <div className="flex gap-1 items-center md:flex-row md:items-baseline">
            <span className={labelCSS}>Genres: </span>
            <div className="flex flex-wrap">
            {info?.genres?.map((gen) => (
              <span key={gen?.name} className={valueCSS}>
                {gen.name}
              </span>
            ))}
            </div>
          </div>
          <div>
            <span className={labelCSS}>Duration: </span>
            <span className={valueCSS}>{formatRuntime(info?.runtime)}</span>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center pt-4 lg:py-4 md:py-3 sm:py-2 xl:py-5">
          {(info?.tagline !== "") && (
            <>
              <span className="md:text-2xl md:font-semibold text-white pr-1 text-base ">
                Tagline:{" "}
              </span>

              <span className="text-gray-300 xl:text-2xl lg:text-2xl md:text-xl sm:text-base text-[16px] italic">
                "{info?.tagline}"
              </span>
            </>
          )}
        </div>

        <div className="flex flex-col justify-start items-start md:w-11/12 mt-3 md:mt-0">
          <span className="md:text-2xl font-semibold text-white pr-1 text-base">
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
