import React from "react";
import useCast from "../../hooks/useCast";
import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../../utils/constants/constants";
import { Link } from "react-router-dom";
import { clearCastMovies } from "../../utils/slices/movieSlice";

const MovieCast = ({ id }) => {
    const dispatch = useDispatch();
  useCast(id);

  const castInfo = useSelector((store) => store.movies.castInfo);
  if (!castInfo) return null;

  const handleCastClick = () => {
    dispatch(clearCastMovies());
  }

  return (
    <div className="bg-black py-4 px-8">
      <div className="md:mb-5 mb-2">
        <span className="text-white font-bold md:text-3xl text-xl">Cast</span>
      </div>
      <div className="">
        <div className="w-12/12 py-2">
          <div className="flex flex-row overflow-x-scroll gap-5">
            {castInfo.map((cast) =>
              cast?.profile_path ? (
                <Link to={"/castmovie/"+cast?.id} onClick={handleCastClick} state={{ actorName: cast?.name }}><div
                  key={cast.id}
                  className="flex justify-between items-center rounded-lg  flex-col bg-zinc-700 max-h-44 md:max-h-64"
                >
                  <div className=" rounded-t-lg overflow-hidden h-[150px] md:h-auto xl:w-[170px] md:w-[150px] sm:w-[130px] w-[90px] lg:w-[160px]">
                    <img
                      className="w-full"
                      src={IMG_CDN_URL + cast?.profile_path}
                      alt="actor"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center px-2 py-1">
                    <span className="text-white font-semibold xl:text-base lg:text-base md:text-sm sm:text-sm text-xs text-center">
                      {cast?.name}
                    </span>
                    <span className="text-gray-300 font-light xl:text-sm md:text-xs sm:text-xs text-[10px] lg:text-sm text-center">{cast?.character}</span>
                  </div>
                </div></Link>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCast;
