import React from "react";
import useVideo from "../hooks/useVideo";
import { useSelector } from "react-redux";

const MovieVideos = ({ id }) => {
  useVideo(id);
  const movieVideos = useSelector((store) => store.movies.movieVideos);
  if(!movieVideos) return null;

  return (
    <div className="bg-black py-4 px-14">
      <div className="mb-5">
        <span className="text-white font-bold text-3xl">Videos</span>
      </div>
      <div>
        <div className="flex flex-row gap-10 overflow-x-scroll">
          {movieVideos.map((movieVideo) => (
            <div key={movieVideo?.key}>
              <iframe
                className="aspect-video"
                width="560"
                height="315"
                src={
                  "https://www.youtube-nocookie.com/embed/" + movieVideo?.key
                }
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                allowfullscreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieVideos;
