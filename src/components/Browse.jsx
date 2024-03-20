import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useDiscoverMovies from "../hooks/useDiscoverMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import { useDispatch, useSelector } from "react-redux";
import useAllTimeFav from "../hooks/useAllTimeFav";
import { clearMovieInfo } from "../utils/movieSlice";
import OfflinePage from "./OfflinePage";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  const onlineStatus = useSelector((store) => store.config.onlineStatus);

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
            <MainContainer />
            <SecondaryContainer />
          </>
        )
      ) : (
        <OfflinePage />
      )}
    </div>
  );
};

export default Browse;
