import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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

export const Container = styled.main`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;
