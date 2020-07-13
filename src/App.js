import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
// COMPONENTS
import Auth from "./pages/Auth"; // "/login"
import Register from "./pages/Auth/Register"; // "/register"
import Home from "./pages/Home"; // "/"
import NewIssue from "./pages/NewIssue"; // "/new/issue"
import LearningIssue from "./pages/LearningIssue"; // "/user/learning/:issue_id"
import Marketplace from "./pages/Marketplace"; // "/marketplace"
import Notifications from "./pages/Notifications"; // "/notifications"
import SearchResult from "./pages/SearchResult"; // "/search?query="
// STYLUS
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <BrowserRouter>
      <Route component={Auth} path="/login" />
      <Route component={Register} exact path="/register" />
      <Route component={Home} exact path="/" />
      <Route component={NewIssue} exact path="/new/issue" />
      <Route component={LearningIssue} path="/user/learning" />
      <Route component={Marketplace} path="/marketplace" />
      <Route component={Notifications} path="/notifications" />
      <Route component={SearchResult} path="/search" />

      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
