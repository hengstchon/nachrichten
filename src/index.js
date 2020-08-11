import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import * as serviceWorker from "./serviceWorker";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <HashRouter basename="/nachrichten">
      <Switch>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
