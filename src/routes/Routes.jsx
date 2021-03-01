import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../modules/Home/Home.jsx"
import NavBarContainer from "../components/NavBar";
import SingleMovieContainer from "../components/SingleMovie"
import * as ROUTES from "./routes"

function Routes() {
  return (
    <Router>
        <NavBarContainer/>
      <Switch>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route path="/movie/search/:id"    render={({ match }) => (
              <SingleMovieContainer movieId={match.params.id} />
            )}>
        </Route> 
      </Switch>
    </Router>
  );
}

export default Routes;