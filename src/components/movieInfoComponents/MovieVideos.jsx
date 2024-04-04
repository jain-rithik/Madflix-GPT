import React from "react";
import useVideo from "../../hooks/useVideo";
import { useSelector } from "react-redux";

const MovieVideos = ({ id }) => {
  useVideo(id);
  const movieVideos = useSelector((store) => store.movies.movieVideos);
  if (!movieVideos || movieVideos.length === 0) return null;

  return (
    
    <div className="bg-black py-4 md:px-14 px-9">
      <div className="md:mb-5 mb-3">
        <span className="text-white font-bold md:text-3xl text-xl">Videos</span>
      </div>
      <div className="my-5">
        <div className="flex flex-row gap-10 overflow-x-scroll">
          {movieVideos.map((movieVideo) => (
            <div key={movieVideo?.key} className="w-full md:w-auto">
              <iframe
                className="aspect-video md:w-[560px] md:h-[315px]"

                src={
                  "https://www.youtube-nocookie.com/embed/" + movieVideo?.key
                }
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                allowfullscreen
                loading="lazy"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieVideos;
