import React from "react";
import { Link } from "react-router-dom";
import style from "../assets/index.module.css";
import {SearchTitle, SuggestedMoviesContainer,  MoviesContainer, MovieCardContainer, MovieLink, MovieImage, SuggestedMovieTitle} from "./Home.elements"
const Home = ({ suggestedMovies, searchMovies }) => {
  return (
    <>
      {searchMovies.length ? (
        <>
          <SearchTitle>Search Movies</SearchTitle>
          <MoviesContainer >
            {searchMovies &&
              searchMovies.map((movie) => {
                return (
                  <MovieCardContainer key={movie.id}>
                    <MovieLink to={`/movie/search/${movie.id}`}>
                      <MovieImage
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt="search movies"
                      />
                    </MovieLink>
                  </MovieCardContainer>
                );
              })}
          </MoviesContainer>
        </>
      ) : (
        <>
          <SuggestedMovieTitle>Suggested Movies</SuggestedMovieTitle>
          <SuggestedMoviesContainer >
            {suggestedMovies &&
              suggestedMovies.map((movie) => {
                return (
                  <MovieCardContainer key={movie.id}>
                    <MovieLink to={`/movie/search/${movie.id}`}>
                      <MovieImage
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt="suggested movies"
                      />
                    </MovieLink>
                  </MovieCardContainer>
                );
              })}
          </SuggestedMoviesContainer>
        </>
      )}
    </>
  );
};

export default Home;
