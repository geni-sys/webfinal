import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
// COMPONENTS
import Auth from "./pages/Auth"; // "/login"
import Register from "./pages/Auth/Register"; // "/register"
import Home from "./pages/Home"; // "/"
// STYLUS
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <BrowserRouter>
      <Route component={Auth} path="/login" />
      <Route component={Register} exact path="/register" />
      <Route component={Home} exact path="/" />

      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
