import React from "react";
import { Container, GlobalStyle } from "../styles/GlobalStyles";
import { Header } from "./Header";
import { Nav } from "./Nav";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Nav />
      </Container>
    </>
  );
}

export default App;
