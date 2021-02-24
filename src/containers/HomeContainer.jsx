import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSuggestedMovies } from "../redux/action-creators/moviesAction";
import Home from "../components/Home";

const HomeContainer = () => {
  const dispatch = useDispatch();
  const suggested = useSelector((state) => state.movies.suggested);
  let search = useSelector((state) => state.movies.search);
  const ratingFilter = useSelector((state) => state.movies.ratingFilter);

  // Upon opening the web application, users should be able to see a list of movies suggested by the application and sorted by popularity.
  useEffect(() => {
    dispatch(fetchSuggestedMovies());
  }, []);

  if (ratingFilter) {
    search = search.filter(
      (el) =>
        el.vote_average <= ratingFilter * 2 &&
        el.vote_average >= ratingFilter * 2 - 1
    );
  }

  return <Home suggestedMovies={suggested} searchMovies={search} />;
};

export default HomeContainer;
