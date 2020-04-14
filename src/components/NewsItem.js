import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import styled from "styled-components";

export const NewsItem = ({ index, item }) => {
  dayjs.extend(relativeTime);
  const { title, link, isoDate, contentSnippet } = item;
  return (
    <NewsItemWrapper>
      <NewsItemTitle>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {index + 1}. {title}
        </a>
      </NewsItemTitle>
      <NewsItemDate>{dayjs(isoDate).fromNow()}</NewsItemDate>
      <NewsItemContent>{contentSnippet}</NewsItemContent>
    </NewsItemWrapper>
  );
};

const NewsItemWrapper = styled.section`
  border-bottom: 1px solid #cccccc;
`;

const NewsItemTitle = styled.h1`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 5px;
  padding: 10px 0 8px;
  a {
    margin-right: 15px;
    color: #333;
    text-decoration: none;
  }
  a:visited {
    color: #999;
  }
  a:hover {
    color: #10579e;
    text-decoration: underline;
  }
`;

const NewsItemDate = styled.span`
  font-size: 12px;
  color: #999999;
  margin: 0;
  padding: 0;
`;

const NewsItemContent = styled.p`
  line-height: 1.6;
  font-size: 15px;
  color: #737373;
  padding-bottom: 10px;
`;
