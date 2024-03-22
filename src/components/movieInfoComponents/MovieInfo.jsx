import React from "react";
import { useParams } from "react-router-dom";
import useMovieInfo from "../../hooks/useMovieInfo";
import Header from "../Header";
import { BANNER_IMG_CDN_URL } from "../../utils/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import MovieInfoContainer from "./MovieInfoContainer";
import MovieCast from "./MovieCast";
import MovieVideos from "./MovieVideos";
import Loader from "../Loader";
import { setOtherURL } from "../../utils/slices/configSlice";

const MovieInfo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useMovieInfo(id);

  const info = useSelector(store => store.movies.movieInfo);
  if(!info) return <Loader />;

  dispatch(setOtherURL(true));

  return (
    <div>
      <Header />
      <div className="w-full min-h-[110vh] md:min-h-screen top-0 absolute -z-10 overflow-hidden bg-black">
        <img className="h-[110vh] md:h-auto object-cover mx-auto brightness-[.3]" src={BANNER_IMG_CDN_URL + info.backdrop_path} alt="moviebg" />
      </div>
      <MovieInfoContainer info={info}/>
      <MovieCast id={info?.id} />
      <MovieVideos id={info?.id} />
    </div>
  );
};

export default MovieInfo;
