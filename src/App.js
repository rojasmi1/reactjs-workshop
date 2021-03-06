import React, { Component } from "react";
import Routes from "routes";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./store/createStore";
import { Provider } from "react-redux";

const initialState = {
  characters: {
    charactersList: [],
    isLoadingCharacters: false,
    selectedRow: {},
    hasErrors: false,
    errorMessage: null
  }
};

const store = configureStore(initialState);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    );
  }
}

export default App;
