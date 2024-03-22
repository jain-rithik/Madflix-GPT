import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../homePageComponents/MovieList";
import Shimmer from "./Shimmer";

const GPTMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);

  const { movieResults, movieNames, searchBtnClicked } = gpt;
  console.log(movieNames);

  return (
    <div className="p-4 md:px-8 px-2 m-4 md:my-7 text-white ">
      <div className="backdrop-blur-lg backdrop-filter bg-opacity-30 rounded-lg">
        {searchBtnClicked ? (movieNames ? (
          movieNames?.map((movieName, index) => (
            <MovieList
              key={movieName}
              title={movieName}
              movies={movieResults[index]}
            />
          ))
        ) : (
          <Shimmer />
        )) : null }
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
