import React from "react";
import ReactDOM from "react-dom";
import "./lib/i18n";
import App from "./App.js";
import {BrowserRouter as Router, Route} from "react-router-dom";

ReactDOM.render(
  <Router>
      <Route path="/:field?/:cycle?/:id?" component={App} />
  </Router>,
  document.getElementById("root")
);
