import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BANNER_IMG } from "../../utils/constants/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen md:w-screen object-cover" src={BANNER_IMG} alt="banner" />
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
