import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Route component={""} exact path="/login" />
    </BrowserRouter>
  );
};

export default App;
