import React from "react";
import { useLocation } from "react-router-dom";
import { drawerWidth } from "../config";

import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";
import DrawerContent from "./DrawerContent";
import { feeds } from "../services/feedsConfig";

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: drawerWidth
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
}));

export default () => {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = e => {
    setMobileOpen(!mobileOpen);
    window.scrollTo(0, 0);
  };

  const cat = useLocation().pathname.slice(1);
  const feed = feeds.find(i => i.cat === cat);
  const title = feed ? feed.navName : "Nachrichten";

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          {title}
        </Typography>
      </Toolbar>

      <nav>
        {/* Mobile: show drawer when = xs */}
        <Hidden smUp>
          <Drawer
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <DrawerContent handleDrawerToggle={handleDrawerToggle} />
          </Drawer>
        </Hidden>

        {/* Desktop: show drawer when > xs */}
        <Hidden xsDown>
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <DrawerContent handleDrawerToggle={handleDrawerToggle} />
          </Drawer>
        </Hidden>
      </nav>
    </AppBar>
  );
};
