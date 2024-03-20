import React from "react";

const NoMovies = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black flex-col gap-3">
      <div
        aria-label="Orange and tan hamster running in a metal wheel"
        role="img"
        class="wheel-and-hamster"
      >
        <div class="wheel"></div>
        <div class="hamster">
          <div class="hamster__body">
            <div class="hamster__head">
              <div class="hamster__ear"></div>
              <div class="hamster__eye"></div>
              <div class="hamster__nose"></div>
            </div>
            <div class="hamster__limb hamster__limb--fr"></div>
            <div class="hamster__limb hamster__limb--fl"></div>
            <div class="hamster__limb hamster__limb--br"></div>
            <div class="hamster__limb hamster__limb--bl"></div>
            <div class="hamster__tail"></div>
          </div>
        </div>
        <div class="spoke"></div>
      </div>
      <h1 className="text-white sm:text-3xl text-xl text-center sm:w-7/12 p-2"> Note: Unable to fetch movies if you are using jio as TMDB Api is blocked by your ISP</h1>
    </div>
  );
};

export default NoMovies;
