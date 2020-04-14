import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { feeds } from "../services/feedsConfig";

export const Nav = () => {
  return (
    <NavStyled>
      <ul>
        {feeds.map(feed => (
          <li key={feed.slug}>
            <LinkStyled to={`/${feed.slug}`}>{feed.navName}</LinkStyled>
          </li>
        ))}
      </ul>
    </NavStyled>
  );
};

const NavStyled = styled.nav`
  width: 30%;
  margin: 0.6rem 4rem 0 0;
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 768px) {
    width: 100%;
    ul {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;

const LinkStyled = styled(Link)`
  font-size: 0.8rem;
  line-height: 1.8rem;
  text-decoration: none;
  color: #40739e;
  &:visited {
    color: #90caf9;
  }
  @media (max-width: 768px) {
    margin-right: 2rem;
  }
`;
