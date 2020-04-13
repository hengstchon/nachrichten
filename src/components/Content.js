import React, { useState, useEffect } from "react";
import { getFeeds } from "../services/api";
import { NewsItem } from "./NewsItem";

const seletFields = ({ title, link, pubDate, content, isoDate }) => ({
  title,
  link,
  pubDate,
  content,
  isoDate
});

export const Content = () => {
  const [feeds, setFeeds] = useState([]);
  useEffect(() => {
    getFeeds().then(data => {
      const items = data.items;
      console.log(items[0]);
      setFeeds(items.map(seletFields));
    });
  }, []);
  return (
    <>{feeds && feeds.map(item => <NewsItem key={item.title} item={item} />)}</>
  );
};
