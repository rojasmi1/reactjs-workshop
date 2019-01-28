import React from "react";
import ReactDOM from "react-dom";
import withRoot from "./withRoot.js";
import App from "App.js";
import * as serviceWorker from "serviceWorker";

const AppStyled = withRoot(App);

ReactDOM.render(<AppStyled />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
