import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
// COMPONENTS
import Auth from "./pages/Auth";
import Home from "./pages/Home";
// STYLUS
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <BrowserRouter>
      <Route component={Auth} exact path="/login" />
      <Route component={Home} exact path="/" />

      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
