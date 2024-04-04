import React, { useRef, useState } from "react";
import lang from "../../utils/constants/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../../utils/openai";
import { API_OPTIONS } from "../../utils/constants/constants";
import {
  addGptMovieResult,
  clearMovieResults,
  setSearchBtnClicked,
} from "../../utils/slices/gptSlice";
import { toast } from "react-toastify";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const search = useRef(null);
  const dispatch = useDispatch();

  const handleGPTSearchClick = async () => {
    try {
    dispatch(clearMovieResults());
    dispatch(setSearchBtnClicked(true));
    const searchText = search.current.value;

    //make api call to gpt to get result

    const gptQuery =
      "Act as a Movie Recomendation system and suggest some movies for the query : " +
      searchText +
      ". Only give me name of 5 movies, comma separated like the example result given ahead. Example Results: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    // if(!gptResults.choices) {"do error handling"}

    // console.log(gptResults.choices?.[0]?.message?.content);
    //"Andaz Apna Apna, Chupke Chupke, Padosan, Mera Naam Joker, Hera Pheri"

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ");
    // ['Andaz Apna Apna', 'Chupke Chupke', 'Padosan', 'Mera Naam Joker', 'Hera Pheri']

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    //[promise, promise, promise, promise, promise]

    const allTmdbResults = await Promise.all(promiseArray);

    // const tmdbResults = allTmdbResults.map(allTmdbResult => allTmdbResult[0]);
    // console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: allTmdbResults })
    );
    } catch (error) {
      console.error(error);
      toast.error("Limit Exceeded: Please try again after 20s")
    }
  };

  //search movie in tmdb
  const searchMovieTMDB = async (movie) => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=%22" +
          movie +
          "%22&include_adult=false&page=1&sort_by=popularity.desc",
        API_OPTIONS
      );
      const json = await data.json();

      return json.results;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="md:pt-[12%] pt-[40%]  flex justify-center">
      <form
        className="w-full px-5 md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={search}
          type="text"
          className="p-3 col-span-9 rounded-l-full outline-none text-center text-sm sm:text-base"
          placeholder={lang[langKey].GPTSearchPlaceholder}
        />
        <button
          className="col-span-3 py-2 px-4 bg-red-700 hover:bg-red-800 text-white rounded-r-full"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
