import React from "react";
import useCast from "../hooks/useCast";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCast = ({ id }) => {
    console.log(id);
  useCast(id);

  const castInfo = useSelector((store) => store.movies.castInfo);
  if (!castInfo) return null;

  return (
    <div className="bg-black py-4 px-14">
      <div className="mb-5">
        <span className="text-white font-bold text-3xl">Cast</span>
      </div>
      <div className="">
        <div className="w-12/12 py-2">
          <div className="flex flex-row overflow-x-scroll gap-5">
            {castInfo.map((cast) =>
              cast?.profile_path ? (
                <div
                  key={cast.id}
                  className="flex justify-between items-center rounded-lg  flex-col bg-zinc-700"
                >
                  <div className=" rounded-t-lg overflow-hidden h-[190px] xl:w-[170px] md:w-[150px] sm:w-[130px] w-[90px] lg:w-[160px]">
                    <img
                      className="w-full"
                      src={IMG_CDN_URL + cast?.profile_path}
                      alt="actor"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center px-2 py-1">
                    <span className="text-white font-semibold xl:text-base lg:text-base md:text-sm sm:text-sm text-xs text-center">
                      {cast?.name}
                    </span>
                    <span className="text-gray-300 font-light xl:text-sm md:text-xs sm:text-xs text-[8px] lg:text-sm text-center">{cast?.character}</span>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCast;
