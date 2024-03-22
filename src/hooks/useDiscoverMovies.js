import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { addDiscoverMovies } from "../utils/slices/movieSlice";

const useDiscoverMovies = () => {
    const dispatch = useDispatch();
    const discoverMovies = useSelector(store => store.movies.discoverMovies);

  const getDsicoverMovies = async () => {
    
    const data = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=hi&page=1&region=IN&sort_by=popularity.desc&with_origin_country=IN", API_OPTIONS);
    const json = await data.json();

    dispatch(addDiscoverMovies(json.results));
  };

  useEffect(() => {
    !discoverMovies && getDsicoverMovies();
  }, []);
};

export default useDiscoverMovies;
