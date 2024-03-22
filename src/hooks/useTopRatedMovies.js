import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/slices/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector(store => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&region=IN&sort_by=popularity.desc&vote_average.gte=8&watch_region=IN",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
