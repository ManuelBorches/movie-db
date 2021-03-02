import React, { useState } from "react";
import { useDispatch } from "react-redux";
import NavBar from "../components/NavBar";
import {
  fetchMovies,
  setBackToHome,
} from "../redux/action-creators/moviesAction";

const NavBarContainer = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchMovies(searchInput));
    setSearchInput("");
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
    />
  );
};

export default NavBarContainer;
