import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants/constants";
import { useEffect } from "react";
import { addCastMovies } from "../utils/slices/movieSlice";


const useCastMovies = (id) => {
    const dispatch = useDispatch();

    const getCastMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/person/"+id+"/movie_credits", API_OPTIONS);
        const json = await data.json();
        const castMovies = json.cast.filter((movie) => movie?.poster_path != null);
        dispatch(addCastMovies(castMovies));
    }

    useEffect(() => {
        getCastMovies();
    }, [id])
}

export default useCastMovies;