import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import teal from "@material-ui/core/colors/teal";
import orange from "@material-ui/core/colors/orange";

import Content from "./Content";
import Nav from "./Nav";
import ScrollTop from "./ScrollTop";

export default () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  const lightTheme = createMuiTheme({
    palette: {
      type: "light",
      primary: {
        main: teal[700]
      },
      secondary: {
        main: orange[700]
      }
    }
  });

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: teal[300]
      },
      secondary: {
        main: orange[300]
      }
    }
  });

  const handleClickDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container>
        <Nav darkMode={darkMode} handleClickDarkMode={handleClickDarkMode} />
        <Content />
      </Container>
      <ScrollTop />
    </ThemeProvider>
  );
};
