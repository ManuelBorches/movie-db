import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import SingleMovieContainer from "../containers/SingleMovieContainer";
import NavBarContainer from "../containers/NavBarContainer";
import "../assets/index.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBarContainer />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route
            exact
            path="/movie/search/:id"
            render={({ match }) => (
              <SingleMovieContainer movieId={match.params.id} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
