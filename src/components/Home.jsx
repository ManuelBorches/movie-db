import React from "react";
import RatingStars from "./RatingStars";

import {
  SearchTitle,
  SuggestedMoviesContainer,
  MoviesContainer,
  MovieCardContainer,
  MovieLink,
  MovieImage,
  SuggestedMovieTitle,
} from "./Home.elements";
const Home = ({ suggestedMovies, searchMovies, handleRating, ratingValue }) => {
  return (
    <>
      {searchMovies.length ? (
        <>
          <SearchTitle>Search Movies</SearchTitle>
          <RatingStars handleRating={handleRating} ratingValue={ratingValue} />
          <MoviesContainer>
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
          <SuggestedMoviesContainer>
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
