import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterComponent from "./router";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

const Container = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <RouterComponent />
      </Router>
    </ThemeProvider>
  );
};

function App() {
  return <Container />;
}

export default App;
