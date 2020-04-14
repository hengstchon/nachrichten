import React, { useState, useEffect } from "react";
import { fetchNewsItems } from "../services/api";
import { NewsItem } from "./NewsItem";
import { useParams } from "react-router-dom";

const seletFields = ({ guid, title, link, contentSnippet, isoDate }) => ({
  guid,
  title,
  link,
  contentSnippet,
  isoDate
});

export const Content = () => {
  const p = useParams();
  const slug = p.slug;

  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    fetchNewsItems(slug).then(items => {
      items.length = Math.min(30, items.length);
      setNewsItems(items.map(seletFields));
    });
  }, [slug]);

  return (
    <>
      {newsItems &&
        newsItems.map((item, i) => <NewsItem key={i} item={item} />)}
    </>
  );
};
