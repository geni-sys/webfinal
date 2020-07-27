import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <Routes />
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
