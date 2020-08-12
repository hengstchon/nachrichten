import React from "react";
import { useLocation } from "react-router-dom";
import { drawerWidth } from "../config";

import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";
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
  toolBar: {
    justifyContent: "space-between"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
}));

export default ({ darkMode, handleClickDarkMode }) => {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = e => {
    setMobileOpen(!mobileOpen);
  };

  const cat = useLocation().pathname.slice(1);
  const feed = feeds.find(i => i.cat === cat);
  const title = feed ? feed.navName : "Nachrichten";

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolBar} color="secondary">
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
        <IconButton color="inherit" edge="end" onClick={handleClickDarkMode}>
          {darkMode ? <WbSunnyIcon /> : <Brightness2Icon />}
        </IconButton>
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
