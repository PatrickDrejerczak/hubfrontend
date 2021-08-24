import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProgressPage from "./pages/ProgressPage/ProgressPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/progress" component={ProgressPage} />
      </Switch>
    </Router>
  );
}

export default App;
