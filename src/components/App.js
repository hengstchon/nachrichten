import React from "react";
import { Container } from "@material-ui/core";
import Content from "./Content";
import Nav from "./Nav";

export default () => {
  return (
    <Container>
      <Nav />
      <Content />
    </Container>
  );
};
