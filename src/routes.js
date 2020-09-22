import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
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
import Store from "./pages/Store"; // "/Overview"
import LearningPlaylist from "./pages/LearningPlaylist"; // "/share/lists/:list_id/user/:user_id"
// STYLUS
import GlobalStyles from "./GlobalStyles";

function Routes() {
  return (
    <BrowserRouter>
      <CookiesProvider>
        <Route component={Auth} path="/login" />
        <Route component={Register} exact path="/register" />
        <Route component={Home} exact path="/" />
        <Route component={NewIssue} exact path="/new/issue" />
        <Route component={LearningIssue} path="/user/learning/:issue_id" />
        <Route component={Marketplace} path="/marketplace" />
        <Route component={Notifications} path="/notifications" />
        <Route component={SearchResult} path="/search" />
        <Route component={Questions} path="/questions" />
        <Route component={Settings} path="/settings" />
        <Route component={Profile} path="/profile" />
        <Route component={Users} path="/users/:friend_email" />
        <Route component={LearningPlaylist} path="/playlists" />
        <Route component={Overview} path="/overview" />
        <Route component={Store} path="/explore" />
        <GlobalStyles />
      </CookiesProvider>
    </BrowserRouter>
  );
}

export default Routes;
