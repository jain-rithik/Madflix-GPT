import React from "react";

const Loader = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black z-50">
      <div className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full">
        <div className="rounded-full h-full w-full bg-black dark:bg-black background-blur-md"></div>
      </div>
    </div>
  );
};

export default Loader;
