import React from "react";

const NoMovies = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black flex-col gap-3">
      <div
        aria-label="Orange and tan hamster running in a metal wheel"
        role="img"
        className="wheel-and-hamster"
      >
        <div className="wheel"></div>
        <div className="hamster">
          <div className="hamster__body">
            <div className="hamster__head">
              <div className="hamster__ear"></div>
              <div className="hamster__eye"></div>
              <div className="hamster__nose"></div>
            </div>
            <div className="hamster__limb hamster__limb--fr"></div>
            <div className="hamster__limb hamster__limb--fl"></div>
            <div className="hamster__limb hamster__limb--br"></div>
            <div className="hamster__limb hamster__limb--bl"></div>
            <div className="hamster__tail"></div>
          </div>
        </div>
        <div className="spoke"></div>
      </div>
      <h1 className="text-white sm:text-3xl text-xl text-center sm:w-7/12 p-2"> Note: Unable to fetch movies if you are using jio as TMDB Api is blocked by your ISP</h1>
    </div>
  );
};

export default NoMovies;
