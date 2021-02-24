import React from "react";
import { Link } from "react-router-dom";
import style from "../assets/index.module.css";

const Home = ({ suggestedMovies, searchMovies }) => {
  return (
    <>
      {searchMovies.length ? (
        <>
          <h2>Search Movies</h2>
          <div className={style.search_movies_container}>
            {searchMovies &&
              searchMovies.map((movie) => {
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
          <h2>Suggested Movies</h2>
          <div className={style.movies_container}>
            {suggestedMovies &&
              suggestedMovies.map((movie) => {
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
