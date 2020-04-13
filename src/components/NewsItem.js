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
  return (
    <NewsItemWrapper>
      <NewsItemTitle>
        <a href={item.link} target="_blank">
          {item.title}
        </a>
      </NewsItemTitle>
      <NewsItemDate>{dayjs(item.isoDate).fromNow()}</NewsItemDate>
      <NewsItemContent>{item.content}</NewsItemContent>
    </NewsItemWrapper>
  );
};
