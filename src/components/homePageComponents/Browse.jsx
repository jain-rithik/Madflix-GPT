import React from "react";
import Header from "../Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../hooks/usePopularMovies";
import useDiscoverMovies from "../../hooks/useDiscoverMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "../gptComponents/GPTSearch";
import { useDispatch, useSelector } from "react-redux";
import useAllTimeFav from "../../hooks/useAllTimeFav";
import { clearMovieInfo } from "../../utils/slices/movieSlice";
import OfflinePage from "./OfflinePage";
import NoMovies from "./NoMovies";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  const onlineStatus = useSelector((store) => store.config.onlineStatus);
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  const dispatch = useDispatch();
  dispatch(clearMovieInfo());

  
  useNowPlayingMovies();
  useDiscoverMovies();
  useAllTimeFav();
  useTopRatedMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {onlineStatus === "online" ? (
        showGPTSearch ? (
          <GPTSearch />
        ) : (
          <>
          {movies ? (
            <>
            <MainContainer />
            <SecondaryContainer />
            </>
          ) : (
            <NoMovies/>
          )}
          </>
        )
      ) : (
        <OfflinePage />
      )}
    </div>
  );
};

export default Browse;
