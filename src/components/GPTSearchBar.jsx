import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const search = useRef(null);
  const dispatch = useDispatch();

  const handleGPTSearchClick = async () => {
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

    console.log(gptResults.choices?.[0]?.message?.content);
    //"Andaz Apna Apna, Chupke Chupke, Padosan, Mera Naam Joker, Hera Pheri"

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ");
    // ['Andaz Apna Apna', 'Chupke Chupke', 'Padosan', 'Mera Naam Joker', 'Hera Pheri']

    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
    //[promise, promise, promise, promise, promise]

    const allTmdbResults = await Promise.all(promiseArray);

    const tmdbResults = allTmdbResults.map(allTmdbResult => allTmdbResult[0]);
    console.log(tmdbResults);
    dispatch(addGptMovieResult({movieNames:gptMovies, movieResults:tmdbResults}));
  };

  //search movie in tmdb
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={search}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].GPTSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
