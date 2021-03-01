import React from "react";
import {
  SingleMovieTitle,
  SingleMovieSubtitle,
  SingleMovieContainer,
  SingleMovieImage,
  SingleMovieOverviewContainer,
  SingleMovieOverviewDescription,
} from "./SingleMovie.elements";

const SingleMovie = ({ movie }) => {
  return (
    <>
      <SingleMovieTitle>{movie.title}</SingleMovieTitle>
      <SingleMovieContainer>
        <SingleMovieImage
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt="single movie"
        />
        <SingleMovieOverviewContainer>
          <SingleMovieSubtitle>Overview</SingleMovieSubtitle>
          <SingleMovieOverviewDescription>
            {movie.overview}
          </SingleMovieOverviewDescription>
          <SingleMovieSubtitle>
            Rating: {movie.vote_average}
          </SingleMovieSubtitle>
        </SingleMovieOverviewContainer>
      </SingleMovieContainer>
    </>
  );
};

export default SingleMovie;
