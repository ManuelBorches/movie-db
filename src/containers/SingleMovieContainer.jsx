import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleMovie from "../components/SingleMovie";
import { fetchSingleMovie } from "../redux/action-creators/moviesAction";

const SingleMovieContainer = ({ movieId }) => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.selected);

  useEffect(() => {
    dispatch(fetchSingleMovie(movieId));
  }, [dispatch, movieId]);

  return <SingleMovie movie={movie} />;
};

export default SingleMovieContainer;
