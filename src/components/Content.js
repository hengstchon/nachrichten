import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { List, ListItem, Paper } from "@material-ui/core";
import { fetchNewsItems } from "../services/api";
import NewsItem from "./NewsItem";
import Pagination from "./Pagination";
import { makeStyles } from "@material-ui/core/styles";
import { drawerWidth } from "../config";

const seletFields = ({ guid, title, link, contentSnippet, isoDate }) => ({
  guid,
  title,
  link,
  contentSnippet,
  isoDate
});

const addId = (item, i) => ({ id: i + 1, ...item });

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth
    },
    padding: theme.spacing(3)
  }
}));

export default () => {
  // get category and current page number
  const loc = useLocation();
  const query = new URLSearchParams(loc.search);
  const cat = loc.pathname.slice(1) || "tagesschau";
  const currentPage = query.get("page") || "1";

  const [allNews, setAllNews] = useState([]);

  // calculate newsItems in current page from all news
  const itemsPerPage = 10;
  const totalItems = allNews.length;
  const totalPage = Math.ceil(totalItems / itemsPerPage);
  const lastItemNum = parseInt(currentPage) * itemsPerPage;
  const firstItemNum = lastItemNum - itemsPerPage;
  const newsItems = allNews.slice(firstItemNum, lastItemNum);

  useEffect(() => {
    fetchNewsItems(cat).then(items => {
      items.length = Math.min(30, items.length);
      setAllNews(items.map(seletFields).map(addId));
    });
  }, [cat]);

  const classes = useStyles();

  return (
    newsItems && (
      <Paper className={classes.content}>
        <div className={classes.toolbar} />

        <List>
          {newsItems.map(item => (
            <ListItem key={item.id} divider>
              <NewsItem item={item} />
            </ListItem>
          ))}
        </List>

        <Pagination
          totalPage={totalPage}
          currentPage={parseInt(currentPage)}
          cat={cat}
        />
      </Paper>
    )
  );
};
