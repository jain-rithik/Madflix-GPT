import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/slices/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector(
    (store) => store.movies.popularMovies
  );

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
