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
import Questions from "./pages/Questions"; // "/questions"
import Settings from "./pages/Settings"; // "/settings"
import Profile from "./pages/Profile"; // "/profile"
import Users from "./pages/Users"; // "/users/:user_email"
import Overview from "./pages/Overview"; // "/Overview"
import LearningPlaylist from "./pages/LearningPlaylist"; // "/share/lists/:list_id/user/:user_id"
// STYLUS
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <BrowserRouter>
      <Route component={Auth} path="/login" />
      <Route component={Register} exact path="/register" />
      <Route component={Home} exact path="/" />
      <Route component={NewIssue} exact path="/new/issue" />
      <Route component={LearningIssue} path="/user/learning/:issue_id" />
      <Route component={Marketplace} path="/marketplace" />
      <Route component={Notifications} path="/notifications" />
      <Route component={SearchResult} path="/search/:query_search" />
      <Route component={Questions} path="/questions" />
      <Route component={Settings} path="/settings" />
      <Route component={Profile} path="/profile" />
      <Route component={Users} path="/users" />
      <Route component={LearningPlaylist} path="/share/:list_id" />
      <Route component={Overview} path="/overview" />
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
