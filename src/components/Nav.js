import React from "react";
import { feeds } from "../services/feedsConfig";
import { Switch, Route, Link } from "react-router-dom";
import { Content } from "./Content";

export const Nav = () => {
  return (
    <div>
      <ul>
        {feeds.map(feed => (
          <li key={feed.slug}>
            <Link to={`/${feed.slug}`}>{feed.navName}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        <Route path="/:slug">
          <Content />
        </Route>
      </Switch>
    </div>
  );
};
