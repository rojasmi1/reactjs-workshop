import React, { Component } from "react";
import Routes from "routes";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./store/createStore";
import { Provider } from "react-redux";

const initialState = {
  characters: {
    charactersList: [{ id: 1, name: "Rick" }, { id: 2, name: "Morty" }],
    isLoadingCharacters: false
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
