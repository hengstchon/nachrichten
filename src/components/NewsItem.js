import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  NewsItemWrapper,
  NewsItemTitle,
  NewsItemDate,
  NewsItemContent
} from "../styles/NewsItemStyles";

export const NewsItem = ({ item }) => {
  dayjs.extend(relativeTime);
  const { title, link, isoDate, contentSnippet } = item;
  return (
    <NewsItemWrapper>
      <NewsItemTitle>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </NewsItemTitle>
      <NewsItemDate>{dayjs(isoDate).fromNow()}</NewsItemDate>
      <NewsItemContent>{contentSnippet}</NewsItemContent>
    </NewsItemWrapper>
  );
};
