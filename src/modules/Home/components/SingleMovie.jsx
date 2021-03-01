import React from "react";
import style from "../assets/index.module.css";

const SingleMovie = ({ movie }) => {
  return (
    <>
      <h1>{movie.title}</h1>
      <div className={style.single_movie_container}>
        <img
          className={style.single_movie_img}
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt="single movie"
        />
        <div className={style.single_movie_overview}>
          <h5>Overview</h5>
          <p>{movie.overview}</p>
          <h5>Rating: {movie.vote_average}</h5>
        </div>
      </div>
    </>
  );
};

export default SingleMovie;
