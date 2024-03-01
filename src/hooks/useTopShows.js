import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addTopShows } from "../utils/movieSlice";

const useTopShows = () => {
    const dispatch = useDispatch();

    const topShows = useSelector(store => store.movies.topShows);

    const getTopShows= async () => {
        const data = await fetch("https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=hi&page=1&sort_by=popularity.desc&watch_region=IN&with_origin_country=IN", API_OPTIONS);
        const json = await data.json();

        const showsWithPoster = json.results.filter(show => show.poster_path != null);

        dispatch(addTopShows(showsWithPoster));
    }

    useEffect(() => {
        !topShows && getTopShows();
    }, [])
}

export default useTopShows;