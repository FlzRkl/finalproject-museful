import React, { Fragment } from "react";

//ROUTER
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//COMPONENTS
import NavBar from "./components/constants/NavBar";
import LandingPage from "./components/landingPage/LandingPage";
import Routes from "./components/routing/Routes";

//STYLING
import "./style/_App.scss";

//REDUX
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment className='App'>
          <NavBar />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
