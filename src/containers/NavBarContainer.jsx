import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import {
  fetchMovies,
  setBackToHome,
  setRatingFilter,
} from "../redux/action-creators/moviesAction";

const NavBarContainer = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const ratingValue = useSelector((state) => state.movies.ratingFilter);

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchMovies(searchInput));
    setSearchInput("");
  };

  const handleRating = (rating) => {
    dispatch(setRatingFilter(rating));
  };

  const backToHome = () => {
    dispatch(setBackToHome([]));
  };

  return (
    <NavBar
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      backToHome={backToHome}
      searchInput={searchInput}
      handleRating={handleRating}
      ratingValue={ratingValue}
    />
  );
};

export default NavBarContainer;
