import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants/constants"
import { useDispatch, useSelector } from "react-redux";
import { addallTimeFav } from "../utils/slices/movieSlice";

const useAllTimeFav = () => {
    const dispatch = useDispatch();

    const allTimeFav = useSelector(store => store.movies.allTimeFav);

    const getAllTimeFavs = async () => {
        const data = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&page=1&region=IN&sort_by=vote_count.desc&with_origin_country=IN&with_original_language=hi", API_OPTIONS);
        const json = await data.json();

        const showsWithPoster = json.results.filter(show => show.poster_path != null);

        dispatch(addallTimeFav(showsWithPoster));
    }

    useEffect(() => {
        !allTimeFav && getAllTimeFavs();
    }, [])
}

export default useAllTimeFav;