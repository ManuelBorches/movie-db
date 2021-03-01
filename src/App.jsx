import React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import HomeContainer from "./containers/HomeContainer";
// import SingleMovieContainer from "./containers/SingleMovieContainer";
// import NavBarContainer from "./containers/NavBarContainer";

import Routes from "./routes/Routes.jsx"
import store from "./redux/store"
import { Provider } from "react-redux";

const App = () => {
  return (
    <>  
    <Provider store={store}>
        <Routes/>
    </Provider>
        {/* <NavBarContainer /> */}
        {/* <Switch>
          <Route exact path="/" component={HomeContainer} />
        
        </Switch> */}
    </>
  );
};

export default App;
