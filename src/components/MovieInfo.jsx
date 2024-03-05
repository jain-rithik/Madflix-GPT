import React from "react";
import { useParams } from "react-router-dom";
import useMovieInfo from "../hooks/useMovieInfo";
import Header from "./Header";
import { BANNER_IMG_CDN_URL, IMG_CDN_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import MovieInfoContainer from "./MovieInfoContainer";
import MovieCast from "./MovieCast";
import MovieVideos from "./MovieVideos";

const MovieInfo = () => {
  const { id } = useParams();
  useMovieInfo(id);

  const info = useSelector(store => store.movies.movieInfo);
  if(!info) return null;

  return (
    <div>
      <Header />
      <div className="w-full h-screen top-0 absolute -z-10 overflow-hidden bg-black">
        <img className=" mx-auto brightness-[.3]" src={BANNER_IMG_CDN_URL + info.backdrop_path} alt="moviebg" />
      </div>
      <MovieInfoContainer info={info}/>
      <MovieCast id={info?.id} />
      <MovieVideos id={info?.id} />
    </div>
  );
};

export default MovieInfo;
