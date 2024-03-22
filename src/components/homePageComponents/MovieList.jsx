import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  console.log(movies);

  return (
    <div className="px-6 py-5">
      <h1 className="md:text-3xl text-lg my-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex mb-1">
          {movies?.map((movie) => (
            <Link to={"/movieinfo/" + movie?.id}>
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
