import styled from "styled-components";

export const NewsItemWrapper = styled.section`
  border-bottom: 1px solid #cccccc;
`;

export const NewsItemTitle = styled.h1`
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

export const NewsItemDate = styled.span`
  font-size: 12px;
  color: #999999;
  margin: 0;
  padding: 0;
`;

export const NewsItemContent = styled.p`
  line-height: 1.6;
  font-size: 15px;
  color: #737373;
  padding-bottom: 10px;
`;
