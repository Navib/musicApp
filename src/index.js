import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import promise from "redux-promise";
import reducers from "./reducers";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { store, history } from "./store";
import { ConnectedRouter } from "react-router-redux";
import muiTheme from "./theme/index";

import "./styles/main.scss";
import "./assets/Rick.png";

import App from "./containers/pages/app";
import Artist from "./components/pages/artist";
import Results from "./components/pages/results";
import SearchPage from "./components/pages/search_page";

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route
              path="/search/results/:query"
              render={props => <App {...props} id="results-page" />}
            />
            <Route
              path="/search/recent/"
              render={props => <App {...props} id="search-page" />}
            />
            <Route
              path="/artist/:id"
              render={props => <App {...props} id="artist-page" />}
            />
            <Route
              path="/"
              render={props => <App {...props} id="home-page" />}
            />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("app")
);
