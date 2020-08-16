import React from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import LinkIcon from "@material-ui/icons/InsertLink";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

import { feeds } from "../services/feedsConfig";

const useStyles = makeStyles(theme => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  span: {
    color: theme.palette.secondary.main
  }
}));

export default ({ handleDrawerToggle }) => {
  const classes = useStyles();
  const currentPath = useLocation().pathname.slice(1);
  return (
    <>
      <div className={classes.toolbar} />
      <Divider />

      <List>
        {feeds.map(({ cat, navName }) =>
          currentPath === cat ? (
            <ListItem
              button
              key={cat}
              component={Link}
              to={cat}
              onClick={handleDrawerToggle}
            >
              <ListItemIcon>
                <LinkIcon color="secondary" />
              </ListItemIcon>
              <ListItemText
                primary={navName}
                classes={{ primary: classes.span }}
              />
            </ListItem>
          ) : (
            <ListItem
              button
              key={cat}
              component={Link}
              to={cat}
              onClick={handleDrawerToggle}
            >
              <ListItemIcon>
                <LinkIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={navName} />
            </ListItem>
          )
        )}
      </List>
    </>
  );
};
