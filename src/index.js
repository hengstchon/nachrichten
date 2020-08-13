import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";

import * as serviceWorker from "./serviceWorker";
import App from "./components/App";
import { GA_TRACKING_CODE } from "./config";

ReactGA.initialize(GA_TRACKING_CODE);

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
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
