import React from "react";
import { Switch, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { Content } from "./Content";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Wrapper>
          <Nav />
          <Switch>
            <Route path="/:slug">
              <Content />
            </Route>
          </Switch>
        </Wrapper>
      </Container>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }

  *, *:before, *:after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 16px;
  }
`;

const Container = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default App;
