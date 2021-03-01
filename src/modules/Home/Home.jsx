import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import style from "../../assets/index.module.css";
import {PageTitle } from "./Home.elements"
import { useDispatch, useSelector } from "react-redux";
import { fetchSuggestedMovies } from "../../redux/action-creators/moviesAction";

const Home = () => {
  
  const dispatch = useDispatch();
  const suggested = useSelector((state) => state.movies.suggested);
  let search = useSelector((state) => state.movies.search);
  const ratingFilter = useSelector((state) => state.movies.ratingFilter);

  // Upon opening the web application, users should be able to see a list of movies suggested by the application and sorted by popularity.
  useEffect(() => {
    dispatch(fetchSuggestedMovies());
  }, [dispatch]);

  if (ratingFilter) {
    search = search.filter(
      (el) =>
        el.vote_average <= ratingFilter * 2 &&
        el.vote_average >= ratingFilter * 2 - 1
    );
  }

  return (
    <>
      {search.length ? (
        <>
          <h2>Search Movies</h2>
          <div className={style.search_movies_container}>
            {search &&
              search.map((movie) => {
                return (
                  <div key={movie.id} className={style.movie_container}>
                    <Link to={`/movie/search/${movie.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt="search movies"
                      />
                    </Link>
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <>
          <PageTitle>Suggested Movies</PageTitle>
          <div className={style.movies_container}>
            {suggested &&
              suggested.map((movie) => {
                return (
                  <div key={movie.id} className={style.movie_container}>
                    <Link to={`/movie/search/${movie.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt="suggested movies"
                      />
                    </Link>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
