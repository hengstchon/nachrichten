import React from "react";
import { GlobalStyle, Container } from "../styles/GlobalStyles";
import { Header } from "./Header";
import { Content } from "./Content";
import styled from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Content />
      </Container>
    </>
  );
}

export default App;
