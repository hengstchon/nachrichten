import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NewsItem } from "./NewsItem";
import { fetchNewsItems } from "../services/api";

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
    <div>
      {newsItems &&
        newsItems.map((item, i) => <NewsItem key={i} item={item} />)}
    </div>
  );
};
