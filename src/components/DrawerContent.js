import React from "react";
import { Link } from "react-router-dom";
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
  toolbar: theme.mixins.toolbar
}));

export default ({ handleDrawerToggle }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.toolbar} />
      <Divider />

      <List>
        {feeds.map(({ cat, navName }) => (
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
        ))}
      </List>
    </>
  );
};
