import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants/constants"
import { useDispatch } from "react-redux";
import { addCastInfo } from "../utils/slices/movieSlice";


const useCast = (id) => {
    const dispatch = useDispatch();

    const fetchCast = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+id+"/credits", API_OPTIONS);
        const json = await data.json();
        console.log(json.cast);
        dispatch(addCastInfo(json.cast));
        console.log("done");
    }

    useEffect(() => {
        fetchCast();
    },[id])
}

export default useCast;