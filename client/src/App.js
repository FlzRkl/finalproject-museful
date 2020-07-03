import React, { useEffect } from 'react';

//ROUTER
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//COMPONENTS
import NavBar from './components/constants/NavBar';
// import LandingPage from './components/landingPage/LandingPage';
import Footer from './components/constants/Footer';
import Routes from './components/routing/Routes';

///STYLING
import './style/App.scss';
//THEME
// import { ThemeProvider } from "styled-components";
// import { useDarkMode } from "./components/constants/Darkmode/useDarkMode";
// import { lightTheme, darkTheme } from "./style/theme";
// import { GlobalStyles } from "./style/global";

//REDUX
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  //TOGGLE HOOK
  // const [theme, toggleTheme] = useDarkMode();
  // console.log(theme);
  return (
    <Provider store={store}>
      <Router>
        {' '}
        {/* <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}> */}
        {/* <GlobalStyles /> */} <NavBar />
        <Switch>
          {' '}
          {/* <Route exact path='/' component={LandingPage} /> */}{' '}
          <Route component={Routes} />{' '}
        </Switch>{' '}
        <Footer />
        {/* </ThemeProvider> */}{' '}
      </Router>{' '}
    </Provider>
  );
};

export default App;
