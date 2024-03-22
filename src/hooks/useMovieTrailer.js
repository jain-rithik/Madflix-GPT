import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants/constants";
import { addTrailerVideo } from "../utils/slices/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

  //fetch trailer video & updating store with trailer video data

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
}

export default useMovieTrailer;